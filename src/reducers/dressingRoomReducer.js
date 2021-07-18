import { SELECT_ITEM } from "../constants/ActionType"

const initialState = {
	model: {
		topclothes: "./assets/images/clothes/topcloth5.png",
		botclothes: "./assets/images/clothes/botcloth4.png",
		shoes: "./assets/images/shoes/shoes2.png",
		handbags: "./assets/images/handbags/handbag2.png",
		necklaces: "./assets/images/necklaces/necklace3.png",
		hairstyle: "./assets/images/hairstyle/hairstyle3.png",
		background: "./assets/images/background/background1.jpg",
	},
}

const dressingRoomReducer = (state = initialState, action) => {
	switch (action.type) {
		case SELECT_ITEM: {
			const newModel = { ...state.model }
			newModel[action.item.type] = action.item.image

			return {
				...state,
				model: newModel,
			}
		}

		default:
			return state
	}
}

export default dressingRoomReducer
