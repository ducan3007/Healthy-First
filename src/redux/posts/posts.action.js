import * as api from "../api/api";
import { setAlert } from "../alert/alert.action";
export const getPosts = () => async(dispatch) => {
    try {
        const { data } = await api.fetch();
        dispatch({ type: "FETCH_POSTS", payload: data });
    } catch (error) {
        console.log(error.message);
    }
};
export const createPost = (newPost) => async(dispatch) => {
    try {
        const { data } = await api.createPost(newPost);

        dispatch({ type: "CREATE", payload: data });
        dispatch(getPosts());
        dispatch(setAlert('Tạo bài viết thành công','success'))
      } catch (error) {
        console.log(error);
        dispatch(setAlert(error?.response.data.message,'error'))
    }
};
export const updatePost = (id, post) => async(dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);

        dispatch({ type: "UPDATE", payload: data });
        dispatch(getPosts());
    } catch (error) {
        console.log(error);
        dispatch(setAlert(error?.response.data.message,'error'))
    }
};
export const deletePost = (id) => async(dispatch) => {
    try {
        const { data } = await api.deletePost(id);

        dispatch({ type: "DELETE", payload: data });
        dispatch(getPosts());
    } catch (error) {
        console.log(error);
    }
};
export const likePost = (id) => async(dispatch) => {
    try {
        const { data } = await api.likePost(id);

        dispatch({ type: "LIKE", payload: data });
        dispatch(getPosts());
    } catch (error) {
        console.log(error);
    }
};