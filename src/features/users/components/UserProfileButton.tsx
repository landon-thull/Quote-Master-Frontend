import React, {useEffect, useState} from "react";
import {GetCurrentUserResponse} from "@/features/users/types";
import {getCurrentUser} from "@/features/users/api/getCurrentUser.ts";
import {User} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";
import UserProfileName from "@/features/users/components/UserProfileName.tsx";
import {AxiosError} from "axios";

const UserProfileButton: React.FC = () => {

  const [currentUser, setCurrentUser] = useState<GetCurrentUserResponse>();

  useEffect(() => {
    getCurrentUser().then((res) => {
      setCurrentUser(res);
    }).catch((e: AxiosError) => {
      console.log(e.message);
    })
  }, []);

  return (
      <Button variant="ghost">
        <User className="mr-2 h-6 w-6"/>
        <UserProfileName firstName={currentUser?.firstName}/>
      </Button>
  );
}

export default UserProfileButton;
