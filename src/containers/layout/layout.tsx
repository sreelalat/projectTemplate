import Navbar from '@/components/navbar/navbar';
import Sidebar from '@/components/sidebar/sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex flex-col bg-slate-100 min-h-screen">
      <Navbar />
      <div className="flex flex-1 min-h-full ">
        <Sidebar />
        <div className='flex-1 min-h-full'>
          <Outlet />
          </div>
        
      </div>
    </div>
  );
};

export default Layout;
