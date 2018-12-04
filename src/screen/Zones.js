import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import React from 'react';
import ZoneList from '../components/List/ZoneList'
import BestMatch from '../components/BestMatch/BestMatch'


const Zones = ({ data: { loading, error, zones } }) => {
    if (loading) {
        return <p>Loading</p>;
    } if (error) {
        return <p>Error</p>
    } else {
        return (
            <div className="list-container">
                <BestMatch zone={zones[0]} />
                <ZoneList zones={zones} />
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
