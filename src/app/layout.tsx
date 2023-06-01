import { Header } from "./_components/common/header/header";
import "./globals.css";

export const metadata = {
  title: "Yondoc",
  description: "積読をせずに完読するのを優しくサポートするサービスです。",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body>
        <Header></Header>
        <div className="p-3 sm:p-5">{children}</div>
      </body>
    </html>
  );
}
