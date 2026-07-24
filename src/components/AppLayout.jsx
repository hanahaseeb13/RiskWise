import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import InterventionModal from './InterventionModal';
import PageTransition from './PageTransition';

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-bg px-4 pb-10 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl gap-6">
        <Sidebar />
        <div className="min-w-0 flex-1">
          <Navbar />
          <PageTransition>
            <Outlet />
          </PageTransition>
        </div>
      </div>
      <InterventionModal />
    </div>
  );
}
