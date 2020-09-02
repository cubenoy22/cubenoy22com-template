import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link 
            href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:100"
            rel="stylesheet"
          />
        </Head>
        <body className="font-body font-hairline">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
