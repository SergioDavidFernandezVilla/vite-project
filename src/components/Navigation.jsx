import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <>
      <header>
        <nav className="navbar_title">
          <ul>
            <Link className="a_link_title" to="/">
              <h1 className="title_nav">Website Rick And Morty</h1>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}
