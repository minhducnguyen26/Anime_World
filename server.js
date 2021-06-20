if (process.env.NODE_ENV !== "production") {
    require("dotenv").config()
}

const stripePublicKey = process.env.STRIPE_PUBLIC_KEY
const stripeSecretKey = process.env.STRIPE_SECRET_KEY

const express = require("express")
const app = express()
const fs = require("fs")
const stripe = require("stripe")(stripeSecretKey)
const port = process.env.PORT || 3000

const Datastore = require("nedb")
const database = new Datastore("customers.db")
database.loadDatabase()

app.set("view engine", "ejs")
app.use(express.json())
app.use(express.static("public"))

app.get("/shop.html", function(req, res) {
    fs.readFile("items.json", function(error, data) {
        if (error) {
            res.status(500).end()
        }
        else {
            res.render("shop.ejs", {
                stripePublicKey: stripePublicKey,
                items: JSON.parse(data)
            })
        }
    })
})

app.post("/purchase", function(req, res) {
    fs.readFile("items.json", function(error, data) {
        if (error) {
            res.status(500).end()
        }
        else {
            const items_json = JSON.parse(data)
            const items_array = items_json.bleach.concat(items_json.dragon_ball, items_json.fairy_tail, items_json.my_hero_academia, items_json.naruto, items_json.one_piece)

            let item_id = ""
            let item_quantity = ""
            
            let total = 0
            req.body.items.forEach(function(item) {
                const item_json = items_array.find(function(i) {
                    return i.id == item.id
                }) 
                total = total + item_json.price * item.quantity

                item_id = item_id.concat(item.id) + "| "
                item_quantity = item_quantity.concat(item.quantity) + "| "
            })
            
            var object = {
                name: req.body.stripeName,
                id: item_id,
                quantity: item_quantity
            }

            database.insert(object)

            stripe.customers.create({
                source: req.body.stripeTokenId,
                email: req.body.stripeEmail,
                name: req.body.stripeName,
                address: {
                    line1: req.body.stripeAdress1,
                    line2: req.body.stripeAdress2,
                    city: req.body.stripeCity,
                    postal_code: req.body.stripeZip,
                    country: req.body.stripeCountry
                },
                shipping: {
                    name: req.body.stripeName,
                    address: {
                        line1: req.body.stripeAdress1,
                        line2: req.body.stripeAdress2,
                        city: req.body.stripeCity,
                        postal_code: req.body.stripeZip,
                        country: req.body.stripeCountry
                    }
                }
            })
            .then(customer => {
                stripe.charges.create({
                    amount: total,
                    customer: customer.id,
                    currency: "usd",
                    description: "Action Figures"
                })
            })
            .then(function() {
                console.log("Charge Successful")
                res.json({ message: "Successfully purchased items" })
            })
            .catch(function() {
                console.log("Charge Fail")
                res.status(500).end()
            })
        }
    })
})

app.listen(port, ()=> console.log(`App listening on port: ${port}`))

//! If error, create an ".env" file in "views" folder with these two lines
// STRIPE_PUBLIC_KEY = pk_test_51GqwoIIWQZMe3p514Q51imsUc2jR6QhXd8Cqh5m1aq9ftPcETvfKmTqDuBPKbfBV4JGZgUpx5YUNY3TupGg1jqAc00V3l5aAvP
// STRIPE_SECRET_KEY = sk_test_51GqwoIIWQZMe3p51mHuISRMnNVd2TycKvQ0WG5fTjDmd2U5uNg8FtmNp3hemSVWYvQIpxlxdZTHSRHnJAVz7Od6R00fqM8J7Hs