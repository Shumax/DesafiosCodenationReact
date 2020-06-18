const INITIAL_STATE = {
  loading: true,
  error: null,
  products: []
};

const products = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'LOAD_PRODUCTS':
        return [ ...state, {
          loading: true,
          error: null,
        }]
      default:
        return state;
    }
  }

  export default products;