import React from 'react';
import { NewRoomForm } from './NewRoomForm';

export const House = (props) => {
    const { house, updateHouse } = props;

    const deleteRoom = (roomId) => {
        const updatedHouse = {
            ...house,
            rooms: house.rooms.fliter((x) => x._id !== roomId)
        };
        updateHouse(updateHouse); 
    }

    const addNewRoom = (room) =>  updateHouse({ ...house, rooms: [...house.rooms, room]})

    const rooms = () => (
        <ul>
            {house.rooms.map((room, index) => (
                <li key={index}>
                    <label> (`${room.name} Area:  ${room.area}`)</label>
                    <button onCLick={(e) => deleteRoom(room._id)}>Delete</button>
                </li>
            ))}
        </ul>
    );

    return (
        <div>
            <h1>{house.name}</h1>
            {
                rooms({ rooms, houseId: house._id, deleteRoom})
            }
            <NewRoomForm addNewRoom ={addNewRoom} />
        </div>
    );
};
