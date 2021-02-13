function loginNewUser() {
    var user = document.getElementById("user")
    var passw = document.getElementById("passw")

    var logUser = { "user": user, "password": passw }
    var loginArray = []
    loginArray.push(logUser)

    writeArrayToSessionStorage("loginArray", loginArray)
    window.location = "http://localhost:5000/dashboard"
}