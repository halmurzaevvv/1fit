import React, { createContext, useReducer, useState } from 'react';
import { useNavigate } from "react-router-dom"
import { API_CATEGORY, API_PRODUCTS } from '../../helper';

export const outContext = createContext();

const THEREIN_STATE = {
    halls: [],
    pages: 0,
    oneContent: {},
    categories: [],
};

function reducer (state = THEREIN_STATE, action) {
    switch (action.type) {
        case "GET_STUDIOS":
            return {...state, haals:action.payload.results, pages: Math.ceil(action.payload.count / 9),};
            case "GET_CATEGORIES":
                return {...state, categories: action.payload};
                default:
                    return state;
    }
}


const OutContext = ({ children }) => {
    const navigate = useNavigate();

    const [state, dispatch] = useReducer(reducer, THEREIN_STATE);
    const [erorr, setErorr] = useState([]);

    async function getStudios() {
        try{
            const token = JSON.parse(localStorage.getItem("token"));
            const Authorization = `Bearer ${token.access}`;
            const config = {
                headers: {
                    Authorization,
                },
            };

            const res = await axios(`${API_PRODUCTS}/${window.location.search}`, config);
            
            dispatch({
                type: "GET_STUDIOS",
                payload: res.data,
            });
        } catch (e) {
            console.log(e);
        }
    }

    async function getCategories() {
        try{
            const token = JSON.parse(localStorage.getItem("token"));
            const Authorization = `Bearer ${token.access}`;
            const config = {
                headers: {
                    Authorization,
                },
            };
            const res = await axios(`${API_CATEGORY}/list/`, config);

            dispatch({
                type: "GET_CATEGORIES",
                payload: res.data.results,
            });
        } catch (e) {
            console.log(e);
        }
    }

    async function addStudios(newStudio) {
        try{
            const token = JSON.parse(localStorage.getItem("token"));
            const Authorization = `Bearer ${token.access}`;
            const config = {
                headers: {
                    Authorization,
                },
            };

            const res = await axios.post(`${API_PRODUCTS}/`, newStudio, config);
            console.log(res.data);
            navigate("/products");
        } catch (e) {
            console.log(e.response.data);
            setErorr(e.response.data);
        }
    }

    async function deleteStudio() {
        try{
            const token = JSON.parse(localStorage.getItem("token"));
            const Authorization = `Bearer ${token.access}`;
            const config = {
                headers: {
                    Authorization,
                },
            };

            const res = await axios.delete(`${API_PRODUCTS}/${id}/`, config);
            getStudios();
        } catch (e) {
            console.log(e.response.data);
        }
    }
    return (
        <div>
            
        </div>
    );
};

export default OutContext;