/* is used to toggle the favorite status (true ↔ false) of a specific friend in a list.
   */

  export const toggleFavorite = (id, setFriends) => {
  setFriends(prev =>
    prev.map(friend =>
      friend.id === id ? { ...friend, favorite: !friend.favorite } : friend
    )
  );
};


