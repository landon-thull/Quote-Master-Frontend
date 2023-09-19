import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import React from "react";
import LoginForm from "@/features/auth/components/LoginForm.tsx";


const LoginCard: React.FC = () => {
  return (
      <Card className="w-full max-w-md h-full">
        <CardHeader>
          <h1 className="text-3xl md:text-4xl text-center text-re mb-6 font-bold tracking-wider">QUOTE MASTER</h1>
          <Separator/>
          <CardTitle className="pt-6">Login</CardTitle>
          <CardDescription>
            Enter your email and password to login.
          </CardDescription>
        </CardHeader>
        <LoginForm />
      </Card>
  );
};

export default LoginCard;
