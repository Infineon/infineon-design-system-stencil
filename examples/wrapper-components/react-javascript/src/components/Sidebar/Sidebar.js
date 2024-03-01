import React, { useRef, useEffect } from 'react';
import { IfxSidebar, IfxSidebarItem, IfxModal, IfxButton, IfxSidebarTitle } from '@infineon/infineon-design-system-react';


function Sidebar() {
  const modalRef = useRef();

  const sidebarItemRefModalOpener = useRef(null);  // Create a ref for the specific sidebar item
  const sidebarItemRefExampleClick = useRef(null);  // Create a ref for the specific sidebar item

  useEffect(() => {
    const sidebarItemElementModalOpener = sidebarItemRefModalOpener.current;
    const sidebarItemElementExampleClick = sidebarItemRefExampleClick.current;

    // Add event listener for 'ifxSidebarActionItem' event on a specific sidebarItemElement
    const openModal = (event) => {
      console.log("Nested Sidebar action item clicked", event.detail);
      modalRef.current.opened = true;
    }
    // Add event listener for 'ifxSidebarActionItem' event on a specific sidebarItemElement
    const handleNavigationItemClicked = (event) => {
      console.log("Nested Sidebar navigation item clicked", event.detail);
    }

    sidebarItemElementModalOpener.addEventListener('ifxSidebarActionItem', openModal);
    sidebarItemElementExampleClick.addEventListener('ifxSidebarNavigationItem', handleNavigationItemClicked);

    // Return a cleanup function to remove the event listener
    return () => {
      sidebarItemElementModalOpener.removeEventListener('ifxSidebarActionItem', openModal);
      sidebarItemElementExampleClick.removeEventListener('ifxSidebarNavigationItem', handleNavigationItemClicked);

    };
  }, []);  // Empty array means the effect will run only on mount and unmount

  const handleCloseModal = () => {
    modalRef.current.opened = false;
  };

  const handleModalBtnClick = () => {
    console.log("modal button clicked")
  };


  return (
    <div>
      <IfxSidebar applicationName="Application Name" initialCollapse={false}>
        <IfxSidebarTitle>Item Title</IfxSidebarTitle>
        <IfxSidebarItem  >
          Header Section
          <IfxSidebarItem icon="image-16" >
            Menu Item
            <IfxSidebarItem active="true" target="_blank" icon="image-16">
              Menu Item 1
            </IfxSidebarItem>
            <IfxSidebarItem is-action-item="true" ref={sidebarItemRefModalOpener} target="_blank" icon="image-16">
              Open modal
            </IfxSidebarItem>
            <IfxSidebarItem target="_blank" ref={sidebarItemRefExampleClick} icon="image-16">
              Menu Item 3
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
            <IfxSidebarItem target="_blank" icon="image-16">
              Menu Item
            </IfxSidebarItem>
            <IfxSidebarItem target="_blank" icon="image-16">
              Menu Item
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
      </IfxSidebar>

      <IfxModal ref={modalRef} caption="Modal Title" variant="default" close-on-overlay-click="false">
        <div slot="content">
          <span>Hello. Welcome. What a pleasure it is to have you.</span>
        </div>
        <div slot="buttons">
          <IfxButton variant="secondary" onClick={handleModalBtnClick}>Console output</IfxButton>
          <IfxButton onClick={handleCloseModal}>Close</IfxButton>
        </div>
      </IfxModal>
      <ifx-button onClick={() => modalRef.current.opened = true}>Open Modal</ifx-button>

    </div>

  )
}

export default Sidebar;


