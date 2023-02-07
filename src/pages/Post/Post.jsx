import { useEffect, useState } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { RequestHandler } from '../../components';
import { PATHS } from '../../constants';
import { postApi } from '../../services/api';
import { getFormattedDate } from '../../utils';

export const Post = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [postData, setPostData] = useState({});

  const [isPostLoading, setIsPostLoading] = useState(true);

  useEffect(() => {
    getPostResponse();
  }, []);

  const getPostResponse = async () => {
    try {
      setIsPostLoading(true);
      const postResponse = await postApi.getPost(id);
      setPostData(postResponse.data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsPostLoading(false);
    }
  };

  const handleDeletePost = async () => {
    const deletePostResponse = await postApi.deletePost(id);
    if (deletePostResponse?.status === 204) {
      setPostData({});
      navigate(PATHS.posts, { replace: true });
      toast.success('Post deleted successful!');
    }
  };

  console.log(postData?.created_at);
  return (
    <RequestHandler isLoading={isPostLoading}>
      <Card style={{ width: '30rem' }}>
        <Card.Img
          variant='top'
          src='https://wondersholidays.com/wp-content/uploads/2019/09/kyiv.jpg'
        />
        <Card.Body>
          <Card.Title>{postData?.title}</Card.Title>
          <Card.Text>{postData?.content}</Card.Text>
        </Card.Body>
        <ListGroup className='list-group-flush'>
          <ListGroup.Item>{`Views: ${postData?.views}`}</ListGroup.Item>
          <ListGroup.Item>{`Created at: ${getFormattedDate(
            postData?.created_at,
          )}`}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <div className='d-flex justify-content-around'>
            <Button disabled>Edit post</Button>
            <Button variant='danger' onClick={handleDeletePost}>
              Delete post
            </Button>
          </div>
        </Card.Body>
      </Card>
    </RequestHandler>
  );
};
