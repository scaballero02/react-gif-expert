export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Rw7sE7ffRkxIOStu9cE9M0V3Zpkuh5Bv&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));

    return gifs;
};