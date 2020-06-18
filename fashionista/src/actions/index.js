export const loadProducts = () => {
    return (dispatch) => {
        dispatch({type: "LOAD_PRODUCTS"});
        fetch('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog')
        .then((response) => dispatch({payload: response.data}))
        .catch(erro => {
          throw erro;
        });
    };
};