import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "./hooks/themeContext";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr">
      <body>
        <ThemeProvider>
          <div className=" overflow-y-auto">{children}</div>
          <ToastContainer />
        </ThemeProvider>
      </body>
    </html>
  );
}
