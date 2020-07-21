const INITIAL_STATE = {
  loading: true,
  error: "",
	products: [],
	searchName: "",
	searchedProducts: [],
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
			case "SEARCH_PRODUCT": {
				return {
					...state,
					searchName: action.payload.searchName,
					searchedProducts: action.payload.searchedProducts,
				}
			}
      default:
        return state;
    }
  }

  export {products};