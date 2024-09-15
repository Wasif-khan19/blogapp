import { useEffect, useState } from 'react';
import appwriteService from "../../appwrite/config";
import Container from '../container/Container';
import PostCard from '../ui/PostCard';
import Hero from './Hero';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPost().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div className="">
      <Hero />
      <Container className="py-8">
        {posts.length === 0 ? (
          <div className="text-center">
            <p className="">No posts found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {posts.map((post) => (
              <PostCard key={post.$id} {...post} />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}

export default Home;