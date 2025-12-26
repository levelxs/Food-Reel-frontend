import axios from "axios";
import "../../styles/auth.css";
import { useNavigate } from 'react-router-dom'

const PartnerLogin = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const response = await axios.post("https://food-reel-backend-87nt.onrender.com/api/auth/food-partner/login", {
      email,
      password
    }, { withCredentials: true });

    console.log(response.data);

    navigate("/create-food"); // Redirect to create food page after login

  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Food Partner Login</h2>
        <p>Login to manage your business</p>

        <form onSubmit={handleSubmit}>
          <div className="auth-group">
            <label htmlFor="partner-login-email">Email</label>
            <input
              type="email"
              id="partner-login-email"
              name="email"
              placeholder="Business email"
            />
          </div>

          <div className="auth-group">
            <label htmlFor="partner-login-password">Password</label>
            <input
              type="password"
              id="partner-login-password"
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
          <a href="/food-partner/register">Sign up</a>
        </div>
      </div>
    </div>
  );

}
export default PartnerLogin;
