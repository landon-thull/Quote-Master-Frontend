import React, {ReactElement} from "react";
import ProtectedRoute from "@/components/ProtectedRoute.tsx";

interface IProps {
  children: ReactElement | ReactElement[];
  requireAuth?: boolean;
}

const PageWrapper: React.FC<IProps> = ({children, requireAuth = false}) => {
  return (
      <div className="bg-background text-primary max-w-screen">
        <ProtectedRoute requireAuth={requireAuth}>
        {children}
        </ProtectedRoute>
      </div>
  )
}

export default PageWrapper;