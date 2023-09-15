import React, {ReactElement} from "react";

interface IProps {
  children: ReactElement | ReactElement[];
}

const PageWrapper: React.FC<IProps> = ({children}) => {
  return (
      <div className="bg-background text-primary max-w-screen">
        {children}
      </div>
  )
}

export default PageWrapper;