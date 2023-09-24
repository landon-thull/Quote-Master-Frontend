import React, {useEffect, useState} from "react";
import {
  DropdownMenu,
  DropdownMenuContent, DropdownMenuItem,
  DropdownMenuLabel, DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import {GetCurrentUserResponse} from "@/features/users/types";
import {getCurrentUser} from "@/features/users/api/getCurrentUser.ts";
import {User} from "lucide-react";
import UserProfileName from "@/features/users/components/UserProfileName.tsx";
import {Button} from "@/components/ui/button.tsx";
import UserProfileDropdownLabel from "@/features/users/components/UserProfileDropdownLabel.tsx";
import storage from "@/utils/storage.ts";
import {useNavigate} from "react-router-dom";

const UserProfileDropdown: React.FC = () => {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState<GetCurrentUserResponse>();

  useEffect(() => {
    getCurrentUser().then((res) => {
      setCurrentUser(res);
    }).catch((e) => {
      console.log(e);
    })
  }, []);

  const handleLogout = () => {
    storage.clearToken();
    navigate("/login");
  }

  return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative">
            <User className="mr-2 h-6 w-6"/>
            <UserProfileName firstName={currentUser?.firstName}/>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <UserProfileDropdownLabel currentUser={currentUser}/>
          </DropdownMenuLabel>
          <DropdownMenuSeparator/>
          <DropdownMenuItem onClick={() => handleLogout()}>
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
  );
}

export default UserProfileDropdown;