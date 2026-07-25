import React from 'react';
import { MILESTONES } from '../data/events';

const Timeline = () => {
  return (
    <section className="timeline-section" id="timeline">
      <div className="wrap" style={{ maxWidth: '640px' }}>
        <div className="section-head fade-in in-view">
          <h2 className="section-title">Schedule & Milestones</h2>
          <div className="rule"></div>
        </div>
        <div className="timeline" id="timelineList">
          {MILESTONES.map((m, index) => (
            <div key={index} className={`tl-item fade-in in-view ${m.tba ? 'tba' : ''}`}>
              <p className="tl-date">{m.date}</p>
              <h3 className="tl-title">{m.title}</h3>
              <p className="tl-detail">{m.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
