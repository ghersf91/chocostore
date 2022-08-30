let shop = document.getElementById("shop");

let shopItemsData = [
    {
        id: "001",
        name: "Crunch",
        price: 1.50,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, voluptates?",
        img: "images/crunch-bar.jpeg"
    },
    {
        id: "002",
        name: "Cookies 'n' Creme",
        price: 2.50,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, voluptates?",
        img: "images/hersheys-cookies-n-cream-bar.jpeg"
    },
    {
        id: "003",
        name: "Kit Kat",
        price: 1.25,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, voluptates?",
        img: "images/kit-kat-bar.jpeg"
    },
    {
        id: "004",
        name: "M&M's",
        price: 1.50,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, voluptates?",
        img: "images/m-&-m-bag.jpeg"
    },
    {
        id: "005",
        name: "Mars",
        price: 1.80,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, voluptates?",
        img: "images/mars-bar.jpeg"
    },
    {
        id: "006",
        name: "Milky Way",
        price: 1.80,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, voluptates?",
        img: "images/milky-way-bar.jpeg"
    },
    {
        id: "007",
        name: "Snickers",
        price: 1.80,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, voluptates?",
        img: "images/snickers-bar.jpeg"
    },
    {
        id: "008",
        name: "Twix",
        price: 1.60,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, voluptates?",
        img: "images/twix-bar.jpeg"
    }];

let generateShop = () => {
    return (shop.innerHTML = shopItemsData.map((item) => {
        let { id, name, price, desc, img } = item;
        return `
    <div id=product-id-${id} class="item">
            <img width="219" src="${img}" alt="">
            <div class="details">
                <h3>${name}</h3>
                <p>${desc}</p>
                <div class="price-quantity">
                    <h2>$${price}</h2>
                    <div class="buttons">
                        <i class="bi bi-dash-circle"></i>
                        <div id=${id} class="quantity">0</div>
                        <i class="bi bi-plus-circle"></i>
                    </div>
                </div>
            </div>
        </div>`
    }).join(""));
}

generateShop();