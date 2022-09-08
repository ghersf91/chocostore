let shop = document.getElementById("shop");

let basket = JSON.parse(localStorage.getItem("data")) || [];
console.log(basket)

let generateShop = () => {
    return (shop.innerHTML = shopItemsData.map((elem) => {
        let { id, name, price, desc, img } = elem;
        let search = basket.find((elem) => elem.id === id) || [];
        console.log(search)
        return `
                <div id=product-id-${id} class="item">
                    <img width="219" src=${img} alt="">
                    <div class="details">
                        <h3>${name}</h3>
                        <p>${desc}</p>
                        <div class="price-quantity">
                            <h2>$${price.toFixed(2)}</h2>
                            <div class="buttons">
                                <i onclick="decrement(${id})" class="bi bi-dash-circle"></i>
                                <div id=${id} class="quantity">
                                ${search.item === undefined ? 0 : search.item}
                                </div>
                                <i onclick="increment(${id})" class="bi bi-plus-circle"></i>
                            </div>
                        </div>
                    </div>
                </div>`;
    }).join(""));
}


generateShop();

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
    localStorage.setItem("data", JSON.stringify(basket));
};

let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((elem) => elem.id === selectedItem.id);

    //SOMETHING MISSING
    if (search.item === 0) return;
    else {
        search.item -= 1;
    }

    update(selectedItem.id);
    //SOMETHING MISSING
    localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
    let search = basket.find((elem) => elem.id === id);
    document.getElementById(id).innerHTML = search.item;
    calculation();
};

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount")
    cartIcon.innerHTML = basket.map((elem) => elem.item).reduce((x, y) => x + y, 0)
};

calculation();