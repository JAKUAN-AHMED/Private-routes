import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../ProviderContext/ProviderContext";

const Register = () => {
  const {CreateUser}=useContext(AuthContext);
  // console.log(authInfo)
  const handleRegister=(e)=>{
    e.preventDefault();
    const name=e.target.name.value;
    const email=e.target.email.value;
    const password=e.target.password.value;
    console.log(email,password,name)

    // ?create user with email and pass
    CreateUser(email,password)
    .then(result=>console.log(result.user))
    .catch(error=>console.log(error.message))
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
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
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <p>
              Already Registered? Please
              <Link to={"/login"}>
                <button className="btn btn-ghost link">Login</button>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
