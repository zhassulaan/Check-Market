import { useEffect, useReducer, createContext } from "react";
import { Reducer } from "./Reducer";

// loacl storage
const getLocalStorageProductPage = () => {
	if (typeof window !== "undefined") {
		let data = localStorage.getItem("page-item");
		if (data) {
			return JSON.parse(localStorage.getItem("page-item"));
		} else {
			return [];
		}
	}
}
const getLocalStorageSubscription = () => {
	if (typeof window !== "undefined") {
		let data = localStorage.getItem("subscription");
		if (data) {
			return JSON.parse(localStorage.getItem("subscription"));
		} else {
			return [];
		}
	}
}
const getLocalStorageMessage = () => {
	if (typeof window !== "undefined") {
		let data = localStorage.getItem("message");
		if (data) {
			return JSON.parse(localStorage.getItem("message"));
		} else {
			return [];
		}
	}
}
const getLocalStorageService = () => {
	if (typeof window !== "undefined") {
		let data = localStorage.getItem("service");
		if (data) {
			return JSON.parse(localStorage.getItem("service"));
		} else {
			return [];
		}
	}
}
const getLocalStorageProduct = () => {
	if (typeof window !== "undefined") {
		let data = localStorage.getItem("product");
		if (data) {
			return JSON.parse(localStorage.getItem("product"));
		} else {
			return [];
		}
	}
}
const getLocalStorageCart = () => {
	if (typeof window !== "undefined") {
		let data = localStorage.getItem("cart");
		if (data) {
			return JSON.parse(localStorage.getItem("cart"));
		} else {
			return [];
		}
	}
}
const getLocalStorageBasket = () => {
	if (typeof window !== "undefined") {
		let data = localStorage.getItem("basket");
		if (data) {
			return JSON.parse(localStorage.getItem("basket"));
		} else {
			return [];
		}
	}
}

// initial state
const initialState = {
	page: getLocalStorageProductPage(),
	subscription: getLocalStorageSubscription(),
	message: getLocalStorageMessage(),
	service: getLocalStorageService(),
	product: getLocalStorageProduct(),
	cart: getLocalStorageCart(),
	basket: getLocalStorageBasket()
};

// create context
const Context = createContext({});

function Provider({ children }) {
	const [state, dispatch] = useReducer(Reducer, initialState); // pass more reducers combineReducers(user, blogs, products)
  	const value = { state, dispatch };

	useEffect(() => {
		if (typeof window !== "undefined") {
			localStorage.setItem('page-item', JSON.stringify(state.page));
			localStorage.setItem('subscription', JSON.stringify(state.subscription));
			localStorage.setItem('message', JSON.stringify(state.message));
			localStorage.setItem('service', JSON.stringify(state.service));
			localStorage.setItem('product', JSON.stringify(state.product));
			localStorage.setItem('cart', JSON.stringify(state.cart));
			localStorage.setItem('basket', JSON.stringify(state.basket));
		}
	}, [state.page, state.subscription, state.message, state.service, state.product, state.cart, state.basket]);

	return (
		<Context.Provider value={value}>
			{ children }
		</Context.Provider>
	);
};

export { Context, Provider };