import {
	CREATE_BLOG_POST,
	EDIT_BLOG_POST,
	REMOVE_BLOG_POST,
} from "../constants"

export const createBlogPost = (post) => ({
	type: CREATE_BLOG_POST,
	payload: post,
})

export const editBlogPost = (postItem) => ({
	type: EDIT_BLOG_POST,
	payload: postItem,
})
export const removeBlogPost = (postId) => ({
	type: REMOVE_BLOG_POST,
	payload: postId,
})
