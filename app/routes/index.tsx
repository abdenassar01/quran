import { Link } from "@remix-run/react";
import { Fragment } from "react";
import HeroSection from "~/components/hero/HeroSection";
import Main from "~/components/main/Main";
import styles from "~/styles/home.css";

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
    <Fragment>
      <HeroSection />
      <Main />
      <div className="main-button-wrapper">
        <Link to="/quran" className="btn">Browse Quran</Link>
      </div>
    </Fragment>
  );
}
