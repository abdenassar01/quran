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

export default function Index() {
  return (
    <HeroSection />
  );
}
