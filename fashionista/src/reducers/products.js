const INITIAL_STATE = {
  loading: true,
  error: "",
  products: [],
};

const products = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "LOAD_PRODUCTS": {
        return {
          ...state,
          loading: true,
          error: "",
        }
      }
      case "LOAD_PRODUCTS_SUCESS": {
        return {
          ...state,
          products: action.payload?.map((card, index) => {
            return {
              id:index,
              ...card,
            };
          }),
          loading: false
        }
      }
      case "LOAD_PRODUCTS_ERROR": {
        return {
          ...state,
          loading: false,
          error: action.error
        }
      }
      default:
        return state;
    }
  }

  export {products};