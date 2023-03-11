import axios from "axios";

const searchImages = async(term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID O3rjKk5HJYfD7pdXBHyncf2L7yEDMzNe54VC9CkoZqg",
    },
    params: {
        query: term
    },
  });
  return response.data.results;
};

export default searchImages;