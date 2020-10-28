import data from '../../data/products.json';

export default {
  index(request, response) {
    const products = data;

    return response.json(products);
  },
};
