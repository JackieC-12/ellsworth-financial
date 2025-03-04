import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import "./Dropdown.css";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function Dropdown({ item }) {
  return (
    <Menu as="div" className="text-black-500 hover:cursor-pointer mt-1 rounded-md font-medium hover:text-blue-600 group">
        <MenuButton className="px-4 py-2">
          {item.name}
          <ChevronDownIcon aria-hidden="true" className="inline -mr-1 size-5 text-gray-400" />
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-400"></span>
        </MenuButton>

      <MenuItems
        transition
        modal={false}
        className="absolute mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
                {item.options.map((option) => (
                    <MenuItem
                    key={option.name}>
                  <a
                    href={option.href}
                    aria-current={option.current ? 'page' : undefined}
                    className={classNames(
                      'static z-1 block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden',
                    )}
                  >
                    {option.name}
                  </a>
                    </MenuItem>
                ))}
      </MenuItems>
    </Menu>
  )
}
