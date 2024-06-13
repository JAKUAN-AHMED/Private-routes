import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../ProviderContext/ProviderContext";
const Login = () => {
  const {SignInUser,signInGoogle}=useContext(AuthContext);
  const navigate=useNavigate();
  const handleGoogle=()=>{
    signInGoogle()
    .then(res=>console.log(res.user))
    .catch(error=>console.error(error.message))
  }
  const handleLogin = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password, name);
    //sign in with emai and pass
    SignInUser(email,password)
    .then(result=>{
      console.log(result.user)
      e.target.reset()
      navigate('/')
    })
    .catch(error=>console.log(error.message))

  };
    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleLogin}>
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p>
                Not Registered yet? Please
                <Link to={"/register"}>
                  <button className="btn btn-ghost link">Register</button>
                </Link>
              </p>
              <div>
                <button className="btn btn-ghost" onClick={handleGoogle}>Google</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;