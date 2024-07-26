import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';

import { ThemeProvider } from "./hooks/themeContext";
import { ToastContainer } from "react-toastify";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr">
      <body>
        <ThemeProvider>
          <div className="h-screen overflow-y-auto">{children}</div>
          <ToastContainer />
        </ThemeProvider>
      </body>
    </html>
  );
}
