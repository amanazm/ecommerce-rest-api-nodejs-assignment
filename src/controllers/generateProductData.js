const { faker } = require("@faker-js/faker");
const Product = require("../models/product");

const generateData = async (req, res) => {
  try {
    let productArr = [];
    while (productArr.length < 10) {
      await productArr.push(generateProductData());
    }
    const insertProduct = await Product.create(productArr);
    res.json(insertProduct);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const generateProductData = () => {
  return (productData = {
    name: faker.commerce.productName(),
    productId: faker.datatype.number({ min: 1000000 }),
    price: faker.datatype.number({ min: 100 }),
  });
};

module.exports = {
  generateData,
};
