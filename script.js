// Register Form
document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();
      const repassword = document.getElementById("repassword").value.trim();

      if (
        username.length < 3 ||
        password.length < 3 ||
        password.length != repassword.length
      ) {
        alert("Username and password must be at least 3 characters long.");
        window.location.href = "index.html";
        return;
      }

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      localStorage.setItem("repassword", repassword);
      alert("Registration successful! Please log in.");
      window.location.href = "login.html";
    });
  }

  // Login Form
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const username = document.getElementById("loginUsername").value.trim();
      const password = document.getElementById("loginPassword").value.trim();
      const storedUsername = localStorage.getItem("username");
      const storedPassword = localStorage.getItem("password");

      if (username === storedUsername && password === storedPassword) {
        localStorage.setItem("loginUsername", username);
        localStorage.setItem("loginPassword", password);
        alert("Login successful!");
        window.location.href = "dashboard.html";
      } else {
        alert("Invalid username or password.");
      }
    });
  }

  // Display Username on Dashboard
  if (window.location.pathname.includes("dashboard.html")) {
    const loggedInUser = localStorage.getItem("loginUsername");
    const loggedInPassword = localStorage.getItem("loginPassword");
    if (!loggedInUser && !loggedInPassword) {
      alert("You are not logged in!");
      window.location.href = "index.html";
    } else {
      document.getElementById("displayUsername").innerText = loggedInUser;
      document.getElementById("displayPassword").innerText = loggedInPassword;
    }
  }
});

function logout() {
  document.getElementById("displayUsername").innerText =
    localStorage.getItem("loginUsername");
  document.getElementById("displayPassword").innerText =
    localStorage.getItem("loginPassword");

  localStorage.removeItem("loginUsername");
  localStorage.removeItem("loginPassword");
  window.location.href = "index.html";
}
