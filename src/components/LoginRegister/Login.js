import { useContext, useState, React } from "react";
import { useHistory } from "react-router-dom";
import axios from "../../config/axios";
import jwtDecode from "jwt-decode";
import { AuthContext } from "../../context/authContext";
import { setToken } from "../../services/localStorage";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(AuthContext);

  const history = useHistory();

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/user/login", { username, password });
      console.log(res);
      setToken(res.data.token);
      setUser(jwtDecode(res.data.token));
      history.push("/");
    } catch (err) {
      if (err.response && err.response.status === 400) {
        alert("Invalid username or password");
        console.clear();
      }
    }
  };

  return (
    <form
      className=' d-flex justify-content-center align-items-center flex-column bg-white'
      style={{ height: "170px" }}
      onSubmit={handleSubmitLogin}>
      <input
        className='my-2  w-75 ps-2 border border-warning rounded shadow-sm'
        id='usernameInput'
        placeholder='Username'
        style={{ fontSize: "14px", height: "30px" }}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className='my-2  w-75 ps-2 border border-warning rounded shadow-sm'
        id='passwordInput'
        placeholder='Password'
        type='password'
        style={{ fontSize: "14px", height: "30px" }}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className='w-75 bg-warning border border-warning rounded shadow-sm text-center my-2'
        style={{ fontSize: "14px", height: "30px" }}>
        Login
      </button>
    </form>
  );
};

export default Login;
