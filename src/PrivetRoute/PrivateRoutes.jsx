import { useContext } from "react";
import { AuthContext } from "../Component/ProviderContext/ProviderContext";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';
const PrivateRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    if(loading)
    {
        return (
          <div className="max-w-3xl mx-auto text-center border rounded shadow-lg">
            <span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
          </div>
        );
    }
    else if(user)
        {
            return children;
        }
    return (
        <Navigate to={'/login'}></Navigate>
    );
};
PrivateRoutes.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoutes;