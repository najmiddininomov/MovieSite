import axios from "./Service";

const options = {
    headers :{
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    },
};


const Api_Service = {
  getData: async (url) => {
    const data = await axios.get(url, options);
    return data;
  },
};
export default Api_Service;
