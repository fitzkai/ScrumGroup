import React from 'react';

interface UserAvatarProps {
  username: string;
  imageUrl?: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ username, imageUrl }) => {
  // This is a placeholder component that would normally display a user avatar
  // In the original design, this was implemented with SVG backgrounds
  return (
    <div
      style={{
        width: '37px',
        height: '37px',
        borderRadius: '37px',
        backgroundColor: 'lightgray',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: imageUrl ? `url(${imageUrl})` : undefined,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      aria-label={`${username}'s avatar`}
    >
      {!imageUrl && username.charAt(0).toUpperCase()}
    </div>
  );
};

export default UserAvatar;
