import React from "react";
import FriendItem from "./FriendItem";

const FriendList = ({ friends, onDelete, onToggleFavorite }) => {
  return (
    <div>
      {friends?.map((friend) => ( 
/* map takes each element (friend) from the array and returns a React element (<FriendItem />) for it.
This is how lists are dynamically rendered in React */
        <FriendItem
          key={friend.id}
          friend={friend}
          onDelete={onDelete}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
};

export default FriendList;
