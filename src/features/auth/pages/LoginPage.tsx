import React from "react";
import PageWrapper from "@/components/PageWrapper.tsx";
import LoginCard from "@/features/auth/components/LoginCard.tsx";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "@/stores/store.ts";

const LoginPage: React.FC = () => {
  const authState = useSelector((state: RootState) => state.authSlice);

  if (authState.isAuthenticated) {
    return <Navigate replace to="/"/>
  } else {
    return (
        <PageWrapper>
          <div className="min-h-screen flex justify-center items-center mx-2 md:mx-0">
            <LoginCard/>
          </div>
        </PageWrapper>
    );
  }
}

export default LoginPage;