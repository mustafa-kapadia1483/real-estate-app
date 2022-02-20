import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async url => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "bc961b5732msh6369302c166bb81p17e8fajsncbfc6e2abd26",
    },
  });
  return data;
};
