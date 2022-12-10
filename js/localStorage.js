// initializing default accounts when loading the page
export default function Data() {
    this.init = function () {
        if (!this.getUsers())
            this.initUsers();
    }

    this.initUsers = function () {
        let users = [
            {
                matKhau: "admin",
                soDienThoai: "0123456789",
                ho: "Admin",
                ten: "Admin",
                email: "admin@example.com"
            },
            {
                matKhau: "user",
                soDienThoai: "0123456789",
                ho: "User",
                ten: "User",
                email: "user@example.com"
            }
        ]
        localStorage.setItem("users", JSON.stringify(users));
    }

    Data.prototype.getUsers = function () {
        return JSON.parse(localStorage.getItem("users"));
    }

    this.setUsers = function (usersArr) {
        let usersJSON = JSON.stringify(usersArr);
        localStorage.setItem("users", usersJSON);
    }

    this.addUser = function (userObj) {
        let users = this.getUsers(); // get from local storage
        users.push(userObj);
        this.setUsers(users); // set to local storage
    }

    this.setCurrentUser = function (userObj) {
        localStorage.setItem("currentUser", JSON.stringify(userObj));
    }

    this.getCurrentUser = function () {
        return JSON.parse(localStorage.getItem("currentUser"));
    }

    this.removeCurrentUser = function () {
        localStorage.removeItem("currentUser");
    }
}