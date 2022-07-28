import ReactDOMServer from "react-dom/server";
import type { EntryContext } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";

import StylesContext from "./stylesContext";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const sheet = new ServerStyleSheet();

  renderToString(
    <StylesContext.Provider value={null}>
          <RemixServer context={remixContext} url={request.url} />
    </StylesContext.Provider>
    );

    let styles = sheet.getStyleTags();
    sheet.seal();


    let markup = ReactDOMServer.renderToString(
      <StylesContext.Provider value={styles}>
        <RemixServer context={remixContext} url={request.url} />
      </StylesContext.Provider>
    );

  responseHeaders.set("Content-Type", "text/html");

  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
