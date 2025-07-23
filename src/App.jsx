/*import React, { useState } from 'react';
import FriendList from './FriendList';
import { FaUserFriends,FaUserPlus,FaSearch } from 'react-icons/fa';
import './App.css'


function App() {
  const [friends, setFriends] = useState([
    { id: 1, name: 'Shivangi Sharma', favorite: true },
    { id: 2, name: 'Rahul Gupta', favorite: false },
    { id: 3, name: 'Akash Singh', favorite: false },
  ]);
  const [search, setSearch] = useState('');
  const [newFriend, setNewFriend] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(false);


  const friendsPerPage = 4;
  /*  it's a function meant to add a new friend to a list, with validation and structure.
 */
/* const handleAdd = () => {
  if (newFriend.trim() === '') {
    setError(true);
    return;
  } */
/* If the input is valid, a new friend is created as an object
 */ /*  const newEntry = {
    id: Date.now(),
    name: newFriend,
    favorite: false,
  };

  setFriends([...friends, newEntry]);
  setNewFriend('');
  setCurrentPage(1);
  setIsClicked(true);
  setError(false); // reset error
  setTimeout(() => setIsClicked(false), 150);
  
}; */
/* is used to delete a friend from the list based on their unique id.
 */

/*  const handleDelete = (id) => {
    setFriends(friends.filter(friend => friend.id !== id));
  }; */
/* is used to toggle the favorite status (true ↔ false) of a specific friend in a list.
 */

/*  const toggleFavorite = (id) => {
    setFriends(
      friends.map(friend =>
        friend.id === id ? { ...friend, favorite: !friend.favorite } : friend,
      )
    )
  } */
/*    filters the friends array based on whether the friend's name matches the search input
 */ /* const filteredFriends = friends
    .filter(friend =>
      friend.name.toLowerCase().includes(search.toLowerCase())
  )
  
  .sort((a, b) => {
    if (a.favorite && !b.favorite) return -1;
    if (!a.favorite && b.favorite) return 1;
    return a.name.localeCompare(b.name); 
  }); */
/*   To display only a portion of filteredFriends on the current page — based on how many you want per page (friendsPerPage).
 */
/* const totalPages = Math.ceil(filteredFriends.length / friendsPerPage);
  const startIndex = (currentPage - 1) * friendsPerPage;
  const endIndex = startIndex + friendsPerPage;
  const currentFriends = filteredFriends.slice(startIndex, endIndex);
  
  return (
    <div className='container'>
      <div className='header'>
      <h2><FaUserFriends size={22} color="white" /> Friends List</h2>
      <p>Manage your friend connections</p>
    </div>
    <br />  
  <div className="content-wrapper">
    
<div className='inputGroup'>
<input
  type="text"
  placeholder="  Enter your friend's name"
  value={newFriend}
  onChange={(e) => {
    setNewFriend(e.target.value);
    if (error) setError(false); // reset error on typing
  }}
  className={`friend-input ${error ? 'input-error' : ''}`}
/>

        <button onClick={handleAdd} style={{
          outline: isClicked ? `2px solid #2563eb`: `2px solid #ffffff`, 
          outlineOffset: '2px',}}>
  <FaUserPlus />
        &nbsp;Add</button>
      </div>
  {error && (
    <p className="error-message">Please enter a friend's name</p>
  )}      
      <div className="search-wrapper">
  <FaSearch className="search-icon" />
  <input
    className="searchInput"
    type="text"
    placeholder="Search friends..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
</div>

    <FriendList
      friends={currentFriends}
      onDelete={handleDelete}
      onToggleFavorite={toggleFavorite}
    />
 
 {totalPages > 1 && (
  <div className="pagination">
    <button
      disabled={currentPage === 1}
      onClick={() => setCurrentPage(prev => prev - 1)}
    >
      &lt;
    </button>

    {Array.from({ length: totalPages }, (_, i) => (
      <button
        key={i + 1}
        className={currentPage === i + 1 ? "active" : ""}
        onClick={() => setCurrentPage(i + 1)}
      >
        {i + 1}
      </button>
    ))}

    <button
      disabled={currentPage === totalPages}
      onClick={() => setCurrentPage(prev => prev + 1)}
    >
      &gt;
    </button>
  </div>
)}
</div>
 </div>
  );
}

export default App; */

import React, { useState } from "react";
import AddButton from "./components/AddButton";
import Pagination from "./components/Pagination";
import FriendList from "./components/FriendList";

import { FaUserFriends, FaSearch } from "react-icons/fa";
import "./App.css";

import { addFriend } from "./utils/addFriend";
import { deleteFriend } from "./utils/deleteFriend";
import { toggleFavorite } from "./utils/toggleFavorite";
import { filterAndSortFriends } from "./utils/filterAndSortFriends";
import { paginateFriends, getTotalPages } from "./utils/paginationUtils";

function App() {
  const [friends, setFriends] = useState([
    { id: 1, name: "Shivangi Sharma", favorite: true },
    { id: 2, name: "Rahul Gupta", favorite: false },
    { id: 3, name: "Akash Singh", favorite: false },
  ]);
  const [search, setSearch] = useState("");
  const [newFriend, setNewFriend] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(false);

  const friendsPerPage = 4;
  const filteredFriends = filterAndSortFriends(friends, search);
  const totalPages = getTotalPages(filteredFriends.length, friendsPerPage);
  const { currentFriends } = paginateFriends(
    filteredFriends,
    currentPage,
    friendsPerPage
  );

  return (
    <div className="container">
      <div className="header">
        <h2>
          <FaUserFriends size={22} color="white" /> Friends List
        </h2>
        <p>Manage your friend connections</p>
      </div>

      <div className="content-wrapper">
        <div className="inputGroup">
          <input
            type="text"
            placeholder="  Enter your friend's name"
            value={newFriend}
            onChange={(e) => {
              setNewFriend(e.target.value);
              if (error) setError(false);
            }}
            className={`friend-input ${error ? "input-error" : ""}`}
          />
          <AddButton
            onClick={() =>
              addFriend({
                newFriend,
                setFriends,
                setNewFriend,
                setCurrentPage,
                setIsClicked,
                setError,
              })
            }
            isClicked={isClicked}
          />
        </div>
{/*         use shortcut- circuit evaluation */}        
{error && <p className="error-message">Please enter a friend's name</p>}

        <div className="search-wrapper">
          <FaSearch className="search-icon" />
          <input
            className="searchInput"
            type="text"
            placeholder="Search friends..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <FriendList
          friends={currentFriends}
          onDelete={(id) => deleteFriend(id, setFriends)}
          onToggleFavorite={(id) => toggleFavorite(id, setFriends)}
        />

        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default App;
