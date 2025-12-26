import axios from "axios";
import "../../styles/auth.css";
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const response = await axios.post("http://localhost:3000/api/auth/user/login", {
      email,
      password
    }, { withCredentials: true });
    
    console.log(response.data);

    navigate("/"); // Redirect to home after login

  };
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>User Login</h2>
        <p>Welcome back, please login</p>

        <form onSubmit={handleSubmit}>
          <div className="auth-group">
            <label htmlFor="user-login-email">Email</label>
            <input
              type="email"
              id="user-login-email"
              name="email"
              placeholder="Enter email"
            />
          </div>

          <div className="auth-group">
            <label htmlFor="user-login-password">Password</label>
            <input
              type="password"
              id="user-login-password"
              name="password"
              placeholder="Enter password"
            />
          </div>

          <button type="submit" className="auth-btn">
            Login
          </button>
        </form>

        <div className="auth-footer">
          Don’t have an account?
          <a href="/user/register">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
