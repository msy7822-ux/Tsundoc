import { Header } from "./_components/common/header/header";
import { ClerkProvider } from "@clerk/nextjs";
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
    <ClerkProvider
      appearance={{
        layout: {
          logoImageUrl: "https://clerk.dev/logo.png",
          logoPlacement: "inside",
          showOptionalFields: true,
          socialButtonsPlacement: "top",
          socialButtonsVariant: "iconButton",
        },
        elements: {
          formButtonPrimary: "bg-main hover:opacity-50 text-sm normal-case",
        },
      }}
    >
      <html lang="ja">
        <body>
          <Header></Header>
          <div className="p-3 sm:p-5">{children}</div>
        </body>
      </html>
    </ClerkProvider>
  );
}
