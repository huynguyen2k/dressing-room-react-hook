import { SELECT_ITEM } from "../constants/ActionType"

export const selectItemAction = item => {
	return {
		type: SELECT_ITEM,
		item,
	}
}
