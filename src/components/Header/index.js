import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from "gatsby"
import logo from "../../assets/images/logo.png";
import arrowDown from "../../assets/images/arrow-down.svg";

import "./index.scss";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      collapse: false,
      status: "Closed"
    };
  }
  toggleMainNav = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  onEntering = () => {
    this.setState({ status: "Opening..." });
  };

  onEntered = () => {
    this.setState({ status: "Opened" });
  };

  onExiting = () => {
    this.setState({ status: "Closing..." });
  };

  onExited = () => {
    this.setState({ status: "Closed" });
  };

  toggle = () => {
    this.setState(state => ({ collapse: !state.collapse }));
  };
  render() {
    const { activeItem, lang } = this.props;
    return (
      <div>
        <Navbar light expand="md" className="header">
          <div className="header__logo">
            <a href="/">
              <img src={logo} alt="logo" className="header__logo--img" />
            </a>
          </div>
          <NavbarToggler onClick={this.toggleMainNav} />
          <Collapse
            isOpen={this.state.isOpen}
            navbar
            className="header__collapse"
          >
            <Nav className="ml-auto header__nav" navbar>
              <NavItem
                className={`header__nav-item ${
                  activeItem === "home" ? "header__nav-item-active" : ""
                  }`}
              >
                <NavLink href="#home" className="header__nav-link">
                  {lang === "en" ? "HOME" : "الرئيسية"}
                </NavLink>
              </NavItem>
              <NavItem
                className={`header__nav-item ${
                  activeItem === "members" ? "header__nav-item-active" : ""
                  }`}
              >
                <NavLink href="#why" className="header__nav-link">
                  {lang === "en" ? "ABOUT US" : "عننا"}
                </NavLink>
              </NavItem>
              <NavItem
                className={`header__nav-item ${
                  activeItem === "products" ? "header__nav-item-active" : ""
                  }`}
              >
                <NavLink href="#products" className="header__nav-link">
                  {lang === "en" ? "PRODUCTS" : "منتجاتنا"}
                </NavLink>
              </NavItem>

              <NavItem
                className={`header__nav-item ${
                  activeItem === "matches" ? "header__nav-item-active" : ""
                  }`}
              >
                <NavLink href="#services" className="header__nav-link">
                  {lang === "en" ? "SERVICES" : "خدماتنا"}
                </NavLink>
              </NavItem>

              <NavItem
                className={`header__nav-item ${
                  activeItem === "profile" ? "header__nav-item-active" : ""
                  }`}
              >
                <NavLink href="#projects" className="header__nav-link">
                  {lang === "en" ? "PROJECTS" : "مشروعتنا"}
                </NavLink>
              </NavItem>

              <NavItem
                className={`header__nav-item ${
                  activeItem === "profile" ? "header__nav-item-active" : ""
                  }`}
              >
                <NavLink href="#partners" className="header__nav-link">
                  {lang === "en" ? "PARTNERS" : "شركائنا"}
                </NavLink>
              </NavItem>

              <NavItem
                className={`header__nav-item ${
                  activeItem === "quick-match" ? "header__nav-item-active" : ""
                  }`}
              >
                <NavLink href="#careers" className="header__nav-link">
                  {lang === "en" ? "CAREERS" : "الوظائف"}
                </NavLink>
              </NavItem>
              <NavItem
                className={`header__nav-item ${
                  activeItem === "quick-match" ? "header__nav-item-active" : ""
                  }`}
              >
                <NavLink href="#contact" className="header__nav-link">
                  {lang === "en" ? "CONTACT US" : "اتصل بنا"}
                </NavLink>
              </NavItem>
              <UncontrolledDropdown
                nav 
                inNavbar
                className="header__nav-item d-none d-md-block"
              >
                <DropdownToggle nav caret className="header__nav-link">
                  {lang === "en" ? "LANG" : "اللغة"}
                </DropdownToggle>
                <DropdownMenu right className="header__nav-sub-menu">
                  <Link to="/">
                    <DropdownItem className="header__nav-sub-menu__item">
                      English
                  </DropdownItem>
                  </Link>
                  <DropdownItem divider className="header__nav-divider" />
                  <Link to="/ar">
                    <DropdownItem className="header__nav-sub-menu__item">
                      العربية
                  </DropdownItem>
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem
                className="header__nav-item d-md-none"
                onClick={this.toggle}
              >
                <NavLink className="header__nav-link d-inline-flex justify-content-between">
                  LANG
                  <img src={arrowDown} alt="" style={{ marginLeft: "8px" }} />
                </NavLink>
              </NavItem>
              <Collapse
                className="d-md-none"
                isOpen={this.state.collapse}
                onEntering={this.onEntering}
                onEntered={this.onEntered}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <Nav vertical>
                  <Link to="/">
                    <NavItem>
                      <NavLink href="#" className="header__nav-item-mobile">
                        English
                    </NavLink>
                    </NavItem>
                  </Link>
                  <Link to="/ar">
                    <NavItem>
                      <NavLink href="#" className="header__nav-item-mobile">
                        العربية
                    </NavLink>
                    </NavItem>
                  </Link>
                </Nav>
              </Collapse>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
