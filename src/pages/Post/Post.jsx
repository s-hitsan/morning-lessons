import { useParams } from 'react-router-dom';

export const Post = () => {
  const params = useParams();

  console.log(params);
  return <div>some post</div>;
};
