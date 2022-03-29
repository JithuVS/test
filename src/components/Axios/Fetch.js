import axios from "axios";

export const getRepos = async  (username) => {
  const url = `https://api.github.com/users/${username}/repos?sort=updated`;

  const data = await axios.get(url).then((response) => {
    return response.data;
  });
  return data;
};