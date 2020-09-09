import Document, { Html, Head, Main, NextScript } from 'next/document'
import { HTML_LANG } from '../lib/constants'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang={HTML_LANG}>
        <Head>
        </Head>
        <body className="font-body font-hairline">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
