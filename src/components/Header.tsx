"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Autoridades", href: "/autoridades" },
  { label: "Productos", href: "/productos" },
  { label: "Servicios", href: "/servicios" },
  {
    label: "Socios",
    href: "#",
    children: [
      { label: "Socios Directos", href: "/socios/directos" },
      { label: "Empresas Representadas", href: "/socios/representadas" },
    ],
  },
  { label: "Instituciones Vinculadas", href: "/instituciones" },
  { label: "Contacto", href: "/contacto" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="flex flex-col leading-none">
              <span className="text-[#465FCB] font-bold text-xl tracking-tight">CIPIBIC</span>
              <span className="text-[#7A7A7A] text-[10px] font-medium tracking-wide uppercase">Argentina</span>
            </div>
          </Link>

          {/* Nav desktop */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="px-4 py-2 text-sm font-medium text-[#54595F] hover:text-[#465FCB] transition-colors flex items-center gap-1">
                    {item.label}
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openDropdown === item.label && (
                    <div className="absolute top-full left-0 bg-white border border-gray-100 shadow-lg rounded-md py-1 min-w-48">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-[#54595F] hover:bg-[#6EC1E4]/10 hover:text-[#465FCB] transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-[#54595F] hover:text-[#465FCB] transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}

            <Link
              href="/area-socios"
              className="ml-4 px-4 py-2 bg-[#465FCB] text-white text-sm font-medium rounded-md hover:bg-[#3a4fb5] transition-colors"
            >
              Área de Socios
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-[#54595F]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block px-2 py-2 text-sm font-medium text-[#54595F] hover:text-[#465FCB]"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block px-6 py-2 text-sm text-[#7A7A7A] hover:text-[#465FCB]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
            <Link
              href="/area-socios"
              className="mx-2 mt-2 px-4 py-2 bg-[#465FCB] text-white text-sm font-medium rounded-md text-center"
              onClick={() => setMobileOpen(false)}
            >
              Área de Socios
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
