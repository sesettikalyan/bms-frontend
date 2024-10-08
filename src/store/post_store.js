import { makeAutoObservable } from "mobx";
import { apiDelete, apiGet, apiPostPut } from "../api/api_methods";

class PostStore {
  constructor() {
    makeAutoObservable(this);
  }

  posts = [];
  post = {};
  comments = [];

  setComments(comments) {
    this.comments = comments;
  }

  setPost(post) {
    this.post = post;
  }

  setPosts(posts) {
    this.posts = posts;
  }

  async createPost(body) {
    const response = await apiPostPut(body, "/create", "POST");
    if (response.status === 200) {
      alert(response?.body?.msg);
      return true;
    } else {
      alert("failed to create");
      return false;
    }
  }

  async getPosts(category) {
    const response = await apiGet(`/posts?category=${category ?? ""}`);
    if (response.status === 200) {
      console.log(response?.body?.data);
      this.setPosts(response?.body?.data);
      return true;
    } else {
      alert("failed to fetch");
      return false;
    }
  }

  async getPost(id) {
    const response = await apiGet(`/post/${id}`);
    if (response.status === 200) {
      console.log(response?.body?.data);
      this.setPost(response?.body?.data);
      return true;
    } else {
      alert("failed to fetch");
      return false;
    }
  }

  async updatePost(id, body) {
    const response = await apiPostPut(body, `/update/${id}`, "PUT");
    if (response.status === 200) {
      alert(response?.body?.msg);
      return true;
    } else {
      alert(response?.body?.msg);
      return false;
    }
  }

  async deletePost(id) {
    const response = await apiDelete(`/posts/${id}`);
    if (response.status === 200) {
      console.log(response?.body?.msg);
      return true;
    } else {
      alert(response?.body?.msg);
      return false;
    }
  }

  async newComment(body) {
    const response = await apiPostPut(body, "/comment/new", "POST");
    if (response.status === 200) {
      alert(response?.body?.msg);
      return true;
    } else {
      alert(response?.body?.msg);
      return false;
    }
  }

  async getAllComments(id) {
    const response = await apiGet(`/comments/${id}`);
    if (response.status === 200) {
      console.log(response?.body?.data);
      this.setComments(response?.body?.data);
      return true;
    } else {
      alert(response?.body?.msg);
      return false;
    }
  }

  async deleteComment(id) {
    const response = await apiDelete(`/delete-comment/${id}`);
    if (response.status === 200) {
      console.log(response?.body?.msg);
      return true;
    } else {
      alert(response?.body?.msg);
      return false;
    }
  }
}

export default PostStore;
