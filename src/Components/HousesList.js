import React from 'react';
import { House } from './House';
//watch  { houseApi }  change to {  HousesApi } if needed
import { HousesApi, houseApi } from '../rest/HousesApi.js';

export class HousesList extends React.Component {
    state = {
        //messing up right here it doesn't want me to use a = 
        houses: []
    };

     componentDidMount() {
        this.fetchHouses();
    };

     fetchHouses = async () => {
        const houses = await housesApi.get();
        this.setState({ houses });
    };

    updateHouse = async (updateHouse) => {
        await housesApi.put(updateHouse);
        this.fetchHouses();
    };
// guys video is working differently 
    render() {
        return (
            <div className ="house-list">
                {this.state.houses.map((house) => (
                    <House 
                        house={house}
                        key={house._id}
                        updateHouse={this.updateHouse}
                        />
                ))}
            </div>
        )
    }
}
