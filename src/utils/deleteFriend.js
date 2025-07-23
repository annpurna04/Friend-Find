/* is used to delete a friend from the list based on their unique id.
   */

  export const deleteFriend = (id, setFriends) => {
  setFriends(prev => prev.filter(friend => friend.id !== id));
};
