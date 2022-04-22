import { omit } from "lodash"
import { getLocalStorage } from "../localStorage"
import {
	CREATE_BLOG_POST,
	EDIT_BLOG_POST,
	REMOVE_BLOG_POST,
} from "../constants"

const initialState = getLocalStorage('post')

const blogReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_BLOG_POST:
			return {
				...state,
				...action.payload,
			}
		case EDIT_BLOG_POST:
			return {
				...state,
				...action.payload,
			}
		case REMOVE_BLOG_POST:
			return omit(state, [action.payload])
		default:
			return state
	}
}

export default blogReducer
