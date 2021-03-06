import React, { useState, useEffect } from 'react';

import Stories from '../../containers/Stories';
import Loading from '../../components/Loading';
import Posts from '../../containers/Posts';
import './FeedRoute.scss';

const FeedRoute = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [stories, setStories] = useState([]);
  const [usersById, setUsersById] = useState(0);

  const getUsersPosts = (postUserId) => users.find(user => postUserId === user.id);

  useEffect(() => {
    async function loadUsers(){
      await fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users')
        .then((response) => response.json())
        .then(data => setUsers(data))
        .catch(erro => {
          throw erro;
        });
    }
    console.log(loadUsers());
    loadUsers();
  }, []);

  useEffect(() => {
    async function loadStories(){
      await fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/stories')
        .then((response) => response.json())
        .then(data => {setStories(data)})
        .catch(erro => {
          throw erro;
        });
    }
    loadStories();
  }, [users]);

  useEffect(() => {
    async function loadUsersById(){
      await fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${users[usersById].id}/posts')
        .then((response) => response.json())
        .then(data => {
          setPosts([...posts, ...data]);
          setUsersById(usersById +1);
        })
        .catch(erro => {
          throw erro;
        });
    }
    console.log(loadUsersById());
    loadUsersById();
  });

  return (
    <div data-testid="feed-route">
      {
        <Stories
          stories={stories}
          getUserHandler={getUsersPosts}
        />
      }
      {users.length !== usersById ? (<Loading/>):(        
        <Posts
          posts={posts}
          getUserHandler={getUsersPosts}
        />)
      }
    </div>
  );
};

export default FeedRoute;
