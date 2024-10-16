// Import Express
const express = require("express");

// Inisialisasi aplikasi Express
const app = express();

// Buat route untuk halaman utama
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Tentukan port di mana aplikasi akan berjalan
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
