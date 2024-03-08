"use client";
import React from "react";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

export default function ResponsiveNav() {
  const [showNav, setShowNav] = React.useState(false);
  const navHandler = () => setShowNav((prev) => !prev);
  return (
    <div>
      <Nav openNav={navHandler} />
      <MobileNav nav={showNav} closeNav={navHandler} />
    </div>
  );
}
