import SideBar from "@/components/dashboard/SideBar";

function Layout({ children }) {
  return (
    <div className="flex h-screen w-full bg-white font-sans text-slate-900">
      <SideBar />
      <main className="flex-1 overflow-y-auto bg-white p-8 lg:p-12">
        {children}
      </main>
    </div>
  );
}

export default Layout;
