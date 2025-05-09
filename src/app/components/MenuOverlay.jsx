import React from 'react'
import Navlink from "./NavLink";

const MenuOverlay = ({links}) => {
  return (
    <ul className=" flex flex-col py-4 items-center">
    {links.map((link, index) => {
      return (
        <li key={index}>
          <Navlink href={link.path} title={link.title} />
        </li>
      );
    })}
  </ul>
  )
}

export default MenuOverlay;
