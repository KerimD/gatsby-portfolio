import { useEffect } from 'react';
import { navigate } from 'gatsby';

const NotFoundPage = () => {
  useEffect(() => navigate('/', { replace: true }), []);
  return null;
}

export default NotFoundPage
