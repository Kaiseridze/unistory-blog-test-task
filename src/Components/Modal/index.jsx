import React, { useState } from "react"
import { createBlogPost } from "../../redux/actions"
import { useDispatch } from "react-redux"
import "./Modal.css"

function Modal({ id, modal, setModal }) {
	
	const [headerValue, setHeaderValue] = useState("")
	const [textValue, setTextValue] = useState("")

	const dispatch = useDispatch()

	const headerListener = (e) => {
		setHeaderValue(e.target.value)
	}
	const textListener = (e) => {
		setTextValue(e.target.value)
	}

	const makePost = () => {
		if (headerValue && textValue) {
			dispatch(
				createBlogPost({
					[id]: {
						id: id,
						header: headerValue,
						text: textValue,
					},
				})
			)
			setModal(!modal)
		} else {
			alert("Введите текст!")
		}
	}
	return (
		<div className='modal_container'>
			<div className='modal_inner'>
				<input
					onChange={headerListener}
					placeholder='Введите заголовок'
					className='modal_text'
					type='text'
				/>
				<textarea
					onChange={textListener}
					placeholder='Ваш пост'
					name='blog_text'
					id=''
					cols='30'
					rows='10'></textarea>
			</div>
			<div className='modal_btns'>
				<button onClick={() => setModal(!modal)} className='modal_btn'>
					Отмена
				</button>
				<button onClick={makePost} className='modal_btn'>
					Сохранить
				</button>
			</div>
		</div>
	)
}

export default Modal
