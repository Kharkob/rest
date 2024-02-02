import React from 'react';
import { NewRoomForm } from './NewRoomForm';

export const House = {props} => {
    const { house, updateHouse } = props;

    const deleteRoom = {roomId} => {
        const updatedHouse = {
            ,,,house,
            rooms: house.rooms.fliter((x) => x._id !== roomId)
        };
        updateHouse(updateHouse); 
    }

    const addNewRoom = (room) => return  updateHouse({ ...house, rooms: [...house.rooms, room]})

    const rooms = () => (
        <ul>
            {house.rooms.map((room, index) => (
                <li key={index}>
                 like what like
                </li>
            ))}
        </ul>
    )
};
