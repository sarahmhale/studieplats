import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import React from 'react';
import ZoneList from '../components/List/ZoneList'


const Zones = ({ data: { loading, error, zones } }) => {
    if (loading) {
        return <p>Loading</p>;
    } if (error) {
        return <p>Error</p>
    } else {
        return (
            <div>
                <ZoneList zones={zones} />
            </div>
        );
    }
}

export default graphql(gql`
  query zones{
    zones {
      house,
      floor,
      level,
    }
  }
  `
)(Zones);
