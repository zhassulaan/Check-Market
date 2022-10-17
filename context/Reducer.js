export function Reducer(state, action) {
	switch (action.type) {
		case "SUBSCRIBE":
			return { ...state, subscription: [ ...state.subscription, action.payload] };
				
		case "SEND_MESSAGE":
			return { ...state, message: [ ...state.message, action.payload] };

		default:
			return state;
	}
 }