import { useState, useEffect, useReducer, createContext } from "react";
import { Reducer } from "./emailReducer";

// loacl storage
const getLocalStorage = () => {
	if (typeof window !== "undefined") {
		let email = localStorage.getItem("email-items");
		if (email) {
			return JSON.parse(localStorage.getItem('email-items'));
		} else {
			return [];
		}
	}
}

// initial state
const initialState = {
	email: getLocalStorage(),
};

// create context
const Context = createContext({});

function Provider({ children }) {
	const [state, dispatch] = useReducer(Reducer, initialState); // pass more reducers combineReducers(user, blogs, products)
  	const value = { state, dispatch };

	useEffect(() => {
		if (typeof window !== "undefined") {
			localStorage.setItem('email-items', JSON.stringify(state.email));
		}
	}, [state.email]);

	return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, Provider };