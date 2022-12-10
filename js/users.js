import Data from "./localStorage.js";

let data = new Data();
data.init();

document.addEventListener("DOMContentLoaded", () => {
    let email_dangNhap = document.querySelector("#email_dangNhap");
    let pw_dangNhap = document.querySelector("#pw_dangNhap");

    if (email_dangNhap != null && pw_dangNhap != null) {
        // trang dang nhap

        if (data.getCurrentUser() != null)
            window.location.href = "../";

        document.querySelector("#dangnhap").addEventListener("click", e => {
            e.preventDefault();

            let error = document.querySelector("#error");

            let users = data.getUsers();
            let check = false;
            let user;
            for (let i = 0; i < users.length; i++) {
                user = users[i];

                check = false;
                if (email_dangNhap.value == user.email)
                    check = true;
                else check = false;

                if (pw_dangNhap.value == user.matKhau)
                    check = true;
                else check = false;

                if (check)
                    break;
            }

            if (check) {
                console.log(user);
                data.setCurrentUser(user);
                alert("Đăng nhập thành công!");
                window.location.href = "../";
            } else if (email_dangNhap.value.length == 0 || pw_dangNhap.value.length == 0)
                error.innerHTML = "Email và mật khẩu không được để trống!";
            else error.innerHTML = "Email và mật khẩu không trùng khớp!";
        })
    }

    let frm_login = document.querySelector("#frm_login");

    if (frm_login != null) {
        // trang dang ky

        if (data.getCurrentUser() != null) window.location.href = "../";
        frm_login.addEventListener("submit", e => {
            e.preventDefault();

            let inputValues = document.querySelectorAll("#frm_login input");
            let obj = {};

            for (let i = 0; i < inputValues.length; i++) {
                const element = inputValues[i];
                if (typeof element.dataset.type != "undefined")
                    obj[element.dataset.type] = element.value;
            }

            let users = data.getUsers();
            let check = true;
            for (let i = 0; i < users.length; i++) {
                const user = users[i];
                if (user.email == obj.email) check = false;
            }

            if (!check)
                alert("Người dùng đã tồn tại!");
            else {
                data.addUser(obj);
                alert("Đăng ký thành công! Vui lòng đăng nhập để tiếp tục.");
                window.location.href = "./dang-nhap.html";
            }
        })
    }

    let dangxuat = document.querySelector("#dangxuat");
    if (dangxuat != null) {
        // dang xuat

        alert("Đăng xuất thành công!");
        data.removeCurrentUser();
        window.location.href = "../";
    }

    let page = document.querySelector(".pagesLoginOut");

    if (page != null) {
        // trang

        if (data.getCurrentUser() != null) {
            let login = document.querySelector(".btn--sign-in");
            let register = document.querySelector(".btn--sign-out");

            login.remove();
            register.remove();

            document.querySelector(".nav-sign-btn").innerHTML = `<a href="./user/dang-xuat.html" class="btn btn--sign-out">Đăng xuất</a>`;
        }
    }
});