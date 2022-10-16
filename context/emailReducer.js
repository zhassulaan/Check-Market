export function Reducer(state, action) {
	switch (action.type) {
		case "SAVED":
			const inCart = state.email.find((item) => 
				item.email === action.payload.email)
          		?
            		true
          		: 
						false;
			if (inCart)
				return state;
			else
				return { ...state, email: [ ...state.email, action.payload] };
		default:
			return state;
	}
 }