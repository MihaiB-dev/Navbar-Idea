import React from 'react';
import {SidebarContainer,Icon,CloseIcon,SidebarMenu,SidebarLink,SidebarWrapper,SidebarText} from "./SidebarElements";

const Sidebar = (props) => {
    return (
        <SidebarContainer isOpen={props.isOpen} onClick={props.toggle}>
            <Icon onClick={props.toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/news" >
                        <SidebarText>News</SidebarText>
                    </SidebarLink>
                    <SidebarLink to="/stores">
                    <SidebarText>Stores</SidebarText>
                    </SidebarLink>
                    <SidebarLink to="/realease" >
                    <SidebarText>realease</SidebarText>
                    </SidebarLink>
                    <SidebarLink to="/analizer" >
                    <SidebarText>Analizer</SidebarText>
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
