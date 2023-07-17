import { Link, Outlet } from "react-router-dom";


const NavBar = () => {
    return (
      <>      
      <div className="nav">
        <div className="nav-logo-cont">
        <Link className="nav-logo" to='/'>
            logo
        </Link>
        </div>
        <div className="nav-link-cont">
            <Link className="nav-link" to='/tst'>
                tst
            </Link>    
        </div>
      </div>
      <Outlet />
      </>
      
    );
  };

  export default NavBar