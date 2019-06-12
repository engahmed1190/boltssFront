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
    const { activeItem } = this.props;
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
                  HOME
                </NavLink>
              </NavItem>
              <NavItem
                className={`header__nav-item ${
                  activeItem === "members" ? "header__nav-item-active" : ""
                  }`}
              >
                <NavLink href="#about" className="header__nav-link">
                  ABOUT US
                </NavLink>
              </NavItem>
              <NavItem
                className={`header__nav-item ${
                  activeItem === "products" ? "header__nav-item-active" : ""
                  }`}
              >
                <NavLink href="#products" className="header__nav-link">
                  PRODUCTS
                </NavLink>
              </NavItem>

              <NavItem
                className={`header__nav-item ${
                  activeItem === "matches" ? "header__nav-item-active" : ""
                  }`}
              >
                <NavLink href="#services" className="header__nav-link">
                  SERVICES
                </NavLink>
              </NavItem>

              <NavItem
                className={`header__nav-item ${
                  activeItem === "profile" ? "header__nav-item-active" : ""
                  }`}
              >
                <NavLink href="#projects" className="header__nav-link">
                  PROJECTS
                </NavLink>
              </NavItem>

              <NavItem
                className={`header__nav-item ${
                  activeItem === "profile" ? "header__nav-item-active" : ""
                  }`}
              >
                <NavLink href="#projects" className="header__nav-link">
                  PARTNERS
                </NavLink>
              </NavItem>

              <NavItem
                className={`header__nav-item ${
                  activeItem === "quick-match" ? "header__nav-item-active" : ""
                  }`}
              >
                <NavLink href="#home" className="header__nav-link">
                  CAREERS
                </NavLink>
              </NavItem>
              <NavItem
                className={`header__nav-item ${
                  activeItem === "quick-match" ? "header__nav-item-active" : ""
                  }`}
              >
                <NavLink href="#contact" className="header__nav-link">
                  CONTACT US
                </NavLink>
              </NavItem>
              <UncontrolledDropdown
                nav
                inNavbar
                className="header__nav-item d-none d-md-block"
              >
                <DropdownToggle nav caret className="header__nav-link">
                  LANG
                </DropdownToggle>
                <DropdownMenu right className="header__nav-sub-menu">
                  <DropdownItem className="header__nav-sub-menu__item">
                    English
                  </DropdownItem>
                  <DropdownItem divider className="header__nav-divider" />
                  <DropdownItem className="header__nav-sub-menu__item">
                    العربية
                  </DropdownItem>
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
                  <NavItem>
                    <NavLink href="#" className="header__nav-item-mobile">
                      English
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#" className="header__nav-item-mobile">
                      العربية
                    </NavLink>
                  </NavItem>
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
