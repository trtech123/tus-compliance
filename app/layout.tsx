export const metadata = {
  title: 'Compliance Portal',
  description: 'Privacy Policy, Terms of Service, and Data Deletion',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
