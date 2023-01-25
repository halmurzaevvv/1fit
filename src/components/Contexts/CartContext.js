import React, { createContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

export const cartContext = createContext();

const INIT_STATE ={ 
    favorite: JSON.parse(localStorage.getItem("favorite")),
};



function reducer(state = INIT_STATE, action) {
    switch (action.type) {
        case "GET_FAVORITE":
            return {...state, favorite: action.payload};
            default:
                console.log("");
    }
}

const CartContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    const navigate = useNavigate();
    
    const getFavorite = () => {
        let favorite = JSON.parse(localStorage.getItem("favorite"));

        if (!favorite) {
            localStorage.setItem(
                "favorite",
                JSON.stringify({ products: []})
            );
            favorite = {
                products: [],
            };
            dispatch({
                type: "GET_FAVORITE",
                payload: favorite,
            });
        }
    };

    const addStudioToFav = (product) => {
        let favorite = JSON.parse(localStorage.getItem("favorite"));

        if (!favorite) {
            favorite = {
                products: [],
            };
        }

        let newProd = {
            item: product,
            count: 1,
        };

        let productToFind = favorite.products.filter(
            (elem) => elem.item.id === product.id
        );

        if (productToFind.length === 0) {
            favorite.products.push(newProd);
        } else {
            favorite.products = favorite.products.filter(
                (elem) => elem.item.id !== product.id
            );
        }

        // favorite.products.push(newProd);
        localStorage.setItem("favorite", JSON.stringify(favorite));

        navigate("/favorite")

        dispatch({
            type: "GET_FAVORITE",
            payload: favorite,
        });
    };

    function checkProductInFavorite(id) {
        let favorite = JSON.parse(localStorage.getItem("favorite"));

        if (favorite) {
            let newFav = favorite.products.filter((elem) => elem.item.id === id);
            return newFav.length > 0 ? true : false;
        } else {
            favorite = {
                product: [],
            };
        }
    }

    function deleteFavorite(id) {
        let favorite = JSON.parse(localStorage.getItem("favorite"));

        favorite.products = favorite.products.filter((elem) => elem.item.id !== id);

        localStorage.setItem("favorite", JSON.stringify(favorite));
        getFavorite();
        dispatch({
            type: "GET_FAVORITE",
            payload: favorite,
        });
    }
    return (
        <cartContext.Provider
        value={{
            getFavorite,
            addStudioToFav,
            deleteFavorite,
            checkProductInFavorite,
            favorite: state.favorite,
        }}>
            {children}
        </cartContext.Provider>
    );
};

export default CartContextProvider;