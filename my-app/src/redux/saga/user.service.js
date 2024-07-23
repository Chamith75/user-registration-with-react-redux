import axios from "axios";

export function getUserListService() {
  let url = 'http://localhost:3004/UserList';
  return axios.get(url);

}



export function saveDataservice(userInput) {

  let id = Date.now();
  let url = 'http://localhost:3004/UserList';
  return axios.post(url, { ...userInput, id })


}

export function removeUserService(id) {

  let url = `http://localhost:3004/UserList/${id}`;
  axios.delete(url, { id })
}