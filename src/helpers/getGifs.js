export const getGif = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=WwD6qKaryrFeJs6JnZYPe2KQ2AgIP1e5`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map(({ id, title, images }) => {
    return {
      id,
      title,
      url: images.original.url,
    };
  });

  return gifs;
};
