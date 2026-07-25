import React, { useEffect } from 'react';

const EventModal = ({ isOpen, onClose, event }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !event) return null;

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} id="eventModal" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-box" id="modalBox" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">×</button>
        <p className="ecat" id="mCat">{event.chess ? "Online Tournament" : "Independence Month Event"}</p>
        <h3 id="mTitle">{event.name}</h3>
        <p className="mdesc" id="mDesc">{event.description}</p>
        
        <a href={event.registerLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary mreg" id="mReg">
          {event.registerLabel}
        </a>

        <div className="modal-info">
          <p className="msec-label">Key Information</p>
          <div className="modal-info-grid" id="mInfoGrid">
            {event.info.map((item, index) => (
              <div key={index} className="irow">
                <span className="ilabel">{item.label}</span>
                <span className="ivalue">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="modal-timeline">
          <p className="msec-label">Timeline</p>
          <div id="mTimeline">
            {event.timeline.map((item, index) => (
              <div key={index} className="trow">
                <span className="tlabel">{item.label}</span>
                <span className="tvalue">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="modal-reward">
          <strong>Rewards</strong>
          <span id="mReward" dangerouslySetInnerHTML={{ __html: event.reward }}></span>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
