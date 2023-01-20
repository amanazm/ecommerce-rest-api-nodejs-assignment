const Order = require("../models/order");
const Catalog = require("../models/catalog");

const createCatalog = (req, res) => {
  const { sellerId, items } = req.body;
  try {
    const result = Catalog.create({
      sellerId,
      items,
    });
    res.status(201).json({ result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

const listOfOrder = (req, res) => {
  const { sellerId } = req.body;
  try {
    const result = Order.find({ sellerId });
    res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

module.exports = {
  createCatalog,
  listOfOrder,
};
