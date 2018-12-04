import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import React from 'react';

const Sensor = ({ data: { loading, error, sensor } }) => {
  if (loading) {
    return <p>Loading</p>;
  } if (error) {
      console.log(error);
    return <p>Error</p>
  } else {
    return (
      <div>
        <p>{sensor.time}</p>
      </div>
    );
  }
}

export default graphql(gql`
  query sensor {
    sensor {
      time
    }
  }
`)(Sensor);