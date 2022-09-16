let label = document.getElementById('label');
let shoppingCart = document.getElementById('shopping-cart');

let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount")
    cartIcon.innerHTML = basket.map((elem) => elem.item).reduce((x, y) => x + y, 0)
};

calculation();

let generateCartItems = () => {
    if (basket.length !== 0) {
        return (shoppingCart.innerHTML = basket.map((x) => {

            let { id, item } = x;
            let search = shopItemsData.find((y) => y.id === id) || [];
            let totalPrice = search.price * item;
            let { img, name, price } = search;
            return `
            <div class="cart-item">
                <img width="100" src=${img} alt=""/>
                <div class="details">
                    <div class="name-price-x">
                        <h4 class="name-price">
                            <p>${name}</p>
                            <p class="cart-item-price">$ ${price.toFixed(2)}</p>
                        </h4>
                        <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
                    </div>

                    <div class="buttons">
                                <i onclick="decrement(${id})" class="bi bi-dash-circle"></i>
                                <div id=${id} class="quantity">${item}</div>
                                <i onclick="increment(${id})" class="bi bi-plus-circle"></i>
                    </div>

                    <h3 class="total-price">$ ${totalPrice.toFixed(2)}</h3>

                </div>
            </div>
            `
        }).join(""));
    } else {
        shoppingCart.innerHTML = ``;
        label.innerHTML = `
        <h2>Cart is empty</h2>
        <a href="index.html">
            <button class="home-btn">Back to home</button>
        </a>
        `
    }
}

generateCartItems();

let increment = (id) => {
    let selectedItem = id
    let search = basket.find((elem) => elem.id === selectedItem.id)

    if (search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    } else {
        search.item += 1
    }

    update(selectedItem.id);
    generateCartItems();
    localStorage.setItem("data", JSON.stringify(basket));
};

let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((elem) => elem.id === selectedItem.id);

    if (search === undefined) return;
    else if (search.item === 0) return;
    else {
        search.item -= 1;
    }

    update(selectedItem.id);
    basket = basket.filter((elem) => elem.item !== 0);
    generateCartItems();
    localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
    let search = basket.find((elem) => elem.id === id);
    document.getElementById(id).innerHTML = search.item;
    calculation();
    totalAmount();
};

let removeItem = (id) => {
    let selectedItem = id;
    basket = basket.filter((card) => card.id !== selectedItem.id);
    generateCartItems();
    totalAmount();
    calculation();
    localStorage.setItem("data", JSON.stringify(basket));
};

let clearCart = () => {
    basket = [];
    generateCartItems();
    calculation();
    localStorage.setItem("data", JSON.stringify(basket));
}

let totalAmount = () => {
    if (basket.length !== 0) {
        let amount = basket.map((x) => {
            let { item, id } = x;
            let search = shopItemsData.find((y) => y.id === id) || [];
            return item * search.price;
        }).reduce((x, y) => x + y, 0);
        label.innerHTML = `
        <h2>Total: $ ${amount.toFixed(2)}</h2>
        <button class="checkout">Checkout</button>
        <button onclick="clearCart()" class="remove-all">Clear cart</button>
        `
    } else return;
};

totalAmount();