import { Header } from "./_components/common/header/header";
import { ClerkProvider } from "@clerk/nextjs";
import { ToastContainer } from "react-toastify";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "TusnDoc",
  description: "「後で読もう」と思った記事を積読できるサービス",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <ClerkProvider>
        <head>
          {/* app dirだと書き方ちょっと違うかも */}
          <link rel="manifest" href="/manifest.json" />
        </head>
        <body>
          <ToastContainer />
          <Header></Header>
          <div className="p-3 sm:p-5 sm:px-10 w-full">{children}</div>
        </body>
      </ClerkProvider>
    </html>
  );
}
