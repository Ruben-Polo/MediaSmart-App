import axios from "axios";

export default class MembersApi{
  constructor() {
    this.service = axios
  .create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
  })
  }

  allMembers() {
    return this.service
    .get('/')
    .then(response => {console.log(response, "hola")
    return response.data})
    .catch(err => console.log(err))
  }

  oneMember(id) {
    return this.service
    .get('/one/${id}')
    .then(response => {console.log(response, "hola")
    return response.data})
    .catch(err => console.log(err))
  }
}
