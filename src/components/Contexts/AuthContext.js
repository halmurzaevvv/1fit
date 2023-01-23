import { Alert } from "@mui/material";
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_AUTH } from "../../helper";

export const authContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const register = async (formData) => {
        try {
            const res = await axios.post(`${API_AUTH}/register/`, formData);
            console.log(res);
            alert(`На вашу почту отправленна ссылка с подтверждением.`);
            navigate("/login");
        } catch (e) {
            console.log(e);
            setError([e.response.data.detail]);
            console.log([e.response.data]);
            // console.log(error);
        }
    };

    const login = async (formData, email) => {
        try {
            const res = await axios.post(`${API_AUTH}/login/`, formData);
            console.log(res.data);

            localStorage.setItem("token", JSON.stringify(res.data));
            localStorage.setItem("username", email);

            setUser(email);
            navigate("/");
        } catch (e) {
            console.log(e);
            setError([e.response.data.detail]);
            console.log([e.response.data]);
            // console.log(error);
        }
    };

    const checkAuth = async () => {
        let token = JSON.parse(localStorage.getItem("token"));

        try {
            const Auth = `Bearer ${token.access}`;

            let res = await axios.post(`${API_AUTH}/refresh/`, {
                refresh: token.refresh,
            });

            localStorage.setItem(
                "token",
                JSON.stringify({ refresh: token.refresh, access: res.data.access })
            );
            let userName = localStorage.getItem("username");
            setUser(userName);
        } catch (e) {
            console.log(e);
            setError([e.response.data.detail]);

        }
    };

    const forgot_password = async (formData, forgot_password) => {
        try {
            const res = await axios.post(`${API_AUTH}/forgot_password/`, formData);
            console.log(res);
            alert(`Если существует учетная запись, привязанная к этому электронному адресу, то в ближайшее время на него будет отправлено сообщение с секретным кодом для сброса пароля.`);
            //  <Alert severity="info">
            //     Если существует учетная запись, привязанная к этому электронному адресу, то в ближайшее время на него будет отправлено сообщение с секретным кодом для сброса пароля.
            // </Alert>;
            navigate("/forgotPasswordComplete");
        } catch (e) {
            console.log(e);
            setError([e.response.data.detail]);
            console.log([e.response.data]);
            // console.log(error);
        }
    };

    const forgot_password_complete = async (formData) => {
        try {
            const res = await axios.post(`${API_AUTH}/forgot_password_complete/`, formData);
            console.log(res);
            navigate("/login");
        } catch (e) {
            console.log(e);
            setError([e.response.data.detail]);
            console.log([e.response.data]);
            // console.log(error);
        }
    };

    function logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        setUser("");
        navigate("/login");
    }

    useEffect(() => {
        if (localStorage.getItem("token")) {
            checkAuth();
        }
    }, []);

    let value = {
        user,
        error,

        forgot_password,
        forgot_password_complete,
        login,
        register,
        logout,
        setUser
    };
    return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
