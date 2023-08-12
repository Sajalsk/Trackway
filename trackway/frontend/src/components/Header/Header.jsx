import{ useContext} from  "react";
import { Container, Button, Row } from "reactstrap";
import { NavLink, Link,useNavigate } from "react-router-dom";
import './Header.css'
import logo from "../../assets/images/Trackway.png";

import { AuthContext } from "../../context/AuthContext";

const nav_link = [
  {
    path: "/home",
    display: "Home",
  },

  {
    path: "/about",
    display: "About",
  },

  {
    path: "/tours",
    display: "Tours",
  }
];

const Header = () => {

  // const headRef= useRef(null);
  const navigate= useNavigate(null);
  const {user,dispatch}= useContext(AuthContext);

  const logout=()=>{
    dispatch({type:"LOGOUT"});
    navigate('/home')
    // alert('clicked');
  };
  
  return (
    // Navbar
    <header className="header">
      <Container>
        <Row>
          <div className="nav-wrapper d-flex align-items-center justify-content-between">
            {/* LOGO */}
            <div className="logo">
              <img src={logo} alt="" srcSet="" />
            </div>
            {/* Home-About-tours & Mapping */}
            <div className="navigation">
              <ul className="menu d-flex align-items-centre gap-5">
                {nav_link.map((item, index) => (      /*  items , index  ? key is for uniqueness */
                  <li className="nav__item" key={index}>
                    <NavLink to={item.path}
                    className={navclass=>navclass.isActive?"active__link":""}>{item.display}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
             {/* Login & Register */}
            <div className="nav-right d-flex align-items-center gap-4">
              <div className="nav-btns d-flex align-items-center gap-4">

                { 
                user ? (
                  <>
                  <h5 style={{marginLeft:"10px"}} className="mb-1" >{user.username}</h5>
                  <Button type="submit" className="btn btn-dark" onClick={logout} >Logout</Button>
                  </>
                  ): (
                 <>
               
                <Button className="btn primary__btn"> <Link to='/login'>Login</Link></Button>
                <Button className="btn primary__btn"> <Link to='/register'>Register</Link></Button>
                </>
                )}
              </div>

              <div className="mobile__menu">
              <i className="ri-menu-add-line"></i>
              </div>
            </div>

          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
