import React from 'react';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div className="textContainer__inner">
      <h3>People currently in the room:</h3>
      {users && users.length > 0 ? (
        <div className="activeContainer">
          {users.map(({ name }) => (
            <div key={name} className="activeItem">
              <img
                alt="online icon"
                className="onlineIcon"
                src="/icons/onlineIcon.png" // Make sure this path is correct or import the icon
              />
              <p>{name}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="noUsers">
          <h4>No users online</h4>
        </div>
      )}
    </div>
  </div>
);

export default TextContainer;
