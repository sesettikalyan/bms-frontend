import { useContext, useState } from "react";
import logo from "../../assets/logo.png";
import { useStores } from "../../store";
import { Observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/dataProvider";

export default function Login() {
  const { UserStore } = useStores();
  const [account, setAccountType] = useState("login");
  const navigate = useNavigate();
  const { setAccount } = useContext(DataContext);
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const [signup, setSignUp] = useState({
    name: "",
    username: "",
    password: "",
  });

  const onloginDetailsChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const onSignUpDetailsChange = (e) => {
    setSignUp({ ...signup, [e.target.name]: e.target.value });
  };

  const signUp = async (e) => {
    e.preventDefault();
    const res = await UserStore.signUpUser(signup);
    console.log(res);
    if (res) {
      setAccountType("login");
      setSignUp({ name: "", username: "", password: "" });
    } else {
      setError("username already exists");
      setSignUp({ name: "", username: "", password: "" });
      setTimeout(() => {
        setError(null);
      }, 2000);
    }
  };

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await UserStore.loginUser(login);
    console.log(res);
    if (res) {
      setAccount({
        name: UserStore.user?.name,
        username: UserStore.user?.username,
      });
      UserStore.setAuthenticated(true);
      navigate("/home");
      setLogin({ username: "", password: "" });
    } else {
      setError(UserStore.error);
      setLogin({ username: "", password: "" });
      setTimeout(() => {
        setError(null);
      }, 2000);
    }
  };

  return (
    <Observer>
      {() => (
        <div className="bg-white w-[100%] flex justify-center ">
          <div
            className={` bg-white w-[30%] mx-auto p-[4%] pt-0 drop-shadow-xl flex flex-col items-start ${
              !UserStore.isAuthenticated ? "mt-[2.5%]" : "mt-[1%]"
            }`}>
            <img
              src={logo}
              className="w-[225px] h-[225px]  mx-auto"
              alt="logo"
            />
            {account === "login" ? (
              <form
                onSubmit={loginUser}
                className="flex flex-col gap-5 items-start w-[100%] mx-auto">
                <input
                  type="text"
                  placeholder="Enter username"
                  name="username"
                  className="w-full mx-auto focus:outline-none p-2 border-b border-gray-400"
                  value={login.username}
                  onChange={(e) => onloginDetailsChange(e)}
                />
                <input
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  className="w-full mx-auto focus:outline-none p-2 border-b border-gray-400"
                  value={login.password}
                  onChange={(e) => onloginDetailsChange(e)}
                />
                {error && <p className="text-sm text-red-500">{error}</p>}
                <button
                  type="submit"
                  variant="contained"
                  className="text-center w-full bg-orange-500 hover:bg-blue-700  transition-colors ease-in-out duration-500 text-white px-4 py-2 rounded-sm">
                  Login
                </button>
                <p className="text-center w-full text-[#878787]">OR</p>
                <button
                  type="button"
                  onClick={() => setAccountType("signup")}
                  className="text-center w-full mx-auto text-[#2874f0] bg-white px-4 py-2 rounded-sm"
                  style={{ boxShadow: "0 2px 4px 0 rgb(0 0 0/20%)" }}>
                  CREATE AN ACCOUNT
                </button>
              </form>
            ) : (
              <form
                onSubmit={signUp}
                className="flex flex-col gap-5 items-start w-[100%] mx-auto">
                <input
                  type="text"
                  placeholder="Enter name"
                  className="w-full mx-auto focus:outline-none p-2 border-b border-gray-400"
                  name="name"
                  required
                  value={signup.name}
                  onChange={(e) => onSignUpDetailsChange(e)}
                />
                <input
                  type="text"
                  placeholder="Enter username"
                  className="w-full mx-auto focus:outline-none p-2 border-b border-gray-400"
                  name="username"
                  required
                  value={signup.username}
                  onChange={(e) => onSignUpDetailsChange(e)}
                />
                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full mx-auto focus:outline-none p-2 border-b border-gray-400"
                  name="password"
                  required
                  value={signup.password}
                  onChange={(e) => onSignUpDetailsChange(e)}
                />
                {error && <p className="text-sm text-red-500">{error}</p>}
                <button
                  type="submit"
                  className="text-center w-full mx-auto text-[#2874f0] bg-white px-4 py-2 rounded-sm hover:bg-blue-50"
                  style={{ boxShadow: "0 2px 4px 0 rgb(0 0 0/20%)" }}>
                  Signup
                </button>
                <p className="text-center w-full text-[#878787]">OR</p>

                <button
                  type="button"
                  onClick={() => setAccountType("login")}
                  className="text-center w-full bg-orange-500 hover:bg-blue-600   text-white px-4 py-2 rounded-sm">
                  Already have an account
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </Observer>
  );
}
