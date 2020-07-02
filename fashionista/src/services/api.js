import axios from "axios";

const baseURL = "http://localhost:3000/products";

export default async function fetchAPI(){
  return await axios.get(baseURL);
}

/*
export default async function fetchAPI(){
    await fetch('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog')
      
      .then(data => (data))
      .catch(erro => {
        throw erro;
      });
}
import axios from  "axios";

const api = axios.create({
    baseURL: 'https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog'
});

export default async function fetchAPI() {
    console.log((axios.get(api)));
    return await axios.get(api);
    
};*/