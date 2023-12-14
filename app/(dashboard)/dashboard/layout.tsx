import Sidebar from "@/app/components/Sidebar";

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
      <Sidebar />
      <section className="border w-full p-4 ">{children}</section>
    </main>
  );
}
