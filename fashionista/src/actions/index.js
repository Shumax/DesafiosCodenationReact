import api from "../services/api";

export function loadProducts() {
    return (dispatch) => {
        dispatch({ type: "LOAD_PRODUCTS" });
        api().then(
            (response) => 
              dispatch({
                type: "LOAD_PRODUCTS_SUCESS",
                payload: response.data
            }),
            (error) => 
              dispatch({
                type: "LOAD_PRODUCTS_ERROR",
                error: error.messages || "Error Fetch API!"
            }));
    };
};