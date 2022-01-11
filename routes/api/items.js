const express = require("express");
const router = express.Router();
//Item modelo
const Item = require("../../modelos/Item");

//GET api/items se hace un get a todos los items
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((items) => res.json(items))
    .catch((err) => console.log(err, "desde get"));
});

//POST api/items se hace un post a la base
router.post("/", (req, res) => {
  const newItem = new Item({
    nombre: req.body.data.name,
    apellido: req.body.data.lastname,
    email: req.body.data.email,
    address: req.body.data.address,
    phone: req.body.data.phone,
  });
  newItem.save().then((item) => res.json(item));
});

router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
