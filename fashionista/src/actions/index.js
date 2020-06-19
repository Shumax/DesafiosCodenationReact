import api from "../services/api";

export const loadProducts = () => {
    return (dispatch) => {
        dispatch({type: "LOAD_PRODUCTS"});
        api().then(
            (response) => 
              dispatch({
                payload: response.data
            }),
            (error) => 
              dispatch({
                error: error.messages || "Error Fetch API!"
            }));
    };
};