import React from "react"
import BlogItem from "./Components/BlogItem"
import "./index.css"
import Modal from "./Components/Modal"
import { useState } from "react"
import { useSelector } from "react-redux"


function Main() {
	const [modal, setModal] = useState(false) // state for modal window
	const blogId = Math.random().toString(36).substring(2, 9) // Create id for redux store elements
	const storeData = useSelector((state) => state.blogReducer)
	const parsedData = Object.values(storeData)
	return (
		<>
			{" "}
			<header className='header'>
				<h1>Блог</h1>
			</header>
			<div className='container'>
				{parsedData.map((item) => (
					<BlogItem
						key={item.id}
						id={item.id}
						header={item.header}
						text={item.text}
					/>
				))}
				<button onClick={() => setModal(!modal)} className='add_more_btn'>
					+Добавить
				</button>
				{modal && <Modal modal={modal} setModal={setModal} id={blogId} />}
			</div>
		</>
	)
}

export default Main
