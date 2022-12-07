const products = [
    {
        id: 0,
        title: "Áo len Karma",
        price: "550000đ",
        description: "Chiếc áo len này của Karma Club sẽ giúp tăng thêm cảm giác mềm mại cho diện mạo hàng ngày của bạn. - Chất liệu: cotton/nylon; lớp lót: polyester - Có thể giặt máy - Kiểu...",
        image: "./product/img/ao len karma.jpg",
        amount: 100,
    },
    {
        id: 1,
        title: "Áo len Kimono SM",
        price: "330000đ",
        description: "Chiếc áo len này của Kimono Club sẽ giúp tăng thêm cảm giác mềm mại cho diện mạo hàng ngày của bạn. - Chất liệu: cotton/nylon; lớp lót: polyester - Có thể giặt máy - Kiểu...",
        image: "./product/img/ao len kimono sm.jpg",
        amount: 100,
        sale: "product--sale",
    },
    {
        id: 2,
        title: "Áo len KSUMI",
        price: "330000đ",
        description: "Chiếc áo len này của KSUMI Club sẽ giúp tăng thêm cảm giác mềm mại cho diện mạo hàng ngày của bạn. - Chất liệu: cotton/nylon; lớp lót: polyester - Có thể giặt máy - Kiểu...",
        image: "./product/img/ao len ksumi.jpg",
        amount: 100,
        sale: "product--sale",
    },
    {
        id: 3,
        title: "Áo khoát gió Moza",
        price: "330000đ",
        description: "Chiếc áo len này của Moza Club sẽ giúp tăng thêm cảm giác mềm mại cho diện mạo hàng ngày của bạn. - Chất liệu: cotton/nylon; lớp lót: polyester - Có thể giặt máy - Kiểu...",
        image: "./product/img/ao-khoat-gio-moza.png",
        amount: 100,
        sale: "product--sale",
    },
    {
        id: 4,
        title: "Giày thể thao nữ Prowin",
        price: "390000đ",
        description: "Giày thể thao này của Prowin Club sẽ giúp tăng thêm cảm giác mềm mại cho diện mạo hàng ngày của bạn. - Chất liệu: cotton/nylon; lớp lót: polyester - Có thể giặt máy - Kiểu...",
        image: "./product/img/giay the thao nu prowin.jpg",
        amount: 100,
    },
    {
        id: 5,
        title: "Giày chạy bộ nữ Nike Lunarglide",
        price: "Liên Hệ",
        description: "Giày chạy bộ này của Nike Club sẽ giúp tăng thêm cảm giác mềm mại cho diện mạo hàng ngày của bạn. - Chất liệu: cotton/nylon; lớp lót: polyester - Có thể giặt máy - Kiểu...",
        image: "./product/img/giay-chay-bo-nu-nike-lunarglide.png",
        amount: 100,
        sale: "product--sale",
    },
    {
        id: 6,
        title: "Túi xách thời trang Madam",
        price: "720000đ",
        description: "Túi xách này của Madam Club sẽ giúp tăng thêm cảm giác mềm mại cho diện mạo hàng ngày của bạn. - Chất liệu: cotton/nylon; lớp lót: polyester - Có thể giặt máy - Kiểu...",
        image: "./product/img/tui-xach-thoi-trang-madam.png",
        amount: 100,
    },
    {
        id: 7,
        title: "Áo váy Free People cổ truyền",
        price: "430000đ",
        description: "Áo váy này của Free Club sẽ giúp tăng thêm cảm giác mềm mại cho diện mạo hàng ngày của bạn. - Chất liệu: cotton/nylon; lớp lót: polyester - Có thể giặt máy - Kiểu...",
        image: "./product/img/ao vay free people co thuyen.jpg",
        amount: 100,
    },
    {
        id: 8,
        title: "Áo sơ mi Calvin Klein",
        price: "500000đ",
        description: "Áo sơ mi này của Calvin Club sẽ giúp tăng thêm cảm giác mềm mại cho diện mạo hàng ngày của bạn. - Chất liệu: cotton/nylon; lớp lót: polyester - Có thể giặt máy - Kiểu...",
        image: "./product/img/ao-so-mi-calvin-klein.png",
        amount: 100,
    },
    {
        id: 9,
        title: "Áo sơ mi Anne Klein",
        price: "450000đ",
        description: "Áo sơ mi này của Klein Club sẽ giúp tăng thêm cảm giác mềm mại cho diện mạo hàng ngày của bạn. - Chất liệu: cotton/nylon; lớp lót: polyester - Có thể giặt máy - Kiểu...",
        image: "./product/img/ao so mi anne klein.jpg",
        amount: 100,
    },
    {
        id: 10,
        title: "Giày thời trang nữ Nike",
        price: "35000đ",
        description: "Giày thời trang nữ này của Nike Club sẽ giúp tăng thêm cảm giác mềm mại cho diện mạo hàng ngày của bạn. - Chất liệu: cotton/nylon; lớp lót: polyester - Có thể giặt máy - Kiểu...",
        image: "./product/img/giay thoi trang nu nike.jpg",
        amount: 100,
        sale: "product--sale",
    },
    {
        id: 11,
        title: "Giày thời trang Creative",
        price: "45000đ",
        description: "Giày creative của Creative Club sẽ giúp tăng thêm cảm giác mềm mại cho diện mạo hàng ngày của bạn. - Chất liệu: cotton/nylon; lớp lót: polyester - Có thể giặt máy - Kiểu...",
        image: "./product/img/giay-thoi-trang-creative.png",
        amount: 100,
    },
    {
        id: 12,
        title: "Giày thể thao nữ DT",
        price: "45000đ",
        description: "Giày DT này của DT Club sẽ giúp tăng thêm cảm giác mềm mại cho diện mạo hàng ngày của bạn. - Chất liệu: cotton/nylon; lớp lót: polyester - Có thể giặt máy - Kiểu...",
        image: "./product/img/giay the thao nu dt.jpg",
        sale: "product--sale",
        amount: 100,
    },
    {
        id: 13,
        title: "Giày cao cổ Prowin",
        price: "1200000đ",
        description: "Giày cao cổ này của Prowin Club sẽ giúp tăng thêm cảm giác mềm mại cho diện mạo hàng ngày của bạn. - Chất liệu: cotton/nylon; lớp lót: polyester - Có thể giặt máy - Kiểu...",
        image: "./product/img/giay-cao-co-prowin.png",
        amount: 100,
    },
    {
        id: 14,
        title: "Giày bóng đá nam Codad ROCKET",
        price: "410000đ",
        description: "Giày bóng đá này của Codad Club sẽ giúp tăng thêm cảm giác mềm mại cho diện mạo hàng ngày của bạn. - Chất liệu: cotton/nylon; lớp lót: polyester - Có thể giặt máy - Kiểu...",
        image: "./product/img/giay-bong-da-nam-codad-rocket.png",
        sale: "product--sale",
        amount: 100,
    },
    {
        id: 15,
        title: "Giày cầu lông động lực Promax",
        price: "590000đ",
        description: "Giày cầu lông động lực này của Promax Club sẽ giúp tăng thêm cảm giác mềm mại cho diện mạo hàng ngày của bạn. - Chất liệu: cotton/nylon; lớp lót: polyester - Có thể giặt máy - Kiểu...",
        image: "./product/img/giay-cau-long-dong-luc-promax.png",
        sale: "product--sale",
        amount: 100,
    },
    {
        id: 16,
        title: "Giày thể thao nữ Prowin",
        price: "390000đ",
        description: "Giày thể thao nữ này của Prowin Club sẽ giúp tăng thêm cảm giác mềm mại cho diện mạo hàng ngày của bạn. - Chất liệu: cotton/nylon; lớp lót: polyester - Có thể giặt máy - Kiểu...",
        image: "./product/img/giay the thao nu prowin.jpg",
        amount: 100,
    },
    {
        id: 17,
        title: "Giày chạy bộ NX",
        price: "540000đ",
        description: "Giày chạy bộ này của NX Club sẽ giúp tăng thêm cảm giác mềm mại cho diện mạo hàng ngày của bạn. - Chất liệu: cotton/nylon; lớp lót: polyester - Có thể giặt máy - Kiểu...",
        image: "./product/img/giay-chay-bo-nu-nx.png",
        amount: 100,
    },
];

export let loadProducts = () => {
    window.onload = createProducts();
};

// render products 
export const createProducts = () => {
    let product = "";
    let length = products.length;
    for (let i = 0; i < length; i++) {
        let id = products[i].id;
        if (id == 10)
            product += `<h2 class="product-name">SẢN PHẨM HOT</h2>`;
        product += `
        <div onclick="productsDetails(${id})" class="col l-6 m-6 c-12" id="move-to-details">
            <a href="" class="product product--space ${products[i].sale}" >
              <img src="${products[i].image}" alt="Image" class="product-img"/>
              <span class="product-desc">${products[i].title}</span>
              <span class="product-price">${products[i].price}</span>
            </a> 
        </div>
        `;
    }
    document.querySelector("#products-area").innerHTML = product;
};

export let productsDetails = (idProduct) => {
    JSON.parse(localStorage.getItem("products"));
    console.log(idProduct);
};

// get products from local storage
export const getProducts = () => {
    if (localStorage.getItem("products") == null) // if local storage have no products 
        localStorage.setItem("products", JSON.stringify(products)); // sets default products for local storage
    return JSON.parse(localStorage.getItem("products")); // returns products object
};

// add products to cart 
let addProducts = (idProduct) => {
    let product = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [];
    let isExist = false;
    // if products exist 
    for (const i in products) {
        if (products[i].id == idProduct) {
            products[i].quantity++;
            isExist = true;
            break;
        }
    }
    // if products do not exist
    if (!isExist)
        products.push({
            id: idProduct,
            quantity: 1,
        });
    (product);
};

let clearAllProducts = () => {
    if (products.length) {
        products = [];
        localStorage.setItem("products", JSON.stringify(products));
    }
};

let totalQuantity = () => {
    let quantity = 0;
    for (const i in products)
        quantity += products[i].quantity;
    return quantity;
};