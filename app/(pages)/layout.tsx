import "../globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr">
      <body>
        <div className="w-full h-screen relative">{children}</div>
      </body>
    </html>
  );
}
