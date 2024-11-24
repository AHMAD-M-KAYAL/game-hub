import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2333e8207447444db40b397276a16bfc",
  },
});
