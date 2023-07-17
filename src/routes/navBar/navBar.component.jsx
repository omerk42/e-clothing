import { Link, Outlet } from "react-router-dom";
import { ReactComponent as MonkeyLogo } from "../../assets/images/monkey-logo.svg";
import "./navBar.style.scss"
const NavBar = () => {
    return (
      <>      
      <div className="nav">
        <div className="nav-logo-cont">
        <Link className="nav-logo" to='/'>
            <MonkeyLogo className="logo"/>
        </Link>
        </div>
        <div className="nav-links-cont">
            <Link className="nav-link" to='/tst'>
                tst
            </Link>    
            <Link className="nav-link" to='/sign-in'>
                sign-in
            </Link>    
        </div>
      </div>
      <Outlet />
      </>
      
    );
  };

  export default NavBar