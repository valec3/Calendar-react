import {useContext} from "react"
import GlobalContext from "../context/GlobalContext"

const ProtectedRoute = ({
    isAllowed,
    redirectPath = '/landing',
    children,
  }) => {
    if (!isAllowed) {
      return <Navigate to={redirectPath} replace />;
    }
  
    return children ? children : <Outlet />;
  };