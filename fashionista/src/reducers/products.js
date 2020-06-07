export default function products(state = [], action) {
    switch (action.type) {
      case 'LIST_PRODUCTS':
        return [ ...state, {
          id: Math.random(),
          text: action.text,
        }]
      default:
        return state;
    }
  }