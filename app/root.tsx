import globalStyles from "~/styles/global.css";
import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Navbar from "./components/navbar/Navbar";

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
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
