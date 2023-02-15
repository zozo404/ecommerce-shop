import React from 'react';
// import link
import { Link } from 'react-router-dom';
// import icons
import { IoMdArrowForward } from 'react-icons/io'
import { FiTrash2 } from 'react-icons/fi'

// import components
import CartItem from './CartItem';
// import sidebar context
import SidebarContext from '../contexts/SidebarContext';
import { useContext } from 'react';

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  return <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-al duration-300 z-20 px-4 lg:px-[35px]`}>Sidebar</div>;
};

export default Sidebar;
