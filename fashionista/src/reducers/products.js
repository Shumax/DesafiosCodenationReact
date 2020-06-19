const INITIAL_STATE = {
  loading: true,
  error: "",
  products: []
};

const products = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'LOAD_PRODUCTS':
        return [ ...state, {
          loading: true,
          error: "",
        }]
      default:
        return state;
    }
  }

  export {products};