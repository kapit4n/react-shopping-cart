
export default class LoginProxy {
  
  login = function(login, password) {
    if (login == password) {
      return Promise.resolve("You are logged");
    } else {
      return Promise.reject("You are not logged");
    }
  }

  logout = function(token) {
    if (token) {
      return Promise.resolve("Logout");
    } else {
      return Promise.reject("Error");
    }
  }


}
