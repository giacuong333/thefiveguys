let products = [
    {
        id: 0,
        title: "Áo len Karma",
        price: "550000đ",
        description: "Chiếc áo len này của Karma Club sẽ giúp tăng thêm cảm giác mềm mại cho diện mạo hàng ngày của bạn. - Chất liệu: cotton/nylon; lớp lót: polyester - Có thể giặt máy - Kiểu...",
        image: "./product/img/ao len karma.jpg",
        amount: 100,
        details: "../product/aolenkarma.htm",
    },
    {
        id: 1,
        title: "Áo len Kimono SM",
        price: "330000đ",
        description: "Chiếc áo len này của Kimono Club sẽ giúp tăng thêm cảm giác mềm mại cho diện mạo hàng ngày của bạn. - Chất liệu: cotton/nylon; lớp lót: polyester - Có thể giặt máy - Kiểu...",
        image: "./product/img/ao len kimono sm.jpg",
        amount: 100,
        sale: "product--sale",
        details: "../product/aolenkimonosm.htm",
    },
    {
        id: 2,
        title: "Áo len KSUMI",
        price: "330000đ",
        description: "Chiếc áo len này của KSUMI Club sẽ giúp tăng thêm cảm giác mềm mại cho diện mạo hàng ngày của bạn. - Chất liệu: cotton/nylon; lớp lót: polyester - Có thể giặt máy - Kiểu...",
        image: "./product/img/ao len ksumi.jpg",
        amount: 100,
        sale: "product--sale",
        details: "../product/aolenksumi.htm",
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
        details: "../product/giaythethaonuprowin.htm",
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
        details: "../product/aovayfreepeoplecothuyen.htm",
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
        details: "../product/aosomianneklein.htm",
    },
    {
        id: 10,
        title: "Giày thời trang nữ Nike",
        price: "35000đ",
        description: "Giày thời trang nữ này của Nike Club sẽ giúp tăng thêm cảm giác mềm mại cho diện mạo hàng ngày của bạn. - Chất liệu: cotton/nylon; lớp lót: polyester - Có thể giặt máy - Kiểu...",
        image: "./product/img/giay thoi trang nu nike.jpg",
        amount: 100,
        sale: "product--sale",
        details: "../product/giaythoitrangnunike.htm",
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
        details: "../product/giaythethaonudt.htm",
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
        details: "../product/giaythethaonuprowin.htm",
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

// render products
const renderProducts = () => {
    let product = "";
    let length = products.length;
    for (let i = 0; i < length; i++) {
        let id = products[i].id;
        if (id == 10)
            product += `<h2 class="product-name">SẢN PHẨM HOT</h2>`;
        product += `
        <div onclick="productsDetails(${id})" onclick=renderProductsDetails(${id}) class="col l-6 m-6 c-12">
            <a href="" target="_blank" class="product product--space ${products[i].sale}">
              <img src="${products[i].image}" alt="Image" class="product-img"/>
              <span class="product-desc">${products[i].title}</span>
              <span class="product-price">${products[i].price}</span>
            </a>
        </div>
        `;
    }
    document.querySelector("#products-area").innerHTML = product;
};

// const renderProductsDetails = (idProduct) => {
//     let details = '';
//     details += `
//         <p class="trangchu">
//             <a href="../index.html">Trang chủ</a>
//         </p>
//         <form id="more-info">
//             <table class="bang">
//                 <tr>
//                     <td width="40%" class="ten">${products[idProduct].title}</td>
//                     <td width="60%"></td>
//                 </tr>
//                 <tr>
//                     <td class="anh-wrap"><img class="anh" src="${products[idProduct].image}"></td>
//                     <td valign="top">
//                         <p class="gia">${products[idProduct].price}</p>
//                         <p class="chitiet">${products[idProduct].description}</p>
//                         <p>
//                             <input id="quantity" class="soluong" type="number" min="1" value="1">
//                         </p>
//                         <input onclick="getQuantity()" class="mua" type="submit" value="MUA HÀNG">
//                         <input class="goi" type="submit" value="GỌI">
//                     </td>
//                 </tr>
//                 <tr>
//                     <td class="chitiet" colspan="2">
//                         <div class="accordion">HƯỚNG DẪN SỬ DỤNG</div>
//                         <div class="panel">
//                             <p>
//                                 Chiếc áo len này của
//                                 Club sẽ giúp tăng thêm cảm giác mềm mại cho diện mạo hàng
//                                 ngày
//                                 của bạn.
//                                 <br><br>- Chất liệu: cotton/nylon; lớp lót: polyester
//                                 <br><br>- Có thể giặt máy
//                                 <br><br>- Kiểu áo chui đầu, cổ tròn, không tay
//                                 <br><br>- Áo ren, có lớp lót
//                                 <br><br>- Dài trên đùi
//                                 <br><br>Charter Club là thương hiệu thời trang cao cấp giá cả vừa tầm được ưa chuộng
//                                 hàng
//                                 đầu tại Mỹ và nhiều nước trên thế giới. Các sản phẩm của Charter Club bao gồm quần áo,
//                                 váy
//                                 đầm, phụ kiện, trang sức và đặc biệt là đồ over size luôn nổi bật với chất liệu bền đẹp,
//                                 thiết kế hiện đại, thời trang, đáp ứng nhu cầu về tính tiện dụng, thoải mái. Charter
//                                 Club đã
//                                 dần khẳng định là thương hiệu thời trang hàng đầu thế giới hướng tới tất cả khách hàng
//                                 mọi
//                                 lứa tuổi, mang đến cho người sử dụng vẻ đẹp tinh tế, sang trọng và đa phong cách.
//                                 <br><br>Charter Club được biết đến là thương hiệu thời trang mang phong cách cổ điển ở
//                                 Mỹ
//                                 với đa dạng các sản phẩm quần áo, phụ kiện, đồ trang sức… Với màu sắc tươi vui và chi
//                                 tiết
//                                 tinh xảo, các sản phẩm thời trang của Charter Club thích hợp cho tất cả các dịp.
//                             </p>
//                         </div>
//                     </td>
//                 </tr>
//             </table>
//         </form>
//         `;
//     document.querySelector(".than").innerHTML = details;
// };

// get products from local storage
const getProducts = () => {
    if (localStorage.getItem("products") == null) // if local storage have no products
        localStorage.setItem("products", JSON.stringify(products)); // sets default products for local storage
    return JSON.parse(localStorage.getItem("products")); // returns products object
};

// go to product details
let productsDetails = (idProduct) => {
    window.location.href = products[idProduct].details;
};

let loadProducts = () => {
    window.onload = renderProducts();
    window.onload = getProducts();
};

let getQuantity = () => {
    let quantityList = [];
    let quantityInput = document.getElementById('quantity').value;
    quantityList.push(quantityInput);
    localStorage.setItem('quantity', JSON.stringify(quantityList));
};


// function addToCart(p) {
//     var sizeArray = document.getElementsByName('size')
//     for (var i = 0; i < sizeArray.length; i++) {
//         if (sizeArray[i].checked) {
//             var size = sizeArray[i].value;
//         }
//     }
//     var quantity = document.getElementById('quantity').value;
//     var productArray = JSON.parse(localStorage.getItem('product'));
//     console.log(productArray)
//     for (var i = 0; i < productArray.length; i++) {
//         if (productArray[i].productId == p) {
//             var producttemp = productArray[i];
//         }
//     }
//     if (localStorage.getItem('cart') === null) {
//         var cartArray = [];
//         producttemp.quantity = quantity;
//         producttemp.size = size;
//         producttemp.totalprice = quantity * producttemp.price;
//         cartArray.unshift(producttemp);
//         localStorage.setItem('cart', JSON.stringify(cartArray));
//     } else {
//         var cartArray = JSON.parse(localStorage.getItem('cart'));
//         producttemp.quantity = quantity;
//         producttemp.size = size;
//         producttemp.totalprice = quantity * producttemp.price;
//         cartArray.unshift(producttemp);
//         localStorage.setItem('cart', JSON.stringify(cartArray));
//     }
//     alert("Sản phẩm đã được thêm vào giỏ hàng!")
//     showbill2();
//     renderShop();
// }

let clearAllProducts = () => {
    if (products.length) {
        products = [];
        localStorage.setItem("products", JSON.stringify(products));
    }
};

let totalQuantity = () => {
    let total = products.reduce((total, currentValue) => {
        return total + currentValue.quantity;
    }, 0);
    return total;
};

