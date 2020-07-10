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
                bagButton: false,
            }
        }
        case "HIDE_SEARCH": {
            return {
                ...state,
                searchButton: false,
            }
        }
        case "SHOW_BAG": {
            return {
                ...state,
                bagButton: true,
                searchButton: false,
            }
        }
        case "HIDE_BAG": {
            return {
                ...state,
                bagButton: false,
            }
        }
        default:
            return state;
    }
}

export { buttons };