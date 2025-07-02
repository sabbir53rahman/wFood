import { Provider } from "react-redux";
import { store } from "@/redux/app/store";

import "./globals.css";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/Footer";
import ServerProvider from "@/components/serverProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ServerProvider>
          <Navbar />
          {children}
          <Footer />
        </ServerProvider>
      </body>
    </html>
  );
}
