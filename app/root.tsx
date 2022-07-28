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
  title: "New Remix App",
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
        {/* <style dangerouslySetInnerHTML={{ __html:</>${styles}<style> }} /> */}
        {/* { styles !== null && ( <style dangerouslySetInnerHTML={{ __html:</style>${styles}<style> }} />)} */}
        { styles }
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
