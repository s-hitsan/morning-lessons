import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://70.34.201.18:8080/',
});

export const postApi = {
  async getPosts() {
    return await instance.get('posts');
  },
  async deletePost(postId) {
    return await instance.delete(`posts/${postId}`);
  },
  async addPost(post) {
    return await instance.post('posts', post);
  },
};
