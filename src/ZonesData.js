import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import React from 'react';
import ListItem from './components/ListItem/ListItem.js';
import BestMatch from './components/BestMatch/BestMatch'
import './index.css';

const Zones = ({ data: { loading, error, zones } }) => {
  if (loading) {
    return <p>Loading</p>;
  } if (error) {
    return <p>Error</p>
  } else {
    return (
      <div className="list-container">
        <BestMatch zone={zones[0]} />
        <div>
          {zones.map((zone, index) => {
            if (index === 0) {
              return <div key={index} />;
            } else {
              return <ListItem
                zone={zone}
                key={index}
                index={index}
              />;
            }
          })}
        </div>
      </div>
    );
  }
}

export default graphql(gql`
  query zones{
    zones {
      house,
      level,
      level,
    }
  }
  `
)(Zones);
