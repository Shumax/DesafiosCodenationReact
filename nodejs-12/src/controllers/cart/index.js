/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

function getProductsById(ids, productsList) {
  // filtra os produtos pelo id do produtos.json
  const cartProducts = productsList.filter(({ id }) => ids.includes(id));
  // mapeia por nome e categoria
  const products = cartProducts.map((products) => ({
    name: products.name,
    category: products.category,
  }));
  return products;
}

function getPromotion(products) {
  // verifica se products pertence há alguma promoção
  const cartPromotion = products.reduce(
    (values, product) => (!values.includes(product.category)
      ? [...values, product.category] : values),
    [],
  );

  if (cartPromotion.length === 1) {
    return promotions[0];
  } if (cartPromotion.length === 2) {
    return promotions[1];
  } if (cartPromotion.length === 3) {
    return promotions[2];
  }
  return promotions[3];
}
function getContPrice(ids, productsList, promotion) {
  // filtra por id
  const productsById = productsList.filter(({ id }) => ids.includes(id));
  // retorna products por name e catogory e calcula preco e desconto
  return productsById.reduce(
    (cart, product) => {
      cart.products.push({ name: product.name, category: product.category });

      let price = product.regularPrice;
      cart.totalRegularPrice = price;
      let discount = 0;

      const pricePromotion = product.promotions.find((item) => item.looks.includes(promotion));

      if (pricePromotion) {
        discount = price - pricePromotion.price;
        price = pricePromotion.price;
      }

      cart.totalPrice += price;
      cart.discountValue += discount;

      return cart;
    }, {
      products: [],
      totalRegularPrice: 0,
      totalPrice: 0,
      discountValue: 0,
      discount: 0,
    },
  );
}

function getShoppingCart(ids, productsList) {
  const products = getProductsById(ids, productsList);
  const promotion = getPromotion(products);
  const build = getContPrice(ids, productsList, promotion);
  const discount = (build.discountValue * 100) / (build.totalPrice + build.discountValue);

  return {
    products,
    promotion,
    totalPrice: build.totalPrice.toFixed(2),
    discountValue: build.discountValue.toFixed(2),
    discount: `${discount.toFixed(2)}%`,

  };
}

module.exports = { getShoppingCart };
