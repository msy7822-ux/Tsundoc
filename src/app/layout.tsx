import "./globals.css";

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
        <div className="fixed left-0 top-0 z-50 h-80 w-full">
          {/* <Header></Header> */}
        </div>
        <div
          className="
            mx-auto my-80 w-full
            max-w-5xl p-12 lg:p-0
          "
        >
          {children}
        </div>
      </body>
    </html>
  );
}
