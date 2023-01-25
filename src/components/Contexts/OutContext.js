import axios from "axios";
import React, { createContext, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_CATEGORY, API_FAVORITES, API_FEEDBACK, API_PRODUCTS, API_REVIEWS } from "../../helper";

export const productContext = createContext();

const INIT_STATE = {
  products: [],
  pages: 0,
  oneProduct: {},
  categories: [],
  reviews: []
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload.results,
        pages: Math.ceil(action.payload.count / 5),
      };
    case "GET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "GET_ONE_PRODUCT":
      return { ...state, oneProduct: action.payload };
    case "GET_REVIEWS":
      return {
        ...state,
        reviews: action.payload,
        pages: Math.ceil(action.payload.count / 5),
      };
    default:
      return state;
  }
}

const OutContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const [error, setError] = useState([]);

  const navigate = useNavigate();

  async function getProducts() {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios(`${API_PRODUCTS}/${window.location.search}`, config);
      console.log(res);


      // navigate("/products")
      ;

      dispatch({
        type: "GET_PRODUCTS",
        payload: res.data,
      });
    } catch (e) {
      console.log(e);
    }
  }

  async function getCategories(title) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios(`${API_PRODUCTS}/category/`, config);

      dispatch({
        type: "GET_CATEGORIES",
        payload: res.data,
      });
      console.log(res);

    } catch (e) {
      // console.log(Object.values(e.response.data).flat(5));
      // setError(Object.values(e.response.data));
      setError([e.response.data.detail]);
      console.log([e.response.data]);

    }
  };
  async function addProducts(newProd) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios.post(`${API_PRODUCTS}/`, newProd, config);
      console.log(res.data);
      navigate("/studios");
    } catch (e) {
      console.log(e.response.data);
      setError(Object.values(e.response.data));
    }
  }

  async function toggleLike(id) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        }
      };



      const res = await axios(`${API_PRODUCTS}/${id}/get_like/`, config);
      getProducts();
    } catch (e) {
      console.log(e.response.data);
      setError(e.response.data);
    }
  }

  async function deleteProduct(id) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        }
      };

      const res = await axios.delete(`${API_PRODUCTS}/${id}/`, config);
      getProducts();
    } catch (e) {
      console.log(e.response.data);
      // setError(e.response.data);
    }
  }
  async function saveEditStudio(newProd, id) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        }
      };


      const res = await axios.patch(`${API_PRODUCTS}/${id}/`, newProd, config);
      getProducts();
    } catch (e) {
      console.log(e.response.data);
    }
  }

  // const saveEditProduct = async (newProduct, id) => {
  //   await axios.patch(`${API}/${id}`, newProduct);
  //   getProducts();
  // };
  async function getReviews() {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios(`${API_FEEDBACK}/review/`, config);
      console.log(res);



      dispatch({
        type: "GET_REVIEWS",
        payload: res.data,
      });
    } catch (e) {
      console.log(e);
    }
  }

  async function addReview(newReview) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios.post(`${API_FEEDBACK}/review/`, newReview, config);
      console.log(res.data);
      // navigate("/studios");
    } catch (e) {
      console.log([e.response.data]);
      setError([e.response.data]);
    }
  }


  async function getOneProduct(id) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios(`${API_PRODUCTS}/${id}/`, config);

      // navigate("/products")
      ;

      dispatch({
        type: "GET_ONE_PRODUCT",
        payload: res.data,
      });
    } catch (e) {
      console.log(e);
    }
  }

  let values = {
    products: state.products,
    reviews: state.reviews,
    pages: state.pages,
    categories: state.categories,
    oneProduct: state.oneProduct,
    getOneProduct,
    error,

    getCategories,
    saveEditStudio,
    addProducts,
    getProducts,
    toggleLike,
    deleteProduct,
    getReviews,
    addReview,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default OutContextProvider;
