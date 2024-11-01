import styles from './Feed.module.css';
import { useEffect, useState } from 'react';
import type { Blog } from '../../types/blogs';
import customFetch from '../../utils/customFetch';
import { UrlRoutes } from '../../types/routes';
import { assertsBlogArray } from '../../utils/typeAsserts';

const Feed = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    // const controller = new AbortController();
    setIsLoading(true);
    customFetch(UrlRoutes.getAllPublicPosts, {
      method: 'GET',
      //   signal: controller.signal,
    })
      .then((res) => {
        assertsBlogArray(res);
        setBlogs(res.data);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setIsLoading(false);
      });

    // return () => {
    //   controller.abort();
    // };
  }, []);

  return isLoading ? (
    <p>Загрузка...</p>
  ) : (
    <ul>
      {blogs.map((blog) => {
        return (
          <li key={blog.id}>
            Автор: {blog.author}
            Тема: {blog.title}
          </li>
        );
      })}
    </ul>
  );
};
export default Feed;
