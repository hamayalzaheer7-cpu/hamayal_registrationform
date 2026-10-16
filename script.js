
function register() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var course = document.getElementById("course").value;
    var message = document.getElementById("message");

    if (name == "" || email == "" || phone == "" ||
        password == "" || confirmPassword == "" || course == "") {
        message.innerHTML = "Please fill all fields!";
        message.style.color = "red";
    }
    else if (password.length < 6) {
        message.innerHTML = "Password must be at least 6 characters!";
        message.style.color = "red";
    }
    else if (password != confirmPassword) {
        message.innerHTML = "Passwords do not match!";
        message.style.color = "red";
    }
    else {
        message.innerHTML = "Registration Successful!";
        message.style.color = "green";
    }
}

document.getElementById("myForm").onsubmit = function(event) {
    event.preventDefault();
    register();
};
