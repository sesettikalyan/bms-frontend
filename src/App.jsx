import Login from "./components/account/login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home/home";
import Header from "./components/Header/header";
import CreatePost from "./components/create/createPost";
import DetailView from "./components/details/detailView";
import UpdatePost from "./components/create/update";

const PrivateRoute = () => {
  const auth = sessionStorage.getItem("authenticated");
  return auth ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate replace to={"/"} />
  );
};

export default function App() {
  return (
    <Router>
      <div className="mt-1">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/home" element={<Home />} />
          </Route>
          <Route path="/create" element={<PrivateRoute />}>
            <Route path="/create" element={<CreatePost />} />
          </Route>
          <Route path="/details/:id" element={<PrivateRoute />}>
            <Route path="/details/:id" element={<DetailView />} />
          </Route>
          <Route path="/update/:id" element={<PrivateRoute />}>
            <Route path="/update/:id" element={<UpdatePost />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
