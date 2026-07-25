import React from 'react';
import { PARTNERS } from '../data/events';

const Partners = () => {
  return (
    <section className="partners" id="partners">
      <div className="wrap">
        <div className="section-head fade-in in-view" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Community Partners</h2>
          <div className="rule" style={{ margin: '16px auto 0' }}></div>
        </div>
        <div className="partners-grid" id="partnersGrid">
          {PARTNERS.map((p, index) => (
            <div key={index} className="partner-box fade-in in-view">
              <span className="logo-placeholder">Logo</span>
              <span className="pname">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
