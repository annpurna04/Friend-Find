export const filterAndSortFriends = (friends, search) => {
  return friends
    .filter(friend =>
      friend.name.toLowerCase().includes(search.toLowerCase()) /*check if substring exist inside string */
    )
    .sort((a, b) => { /* sort an array of friends*/
      if (a.favorite && !b.favorite) return -1;
      if (!a.favorite && b.favorite) return 1;
      return a.name.localeCompare(b.name); /* compare two string*/
    });
};
