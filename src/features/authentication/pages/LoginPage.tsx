import React from "react";
import PageWrapper from "@/components/PageWrapper.tsx";
import LoginCard from "@/features/authentication/components/LoginCard.tsx";

const LoginPage: React.FC = () => {
  return (
      <PageWrapper>
        <div className="min-h-screen flex justify-center items-center mx-2 md:mx-0">
          <LoginCard />
        </div>
      </PageWrapper>
  );
}

export default LoginPage;