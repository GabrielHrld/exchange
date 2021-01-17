const url = "https://api.coincap.io/v2/assets?limit=20";

const getAssets = () => {
  return fetch(`${url}`)
    .then((res) => res.json())
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log("request failed", error);
    });
};

export default {
  getAssets,
};
