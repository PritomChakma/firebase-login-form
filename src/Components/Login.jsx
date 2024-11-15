import {
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "./../firebase.init";
const Login = () => {
  const [errorMassage, setErrorMassage] = useState();
  const [success, setSuccess] = useState(false);
  const emailRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // set state
    setErrorMassage();
    setSuccess(false);

    // user login
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        if (!result.user.emailVerified) {
          setErrorMassage("please enter verified Email");
        } else {
          setSuccess(true);
        }

        // Email verification
        sendEmailVerification(auth.currentUser).then(() => {
          console.log("verfied email sent");
        });
      })
      .catch((error) => {
        console.log("ERROR", error.message);
        setErrorMassage(error.message);
        setSuccess(false);
      });
  };

  const handleForgetPassword = () => {
    console.log("give me email address", emailRef.current.value);
    const email = emailRef.current.value;

    if (!email) {
      console.log("please enter the valid email");
    } else {
      sendPasswordResetEmail(auth, email)
      .then(()=>{
        alert("password email send please check your email")
      })
    }
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  ref={emailRef}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label onClick={handleForgetPassword} className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>

            {errorMassage && (
              <p className="text-red-600 px-10">{errorMassage}</p>
            )}
            {success && (
              <p className="text-green-600 px-10">Login SuccssFully</p>
            )}

            <p className="px-10 py-3">
              New to This website? Please{" "}
              <Link className="text-blue-700" to="/Signup">
                SignUp
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
