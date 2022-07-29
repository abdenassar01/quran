import { NavLink } from "@remix-run/react";

function Navbar() {
  return (
    <header className="header">
        <NavLink to="/" className="logo">
            <img src="https://i.imgur.com/WzmrQug.png" alt="muslim app logo" className="logo-img" />
            <h2 className="logo-header">Muslim</h2>
        </NavLink>
        <nav className="nav">
            <ul className="links">
            {
                ['quran', 'azkar', 'sunnah', 'about'].map(item => (
                    <li className="link-item" key={item}>
                        <NavLink className="link" to={`/${item}`}>{item}</NavLink>
                    </li>
                ))
            }
            </ul>
        </nav>
    </header>
  )
}

export default Navbar