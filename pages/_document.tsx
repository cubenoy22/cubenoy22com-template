import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
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
