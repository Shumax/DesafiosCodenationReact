import React, { useState } from "react";

import Story from '../../components/Story';

import './Stories.scss';

const Stories = ({ stories, getUserHandler }) => {
  const [showStory, setShowStory] = useState(false);
  const [selectedStory, setSelectedStory] = useState({});
  const [selectedProfile, setSelectedProfile] = useState({});

  const storyById = (id) => stories.find(story => story.id === id);

  const handleStory = (story) => {
    const foundStory = storyById(story.id);
    const profileData = getUserHandler(story.userId);

    setSelectedProfile(profileData);
    setSelectedStory(foundStory);
    setShowStory(!showStory); 
  };

  return (
    <React.Fragment>
      <section className="stories" data-testid="stories">
        <div className="container">
          {stories.map((story, i) => {
            const profileData = getUserHandler(story.userId);
            return (
              <button 
                key={story.id}
                onClick={() => handleStory(story)}
                className={`user__thumb ${i === 0 && 'user__thumb--hasNew'}`}
              >
                <div className="user__thumb__wrapper">
                  {profileData?.avatar && (
                    <img src={profileData?.avatar} alt={profileData.name} />
                  )}
                </div>
              </button>
            )})
          }
        </div>
      </section>

      {showStory && (
        <Story 
          story={selectedStory}
          user={selectedProfile}
          handleClose={() => setShowStory(!showStory)}
        />
      )}
    </React.Fragment>
  );
};

export default Stories;
