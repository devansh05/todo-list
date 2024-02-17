"use client";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <Link rel="stylesheet" href="/">
        All
      </Link>
      <Link rel="stylesheet" href="/?todos=active">
        Active
      </Link>
      <Link rel="stylesheet" href="/?todos=completed">
        Completed
      </Link>
    </nav>
  );
};

export default Navbar;
