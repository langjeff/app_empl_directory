import axios from "axios";


export default {
  // gets books from api
  getEmployees: function () {
    return axios.get(
      "https://randomuser.me/api/?results=25&nat=us&inc=name,location,email,dob,phone,picture"
    );
  },
};
