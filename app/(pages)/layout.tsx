import "../globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr">
      <body>
        <div className="h-screen overflow-y-auto px-3 py-5">{children}</div>
      </body>
    </html>
  );
}
