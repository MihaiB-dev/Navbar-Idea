import styled from 'styled-components';
import {Link as LinkRouter} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';

export const SidebarContainer = styled.aside`
position:fixed;
z-index:999;
width:100%;
height:100%;
background:#0d0d0d;
display:grid;
align-items:center;
top:0;
left: 0;
transition : 0.3s ease-in-out;
opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
top: ${({isOpen}) => (isOpen ? '0' : '-100%')};

`

export const CloseIcon = styled(FaTimes)`
color:#FF7600;
`

export const Icon = styled.div`
position: absolute;
top:1.2rem;
right:1.5rem;
background:transparent;
font-size:2rem;
cursor:pointer;
outline:none;
`

export const SidebarWrapper = styled.div`
color:#fff;
`
export const SidebarMenu = styled.ul`
display:grid;
grid-template-colums: 1fr;
grid-template-rows:repeat(6,80px);
text-align:center;

@media screen and (max-width:480px){
  
    grid-template-rows:repeat(6,70px);
}
`

export const SidebarLink = styled(LinkRouter)`

margin-top:100px;
display:flex;
align-items:center;
justify-content:center;
font-size:2.5rem;
text-decoration:none;
list-style:none;
transition:0.2s ease-in-out;
color:#fff;
cursor:pointer;
* {margin:0;padding:0 none;position: relative; outline: none;

&:hover{
    color:#01bf71;
    transition: 0.2s ease-in-out;
}
`
export const SidebarText = styled.a`
color:#fff;
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
      color:#9FE6A0;
      
  }`