import React from 'react';
import{Nav,NavbarContainer,NavLogo,MobileIcon, NavMenu, NavItem, NavLinks,NavText} from"./NavbarElements"
import{FaBars} from "react-icons/fa"
const Navbar = (props) => {
    return (
       <>
       <Nav>
           <NavbarContainer>
               <NavLogo to="/">
                   SneakerNews
               </NavLogo>
               <MobileIcon onClick={props.toggle}>
                   <FaBars/>
               </MobileIcon>
               <NavMenu>
               <NavItem>
               <NavLinks className="" to="news">
               <NavText>News</NavText></NavLinks>
               </NavItem>
               <NavItem >
               <NavLinks to="stores"><NavText>Stores</NavText></NavLinks>
               </NavItem>
               <NavItem>
               <NavLinks to="release"><NavText>Release</NavText></NavLinks>
               </NavItem>
               <NavItem>
               <NavLinks to="analizer"><NavText>Analizer</NavText></NavLinks>
               </NavItem>  
               </NavMenu>
           </NavbarContainer>
       </Nav>

       </>
    )
}

export default Navbar
