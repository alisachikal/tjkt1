// Fungsi untuk menampilkan form registrasi & menyembunyikan login
function showRegister() {
  document.getElementById("loginform").classList.add("hidden");
  document.getElementById("registerform").classList.remove("hidden");
}

// Fungsi untuk menampilkan form login & menyembunyikan registrasi
function showLogin() {
  document.getElementById("registerform").classList.add("hidden");
  document.getElementById("loginform").classList.remove("hidden");
}

// Menangani Registrasi
document.querySelector("#registerform").addEventListener("submit", function(event) {
  event.preventDefault();

  let nama = document.getElementById("nama").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    alert("Password dan Konfirmasi password tidak cocok!");
    return;
  }

  let user = { nama: nama, email: email, password: password };
  localStorage.setItem("user", JSON.stringify(user));

  alert("Registrasi berhasil! Silakan login.");
  showLogin();
});

// Menangani Login
document.querySelector("#loginform").addEventListener("submit", function(event) {
  event.preventDefault();

  let email = document.getElementById("login-email").value;
  let password = document.getElementById("login-password").value;
  let storedUser = JSON.parse(localStorage.getItem("user"));

  // Mengecek apakah data user ada
  if (storedUser) {
    // Memeriksa apakah email dan password cocok
    if (storedUser.email === email && storedUser.password === password) {
      alert("Login berhasil! Selamat datang, " + storedUser.nama);
      localStorage.setItem("loggedInUser", JSON.stringify(storedUser)); // Simpan data user yang login
      window.location.href = "dashboard.html";
    } else {
      alert("Email atau password salah!");
    }
  } else {
    alert("Belum ada akun yang terdaftar. Silakan registrasi terlebih dahulu.");
  }
});
