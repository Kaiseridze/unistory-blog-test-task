import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import rootReducer from "./reducers"
import { setLocalStorage } from "./localStorage"

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
)

store.subscribe(() => {
	setLocalStorage("post", store.getState().blogReducer)
})

export default store
