import React, { useState } from "react"
import "./EditPage.css"
import { removeBlogPost, editBlogPost } from "../../redux/actions"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"

function EditWrapper({ header, text, pageId }) {
	const { id } = useParams() // blogId listener
	const [headerValue, setHeaderValue] = useState("")
	const [textValue, setTextValue] = useState("")
	const dispatch = useDispatch()
	const onRemove = () => {
		if (window.confirm("Вы действительно хотите удалить пост?")) {
			dispatch(removeBlogPost(pageId))
      }
	}

	const headerListener = (e) => {
		setHeaderValue(e.target.value)
	}

	const textListener = (e) => {
		setTextValue(e.target.value)
	} 
	const onEdit = () => {
		dispatch(
			editBlogPost({
				[pageId]: {
					id: pageId,
					header: headerValue || header,
					text: textValue || text,
				},
			})
		)
	}
	return (
		<>
			{id === pageId && (
				<div className='edit_container'>
					<Link to='/'>
						<button className='back_btn--blue'>Назад</button>
					</Link>
					<h1>Запись: "{headerValue ? headerValue : header}"</h1>
					<input
						defaultValue={header}
						onChange={headerListener}
						className='edit_input'
						type='text'
					/>
					<textarea
						onChange={textListener}
						defaultValue={text}
						name=''
						id=''
						cols='30'
						rows='30'></textarea>
					<Link to='/'>
						<div className='edit_btns'>
							<button onClick={onRemove} className='edit_btn--red'>
								Удалить
							</button>
							<button onClick={onEdit} className='edit_btn--blue'>
								Сохранить
							</button>
						</div>
					</Link>
				</div>
			)}
		</>
	)
}

export default EditWrapper
