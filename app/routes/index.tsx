import Navbar from "~/components/navbar/Navbar"
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
    <div className="wrapper">
      <Navbar />
      <div className="content">
        <h1 >Welcome to Remix</h1>
        
      </div>
    </div>
  );
}
