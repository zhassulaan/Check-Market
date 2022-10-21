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

// initial state
const initialState = {
	page: getLocalStorageProductPage(),
};

// create context
const pageContext = createContext({});

function Provider({ children }) {
	const [state, dispatch] = useReducer(Reducer, initialState); // pass more reducers combineReducers(user, blogs, products)
  	const value = { state, dispatch };

	useEffect(() => {
		if (typeof window !== "undefined") {
			localStorage.setItem('page-item', JSON.stringify(state.page));
		}
	}, [state.page]);

	return (
		<pageContext.Provider value={value}>
			{ children }
		</pageContext.Provider>
	);
};

export { pageContext, Provider };