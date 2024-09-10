/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import Form from "../components/Form";
import "../styles/Form.css"; // Import the shared CSS
import "../styles/Login.css"; // Import the login-specific CSS

function Login() {
    return (
        <div className="form-container">
            <Form route="/api/token/" method="login" />
            <p className="switch-link">
                Don't have an account? <Link to="/register">Register here</Link>
            </p>
        </div>
    );
}

export default Login;
