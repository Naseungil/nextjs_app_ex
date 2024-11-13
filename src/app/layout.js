import localFont from "next/font/local";
import "./globals.css";

/*
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
*/

export const metadata = {
  title: "Web tutorials",
  description: "Generated by Green",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body> */}
      <body>
        <h1>
          <a href="/">WEB</a>
        </h1>
        <nav>
          <ol>
            <li>
              <a href="/read/1">html</a>
            </li>
            <li>
              <a href="/read/2">css</a>
            </li>
            <li>
              <a href="/read/3">javascript</a>
            </li>
          </ol>
        </nav>

        {children}

        <ul>
          <li>
            <a href="/create">Create</a>
          </li>
          <li>
            <a href="/update/1">Update</a>
          </li>
          <li>
            <button>delete</button>
          </li>
        </ul>
      </body>
    </html>
  );
}
