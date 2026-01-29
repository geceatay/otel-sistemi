function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  // ŞİMDİLİK SAHTE
  if (user === "reception" && pass === "1234") {
    window.location.href = "dashboard.html";
  } else if (user === "admin" && pass === "admin") {
    window.location.href = "admin.html";
  } else {
    alert("Hatalı giriş");
  }
}