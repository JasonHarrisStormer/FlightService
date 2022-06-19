import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { NavSection } from './NavSection';
import { NavItem } from './NavItem';
import { NavLink } from './NavLink';
import { Nav } from './Nav';

// This is an opinionated NavBar
export const AppNav = () => {

    return (
        <Nav backgroundColor='blue' color='white'>
            <NavSection jc="flex-start">
                <NavItem>
                    <NavLink to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/createflight"> Create Flight</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/createpassenger"> Create Passenger</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/flights" transitionColor="#0000FF">Search Flights</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/passengers"> Search Passengers</NavLink>
                </NavItem>
                
            </NavSection>
        </Nav>
    );
}