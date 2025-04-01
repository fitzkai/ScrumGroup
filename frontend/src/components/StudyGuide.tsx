import React, { useEffect, useState } from 'react';
import './StudyGuide.css';
import MenuIcon from '../assets/icons/MenuIcon';
import YouTubeEmbed from './YouTubeEmbed';
import { StudyGuide as StudyGuideType } from '../types/StudyGuide';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const StudyGuide: React.FC = () => {
  // State to store user responses
  const { GuideId } = useParams();
  const [studyGuide, setStudyGuide] = useState<StudyGuideType | null>(null); // Change undefined to null
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>();

  const [responses, setResponses] = useState({
    learned: '',
    mainTopic: '',
    differences: '',
    similarities: '',
    additionalNotes: '',
  });

  useEffect(() => {
    if (!GuideId) return; // Skip if GuideId is not available yet

    const fetchStudyGuide = async () => {
      try {
        const response = await fetch(
          `https://localhost:5000/Religion/AllStudyGuides/${GuideId}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch study guide');
        }
        const data: StudyGuideType = await response.json();
        setStudyGuide(data); // Set the fetched data into state
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message); // Set error message
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false); // Set loading to false after the request completes
      }
    };

    fetchStudyGuide();
  }, [GuideId]);

  useEffect(() => {
    console.log('Fetched study guide:', studyGuide); // Log the study guide to inspect the data
  }, [studyGuide]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  if (!studyGuide) {
    return <div>No study guide data available.</div>;
  }
  // Handle changes in text areas
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setStudyGuide((prevStudyGuide) => ({
      ...prevStudyGuide!,
      [name]: value,
    }));
  };

  // Handle submit button click
  const handleSubmit = () => {
    console.log('User Responses:', responses);
    alert('Your responses have been submitted!');

    // Reset responses after submission
    setStudyGuide({
      ...studyGuide,
      Response1: '',
      Response2: '',
      Response3: '',
      Response4: '',
      Response5: '',
    });

    // Optionally, remove stored responses from localStorage
    localStorage.removeItem('studyGuideResponses');
  };

  return (
    <div className="study-guide-container">
      <div className="status-bar">
        <div className="status-time"></div>
        <div className="status-icons">
          <div className="network-icons">{/* Status Bar Icons */}</div>
        </div>
      </div>

      <div className="content-container">
        <div className="menu-icon">
          <MenuIcon />
        </div>

        <h1 className="page-title">
          {studyGuide?.Religion?.religionName} Study Guide
        </h1>

        <div className="progress-bar-container">
          <div className="progress-bar">
            <div className="progress-dot"></div>
          </div>
        </div>

        <div className="video-container">
          <YouTubeEmbed url={studyGuide.VideoSrc!} />
        </div>

        {/* Input Fields with State Tracking */}
        <div className="input-container">
          <textarea
            name="Response1"
            placeholder="I learned..."
            className="text-input"
            value={studyGuide.Response1 || ''}
            onChange={handleChange}
          />
        </div>

        <div className="question-container">
          <h2 className="question-text">
            What was the main topic of this video?
          </h2>
        </div>
        <div className="input-container">
          <textarea
            name="Response2"
            placeholder="Write your answer..."
            className="text-input"
            value={studyGuide.Response2 || ''}
            onChange={handleChange}
          />
        </div>

        <div className="question-container">
          <h2 className="question-text">
            How does {studyGuide?.Religion?.religionName} differ from your
            religion?
          </h2>
        </div>
        <div className="input-container">
          <textarea
            name="Response3"
            placeholder="Write your answer..."
            className="text-input"
            value={studyGuide.Response3 || ''}
            onChange={handleChange}
          />
        </div>

        <div className="question-container">
          <h2 className="question-text">
            How is {studyGuide?.Religion?.religionName} similar to your
            religion?
          </h2>
        </div>
        <div className="input-container">
          <textarea
            name="Response4"
            placeholder="Write your answer..."
            className="text-input"
            value={studyGuide.Response4 || ''}
            onChange={handleChange}
          />
        </div>

        <div className="question-container">
          <h2 className="question-text">Additional Notes</h2>
        </div>
        <div className="input-container">
          <textarea
            name="Response5"
            placeholder="Write your answer..."
            className="text-input"
            value={studyGuide.Response5 || ''}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <div className="submit-container">
          <button className="submit-button" onClick={handleSubmit}>
            Submit to Notebook
          </button>
        </div>
      </div>

      <div className="bottom-bar">
        <div className="bottom-indicator"></div>
      </div>
    </div>
  );
};

export default StudyGuide;
