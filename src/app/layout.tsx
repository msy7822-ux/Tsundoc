import { Header } from "./_components/common/header/header";
import { ClerkProvider } from "@clerk/nextjs";
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
        <body>
          <Header></Header>
          <div className="p-3 sm:p-5 sm:px-10 w-full">{children}</div>
        </body>
      </ClerkProvider>
    </html>
  );
}
