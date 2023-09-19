import {useAppSelector} from "@/hooks/reduxHooks.ts";
import {Navigate} from "react-router-dom";
import {ReactElement} from "react";

interface IProps {
  children: ReactElement | ReactElement[];
  requireAuth: boolean;
}

const ProtectedRoute: React.FC<IProps> = ({children, requireAuth = false}) => {
  const authState = useAppSelector((state) => state.authSlice);

  if (requireAuth && !authState.isAuthenticated) {
    return <Navigate replace to="/login"/>
  } else {
    // TODO add role based route protection
    return children;
  }
}

export default ProtectedRoute;