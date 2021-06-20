if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready)
}
else{
   ready() 
}

function ready() {
    var modal = document.getElementById("pop_up_cart")
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Interaction Functions
    var dropdown_menu = document.getElementsByClassName("anime_options")
    for (var i = 0; i < dropdown_menu.length; i++) {
        var option = dropdown_menu[i]
        option.addEventListener("click", function() {
            if (option.value == option[1].value) {
                document.getElementById('dropdown_bleach').style.display='flex'
                document.getElementById('dropdown_dragon_ball').style.display='none'
                document.getElementById('dropdown_fairy_tail').style.display='none'
                document.getElementById('dropdown_my_hero_academia').style.display='none'
                document.getElementById('dropdown_naruto').style.display='none'
                document.getElementById('dropdown_one_piece').style.display='none'
                document.getElementById("animes").style.display='none'
            }
        })
        option.addEventListener("click", function() {
            if (option.value == option[2].value) {
                document.getElementById('dropdown_bleach').style.display='none'
                document.getElementById('dropdown_dragon_ball').style.display='flex'
                document.getElementById('dropdown_fairy_tail').style.display='none'
                document.getElementById('dropdown_my_hero_academia').style.display='none'
                document.getElementById('dropdown_naruto').style.display='none'
                document.getElementById('dropdown_one_piece').style.display='none'
                document.getElementById("animes").style.display='none'
            }
        })
        option.addEventListener("click", function() {
            if (option.value == option[3].value) {
                document.getElementById('dropdown_bleach').style.display='none'
                document.getElementById('dropdown_dragon_ball').style.display='none'
                document.getElementById('dropdown_fairy_tail').style.display='flex'
                document.getElementById('dropdown_my_hero_academia').style.display='none'
                document.getElementById('dropdown_naruto').style.display='none'
                document.getElementById('dropdown_one_piece').style.display='none'
                document.getElementById("animes").style.display='none'
            }
        })
        option.addEventListener("click", function() {
            if (option.value == option[4].value) {
                document.getElementById('dropdown_bleach').style.display='none'
                document.getElementById('dropdown_dragon_ball').style.display='none'
                document.getElementById('dropdown_fairy_tail').style.display='none'
                document.getElementById('dropdown_my_hero_academia').style.display='flex'
                document.getElementById('dropdown_naruto').style.display='none'
                document.getElementById('dropdown_one_piece').style.display='none'
                document.getElementById("animes").style.display='none'
            }
        })
        option.addEventListener("click", function() {
            if (option.value == option[5].value) {
                document.getElementById('dropdown_bleach').style.display='none'
                document.getElementById('dropdown_dragon_ball').style.display='none'
                document.getElementById('dropdown_fairy_tail').style.display='none'
                document.getElementById('dropdown_my_hero_academia').style.display='none'
                document.getElementById('dropdown_naruto').style.display='flex'
                document.getElementById('dropdown_one_piece').style.display='none'
                document.getElementById("animes").style.display='none'
            }
        })
        option.addEventListener("click", function() {
            if (option.value == option[6].value) {
                document.getElementById('dropdown_bleach').style.display='none'
                document.getElementById('dropdown_dragon_ball').style.display='none'
                document.getElementById('dropdown_fairy_tail').style.display='none'
                document.getElementById('dropdown_my_hero_academia').style.display='none'
                document.getElementById('dropdown_naruto').style.display='none'
                document.getElementById('dropdown_one_piece').style.display='flex'
                document.getElementById("animes").style.display='none'
            }
        })
    }

    document.getElementById("img_bleach").addEventListener("click", function() {
        document.getElementById('dropdown_bleach').style.display='flex'
        document.getElementById('dropdown_dragon_ball').style.display='none'
        document.getElementById('dropdown_fairy_tail').style.display='none'
        document.getElementById('dropdown_my_hero_academia').style.display='none'
        document.getElementById('dropdown_naruto').style.display='none'
        document.getElementById('dropdown_one_piece').style.display='none'
        document.getElementById("animes").style.display='none'
    })
    
    document.getElementById("img_dragon_ball").addEventListener("click", function() {
        document.getElementById('dropdown_bleach').style.display='none'
        document.getElementById('dropdown_dragon_ball').style.display='flex'
        document.getElementById('dropdown_fairy_tail').style.display='none'
        document.getElementById('dropdown_my_hero_academia').style.display='none'
        document.getElementById('dropdown_naruto').style.display='none'
        document.getElementById('dropdown_one_piece').style.display='none'
        document.getElementById("animes").style.display='none'
    })

    document.getElementById("img_fairy_tail").addEventListener("click", function() {
        document.getElementById('dropdown_bleach').style.display='none'
        document.getElementById('dropdown_dragon_ball').style.display='none'
        document.getElementById('dropdown_fairy_tail').style.display='flex'
        document.getElementById('dropdown_my_hero_academia').style.display='none'
        document.getElementById('dropdown_naruto').style.display='none'
        document.getElementById('dropdown_one_piece').style.display='none'
        document.getElementById("animes").style.display='none'
    })

    document.getElementById("img_my_hero_academia").addEventListener("click", function() {
        document.getElementById('dropdown_bleach').style.display='none'
        document.getElementById('dropdown_dragon_ball').style.display='none'
        document.getElementById('dropdown_fairy_tail').style.display='none'
        document.getElementById('dropdown_my_hero_academia').style.display='flex'
        document.getElementById('dropdown_naruto').style.display='none'
        document.getElementById('dropdown_one_piece').style.display='none'
        document.getElementById("animes").style.display='none'
    })

    document.getElementById("img_naruto").addEventListener("click", function() {
        document.getElementById('dropdown_bleach').style.display='none'
        document.getElementById('dropdown_dragon_ball').style.display='none'
        document.getElementById('dropdown_fairy_tail').style.display='none'
        document.getElementById('dropdown_my_hero_academia').style.display='none'
        document.getElementById('dropdown_naruto').style.display='flex'
        document.getElementById('dropdown_one_piece').style.display='none'
        document.getElementById("animes").style.display='none'
    })

    document.getElementById("img_one_piece").addEventListener("click", function() {
        document.getElementById('dropdown_bleach').style.display='none'
        document.getElementById('dropdown_dragon_ball').style.display='none'
        document.getElementById('dropdown_fairy_tail').style.display='none'
        document.getElementById('dropdown_my_hero_academia').style.display='none'
        document.getElementById('dropdown_naruto').style.display='none'
        document.getElementById('dropdown_one_piece').style.display='flex'
        document.getElementById("animes").style.display='none'
    })

    var remove_buttons = document.getElementsByClassName("remove_button")
    for (var i = 0; i < remove_buttons.length; i++) {
        var button = remove_buttons[i]       
        button.addEventListener("click", remove_cart_item)
    }

    var quantity_inputs = document.getElementsByClassName("cart_quantity_input")
    for (var i = 0; i < quantity_inputs.length; i++) {
        var input = quantity_inputs[i]
        input.addEventListener("change", quantity_changed)
    }

    var add_to_cart_buttons = document.getElementsByClassName("shop_button")
    for (var i = 0; i < add_to_cart_buttons.length; i++) {
        var button = add_to_cart_buttons[i]
        button.addEventListener("click", add_to_cart_clicked)
    }

    document.getElementsByClassName("purchase_button")[0].addEventListener("click", purchase_clicked)
}

var stripe_handler = StripeCheckout.configure({
    key: stripePublicKey,
    locale: "en",
    token: function(token) {
        var items = []
        var cart_items_container= document.getElementsByClassName("cart_items")[0]
        var cart_rows = cart_items_container.getElementsByClassName("cart_row")

        for (var i = 0; i < cart_rows.length; i++) {
            var cart_row = cart_rows[i]
            var quantity_element = cart_row.getElementsByClassName("cart_quantity_input")[0]
            var quantity = quantity_element.value
            var id = cart_row.dataset.itemId
            items.push({
                id: id,
                quantity: quantity
            })
        }

        fetch("/purchase", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application.json"
            },
            body: JSON.stringify({
               stripeTokenId: token.id,
               stripeEmail: token.email,
               items: items,
               stripeName: token.card.name,
               stripeAdress1: token.card.address_line1,
               stripeAdress2: token.card.address_line2,
               stripeCity: token.card.address_city,
               stripeZip: token.card.address_zip,
               stripeCountry: token.card.address_country
            })
        })
        .then(function(res) {
            return res.json()
        })
        .then(function(data) {
            alert(data.message)
            var cart_items = document.getElementsByClassName("cart_items")[0]
            while(cart_items.hasChildNodes()) {
                cart_items.removeChild(cart_items.firstChild)
            }
            update_cart_total()
        })
        .catch(function(error) {
            console.error(error)
        })
    }
})

function purchase_clicked() {
    var priceElement = document.getElementsByClassName("total_price")[0]
    var price = parseFloat(priceElement.innerHTML.replace("$", "")) * 100
    stripe_handler.open( {
        image: "images/icons/icon.png",
        name: "Anime World",
        description: "Please Enter Your Shipping Information",
        amount: price,
        billingAddress: true
    })
}

function remove_cart_item(event) {
    var button_clicked = event.target
    button_clicked.parentElement.parentElement.remove()
    update_cart_total()
}

function quantity_changed(event) {
    var input = event.target
    
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    update_cart_total()
}

function add_to_cart_clicked(event) {
    var button = event.target
    var shop_item = button.parentElement.parentElement
    var title = shop_item.getElementsByClassName("item_name")[0].innerText
    var price = shop_item.getElementsByClassName("item_price")[0].innerText
    var image = shop_item.getElementsByClassName("item_image")[0].src
    var id = shop_item.dataset.itemId
    
    add_item_to_cart(title, price, image, id)

    update_cart_total()
}

function add_item_to_cart(title, price, image, id) {
    var cart_row = document.createElement("div")
    cart_row.classList.add("cart_row")
    cart_row.dataset.itemId = id
    var cart_items = document.getElementsByClassName("cart_items")[0]
   
    var cart_item_names = cart_items.getElementsByClassName("cart_item_title")
    for (var i = 0; i < cart_item_names.length; i++) {
        if(cart_item_names[i].innerText == title) {
            document.getElementById("assistant").style.display='none'
            document.getElementById("alert").style.display='block'
            var close_alert = document.getElementById("alert")
            window.onclick = function(event) {
                if (event.target == close_alert) {
                    close_alert.style.display = "none";
                    document.getElementById("assistant").style.display='block'
                }
            }
            return
        }
    }
    var cart_row_contents = `
        <div class="cart_item cart_column">
        <img class="cart_item_image" src="${image}" width="100">
        <span class="cart_item_title">${title}</span>
    </div>
    <span class="cart_price cart_column">${price}</span>
    <div class="cart_quantity cart_column">
        <input class="cart_quantity_input" type="number" value="1">
        <button class="remove_button" type="button">REMOVE</button>
    </div>`
    cart_row.innerHTML = cart_row_contents
    cart_items.append(cart_row)

    cart_row.getElementsByClassName("remove_button")[0].addEventListener("click", remove_cart_item)
    cart_row.getElementsByClassName("cart_quantity_input")[0].addEventListener("change", quantity_changed)
}

function update_cart_total() {
    var cart_items_container = document.getElementsByClassName("cart_items")[0]
    var cart_rows = cart_items_container.getElementsByClassName("cart_row")
    var total = 0

    for (var i = 0; i < cart_rows.length; i++) {
        var cart_row = cart_rows[i]
        var price_element = cart_row.getElementsByClassName("cart_price")[0]
        var quantity_element = cart_row.getElementsByClassName("cart_quantity_input")[0]
    
        var price = parseFloat(price_element.innerText.replace("$", ""))
        var quantity = quantity_element.value

        total = total + (price * quantity)
    }

    total = ((total * 100)/ 100).toFixed(2)
    document.getElementsByClassName("total_price")[0].innerText = "$" + total
}