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

const getAsset = (coin) => {
  return fetch(`https://api.coincap.io/v2/assets/${coin}`)
  .then(res => res.json())
  .then(res => res.data)
}

const getAssetHistory = (coin) =>{

  const now = new Date()
  const end = now.getTime()
  now.setDate(now.getDate() - 1)
  const start = now.getTime()

  return fetch(`https://api.coincap.io/v2/assets/${coin}/history?interval=h1&start=${start}&end=${end}`)
  .then(res => res.json())
  .then(res => res.data)
}

export default {
  getAssets,
  getAsset,
  getAssetHistory
};
