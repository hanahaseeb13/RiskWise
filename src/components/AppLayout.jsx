import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import InterventionModal from './InterventionModal';
import PageTransition from './PageTransition';

export default function AppLayout() {
  return (
    <div className="flex min-h-screen bg-[#141414]">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <Navbar />
        <main className="flex-1 px-5 py-6 sm:px-8 sm:py-8">
          <PageTransition>
            <Outlet />
          </PageTransition>
        </main>
      </div>
      <InterventionModal />
    </div>
  );
}
