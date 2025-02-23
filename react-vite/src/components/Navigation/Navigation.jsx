// import { NavLink } from "react-router-dom";
// import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Dropdown from './Dropdown'
import ContactUs from './ContactUs'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const servicesOptions = [
  // { name: 'Overview', href:"/services"},
  { name: 'Financial Planning', href:"/financial-planning"},
  { name: 'Life Insurance', href:"/life-insurance"},
  { name: 'Annuities', href:"/annuities"},
  { name: 'Asset Management', href:"/asset-management"}
]

const navigation = [
  { name: 'Our Firm', current: false, href:"/about"},
  { name: 'Services', current: false, href:"/services", dropdown: true, options: servicesOptions},
  // { name: 'Blog', current: false, href:"/blog"},
  { name: 'Contact', current: false, href:"/contact-us"}
]

function Navigation() {
  return (
    <Disclosure as="nav" className="sticky bg-white top-0 shadow-xl w-full">
      <ContactUs />
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-black-400 hover:bg-black-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <a href="/">
              <img
                alt="Your Company"
                src="logo.jpg"
                className="h-11 w-auto hover:cursor-pointer"
                href="/"
              />
              </a>
            </div>
            <div className="hidden sm:ml-6 sm:block flex">
              <div className="relative flex space-x-3">
                {navigation.map((item) => (
                  item.dropdown ? <Dropdown key={item.name} item={{ name: item.name, options: item.options }} />
                  :
                  <a
                    key={item.name}
                    href={ item.href }
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      'text-black-500 hover:cursor-pointer mt-1', 'rounded-md px-4 py-2 font-medium', 'hover:text-blue-600',
                      'group'
                    )}>
                      {item.name}
                      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-400"></span>
                    </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-black-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium', 'group'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}

export default Navigation;
