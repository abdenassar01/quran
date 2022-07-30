import { Outlet } from "@remix-run/react"
import HeroSection from "~/components/hero/HeroSection";
import styles from "~/styles/home.css";

export function links() {
    return [
        { 
            rel: "stylesheet", 
            href: styles
        }
    ];
}

function quran() {
  return (
    <div>
        <HeroSection />
        quran
        <Outlet />
    </div>
  )
}

export default quran