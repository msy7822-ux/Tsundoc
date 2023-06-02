import { Header } from "./_components/common/header/header";
import { ClerkProvider } from "@clerk/nextjs";
import { ToastContainer } from "react-toastify";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

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
      <ClerkProvider>
        <body>
          <ToastContainer />
          <Header></Header>
          <div className="p-3 sm:p-5 sm:px-10">{children}</div>
        </body>
      </ClerkProvider>
    </html>
  );
}
