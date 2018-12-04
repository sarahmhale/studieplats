import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import React from 'react';

const Zone = ({ data: { loading, error, zone } }) => {
  if (loading) {
    return <p>Loading</p>;
  } if (error) {
      console.log(error);
    return <p>Error</p>
  } else {
    return (
      <div>
        <p>{zone.level}</p>
      </div>
    );
  }
}

export default graphql(gql`
  query sensor {
    zone {
      level
    }
  }
`)(Zone);