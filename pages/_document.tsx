import React from "react";
import Document, {
  DocumentContext,
  Head,
  Main,
  NextScript
} from "next/document";
import { ServerStyleSheet } from "styled-components";
import { ServerStyleSheets } from "@material-ui/core/styles";
import theme from "../theme";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const styledComponentsSheets = new ServerStyleSheet();
    const materialUISheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => {
            return materialUISheets.collect(
              styledComponentsSheets.collectStyles(<App {...props} />)
            );
          }
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          ...React.Children.toArray(initialProps.styles),
          styledComponentsSheets.getStyleElement(),
          materialUISheets.getStyleElement()
        ]
      };
    } finally {
      styledComponentsSheets.seal();
    }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="theme-color" content={theme.palette.primary.main} />
        </Head>
        <body style={{ backgroundColor: "#ebeef2" }}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
