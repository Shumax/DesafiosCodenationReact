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
        case "SHOW_BAG": {
            return {
                ...state,
                bagButton: true,
                searchButton: false,
            }
        }
        case "HIDE_BUTTON": {
            return {
                ...state,
                searchButton: false,
                bagButton: false,
            }
        }
        default:
            return state;
    }
}

export { buttons };