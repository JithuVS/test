import axios from "axios";
import {getRepos} from './Fetch'
;
jest.mock("axios");

test("mock axios", async () => {
  const respo = {
    data: [
      { id: 1, name: "john" },
      { id: 2, name: "bravo" },
    ],
  };
  axios.get.mockResolvedValueOnce(respo);

  return getRepos('jithuVS').then(response => {
    expect(response).toEqual(respo.data);
  })
});


test("mock axios", async () => {
  const respo = {
    data: [
      { id: 1, name: "john" },
      { id: 2, name: "bravo" },
    ],
  };
  axios.get.mockResolvedValueOnce(respo);

  const response = await getRepos('jithuVS');
    expect(response).toEqual(respo.data);
});