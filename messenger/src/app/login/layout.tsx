export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <div className="mainBackground w-screen h-screen">{children}</div>
    </div>
  );
}
