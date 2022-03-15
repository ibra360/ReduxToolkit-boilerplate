import React from "react";
import { Button, NavbarBrand, Navbar } from "reactstrap";

interface Props {
  headerText: string;
  color?: string;
}

export const Header: React.FC<Props> = ({ color, headerText }) => {
  return (
    <Navbar dark className="mt-3" color={color ? color : "secondary"}>
      <NavbarBrand>{headerText}</NavbarBrand>
    </Navbar>
  );
};
