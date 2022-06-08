import { useNavigate } from "react-router-dom";
import React, { useRef, useState } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../../services/auth.service";
import("./styles.css");

// Create a function to validate that the field has been filled

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const Login = () => {
    // instance for usenavigate
    let navigate = useNavigate();
    // use checkBtn as useRef
    const checkBtn = useRef();
    // use form as useRef
    const form = useRef();

    //HOOKS for each field to assign the value with useState()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    /*
     * HANDLE ONCHANGE EVENTS FOR THE FIELDS
     */
    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };
    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    /*
     *   HANDLE LOGIN this will run once we click the submit button
     */
    const handleLogin = (e) => {
        // this will prevent default action from the submit form
        e.preventDefault();
        // state of the message based on the action ocurred
        setMessage("");
        // Set loading to true for letting now components that required this state
        setLoading(true);

        // Use validateAll() from react-validation buld form
        form.current.validateAll();
        // check if the errors length stored in the checkBtn using useRef have 0 errors then execute authService
        if (checkBtn.current.context._errors.length === 0) {
            // Call the AuthService.login method and redirect the user to the profile page
            AuthService.login(username, password).then(
                () => {
                    navigate("/profile");
                    window.location.reload();
                },
                // Callback if there is any errors send back from the request
                (error) => {
                    // store the error from the response
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    // Loading set to false
                    setLoading(false);
                    // then we set the respoonse message into the message hook
                    setMessage(resMessage);
                }
            );
            // If there are any errors stored in the checkBtn ref
            // checkBtn.current.context._errors.length > 0
        } else {
            setLoading(false);
        }
    };
    return (
        <section className="login-section">
            <div className="col-md-12">
                <div className="card card-container">
                    <img
                        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                        alt="profile-img"
                        className="profile-img-card"
                    />
                    <Form
                        className="d-flex flex-column"
                        onSubmit={handleLogin}
                        ref={form}
                        style={{ gap: "1rem" }}
                    >
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <Input
                                type="text"
                                className="form-control"
                                name="username"
                                value={username}
                                onChange={onChangeUsername}
                                validations={[required]}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" Password>
                                Password
                            </label>
                            <Input
                                className="form-control"
                                type="password"
                                name="password"
                                value={password}
                                onChange={onChangePassword}
                                validations={[required]}
                            />
                        </div>
                        <div className="form-group">
                            <button
                                className="btn btn-primary btn-block"
                                disabled={loading}
                            >
                                {loading && (
                                    <span className="spinner-border spinner-border-sm"></span>
                                )}
                                <span>Login</span>
                            </button>
                        </div>
                        {message && (
                            <div className="form-group">
                                <div
                                    className="alert alert-danger"
                                    role="alert"
                                >
                                    {message}
                                </div>
                            </div>
                        )}
                        <CheckButton
                            style={{ display: "none" }}
                            ref={checkBtn}
                        />
                    </Form>
                </div>
            </div>
        </section>
    );
};
export default Login;
