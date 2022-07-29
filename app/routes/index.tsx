import Navbar from "~/components/navbar/Navbar"
import styles from "~/styles/home.css";
import { RiSearch2Line } from "react-icons/ri"

export function links() {
  return [
    { 
      rel: "stylesheet", 
      href: styles
    }
  ];
}

export default function Index() {
  return (
    <main className="wrapper">
      <Navbar />
      <section className="content">
        <div className="header-section">
          <h1 className="big-heading">
            بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ
          </h1>
        </div>
        <form action="" className="search-form">
          <div className="searchbar-wrapper">
            <RiSearch2Line size={20} color="#293462"/>
            <input type="text" className="searchbar" placeholder="what are you looking for?" />
          </div>
        </form>
      </section>
    </main>
  );
}
