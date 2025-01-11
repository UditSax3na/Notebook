import "@/styles/globals.css";
export const metadata = {
  title: "Notebook",
  description: "Notebook",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}