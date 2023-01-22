import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'AI Generated Website builders.',
    text: 'Simply fill in your requiremnts and design preferrences, and let us do the rest.',
  },
  {
    title: 'Quick and efficient software.',
    text: 'With the latest technology and keeping up with the latest AI coding trends.',
  },
  {
    title: 'Expert Services for Hire',
    text: 'Find it too hard to do on your own? No worries, we have a team on standby to help you accoplish your vision.',
  },
  {
    title: 'Responsive and Comprehensive Design Templates',
    text: 'Built by our team of experts and aimed to cover a wide variety of business needs and tailored to you.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
