const data = require('../../data/products.json');

module.exports = {
  index(request, response) {
    const products = data;

    return response.json(products);
  },
};
