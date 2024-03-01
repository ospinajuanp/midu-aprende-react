import { useState } from "react";

const initialState = {
    nameState:[] // variable name with state initialization
}

const useInitialState = () => {
	const [state, setState] = useState(initialState);

    // example addState
	const addToNameState = (payload) => {
		setState({
			...state,
			nameState: [...state.cart, payload]
		});
	};
	


	return {
		state, // always return the state
		addToNameState // example addState
	}
}

export default useInitialState;