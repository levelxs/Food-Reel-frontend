import axios from "axios";
import "../../styles/auth.css";
import { useNavigate } from "react-router-dom";

const PartnerRegister = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const businessName = e.target.businessName.value;
    const contactName = e.target.contactName.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const address = e.target.address.value;

    axios.post("https://food-reel-backend-87nt.onrender.com/api/auth/food-partner/register", {
      name: businessName,
      contactName,
      phone,
      email,
      password,
      address
    }, { withCredentials: true })
      .then(response => {
        console.log(response.data);
        navigate("/create-food"); // Redirect to create food page after successful registration
      })
      .catch(error => {
        console.error("There was an error registering!", error);
      });
  };
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Partner Register</h2>
        <p>Register your business</p>

        <form onSubmit={handleSubmit}>
          <div className="auth-group">
            <label htmlFor="business-name">Business Name</label>
            <input
              type="text"
              id="business-name"
              name="businessName"
              placeholder="Business / Restaurant name"
            />
          </div>

          <div className="auth-row">
            <div className="auth-group">
              <label htmlFor="partner-contact-name">Contact Name</label>
              <input
                type="text"
                id="partner-contact-name"
                name="contactName"
                placeholder="Jane Doe"
              />
            </div>

            <div className="auth-group">
              <label htmlFor="partner-phone">Phone</label>
              <input
                type="tel"
                id="partner-phone"
                name="phone"
                placeholder="Contact number"
              />
            </div>
          </div>

          <div className="auth-group">
            <label htmlFor="partner-email">Email</label>
            <input
              type="email"
              id="partner-email"
              name="email"
              placeholder="Business email"
            />
          </div>

          <div className="auth-group">
            <label htmlFor="partner-password">Password</label>
            <input
              type="password"
              id="partner-password"
              name="password"
              placeholder="Create password"
            />
          </div>

          <div className="auth-group">
            <label htmlFor="partner-address">Address</label>
            <textarea
              id="partner-address"
              name="address"
              placeholder="Business address"
            ></textarea>
          </div>

          <button type="submit" className="auth-btn">
            Register
          </button>
        </form>

        <div className="auth-footer">
          Already have an account?
          <a href="/food-partner/login">Sign in</a>
        </div>

        <div className="auth-switch">
          <a href="/user/register">Normal User</a>
          <a href="/food-partner/register" className="active">Food Partner</a>
        </div>
      </div>
    </div>
  );
};

export default PartnerRegister;
