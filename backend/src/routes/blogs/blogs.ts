import express from 'express';
import { UrlRoutes } from '../../common/routesTypes.js';

const mock: {
  posts: Array<{
    id: string;
    title: string;
    author: string;
    public: boolean;
  }>;
} = {
  posts: [
    {
      id: '1',
      title: 'firstPost',
      author: 'admin',
      public: true,
    },
    {
      id: '2',
      title: 'firstPost',
      author: 'admin',
      public: true,
    },
    {
      id: '3',
      title: 'firstPost',
      author: 'admin',
      public: true,
    },
    {
      id: '4',
      title: 'firstPost',
      author: 'admin',
      public: true,
    },
    {
      id: '5',
      title: 'firstPost',
      author: 'admin',
      public: true,
    },
    {
      id: '6',
      title: 'firstPost',
      author: 'admin',
      public: false,
    },
    {
      id: '7',
      title: 'firstPost',
      author: 'admin',
      public: false,
    },
    {
      id: '8',
      title: 'firstPost',
      author: 'admin',
      public: false,
    },
    {
      id: '9',
      title: 'firstPost',
      author: 'admin',
      public: false,
    },
    {
      id: '10',
      title: 'firstPost',
      author: 'admin',
      public: false,
    },
  ],
};

const blogsRoute = express.Router();

blogsRoute.get('/', (req, res) => {
  res.status(200).json({ title: 'hello' });
});

blogsRoute.get(UrlRoutes.getAllPublicPosts, (req, res) => {
  const publicPosts = mock.posts.filter((e) => e.public);
  res.status(200).json({ data: publicPosts });
});

export default blogsRoute;
