import type { Metadata } from "next";
import "./globals.css";
import { Saira} from "next/font/google";
const saira = Saira({
  weight: ["300","400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Capputeeno",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${saira.className}`}>
        {children}
      </body>
    </html>
  );
}
