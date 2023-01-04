import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/e_logo.png"

function Header() {
  const options={
      logo ,
      logoWidth : "20vmax",
      navColor1 : 'white',
      burgerColor: "#aaaaaa",
      burgerColorHover:"#FF6347",
      logoHeight: "4.2vmax",
      logoHoverSize:"1px",
      logoHoverColor:"#FF6347",
      link1Text:"Home",
      link2Text:"Products",
      link3Text:"Contact",
      link4Text:"About",
      link1Url:"/",
      link2Url:"/products",
      link3Url:"/contact",
      link4Url:"/about",
      link1Size:"1.5vmax",
      link1Color:"rgba(35, 35, 35,0.8)",
      nav1justifyContent:"flex-end",
      nav2justifyContent:"flex-end",
      nav3justifyContent:"flex-start",
      nav4justifyContent:"flex-start",
      link1ColorHover:"#FF6347",
      link1Margin:"1.2vmax",
      profileIconUrl:"/account",
      profileIconColor:"rgba(35, 35, 35,0.8)",
      searchIconColor:"rgba(35, 35, 35,0.8)",
      cartIconUrl:"/cart",
      cartIconColor:"rgba(35, 35, 35,0.8)",
      profileIconColorHover:"#FF6347",
      searchIconColorHover:"#FF6347",
      cartIconColorHover:"#FF6347",
      cartIconMargin:"2vmax"
  }
  return (
    <ReactNavbar {...options}/>
  );
}

export default Header;
