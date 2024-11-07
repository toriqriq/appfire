const express = require("express");
const app = express();
const PORT = 3000;

// Middleware untuk parsing JSON body
app.use(express.json());

// Data sementara
let items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
];

// Route untuk root URL (Home)
app.get("/", (req, res) => {
  res.send("Welcome to the Home Page two");
});

// READ: Mendapatkan semua data
app.get("/items", (req, res) => {
  res.json(items);
});

// READ: Mendapatkan data berdasarkan ID
app.get("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find((i) => i.id === id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

// CREATE: Menambahkan data baru
app.post("/items", (req, res) => {
  const newItem = {
    id: items.length + 1,
    name: req.body.name,
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

// UPDATE: Memperbarui data berdasarkan ID
app.put("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const itemIndex = items.findIndex((i) => i.id === id);

  if (itemIndex !== -1) {
    items[itemIndex].name = req.body.name;
    res.json(items[itemIndex]);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

// DELETE: Menghapus data berdasarkan ID
app.delete("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const itemIndex = items.findIndex((i) => i.id === id);

  if (itemIndex !== -1) {
    const deletedItem = items.splice(itemIndex, 1);
    res.json(deletedItem);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
