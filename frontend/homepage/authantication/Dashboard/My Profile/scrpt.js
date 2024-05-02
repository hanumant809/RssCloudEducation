document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get username and password values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Example admin credentials
    var adminUsername = "admin";
    var adminPassword = "admin123";

    // Check if the entered credentials match the admin credentials
    if (username === adminUsername && password === adminPassword) {
        // Redirect to admin dashboard or perform other actions
        alert("Login successful!");
        // Redirect to admin dashboard page
        // window.location.href = "admin_dashboard.html";
    } else {
        // Display error message
        document.getElementById("errorMessage").textContent = "Invalid username or password.";
    }
});
