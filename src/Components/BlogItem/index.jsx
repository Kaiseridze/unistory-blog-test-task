import React from "react"
import './BlogItem.css'
import { Link } from "react-router-dom"

function BlogItem({ header, text, id }) {
	// in there i made text slicer for avoid overfilling 
	return (
		<div className='main_block'>
			<h2>{header.length > 15 ? header.slice(0, 14) + "..." : header}</h2>
			<div className='main_content'>
				{text.length > 10 ? text.slice(0, 9) + "..." : text}
			</div>
			<Link to={`/edit/${id}`}> 
				<button className='main_btn'>Перейти</button>
			</Link>
		</div>
	)
}

export default BlogItem
