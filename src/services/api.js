import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://70.34.201.18:8080/',
});

export const postApi = {
  async getPosts() {
    return await instance.get('posts');
  },
};
