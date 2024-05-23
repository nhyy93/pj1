import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { message } from 'antd';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "http://localhost:8080/api/login",
        credentials, { withCredentials: true }
      );
      if (res.data.user.role === "Admin") {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.user });
        message.success("Login successful!");
        navigate("/");
      } else {
        dispatch({
          type: "LOGIN_FAILURE",
          payload: { message: "You are not allowed!" },
        });
        message.error("You are not allowed to login!");
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
      message.error(err.response.data.message);
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(255, 255, 255, 0.5)",
        backgroundImage: "url('https://images.pexels.com/photos/768473/pexels-photo-768473.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')",
      backgroundSize: 'cover',
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          style={{ padding: "10px", borderRadius: "5px" }}
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          style={{ padding: "10px", borderRadius: "5px" }}
        />
        <button
          disabled={loading}
          onClick={handleClick}
          style={{
            border: "none",
            padding: "10px 20px",
            backgroundColor: "#0071c2",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
