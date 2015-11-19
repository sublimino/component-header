import React from 'react';
import Icon from '@economist/component-icon';
import Header from './';

export default (
  <div>
    <Header
      className="header--blog21003976"
      smallMode
      image={{
        src: `http://cdn.static-economist.com/sites/default/files/external/test-assets/democracy-in-america.svg`,
      }}
      flyTitle="Some type here"
      title="Blog name goes here"
      text="There are many reasons why sceptics might find fault with the 17 for
      a new world order, were enough for the good Lord."
      itemType="http://schema.org/Blog"
      itemProp="blog"
      link={{
        href: 'http://www.google.com',
        title: 'Clicke here and go somewhere',
      }}
    ></Header>
  </div>
);
