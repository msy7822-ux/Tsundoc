import { Header } from "./_shared/components/common/header/header";
import "./globals.css";

const siteName = "TsunDoc";
const description = "「後で読もう」と思った記事を積読できるサービス";
const url = "https://本番のドメイン";

export const metadata = {
  title: {
    default: siteName,
    /** `next-seo`の`titleTemplate`に相当する機能 */
    template: `%s - ${siteName}`,
  },
  description,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
    site: "@サイト用アカウントのTwitterID",
    creator: "@作者のTwitterID",
  },
  verification: {
    google: "サーチコンソールのやつ",
  },
  alternates: {
    canonical: url,
  },
};

// 以下略

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="relative">
        <div className="fixed left-0 top-0 z-80 h-82 w-full">
          <Header></Header>
        </div>
        <div
          className="
            mx-auto my-85 w-full max-w-5xl
            p-12 sm:my-95 lg:p-0
          "
        >
          {children}
        </div>
      </body>
    </html>
  );
}
