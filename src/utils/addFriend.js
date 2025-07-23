export const addFriend = ({ newFriend, setFriends, setNewFriend, setCurrentPage, setIsClicked, setError }) => {
  if (newFriend.trim() === '') {
    setError(true);
    return;
  }

  const newEntry = {
    id: Date.now(),
    name: newFriend,
    favorite: false,
  };

  setFriends(prev => [...prev, newEntry]);
  setNewFriend('');
  setCurrentPage(1);
  setIsClicked(true);
  setError(false);
  setTimeout(() => setIsClicked(false), 150);
};
