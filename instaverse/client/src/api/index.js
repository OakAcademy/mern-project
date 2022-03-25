import axios from "axios";

const url = "http://localhost:5001/stories";

export const fetchStories = async () => axios.get(url);
export const createStory = async (story) => axios.post(url, story);
export const updateStory = async (id, story) => axios.patch(`${url}/${id}`, story);
export const deleteStory = async (id) => axios.delete(`${url}/${id}`);
export const likeStory = async (id) => axios.patch(`${url}/${id}/likeStory`);