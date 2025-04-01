'use client';
import React, { useEffect, useState } from 'react';
import styles from './DiscussionBoard.module.css';
import StatusBar from './StatusBar';
import Header from './Header';
import SearchBar from './SearchBar';
import FilterTags from './FilterTags';
import DiscussionPost from './DiscussionPost';
import BottomIndicator from './BottomIndicator';
import { DiscussionItem } from '../types/DiscussionItem';
import NewDiscussionItemForm from './NewDiscussionItemForm';
import { fetchDiscussionItems } from '../api/DiscussionsAPI';
import { useNavigate } from 'react-router-dom';
// Extend DiscussionItem to include username
interface DiscussionPostItem extends DiscussionItem {
  username: string;
}
const DiscussionBoard: React.FC = () => {
  const [discussionPosts, setDiscussionPosts] = useState<DiscussionPostItem[]>(
    []
  );
  const [users, setUsers] = useState<{ [key: number]: string }>({}); // Map userId to username
  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch discussions
        const discussionResponse = await fetch(
          `https://localhost:5000/Religion/AllDiscussions`
        );
        const discussionData = await discussionResponse.json();
        // Ensure discussionData is an array
        const discussionPosts = Array.isArray(discussionData)
          ? discussionData
          : [];
        // Fetch users
        const usersResponse = await fetch(
          `https://localhost:5000/Religion/AllUsers`
        );
        const usersData = await usersResponse.json();
        // Map userId to username
        const userMap: { [key: number]: string } = {};
        usersData.forEach((user: { userId: number; username: string }) => {
          userMap[user.userId] = user.username;
        });
        // Map discussionPosts to include username
        const postsWithUsername = discussionPosts.map(
          (post: DiscussionItem) => ({
            ...post,
            username: userMap[post.userId] || 'Unknown', // Assign 'Unknown' if no username is found
          })
        );
        setDiscussionPosts(postsWithUsername); // Set the state with posts that have the username
      } catch (error) {
        console.error('Error fetching data:', error);
        setDiscussionPosts([]); // Clear posts if there's an error
      }
    };
    fetchData();
  }, []);
  const filterTags = ['popular', 'recent', 'trending', 'Catholicism'];
  const navigate = useNavigate();
  const handleBackClick = () => {
    console.log('Navigate back');
    // Check if there's history to go back to
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/'); // Navigate to home or another fallback page if no history
    }
  };
  return (
    <div>
      {showForm && (
        <NewDiscussionItemForm
          onSuccess={() => {
            setShowForm(false);
            fetchDiscussionItems().then((data) =>
              setDiscussionPosts(data.DiscussionItems)
            );
          }}
          onCancel={() => setShowForm(false)}
        />
      )}
      <main className={styles.container}>
        <StatusBar />
        <section className={styles.mainContent}>
          <Header title="Discussion Board" onBackClick={handleBackClick} />
          <SearchBar />
          <FilterTags tags={filterTags} />
          <div className={styles.postsContainer}>
            {discussionPosts.length === 0 ? (
              <p>No discussions available.</p>
            ) : (
              discussionPosts.map((post) => (
                <DiscussionPost
                  key={post.discussionId} // Ensure unique key
                  username={post.username} // Use the mapped username
                  content={post.response}
                  timePosted={post.timePosted}
                />
              ))
            )}
          </div>
        </section>
        <BottomIndicator />
      </main>
    </div>
  );
};
export default DiscussionBoard;
