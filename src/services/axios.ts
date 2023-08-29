import _axios from "axios";

const baseURL: string = "https://api.api-ninjas.com";

const axios = _axios.create({
  baseURL,
  headers: {
    "X-Api-Key": "F2U6+STNFIPsKiA4MMVeAA==0F73FQQJyrUa71ML",
  },
});

export default axios;
