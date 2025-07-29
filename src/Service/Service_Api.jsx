import axios from "./Service";

const options = {
    headers :{
        Authorization : 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmI0Y2I2MTE2YjVmNDk4OThiNDFjMjBlMzVkM2E3NiIsIm5iZiI6MTc1MzMzMjU1MS40MjU5OTk5LCJzdWIiOiI2ODgxYmI0NzAzZGZkMWYxMDIxNmIxZDEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.qqhQ8dQMQ8VdFigS7O5sBjKsxBpb7QjAe4cEuex1KPw'
    },
};


const Api_Service = {
  getData: async (url) => {
    const data = await axios.get(url, options);
    return data;
  },
};
export default Api_Service;
