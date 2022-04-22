import React from "react"
import { useSelector } from "react-redux"

import EditWrapper from "../EditWrapper"
function EditBlog() {
	const storeData = useSelector((state) => state.blogReducer)
	const parsedData = Object.values(storeData) // Parse redux object to array for map function

	return (
		<>
			{parsedData.map(
				(pages) => <EditWrapper key={pages.id} {...pages} pageId={pages.id} />
			)}
		</>
	)
}

export default EditBlog
