document.getElementById("login-btn").addEventListener("click", function () {
  //   get email
  const emailField = document.getElementById("user-email");
  const userEmail = emailField.value;
  //   get password
  const passwordField = document.getElementById("user-pass");
  const userPassword = passwordField.value;
  if (userEmail == "alamin@gmail.com" && userPassword == "alamin") {
    console.log("successfully login");
    window.location.href = "bank.html";
  }
});
