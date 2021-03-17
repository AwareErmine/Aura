import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

function NavButton(props) {
  const path = props.path;
  const cleaned_path = path.replaceAll("/", "").replaceAll("_", " ");
  const buttonName = cleaned_path ? cleaned_path : "home";
  return (
    <Link
      to={path}
      key={path}
    >
      {buttonName}
    </Link>
  )
}

function Header(props) {
  const paths = props.routes.map(
    (route) => route.path
  )
  const buttons = paths.map((path) =>
    <NavButton
      path={path}
      key={path}
    />
  )
  return (
    <nav>
      {buttons}
    </nav>
  )
}

export default Header;
