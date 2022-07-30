import { RiSearch2Line } from "react-icons/ri"

function HeroSection() {
  return (
    <main className="wrapper">
      <section className="content">
        <div className="header-section">
          <h1 className="big-heading">
            بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ
          </h1>
        </div>
        <form action="/quran" method="GET" className="search-form">
          <div className="searchbar-wrapper">
            <RiSearch2Line size={20} color="#293462"/>
            <input type="text" name="q" className="searchbar" placeholder="what are you looking for?" />
            <button type="submit" className="submit">Search</button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default HeroSection