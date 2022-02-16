const baseUrl = "https://api.tvmaze.com";

const getAll = async () => {
  try {
    return await fetch(`${baseUrl}/shows`);
  } catch (error) {
    console.log(error);
  }
};

const getOne = async (showId) => {
  try {
    return await fetch(`${baseUrl}/shows/${showId}`);
  } catch (error) {
    console.log(error);
  }
};

const search = async (showName) => {
  try {
    return await fetch(`${baseUrl}/search/shows?q=${showName}`);
  } catch (error) {
    console.log(error);
  }
};

export default {
  getAll,
  getOne,
  search,
};
