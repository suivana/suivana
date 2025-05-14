import "@/src/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/src/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SuiVana - DAO Equity Launchpad on Sui Blockchain",
  description:
    "SuiVana connects innovative Web3 projects with investors through transparent, blockchain-based equity tokens on the Sui network.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
