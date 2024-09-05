import { useContext, useEffect, useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';
import img from '../../../src/assets/others/authentication2.png'
import { Helmet } from 'react-helmet-async';
const Login = () => {
    const captchaRef = useRef();
    const [disabled, setDisabled] = useState(true);
    const { signIn } = useContext(AuthContext);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const token = captchaRef.current.getValue();

        if (!token) {
            alert('Please complete the CAPTCHA.');
            return;
        }

        signIn(email.password)
            .then(res => {

            })
            .catch(err => console.error(err));
    }

    const handleCaptchaChange = (value) => {
        if (value) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold text-center">Login now!</h1>
                    <img src={img}></img>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-2">
                            <ReCAPTCHA
                                ref={captchaRef}
                                sitekey="6LdayDYqAAAAAKF7kFzh2UeDUy6DlySnTjvvl8Oj"
                                onChange={handleCaptchaChange}
                            />
                            <label className="label">
                                <p className="label-text-alt mt-2 text-center">New here?<Link className="label-text-alt link text-blue-700 font-semibold link-hover" to='/signup'> Sign Up</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button disabled={disabled} className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
