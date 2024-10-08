import React from "react";
import UserStore from "./user_store";
import PostStore from "./post_store";

class RootStore {
  constructor() {
    this.UserStore = new UserStore(this);
    this.PostStore = new PostStore(this);
  }
}
const StoresContext = React.createContext(new RootStore());
export const useStores = () => React.useContext(StoresContext);
