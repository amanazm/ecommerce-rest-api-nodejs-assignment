const User = require("../models/user");
const Order = require("../models/order");
const Product = require("../models/product");
const Catalog = require("../models/catalog");

const listOfSeller = (req, res) => {
  try {
    const seller = User.find({ userType: "seller" });

    res.status(200).json({ seller });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

const sellerCatalog = async (req, res) => {
//   console.log(req.params.sellerId);
  const sellerId = req.params.sellerId;
  try {
    const catalog = await Catalog.findOne({ sellerId: sellerId }).exec();
    const { items } = catalog;
    console.log(items);
    const result = await Product.find({productId: {"$in":items}},'name price').exec();
    
    res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

const createOrder = (req, res) => {
  const { sellerId, product } = req.body;
  try {
    let orderId = Math.random() * 10000;
    const result = Order.create({
      orderId : orderId,
      sellerId,
      product,
    });
    res.status(201).json({ result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

module.exports = {
  listOfSeller,
  sellerCatalog,
  createOrder,
};
