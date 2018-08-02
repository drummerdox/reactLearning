import React from 'react';

export const Route = ({route, currentRoute, component: Component, changeRoute}) => {
      if (currentRoute === route) {
          return <Component changeRoute={changeRoute}/>
      }

      return null;
};
