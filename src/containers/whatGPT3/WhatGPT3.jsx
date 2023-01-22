import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text=" This type of builder can save time and effort for individuals and businesses looking to create a website quickly and easily, and can also offer a wider range of design options and customization than traditional website builders." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text=" Input your business needs and easily tailor your needs to yoour design and vision." />
      <Feature title="Knowledgebase" text="With unlimited ranges of knowledge and access due to the constantly learning and amd growing GPT-3 technology." />
      <Feature title="Education" text="Contribute to our open-source technology and join the revolution of open source learning. Contact us for more information." />
    </div>
  </div>
);

export default WhatGPT3;
