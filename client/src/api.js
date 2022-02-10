const baseUrl = "https://api.tvmaze.com";

const getAll = async () => {
  try {
    return await fetch(`${baseUrl}/shows`);
  } catch (error) {
    console.log(error);
  }
};

export default {
  getAll,
};
