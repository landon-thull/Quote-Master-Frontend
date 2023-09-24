import React from "react";
import {GetCurrentUserResponse} from "@/features/users/types";
import {Skeleton} from "@/components/ui/skeleton.tsx";

interface IProps {
  currentUser?: GetCurrentUserResponse;
}

const UserProfileDropdownLabel: React.FC<IProps> = ({currentUser}) => {

  if (currentUser) {
    return (
        <div className="flex flex-col space-y-1">
          <p className="text-sm font-medium leading-none">
            {`${currentUser.firstName} ${currentUser.lastName}`}
          </p>
          <p className="text-xs leading-none text-muted-foreground">
            {currentUser.email}
          </p>
        </div>
    );
  }

  return (
      <div className="flex flex-col space-y-1">
        <Skeleton className="h-4 w-full"/>
        <Skeleton className="h-3 w-3/4"/>
      </div>
  )
}

export default UserProfileDropdownLabel;