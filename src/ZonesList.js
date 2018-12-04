import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import React from 'react';
import ListItem from './components/ListItem/ListItem.js';
import './index.css';

const Sensor = ({ data: { loading, error, zones } }) => {
  if (loading) {
    return <p>Loading</p>;
  } if (error) {
    console.log(error);
    return <p>Error</p>
  } else {
    console.log(zones)
    return (
      <div className="list-container">  
        {zones.map((zone, index) => {
          return <ListItem zone={zone} index={index}/>;
        })}
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
)(Sensor);
