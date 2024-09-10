import { Link } from "react-router-dom";
import Form from "../components/Form";
import "../styles/Form.css"; // Import the shared CSS
import "../styles/Register.css"; // Import the register-specific CSS

function Register() {
    return (
        <div className="form-container">
            <Form route="/api/user/register/" method="register" />
            <p className="switch-link">
                Already have an account? <Link to="/login">Login here</Link>
            </p>
        </div>
    );
}

export default Register;
