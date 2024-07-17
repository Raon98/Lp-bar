import "./globals.css";
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
          <div className="h-screen overflow-y-auto">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
