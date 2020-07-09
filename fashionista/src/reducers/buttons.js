const INITIAL_STATE = {
    searchButton: false,
    bagButton: false
}

const buttons = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SHOW_SEARCH": {
            return {
                ...state,
                searchButton: true,
            }
        }
        case "SHOW_BAG": {
            return {
                ...state,
                bagButton: true,
            }
        }
        default:
            return state;
    }
}

export { buttons };