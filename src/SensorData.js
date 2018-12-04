import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import React from 'react';

const Sensor = ({ data: { loading, error, zone } }) => {
  if (loading) {
    return <p>Loading</p>;
  } if (error) {
    console.log(error);
    return <p>Error</p>
  } else {
    console.log(zone)
    return (
      <div>
        <p>{zone.level}</p>
      </div>
    );
  }
}

export default graphql(gql`
  query zone($id: String){
    zone(id: $id) {
      level
    }
  }
`, {
    options: ({ id }) => ({ variables: { id: id } }),
  }
)(Sensor);
