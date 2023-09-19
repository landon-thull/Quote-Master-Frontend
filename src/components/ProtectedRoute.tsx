import {useAppSelector} from "@/hooks/reduxHooks.ts";
import {Navigate} from "react-router-dom";
import React, {ReactElement, useEffect, useState} from "react";
import {useAppDispatch} from "@/hooks/reduxHooks.ts";
import {setIsAuthenticated} from "@/stores/authSlice.ts";
import authUtil from "@/utils/authUtil.ts";
import storage from "@/utils/storage.ts";
import Loading from "@/components/Loading.tsx";

interface IProps {
  children: ReactElement | ReactElement[];
  requireAuth: boolean;
}

const ProtectedRoute: React.FC<IProps> = ({children, requireAuth = false}) => {
  const dispatch = useAppDispatch();
  const authState = useAppSelector((state) => state.authSlice);
  const [authStateLoading, setAuthStateLoading] = useState<boolean>(true);

  useEffect(() => {
    if (authUtil.isTokenExpired()) {
      dispatch(setIsAuthenticated(false));
      storage.clearToken();
    } else {
      dispatch(setIsAuthenticated(true));
    }
    setAuthStateLoading(false);
  }, [dispatch]);

  if (authStateLoading) {
    return <Loading/>;
  }

  if (requireAuth && !authState.isAuthenticated) {
    return <Navigate replace to="/login"/>
  } else {
    // TODO add role based route protection
    return children;
  }
}

export default ProtectedRoute;