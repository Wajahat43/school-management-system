import Header from "@/components/header/header";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import StoreProvider from "@/redux/store-provider";

export const metadata = {
  title: "School Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class">
          <StoreProvider>
          <Header />
          {children}
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
