import { makeAutoObservable } from "mobx";
import { apiGet, apiPostPut } from "../api/api_methods";

class UserStore {
  constructor() {
    makeAutoObservable(this);
  }
  error = null;
  user = {};

  setUser(user) {
    this.user = user;
  }

  setError(value) {
    this.error = value ?? null;
  }

  isAuthenticated = false;

  setAuthenticated(value) {
    this.isAuthenticated = value ?? false;
    sessionStorage.setItem("authenticated", this.isAuthenticated);
  }

  async signUpUser(user) {
    const response = await apiPostPut(user, "/signup", "POST");
    if (response.status === 200) {
      alert(response.body.msg);
      return true;
    } else {
      console.log(response.body.msg);
      return false;
    }
  }

  async loginUser(user) {
    const response = await apiPostPut(user, "/login", "POST");
    if (response.status === 200) {
      sessionStorage.setItem(
        "accesstoken",
        `Bearer ${response.body.accesstoken}`
      );
      sessionStorage.setItem(
        "refreshtoken",
        `Bearer ${response.body.refreshtoken}`
      );
      this.setUser(response?.body);
      return true;
    } else {
      this.setError(response.body.msg);
      return false;
    }
  }
}

export default UserStore;
