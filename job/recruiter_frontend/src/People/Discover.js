const Discover = (followers) => {
  const itemsPerPage = 4;
  const numberOfPages = followers.length / itemsPerPage;

  const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return followers.slice(start, start + itemsPerPage);
  });

  return newFollowers;
};

export default Discover;
