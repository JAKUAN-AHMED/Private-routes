import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import { AuthContext } from "../ProviderContext/ProviderContext";
const Header = () => {
    const [open,setOpen]=useState(false);
    const {user,logOut}=useContext(AuthContext);
    const handleLogOut=()=>{
      logOut();
    }
    return (
      <div className="p-2">
        <nav className="flex justify-between mt-8">
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>
              {open ? (
                <RiMenu3Fill className="w-[50px] h-[30px]"></RiMenu3Fill>
              ) : (
                <IoMenuOutline className="w-[50px] h-[30px]"></IoMenuOutline>
              )}
            </button>
          </div>
          <h2 className="text-2xl font-medium btn navbar-start w-[180px] h-[50px]">
            Privet Route
          </h2>
          <ul className="hidden md:flex navbar-center gap-4 text-base">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/login"}>Login</NavLink>
            </li>
            <li>
              <NavLink to={"/register"}>Register</NavLink>
            </li>
            <li>
              <NavLink to={"/orders"}>Orders</NavLink>
            </li>
            {user && (
              <>
                <li>
                  <NavLink to={"/deshboard"}>Deshboard</NavLink>
                </li>
                <li>
                  <NavLink to={"/profile"}>Profile</NavLink>
                </li>
              </>
            )}
          </ul>
          <div className={`hidden ${user ? "md:flex gap-2" : "md:block"}`}>
            {user ? (
              <>
                <p>{user.email}</p>
                <button onClick={handleLogOut} className="btn btn-secondary">
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link to={"/login"}>
                  <button className="btn btn-secondary">Login</button>
                </Link>
              </>
            )}
          </div>
        </nav>
        {open && (
          <ul className="flex flex-col md:hidden border rounded w-28 p-2">
            <li className="py-2" onClick={() => setOpen(!open)}>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="py-2" onClick={() => setOpen(!open)}>
              <NavLink to={"/login"}>Login</NavLink>
            </li>
            <li className="py-2" onClick={() => setOpen(!open)}>
              <NavLink to={"/register"}>Register</NavLink>
            </li>
            <li className="py-2" onClick={() => setOpen(!open)}>
              <NavLink to={"/orders"}>Orders</NavLink>
            </li>
            {user && (
              <>
                <li className="py-2" onClick={() => setOpen(!open)}>
                  <NavLink to={"/deshboard"}>Deshboard</NavLink>
                </li>
                <li className="py-2" onClick={() => setOpen(!open)}>
                  <NavLink to={"/profile"}>Profile</NavLink>
                </li>
              </>
            )}
            <li>
              {user && <p className="overflow-x-scroll">{user.email}</p>}
              <button className="bg-slate-200 btn btn-ghost w-24">
                Sign Out
              </button>
            </li>
          </ul>
        )}
      </div>
    );
};

export default Header;