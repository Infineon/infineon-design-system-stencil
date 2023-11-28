import React, { useEffect, useRef } from 'react';
import { IfxSidebar, IfxSidebarItem } from '@infineon/infineon-design-system-react';

function Sidebar() {
  const Sidebar = useRef(null);

  useEffect(() => {
    const sidebarRef = Sidebar.current;
    const handleSidebarItem = (e) => {
      e.detail.component.setAttribute('active', 'true')
      if(e.detail.value === 'thisPage') { 
        //do something
      }
    };
     
    sidebarRef.addEventListener('ifxSidebar', handleSidebarItem);
  
    return () => {
      if (sidebarRef.current) {
        sidebarRef.current.removeEventListener('ifxSidebar', handleSidebarItem);
      }
    };
  }, []);



  return (
    <div >
        <IfxSidebar application-name="Application name"  ref={Sidebar}>
        <IfxSidebarItem active="false">
          Header Section
          <IfxSidebarItem icon="image-16" active="false" >
            Second layer
            <IfxSidebarItem target="_blank" active={false} icon="image-16">
            3rd layer Menu Item
            </IfxSidebarItem>

            <IfxSidebarItem target="_blank" active="false" icon="image-16" value="thisPage">
            This Page
            </IfxSidebarItem>

            <IfxSidebarItem target="_blank" active="false" icon="image-16">
            3rd layer Menu Item
            </IfxSidebarItem>
          </IfxSidebarItem>

          <IfxSidebarItem icon="image-16" active="false">
            Second layer
            <IfxSidebarItem target="_blank" icon="image-16" active="false">
            Menu Item
            </IfxSidebarItem>
          </IfxSidebarItem>

          <IfxSidebarItem icon="image-16" active="false">
            Second layer
            <IfxSidebarItem target="_blank" icon="image-16" active="false">
            Menu Item
            </IfxSidebarItem>
          </IfxSidebarItem>
        </IfxSidebarItem>
        
        <IfxSidebarItem active="false">
        Header Section
        <IfxSidebarItem icon="image-16" active="false">
          Menu Item
          <IfxSidebarItem active="false" target="_blank" icon="image-16">
          Sub Menu Item
          </IfxSidebarItem>
          <IfxSidebarItem target="_blank" icon="image-16" value="thisPage">
          This one too
          </IfxSidebarItem>
          <IfxSidebarItem target="_blank" icon="image-16">
          Menu Item
          </IfxSidebarItem>
        </IfxSidebarItem>
        <IfxSidebarItem icon="image-16">
          Menu Item
          <IfxSidebarItem target="_blank" icon="image-16">
          Menu Item
          </IfxSidebarItem>
        </IfxSidebarItem>
        <IfxSidebarItem icon="image-16">
          Menu Item
          <IfxSidebarItem target="_blank" icon="image-16">
          Menu Item
          </IfxSidebarItem>
        </IfxSidebarItem>
        </IfxSidebarItem>

        <IfxSidebarItem>
        Header Section
        <IfxSidebarItem icon="image-16">
          Menu Item
          <IfxSidebarItem href="http://google.com" target="_blank" icon="image-16">
          Menu Item
          </IfxSidebarItem>
          <IfxSidebarItem href="http://google.com" target="_blank" icon="image-16">
          Menu Item
          </IfxSidebarItem>
          <IfxSidebarItem href="http://google.com" target="_blank" icon="image-16">
          Menu Item
          </IfxSidebarItem>
        </IfxSidebarItem>
        <IfxSidebarItem icon="image-16">
          Menu Item
          <IfxSidebarItem href="http://google.com" target="_blank" icon="image-16">
          Menu Item
          </IfxSidebarItem>
        </IfxSidebarItem>
        <IfxSidebarItem icon="image-16">
          Menu Item
          <IfxSidebarItem href="http://google.com" target="_blank" icon="image-16">
          Menu Item
          </IfxSidebarItem>
        </IfxSidebarItem>
        </IfxSidebarItem>
    </IfxSidebar>
    </div>
  )
}

export default Sidebar;


