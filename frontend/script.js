document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();
      const role = document.getElementById("role").value;

      if (!username || !password || !role) {
        alert("Please fill all fields and select a role.");
        return;
      }

      if (role === "admin" && username === "admin" && password === "admin123") {
        localStorage.setItem("role", "admin");
        localStorage.setItem("username", username);
        window.location.href = "admin.html";
      } else if (role === "student" && username === "student" && password === "student123") {
        localStorage.setItem("role", "student");
        localStorage.setItem("username", username);
        window.location.href = "student.html";
      } else {
        alert("Invalid login credentials!");
      }
    });
  }
});
