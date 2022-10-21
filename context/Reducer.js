export function Reducer(state, action) {
	switch (action.type) {
		case "SUBSCRIBE":
			return { ...state, subscription: [ ...state.subscription, action.payload] };
				
		case "SEND_MESSAGE":
			return { ...state, message: [ ...state.message, action.payload] };
		
		case "SAVE_PAGE":
			return { ...state, page: [action.payload] };
		
		case "SUBMIT_SERVICE_APPLICATION":
			return { ...state, service: [ ...state.service, action.payload] };
		
		case "SUBMIT_PRODUCT_APPLICATION":
			return { ...state, product: [ ...state.product, action.payload] };
	
		case "ADD_TO_CART":
			const inCart = state.basket.find(item => 
				item.product.id === action.payload.id) ?
            	true
          			: 
					false;

					
			if (inCart) {
				state.basket.map(item => 
					(item.product.id === action.payload.id) 
							?
						item.quantity += 0.5
							:
						item.quantity
				);
						
				return {
					...state,
					basket: [
						...state.basket,
					]
				};
			}
					 
			else
				return {
					...state,
					basket: [ 
						...state.basket, 
						{ 
							product: action.payload, 
							quantity: 1 
						}
					]
				};

		case "REMOVE_FROM_CART":
			return { 
				...state, 
				basket: state.basket.filter(item => 
					item.product.id !== action.payload.id
				)
			};

		case "INCREMENT_QUANTITY":
			state.cart.map(item => 
				(item.product.id === action.payload.id) ?
					item.quantity += 0.5
						:
					item.quantity
			)

			return {
				...state,
				basket: [
					...state.basket,
				]
			};
		
		case "DECREMENT_QUANTITY":
			state.cart.map(item => 
				(item.product.id === action.payload.id && item.quantity > 1) ?
					item.quantity -= 0.5
						:
					item.quantity
			)

			return {
				...state,
				basket: [
					...state.basket,
				]
			};

		default:
			return state;
	}
 }