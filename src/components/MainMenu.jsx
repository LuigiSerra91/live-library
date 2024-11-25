import { NavLink } from "react-router-dom"

export default function MainMenu() {
    return (
        <nav>
            <NavLink to="/">Home </NavLink>
            <NavLink to="/books">books</NavLink>
            <NavLink to="/abouts">abouts</NavLink>
            <NavLink to="/contacts">contacts</NavLink>
        </nav>
    )
}