import Sidebar from "@/app/component/sidebar"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <div className="w-1/4 border-r-2 border-black">
        <Sidebar/>
      </div>
      <div className="mainBackground w-full">{children}</div>
    </div>
  );
}
