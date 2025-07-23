import React from 'react';
import { FaTrash,FaHeart } from 'react-icons/fa';
import './FriendItem.css'


const FriendItem = ({ friend, onDelete, onToggleFavorite }) => {  
  return (
    <div className='card'>
      <p><strong>{friend.name}</strong><br />is your friend</p>
      <div>
        <button
  className={`like${friend.favorite ? ' favorited' : ''}`}
  onClick={() => onToggleFavorite(friend.id)}
>
  <FaHeart />
</button>
        &nbsp;
        <button className='del' onClick={() => onDelete(friend.id)}><FaTrash/></button>
      </div>
    </div>
  );
};

export default FriendItem;