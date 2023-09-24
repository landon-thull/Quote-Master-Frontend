import React from "react";
import MainNav from "@/components/MainNav.tsx";
import {Link} from "react-router-dom";
import UserProfileDropdown from "@/features/users/components/UserProfileDropdown.tsx";

const Header: React.FC = () => {
  return (
      <div className="border-b">
        <div className="flex h-16 items-center justify-between px-8">
          <div className="flex">
            <Link
            to="/"
            className="text-2xl font-bold tracking-wider transition-colors hover:text-muted-foreground"
            >
              QUOTE MASTER
            </Link>
            <MainNav />
          </div>
          <UserProfileDropdown/>
        </div>
      </div>
  );
}

export default Header;