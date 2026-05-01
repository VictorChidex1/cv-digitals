import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { SeoUpdater } from './SeoUpdater';

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 font-sans text-slate-900">
      <SeoUpdater />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
