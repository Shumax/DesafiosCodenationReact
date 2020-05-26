export default function produtos(state = [], action) {
    switch (action.type) {
      case 'ADD_PRODUTO':
        return [ ...state, {
          id: Math.random(),
          text: action.text,
        }]
      default:
        return state;
    }
  }