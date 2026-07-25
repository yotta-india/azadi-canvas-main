import React, { useState } from 'react';
import { EVENTS } from '../data/events';
import EventModal from './EventModal';

const Events = () => {
  const [selectedEventId, setSelectedEventId] = useState(null);

  const openModal = (id) => {
    setSelectedEventId(id);
  };

  const closeModal = () => {
    setSelectedEventId(null);
  };

  const selectedEvent = EVENTS.find(e => e.id === selectedEventId);

  return (
    <>
      <section className="events" id="events">
        <div className="wrap">
          <div className="section-head fade-in in-view">
            <p className="eyebrow" id="eventCount">{EVENTS.length} Events · August 2026</p>
            <h2 className="section-title">Independence Month Events</h2>
            <div className="rule"></div>
          </div>
          <div className="events-grid" id="eventsGrid">
            {EVENTS.map((event) => {
              const firstTimelineValue = event.timeline[0] ? event.timeline[0].value : "To Be Announced";
              const firstTimelineLabel = event.timeline[0] ? event.timeline[0].label : "Date";

              return (
                <div 
                  key={event.id}
                  className={`event-card fade-in in-view ${event.featured ? 'featured' : ''} ${event.chess ? 'chess' : ''}`}
                  onClick={() => openModal(event.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openModal(event.id);
                    }
                  }}
                  tabIndex="0"
                  role="button"
                >
                  <span className="pin"></span>
                  {event.featured && <span className="ribbon">Featured</span>}
                  <p className="ecat">{event.chess ? "Online Tournament" : "Independence Month Event"}</p>
                  <h3>{event.name}</h3>
                  <p className="esnippet">{event.description}</p>
                  <div className="ekey">
                    <span className="label">{firstTimelineLabel}</span>
                    <span className="value">{firstTimelineValue}</span>
                  </div>
                  <p className="expand-hint">View full details →</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <EventModal isOpen={!!selectedEventId} onClose={closeModal} event={selectedEvent} />
    </>
  );
};

export default Events;
