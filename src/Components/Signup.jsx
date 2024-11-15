import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "./../firebase.init";
const Signup = () => {
  const [errorMassage, setErrorMassage] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    console.log(email, password, terms);

    //  error and status
    setErrorMassage("");
    setSuccess(false);
    if (password < 6) {
      setErrorMassage("password should be 6 chaerecter and longer");
      return;
    }
    if (!terms) {
      setErrorMassage("please accept our terms and conditon");
      return;
    }
    // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9!@#$%^&*])(?=.{6,})/;
    // if(!passwordRegex.test(password)){
    //   setErrorMassage("full fill the chearacterstic password")
    // }
    // create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setErrorMassage(true);
        setSuccess(true);
      })
      .catch((error) => {
        console.log("ERROR", error.message);
        setErrorMassage(error.message);
        setSuccess(false);
      });
  };
  return (
    <div className="max-w-lg mx-auto">
      <div className="text-3xl my-8 font-bold">Signup</div>

      <form onSubmit={handleSignup}>
        <label className="input input-bordered flex items-center gap-2 my-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="email"
            name="email"
            className="grow"
            placeholder="Email"
          />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            className="grow"
            placeholder="password"
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="text-xs"
          >
            {showPassword ? (
              <i class="fa-solid fa-eye-slash"></i>
            ) : (
              <i class="fa-solid fa-eye"></i>
            )}
          </button>
        </label>

        <div className="form-control mt-3">
          <label className="label justify-start cursor-pointer">
            <input
              type="checkbox"
              name="terms"
              className="checkbox checkbox-primary"
            />
            <span className="label-text ml-2">Accept out terms and tools</span>
          </label>
        </div>

        <button className="btn btn-accent btn-wide my-4">Register</button>
      </form>

      {errorMassage && <p className="text-red-600">{errorMassage}</p>}
      {success && (
        <p className="text-green-600 font-bold">SuccessFully Sign Up</p>
      )}
      <p className=" py-3">
        If you have account press{" "}
        <Link className="text-blue-700" to="/Login">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Signup;
