import React, { useState } from 'react';
import { Button, Drawer } from 'antd';

import { IoMenu } from "react-icons/io5";
import NavbarLinks from '../NavbarLinks';

const NavbarDrawer = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="link" onClick={showDrawer}>
        <IoMenu size={30} color='#bd6a93'/>
      </Button>
      <Drawer 
       onClose={onClose} 
       open={open}
        styles={{
          body: { 
            background: '#151515'
          },
          header: {
            background: '#B4A5A5'
        }}}
        placement='left'
        onClick={() => {setOpen(false)}}>

        <NavbarLinks />
      </Drawer>
    </>
  );
};
export default NavbarDrawer;