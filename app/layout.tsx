import "./globals.css";
import Sidebar from "../components/ui/Sidebar";


export const metadata = {
  title: "Stock App",
  description: "Simple Stock Management UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body>
<<<<<<< HEAD
        
=======
>>>>>>> a2fad253fba2f1bb84a19a2035dd48566999226c
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 bg-slate-50 p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
