import React from 'react';
import styles from './InputDesign.module.css';
import { FeatureLink } from './FeatureLink';

interface ReligionCardProps {
  religionId: number;
  name: string;
  overview: string;
}

export const ReligionCard: React.FC<ReligionCardProps> = ({
  religionId,
  name,
  overview,
}) => {
  // Determine which div class to use based on the religion name
  const getCardClass = () => {
    switch (name) {
      case 'Catholicism':
        return styles.div9;
      case 'Protestant':
        return styles.div25;
      case 'Hinduism':
        return styles.div41;
      default:
        return styles.div9;
    }
  };

  // Get the appropriate header class based on religion name
  const getHeaderClass = () => {
    switch (name) {
      case 'Catholicism':
        return styles.div10;
      case 'Protestant':
        return styles.div26;
      case 'Hinduism':
        return styles.div42;
      default:
        return styles.div10;
    }
  };

  // Get the appropriate name class based on religion name
  const getNameClass = () => {
    switch (name) {
      case 'Catholicism':
        return styles.div11;
      case 'Protestant':
        return styles.div27;
      case 'Hinduism':
        return styles.div43;
      default:
        return styles.div11;
    }
  };

  // Get the appropriate content container class based on religion name
  const getContentClass = () => {
    switch (name) {
      case 'Catholicism':
        return styles.div12;
      case 'Protestant':
        return styles.div28;
      case 'Hinduism':
        return styles.div44;
      default:
        return styles.div12;
    }
  };

  // Get the appropriate overview container class based on religion name
  const getOverviewContainerClass = () => {
    switch (name) {
      case 'Catholicism':
        return styles.div13;
      case 'Protestant':
        return styles.div29;
      case 'Hinduism':
        return styles.div45;
      default:
        return styles.div13;
    }
  };

  // Get the appropriate overview title class based on religion name
  const getOverviewTitleClass = () => {
    switch (name) {
      case 'Catholicism':
        return styles.div14;
      case 'Protestant':
        return styles.div30;
      case 'Hinduism':
        return styles.div46;
      default:
        return styles.div14;
    }
  };

  // Get the appropriate overview text class based on religion name
  const getOverviewTextClass = () => {
    switch (name) {
      case 'Catholicism':
        return styles.div15;
      case 'Protestant':
        return styles.div31;
      case 'Hinduism':
        return styles.div47;
      default:
        return styles.div15;
    }
  };

  // Get the appropriate links container class based on religion name
  const getLinksContainerClass = () => {
    switch (name) {
      case 'Catholicism':
        return styles.div16;
      case 'Protestant':
        return styles.div32;
      case 'Hinduism':
        return styles.div48;
      default:
        return styles.div16;
    }
  };

  // Get the appropriate external resources container class based on religion name
  const getExternalResourcesClass = () => {
    switch (name) {
      case 'Catholicism':
        return styles.div23;
      case 'Protestant':
        return styles.div39;
      case 'Hinduism':
        return styles.div55;
      default:
        return styles.div23;
    }
  };

  // Get the appropriate external resources text class based on religion name
  const getExternalResourcesTextClass = () => {
    switch (name) {
      case 'Catholicism':
        return styles.div24;
      case 'Protestant':
        return styles.div40;
      case 'Hinduism':
        return styles.div56;
      default:
        return styles.div24;
    }
  };

  return (
    <article className={getCardClass()}>
      <header className={getHeaderClass()}>
        <StarIcon />
        <h2 className={getNameClass()}>{name}</h2>
      </header>

      <div className={getContentClass()}>
        <div className={getOverviewContainerClass()}>
          <h3 className={getOverviewTitleClass()}>Overview</h3>
          <p className={getOverviewTextClass()}>{overview}</p>
        </div>

        <div className={getLinksContainerClass()}>
          <FeatureLink
            title="Study Guide"
            religionName={name}
            featureType="study"
            destination={`/StudyGuide/${religionId}`}
          />
          <FeatureLink
            title="Similarities & Differences"
            religionName={name}
            featureType="similarities"
            destination="/SimAndDiff"
          />
          <FeatureLink
            title="Discussion Board"
            religionName={name}
            featureType="discussion"
            destination="/discussion"
          />
        </div>
      </div>
      <button className="external_resources menu-button">
        <div className={getExternalResourcesClass()}>
          <ExternalLinkIcon />
          <span className={getExternalResourcesTextClass()}>
            External Resources
          </span>
        </div>
      </button>
    </article>
  );
};

const StarIcon: React.FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.825 22L7.45 14.975L2 10.25L9.2 9.625L12 3L14.8 9.625L22 10.25L16.55 14.975L18.175 22L12 18.275L5.825 22Z"
      fill="#1D1B20"
    />
  </svg>
);

const ExternalLinkIcon: React.FC = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_62_257)">
      <path
        d="M16.5 11.9167V17.4167C16.5 17.9029 16.3068 18.3692 15.963 18.713C15.6192 19.0568 15.1529 19.25 14.6667 19.25H4.58333C4.0971 19.25 3.63079 19.0568 3.28697 18.713C2.94315 18.3692 2.75 17.9029 2.75 17.4167V7.33333C2.75 6.8471 2.94315 6.38079 3.28697 6.03697C3.63079 5.69315 4.0971 5.5 4.58333 5.5H10.0833M13.75 2.75H19.25M19.25 2.75V8.25M19.25 2.75L9.16667 12.8333"
        stroke="#1E1E1E"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_62_257">
        <rect width="22" height="22" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
