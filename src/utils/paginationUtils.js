export const paginateFriends = (friends, currentPage, friendsPerPage) => {
  const startIndex = (currentPage - 1) * friendsPerPage;
  const endIndex = startIndex + friendsPerPage;
  const currentFriends = friends.slice(startIndex, endIndex); /*extract a portion of an array without modifying the original*/
  return { currentFriends };
};

export const getTotalPages = (totalItems, itemsPerPage) => {
  return Math.ceil(totalItems / itemsPerPage);
};
