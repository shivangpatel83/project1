import React, { useState } from 'react';
import '../images'

function Tab({ title, imageSrc, paragraph }) {
  return (
    <div>
      <img src={imageSrc} alt={title} />
      <h2>{title}</h2>
      <p>{paragraph}</p>
    </div>
  );
}

function Tabs() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const tabs = [
    {
      title: 'Tab1',
      imageSrc: 'buisnessPlanning.jpg',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ac velit quis bibendum. Donec ullamcorper eros a malesuada tincidunt. Duis ullamcorper odio sit amet nisl auctor vehicula.',
    },
    {
      title: 'Tab2',
      imageSrc: 'https://via.placeholder.com/150',
      paragraph:
        'Praesent finibus lectus in magna tristique, nec tincidunt magna venenatis. Vestibulum pulvinar pharetra elit, vel rutrum leo sollicitudin in. Suspendisse et lorem eros. Integer at dapibus ipsum.',
    },
    {
      title: 'Tab3',
      imageSrc: 'https://via.placeholder.com/150',
      paragraph:
        'Nullam eleifend bibendum turpis, quis tempor eros dignissim in. Sed volutpat laoreet tellus eu maximus. Curabitur non magna non nisl scelerisque interdum in et orci. Donec efficitur justo in metus vehicula, vitae gravida massa pulvinar.',
    },
  ];

  return (
    <div>
      <div className="tab-buttons">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={index + 1 === activeTab ? 'active' : ''}
            onClick={() => handleTabClick(index + 1)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs.map((tab, index) =>
          index + 1 === activeTab ? (
            <Tab
              key={index}
              title={tab.title}
              imageSrc={tab.imageSrc}
              paragraph={tab.paragraph}
            />
          ) : null
        )}
      </div>
    </div>
  );
}

export default Tabs;