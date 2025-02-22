import { blogApi } from '@/common/api';

const fetchBlogs = async () => {
  try {
    const blogs = blogApi.getAllPosts;
    console.log('Fetched blogs:', blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
  }
};

fetchBlogs();
