import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Events from './components/Events'
import Guidelines from './components/Guidelines'
import Timeline from './components/Timeline'
import Partners from './components/Partners'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const targets = document.querySelectorAll(".fade-in, .event-card, .tl-item");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting){
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    targets.forEach(t => observer.observe(t));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Intro />
      <Events />
      <Guidelines />
      <Timeline />
      <Partners />
      <Footer />
    </>
  )
}

export default App
