"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboardIcon,
  FileTextIcon,
  UsersIcon,
  ShoppingCartIcon,
  LineChartIcon,
  SettingsIcon,
  LogOutIcon,
  UserIcon
} from 'lucide-react';

const Sidebar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Dashboard', href: '/dashboard', icon: <LayoutDashboardIcon className="w-5 h-5" /> },
    { name: 'Tenders', href: '/tenders', icon: <FileTextIcon className="w-5 h-5" /> },
    { name: 'Vendors', href: '/vendors', icon: <UsersIcon className="w-5 h-5" /> },
    { name: 'Purchase Orders', href: '/orders', icon: <ShoppingCartIcon className="w-5 h-5" /> },
    { name: 'Analytics', href: '/analytics', icon: <LineChartIcon className="w-5 h-5" /> },
    { name: 'Settings', href: '/settings', icon: <SettingsIcon className="w-5 h-5" /> },
  ];

  return (
    <div className="w-64 flex flex-col bg-gray-50 border-r overflow-hidden">
      {/* Header */}
      <header className="flex items-start justify-center p-2 border-b whitespace-nowrap">
        <div>
          <h1 className="text-lg font-bold text-gray-800">Procurement Management</h1>
          <p className="text-sm text-gray-500">Admin Dashboard</p>
        </div>
      </header>

      {/* Navigation Items */}
      <nav className="flex-1 p-4 space-y-1 overflow-hidden">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 p-3 rounded-lg transition-colors whitespace-nowrap ${
              pathname === item.href
                ? 'bg-blue-100 text-blue-600'
                : 'hover:bg-gray-200 text-gray-700'
            }`}
          >
            {item.icon}
            <span className="text-sm font-medium">{item.name}</span>
           
          </Link>
        ))}
      </nav>

      {/* User Profile Section */}
      <div className="p-4 border-t flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <UserIcon className="w-5 h-5 text-blue-600" />
          </div>
          <div className="flex-1 whitespace-nowrap overflow-hidden">
            <h3 className="text-sm font-medium text-gray-800 truncate">Meraj adhikari</h3>
            <p className="text-xs text-gray-500 truncate">Procurement Manager</p>
          </div>
          <button className="p-2 hover:bg-gray-200 rounded-lg">
            <LogOutIcon className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
