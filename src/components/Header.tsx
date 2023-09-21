import React from "react";
import MainNav from "@/components/MainNav.tsx";
import {Link} from "react-router-dom";

const Header: React.FC = () => {
  return (
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <Link
          to="/"
          className="text-2xl font-bold tracking-wider transition-colors hover:text-muted-foreground">
            QUOTE MASTER
          </Link>
          <MainNav />
        </div>
      </div>
  );
}

export default Header;