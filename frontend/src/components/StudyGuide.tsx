import React, { useState } from 'react';
import './StudyGuide.css';
import MenuIcon from '../assets/icons/MenuIcon';
import YouTubeEmbed from './YouTubeEmbed';
import { useNavigate, useParams } from 'react-router-dom'; // ← added useParams

const StudyGuide: React.FC = () => {
  const navigate = useNavigate();
  const { guideId } = useParams(); // ← grab guideId from URL

  // State to store user responses
  const [responses, setResponses] = useState({
    learned: '',
    mainTopic: '',
    differences: '',
    similarities: '',
    additionalNotes: '',
  });

  // Handle changes in text areas
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setResponses({
      ...responses,
      [e.target.name]: e.target.value,
    });
  };

  // Handle submit button click
  const handleSubmit = async () => {
    console.log('Submit button clicked');
    console.log('Responses:', responses);
  
    try {
      const response = await fetch('https://localhost:5000/Religion/AllStudyGuides', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(responses),
      });
  
      console.log('Fetch complete, status:', response.status);
  
      if (response.ok) {
        const result = await response.json(); // If backend returns new guide info (optional)
        console.log('Server response:', result);
  
        alert('Your responses have been submitted!');
        setResponses({
          learned: '',
          mainTopic: '',
          differences: '',
          similarities: '',
          additionalNotes: '',
        });
        localStorage.removeItem('studyGuideResponses');
        navigate('/');
      } else {
        alert('Failed to submit. Please try again.');
        console.error('Submission error:', await response.text());
      }
    } catch (error) {
      alert('An error occurred while submitting.');
      console.error('Submission exception:', error);
    }
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
        <div
          className="menu-icon"
          onClick={() => navigate('/menu')}
          style={{ cursor: 'pointer' }}
        >
          <MenuIcon />
        </div>

        <h1 className="page-title">Protestant Study Guide</h1>

        <div className="progress-bar-container">
          <div className="progress-bar">
            <div className="progress-dot"></div>
          </div>
        </div>

        <div className="video-container">
          <YouTubeEmbed url="https://youtu.be/1o8oIELbNxE?si=4H44hui6b2sDIUA7" />
        </div>

        {/* Input Fields with State Tracking */}
        <div className="input-container">
          <textarea
            name="learned"
            placeholder="I learned..."
            className="text-input"
            value={responses.learned}
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
            name="mainTopic"
            placeholder="Write your answer..."
            className="text-input"
            value={responses.mainTopic}
            onChange={handleChange}
          />
        </div>

        <div className="question-container">
          <h2 className="question-text">
            How does Protestantism differ from your religion?
          </h2>
        </div>
        <div className="input-container">
          <textarea
            name="differences"
            placeholder="Write your answer..."
            className="text-input"
            value={responses.differences}
            onChange={handleChange}
          />
        </div>

        <div className="question-container">
          <h2 className="question-text">
            How is Protestantism similar to your religion?
          </h2>
        </div>
        <div className="input-container">
          <textarea
            name="similarities"
            placeholder="Write your answer..."
            className="text-input"
            value={responses.similarities}
            onChange={handleChange}
          />
        </div>

        <div className="question-container">
          <h2 className="question-text">Additional Notes</h2>
        </div>
        <div className="input-container">
          <textarea
            name="additionalNotes"
            placeholder="Write your answer..."
            className="text-input"
            value={responses.additionalNotes}
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