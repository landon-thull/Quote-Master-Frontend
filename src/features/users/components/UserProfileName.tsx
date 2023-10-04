import {Skeleton} from "@/components/ui/skeleton.tsx";
import React from "react";

interface IProps {
  firstName?: string;
}

const UserProfileName: React.FC<IProps> = ({firstName}) => {

  if (firstName) {
    return (
        <p className="text-lg font-normal">
          {firstName}
        </p>
    );
  }

  return (
      <Skeleton className="h-6 w-16"/>
  );
}

export default UserProfileName;
