export function Reducer(state, action) {
	switch (action.type) {
		case "SUBSCRIBE":
			const inCart = state.subscription.find((item) => 
				item.email === action.payload.email)
          		?
            		true
          		: 
						false;
			if (inCart)
				return state;
			else
				return { ...state, subscription: [ ...state.subscription, action.payload] };
				
		case "SEND_MESSAGE":
				return { ...state, message: [ ...state.message, action.payload] };

		default:
			return state;
	}
 }