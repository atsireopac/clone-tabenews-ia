import "./globals.css";

export const metadata = {
  title: "Caio e Mirela",
  description: "Caio e Mirela",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
