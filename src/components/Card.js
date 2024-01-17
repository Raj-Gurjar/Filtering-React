import React from 'react';


export default function Card({ videoData }) {

  return (
    <div>

      <div className="card-cntnr">

        <div key={videoData.id} className="card">
          <h4>{videoData.title}</h4>
          <p>{videoData.description}</p>
          <small>ID: {videoData.id}</small>
        </div>

      </div>
    </div>
  );
}
