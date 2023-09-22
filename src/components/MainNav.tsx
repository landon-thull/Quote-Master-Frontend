import {Link} from "react-router-dom";

const MainNav: React.FC = () => {
  return (
      <nav className="flex items-center space-x-4 mx-8 lg:space-x-6">
        <Link
            to="/"
            className="text-md font-medium transition-colors text-muted-foreground hover:text-primary"
        >
          Home
        </Link>
      </nav>
  );
}

export default MainNav;