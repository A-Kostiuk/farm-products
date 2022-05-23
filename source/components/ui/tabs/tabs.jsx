/* eslint-disable indent */
import React, { useState } from 'react';
import { Li } from '../../styled';
import { Content, Header, TabButton } from './style';

function Tabs({ tabsList = [], maxContentHeight }) {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <div>
      <Header>
        {tabsList.map((tab, index) => (
          <Li key={`tab${index * 10}`}>
            <TabButton
              $isSelect={currentTab === index}
              {...(currentTab === index
                ? { as: 'span' }
                : {
                    onClick: () => {
                      setCurrentTab(index);
                    },
                  })}
            >
              {tab.title}
            </TabButton>
          </Li>
        ))}
      </Header>
      <Content $maxContentHeight={maxContentHeight}>
        {tabsList[currentTab].content}
      </Content>
    </div>
  );
}

export default Tabs;
