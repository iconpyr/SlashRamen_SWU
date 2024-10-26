// import localFont from "next/font/local";
import "./globals.css";
import { Inter } from 'next/font/google'
import { Anuphan } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const anuphan = Anuphan({
  subsets: ['latin'],
  display: 'swap',
})

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "Ramen Ticket Machine",
  description: "Created by Piyorod Pasaganon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={anuphan.className}>
      <body>
      {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > */}
        {children}
      </body>
    </html>
  );
}
