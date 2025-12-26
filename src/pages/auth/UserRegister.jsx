import "../../styles/auth.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserRegister = () => {
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const email = e.target.email.value;
        const password = e.target.password.value;


        const response = await axios.post("https://food-reel-backend-87nt.onrender.com/api/auth/user/register", {
            fullName: firstName + " " + lastName,
            email,
            password
        },
            {
                withCredentials: true
            })

        console.log(response.data);

        navigate("/")

    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>User Register</h2>
                <p>Create your account</p>

                <form onSubmit={handleSubmit}>
                    <div className="auth-row">
                        <div className="auth-group">
                            <label htmlFor="user-first-name">First Name</label>
                            <input
                                type="text"
                                id="user-first-name"
                                name="firstName"
                                placeholder="First name"
                            />
                        </div>

                        <div className="auth-group">
                            <label htmlFor="user-last-name">Last Name</label>
                            <input
                                type="text"
                                id="user-last-name"
                                name="lastName"
                                placeholder="Last name"
                            />
                        </div>
                    </div>

                    <div className="auth-group">
                        <label htmlFor="user-email">Email</label>
                        <input
                            type="email"
                            id="user-email"
                            name="email"
                            placeholder="Enter email"
                        />
                    </div>

                    <div className="auth-group">
                        <label htmlFor="user-password">Password</label>
                        <input
                            type="password"
                            id="user-password"
                            name="password"
                            placeholder="••••••••"
                        />
                    </div>

                    <button type="submit" className="auth-btn">
                        Register
                    </button>
                </form>

                <div className="auth-footer">
                    Already have an account?
                    <a href="/user/login">Sign in</a>
                </div>

                <div className="auth-switch">
                    <a href="/user-register" className="active">Normal User</a>
                    <a href="/food-partner/register">Food Partner</a>
                </div>
            </div>
        </div>
    );
};

export default UserRegister;
