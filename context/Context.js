import { useEffect, useReducer, createContext } from "react";
import { Reducer } from "./Reducer";

// loacl storage
const getLocalStorageSubscription = () => {
	if (typeof window !== "undefined") {
		let data = localStorage.getItem("subscription");
		if (data) {
			return JSON.parse(localStorage.getItem('subscription'));
		} else {
			return [];
		}
	}
}
const getLocalStorageMessage = () => {
	if (typeof window !== "undefined") {
		let data = localStorage.getItem("message");
		if (data) {
			return JSON.parse(localStorage.getItem('message'));
		} else {
			return [];
		}
	}
}

// initial state
const initialState = {
	subscription: getLocalStorageSubscription(),
	message: getLocalStorageMessage()
};

// create context
const Context = createContext({});

function Provider({ children }) {
	const [state, dispatch] = useReducer(Reducer, initialState); // pass more reducers combineReducers(user, blogs, products)
  	const value = { state, dispatch };

	useEffect(() => {
		if (typeof window !== "undefined") {
			localStorage.setItem('subscription', JSON.stringify(state.subscription));
			localStorage.setItem('message', JSON.stringify(state.message));
		}
	}, [state.subscription, state.message]);

	return (
		<Context.Provider value={value}>
			{ children }
		</Context.Provider>
	);
};

export { Context, Provider };