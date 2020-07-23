import api from "../services/api";

export const loadProducts = () => {
    return (dispatch) => {
        dispatch({ type: "LOAD_PRODUCTS" });
         api().then(
            (response) => 
            dispatch ({
                type: "LOAD_PRODUCTS_SUCESS",
                payload: response.data
            }),
            (error) =>
            dispatch({
                type: "LOAD_PRODUCTS_ERROR",
                error: error.messages || "Unexpected Error!"
            })
        );         
    };
};
export const handleSearch = () => {
    return (dispatch) => {
        dispatch({ type: "SHOW_SEARCH" });
    };
};
export const handleBag = () => {
    return (dispatch) => {
        dispatch({ type: "SHOW_BAG" });
    };
};
export const handleCancealment = () => { 
    return (dispatch) => { 
        dispatch({ type: "HIDE_BUTTON" });
     };
 };
 export const listProducts = (event, products) => {
	 const searchName = event.target.value || "";
	 console.log(products);
	 
	 return (dispatch) => {
		 if (searchName != "") {
			 dispatch({ 
				 type: "SEARCH_PRODUCT", 
				 payload: {
					 searchName: searchName,
					 searchedProducts: products.filter(
						findProduct =>  findProduct.name.toLowerCase()
						.includes(searchName.toLowerCase()))
				 }
			});
		 }else {
			 dispatch({
				type: "SEARCH_PRODUCT",
				payload: {
					searchName: "",
					searchedProducts: []
				}
			 });
		 }
	 };
 };