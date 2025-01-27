import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUserCircle } from 'react-icons/fa';
import { thunkLogout } from "../../redux/session";
import OpenModalMenuItem from "./OpenModalMenuItem";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

function ProfileButton() {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const user = useSelector((store) => store.session.user);
  const ulRef = useRef();

  const toggleMenu = (e) => {
    e.stopPropagation(); // Keep from bubbling up to document and triggering closeMenu
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (ulRef.current && !ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

  const logout = (e) => {
    e.preventDefault();
    dispatch(thunkLogout());
    closeMenu();
  };

  return (
    <Menu as="div" className="relative ml-3">
    <div>
      <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
        <span className="absolute -inset-1.5" />
        <span className="sr-only">Open user menu</span>
        <img
          alt=""
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="size-8 rounded-full"
        />
      </MenuButton>
    </div>
    <MenuItems
      transition
      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
    >
      <MenuItem>
        <a
          className="block px-4 py-2 text-sm text-gray-700 hover:cursor-pointer data-[focus]:bg-gray-100 data-[focus]:outline-none"
        >
        <OpenModalMenuItem
          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
          itemText="Log In"
          onItemClick={closeMenu}
          modalComponent={<LoginFormModal />}
           />
        </a>
      </MenuItem>
      <MenuItem>
        <a
          className="block px-4 py-2 text-sm text-gray-700 hover:cursor-pointer data-[focus]:bg-gray-100 data-[focus]:outline-none"
        >
          <OpenModalMenuItem
            itemText="Sign Up"
            onItemClick={closeMenu}
            modalComponent={<SignupFormModal />}
            />
        </a>
      </MenuItem>
      <MenuItem>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
        >
          Sign out
        </a>
      </MenuItem>
    </MenuItems>
  </Menu>
    // <>
    //   <button onClick={toggleMenu}>
    //     <FaUserCircle />
    //   </button>
    //   {showMenu && (
    //     <ul className={"profile-dropdown"} ref={ulRef}>
    //       {user ? (
    //         <>
    //           <li>{user.username}</li>
    //           <li>{user.email}</li>
    //           <li>
    //             <button onClick={logout}>Log Out</button>
    //           </li>
    //         </>
    //       ) : (
    //         <>
    //           <OpenModalMenuItem
    //             itemText="Log In"
    //             onItemClick={closeMenu}
    //             modalComponent={<LoginFormModal />}
    //           />
    //           <OpenModalMenuItem
    //             itemText="Sign Up"
    //             onItemClick={closeMenu}
    //             modalComponent={<SignupFormModal />}
    //           />
    //         </>
    //       )}
    //     </ul>
    //   )}
    // </>
  );
}

export default ProfileButton;
