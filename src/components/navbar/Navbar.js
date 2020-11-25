import React from 'react';
import { NavLink } from 'react-router-dom';
import { List, Segment } from "semantic-ui-react";

const Navbar = () => {
    return (
        <Segment>
            <List link horizontal>
                <List.Item active ><NavLink to="/"><h4>Dashboard</h4></NavLink></List.Item>
                <List.Item active ><NavLink to="/create"><h4>Create Note</h4></NavLink></List.Item>
                <List.Item active ><NavLink to="/about"><h4>About</h4></NavLink></List.Item>
            </List>
        </Segment>
    );
};

export default Navbar;
