import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

const nav = () => {
    return (
        <nav>
            <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "link-active" : "link")}
            >
                Home
            </NavLink>
            <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "link-active" : "link")}
            >
                About
            </NavLink>
            <NavLink
                to="/projects"
                className={({ isActive }) => (isActive ? "link-active" : "link")}
            >
                Projects
            </NavLink>
            <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "link-active" : "link")}
            >
                Contact
            </NavLink>
            <Outlet></Outlet>
        </nav>
    )
}

export default nav