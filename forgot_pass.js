function resetPassword() {
    var email = document.getElementById("forgot-email").value;

    // Perform the reset password logic (you can customize this based on your backend setup)
    // For demonstration purposes, let's assume a successful reset redirects to the login page
    alert("Password reset instructions sent to your email.");
    // Redirect after the alert so the user can see the message
    window.location.assign("login.html");
}
