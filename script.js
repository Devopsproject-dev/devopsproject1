<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Login</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="container">
    <h2>Login</h2>
    <form id="loginForm">
      <input type="text" id="username" placeholder="Username" required />
      <input type="password" id="password" placeholder="Password" required />
      <select id="role" required>
        <option value="">Select Role</option>
        <option value="admin">Admin</option>
        <option value="student">Student</option>
      </select>
      <button type="submit">Login</button>
    </form>
  </div>

  <script>
    document.getElementById("loginForm").addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      const role = document.getElementById("role").value;

      // Simple dummy authentication
      if (role === "admin" && username === "admin" && password === "admin123") {
        localStorage.setItem("role", "admin");
        localStorage.setItem("username", username);
        window.location.href = "admin.html";
      } else if (role === "student" && username === "student" && password === "student123") {
        localStorage.setItem("role", "student");
        localStorage.setItem("username", username);
        window.location.href = "student.html";
      } else {
        alert("Invalid credentials. Please try again.");
      }
    });
  </script>
</body>
</html>

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
  
    if (loginForm) {
      loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const role = document.querySelector('input[name="role"]:checked')?.value;
  
        if (!email || !password || !role) {
          alert("Please fill all fields and select a role.");
          return;
        }
  
        // Simple dummy validation (replace with real backend logic if needed)
        if (role === "admin" && email === "admin@example.com" && password === "admin123") {
          localStorage.setItem("role", "admin");
          localStorage.setItem("email", email);
          window.location.href = "admin.html";
        } else if (role === "student" && password === "student123") {
          localStorage.setItem("role", "student");
          localStorage.setItem("email", email);
          window.location.href = "student.html";
        } else {
          alert("Invalid login credentials!");
        }
      });
    }
  });
  
