let shop = document.getElementById("shop");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
    return (shop.innerHTML = shopItemsData.map((item) => {
        let { id, name, price, desc, img } = item;
        let search = basket.find((x) => x.id === id) || [];
        return `
                <div id=product-id-${id} class="item">
                    <img width="219" src="${img}" alt="">
                    <div class="details">
                        <h3>${name}</h3>
                        <p>${desc}</p>
                        <div class="price-quantity">
                            <h2>$${price.toFixed(2)}</h2>
                            <div class="buttons">
                                <i onclick="decrement(${id})" class="bi bi-dash-circle"></i>
                                <div id=${id} class="quantity">${search.item === undefined ? 0 : search.item}</div>
                                <i onclick="increment(${id})" class="bi bi-plus-circle"></i>
                            </div>
                        </div>
                    </div>
                </div>`
    }).join(""));
}

generateShop();

let increment = (id) => {
    let selectedItem = id
    let search = basket.find((x) => x.id === selectedItem)

    if (search === undefined) {
        basket.push({
            id: selectedItem,
            item: 1,
        });
    } else {
        search.item += 1
    }

    localStorage.setItem("data", JSON.stringify(basket));
    update(id);
};

let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem);

    if (search.item === 0) return
    else {
        search.item -= 1
    }

    localStorage.setItem("data", JSON.stringify(basket));
    update(id);
};

let update = (id) => {
    let search = basket.find((x) => x.id === id);
    document.getElementById(String(id).padStart(3, '0')).innerHTML = search.item;
    calculation();
};

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount")
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0)
}