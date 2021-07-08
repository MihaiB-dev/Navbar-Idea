import styled from 'styled-components'
import {Link as LinkRouter} from 'react-router-dom'



export const Nav= styled.nav`
background:#000;
height:80px;
${'' /* margin-top:-80px; */}
display:flex;
justify-content: center;
align-items:center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;

@media screen and (max-width: 960px){
    transition: 0.9s all ease;
}
`;

export const NavbarContainer = styled.div`

display:flex;
justify-container: space-between;
height: 80px;
z-index : 1;
width: 100%;
padding: 0 24px;
max-width:1100px;
`;

export const NavLogo = styled(LinkRouter)`
color:#fff;
justify-self:flex-start;
cursor:pointer;
font-size: 1.5rem;
display:flex;
align-items: center;
margin-left:24px;
font-weight:bold;
text-decoration:none;
font-family:'Ubuntu', sans-serif;
`;

export const MobileIcon = styled.div`
display:none;

@media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top:0px;
    right:0;
    transform:translate(-100%, 60%);
    font-size:1.8rem;
    cursor:pointer;
    color: #fff;
    transition:all 0.2s ease-in-out;

    &:hover {
        
        transition: all 0.2s ease-in-out;
      color:#FF7600;
    }

}`;




export const NavMenu = styled.ul`
display:flex;
align-items:center;
list-style:none;
text-align:center;
margin-right:-22px;
margin-left:202px;

@media screen and (max-width:768px){
    display:none;
}

`;

export const NavItem= styled.li`
height:80px;





`;


export const NavLinks = styled(LinkRouter)`

display:flex;
align-items:center;
text-decoration:none;
padding:0 1rem;
height: 100%;
cursor:pointer;

color:#D6D2C4;
transition:all 0.2s ease-in-out;

* {margin:0;padding:0 none;position: relative; outline: none;
}



&.active {
    border-buttom: 3px solid #01bg71;
}
`;

export const NavText  = styled.a`
color:#D6D2C4;
font-family:'Open Sans', sans-serif;
transition:all 0.2s ease-in-out;
&:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background: #4AA96C;
    visibility: hidden;
    border-radius: 5px;
    transform: scaleX(0);
    transition: .20s linear;
  }
   
    text-decoration: none;
    
    z-index: 1;
  
  
  &:hover:before,
  &:focus:before {
    visibility: visible;
    transform: scaleX(1);
  }
  
  &:hover {
      transition: all 0.2s ease-in-out;
      color:#fff;
      
  }



`