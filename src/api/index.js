import axios from 'axios'

const url = 'https://memories-n8p7.onrender.com/posts'

export const fetchPosts = () => axios.get(url)
export const createPost = (newPost) => axios.post(url, newPost)
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}` , updatedPost)
export const deletePost = (id) => axios.delete(`${url}/${id}`)
export const updateLike = (id) => axios.patch(`${url}/${id}/likePost`)