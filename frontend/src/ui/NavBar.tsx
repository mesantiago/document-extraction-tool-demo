"use client";
import Link from "next/link";
import { DocumentTextIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from "react";

export default function About() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: 'Home', url: '/'},
    { name: 'About', url: '/about'},
    { name: 'Help', url: '/help'}
  ];

  return (
    <div>
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href='/' className="-m-1.5 p-1.5 text-purple-500">
            <DocumentTextIcon className="size-6 inline align-bottom"></DocumentTextIcon>
            <span>DExtract Demo</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={() => setMenuOpen(true)}>
            <Bars3Icon aria-hidden="true" className="size-6"></Bars3Icon>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link href="/" className="text-sm/6 font-semibold text-gray-500">Home</Link>
          <Link href="/about" className="text-sm/6 font-semibold text-gray-500">About</Link>
          <Link href="/help" className="text-sm/6 font-semibold text-gray-500">Help</Link>
        </div>
      </nav>
      {isMenuOpen ? (
        <div role="dialog" aria-modal="true" className="lg:hidden" >
          <div className="fixed inset-0 z-50"></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href='/' className="-m-1.5 p-1.5 text-purple-500">
                <DocumentTextIcon className="size-6 inline align-bottom"></DocumentTextIcon>
                <span>DExtract Demo</span>
              </Link>
              <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMenuOpen(false)}>
                <XMarkIcon aria-hidden="true" className="size-6"></XMarkIcon>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {links.map(link => (<Link key={link.name} href={link.url} className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50" onClick={() => setMenuOpen(false)}>{link.name}</Link>))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null }
    </div>
  );
};
