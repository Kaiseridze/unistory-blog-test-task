import { Routes, Route } from "react-router-dom"
import EditBlog from './Components/EditBlog'
import Main from "./Main"
// Init App and Routes for routing
function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/edit/:id' element={<EditBlog />} />
			</Routes>
		</>
	)
}

export default App
