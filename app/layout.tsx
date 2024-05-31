export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export const metadata = {
  metadataBase: new URL('https://frame-superbase-cepn6agte-manoj-kumars-projects-972aa0cf.vercel.app'),
  // Other metadata properties
  title: 'SuperBase',
  description: 'SuperBase',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}