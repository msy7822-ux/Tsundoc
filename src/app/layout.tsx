import { ClerkProvider } from "@clerk/nextjs";
import { Header } from "./_components/common/header/header";
import "./globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <ClerkProvider>
        <head>
          <link rel="manifest" href="/manifest.json" />
        </head>
        <body className="relative">
          <div className="fixed left-0 top-0 z-50 h-80 w-full">
            <Header></Header>
          </div>
          <div
            className="
            mx-auto mt-80 w-full
            max-w-5xl p-12 lg:p-0
          "
          >
            {children}
          </div>
        </body>
      </ClerkProvider>
    </html>
  );
}
