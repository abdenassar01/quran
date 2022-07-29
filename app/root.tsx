import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import StylesContext from "./stylesContext";
import { useContext } from "react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Quran",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {

  let styles = useContext(StylesContext);

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        { styles !== null && <style>{styles}</style> }
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
