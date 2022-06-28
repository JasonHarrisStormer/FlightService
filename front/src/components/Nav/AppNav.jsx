import { NavSection } from './NavSection';
import { NavItem } from './NavItem';
import { NavLink } from './NavLink';
import { Nav } from './Nav';

// This is an opinionated NavBar that I am using to navigate the website
export const AppNav = () => {

    return (
        <Nav backgroundColor='#096f97' color='black'>
            <NavSection jc="flex-start">
                <NavItem>
                    <NavLink to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/flights">Complete Flight List</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/createflight"> Create Flight</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/searchflight"> Search Flight</NavLink>
                </NavItem> 
                <NavItem>
                    <NavLink to="/editflight"> Edit Flight</NavLink>
                </NavItem>             
            </NavSection>
        </Nav>
    );
}