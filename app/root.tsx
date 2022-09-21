import globalStyles from "~/styles/global.css";
import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Quran",
  viewport: "width=device-width,initial-scale=1",
});

export function links() {
  return [
    { 
      rel: "stylesheet", 
      href: globalStyles
    },
    { 
      rel: "icon", 
      href: "https://i.imgur.com/WzmrQug.png",
      sizes: "16x16"
    }
  ];
}

export default function App() {

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar />
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <html lang="en">
    <head>
      <Meta />
      <Links />
    </head>
    <body>
      <Navbar />
      <div className="error-wrapper">
        <h1>Caught</h1>
        <p>Status: {caught.status}</p>
        <pre>
          <code>{JSON.stringify(caught.data, null, 2)}</code>
        </pre>
      </div>
      <Footer />
      <ScrollRestoration />
      <Scripts />
      <LiveReload />
    </body>
  </html>
    
  );
}