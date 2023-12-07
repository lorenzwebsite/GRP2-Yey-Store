function signup() {
    var email = document.getElementById("signup-email").value;
    var password = document.getElementById("signup-password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    // Perform the signup logic (you can customize this based on your backend setup)
    // For demonstration purposes, let's assume a successful signup redirects to the login page
    alert("Signup Successful!");
    window.location.assign("login.html");
}
