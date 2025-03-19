import React from 'react';
import ReactPlayer from 'react-player';

interface YouTubeEmbedProps {
  url: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ url }) => {
  return <ReactPlayer url={url} controls />;
};

export default YouTubeEmbed;
