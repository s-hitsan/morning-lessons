import { Component } from 'react';

import { postApi } from '../../services/api';

export class Posts extends Component {
  state = { postsData: {}, isLoading: false };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const posts = localStorage.getItem('postsData');
    const postsResponse = posts ? JSON.parse(posts) : await await postApi.getPosts();

    const postsData = posts ? postsResponse : postsResponse?.data;

    localStorage.setItem('postsData', JSON.stringify(postsData));
    this.setState({ postsData: postsData, isLoading: false });
  }

  render() {
    const { postsData, isLoading } = this.state;
    return (
      <>
        {isLoading ? (
          <p>is Loading....</p>
        ) : (
          <p>{` total items: ${postsData?.total_items}`}</p>
        )}
      </>
    );
  }
}
