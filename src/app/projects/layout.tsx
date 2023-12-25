import '../globals.css';


export const metadata = {
  title: "HomePage",
  description: "HomePage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      {children}
      </body>
    </html>
  )
}
