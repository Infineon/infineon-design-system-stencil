import { IfxTreeView, IfxTreeViewItem } from '@infineon/infineon-design-system-react';

function TreeView() {
  return (
    <div>
      <IfxTreeView expandAllItems={true} label="Beispiel TreeView">
        <IfxTreeViewItem label="Root Folder" icon="folder" initiallyExpanded={true}>
          <IfxTreeViewItem label="Subfolder 1" icon="folder">
            <IfxTreeViewItem label="File 1.txt" icon="file"></IfxTreeViewItem>
            <IfxTreeViewItem label="File 2.txt" icon="file"></IfxTreeViewItem>
          </IfxTreeViewItem>
          <IfxTreeViewItem label="Subfolder 2" icon="folder">
            <IfxTreeViewItem label="File 3.txt" icon="file"></IfxTreeViewItem>
            <IfxTreeViewItem label="File 4.txt" icon="file"></IfxTreeViewItem>
          </IfxTreeViewItem>
        </IfxTreeViewItem>
        <IfxTreeViewItem label="Another Root" icon="folder">
          <IfxTreeViewItem label="File A.txt" icon="file"></IfxTreeViewItem>
          <IfxTreeViewItem label="File B.txt" icon="file"></IfxTreeViewItem>
        </IfxTreeViewItem>
      </IfxTreeView>

      <IfxTreeView label="TreeView mit deaktiviertem Item">
        <IfxTreeViewItem label="Aktiv" icon="file"></IfxTreeViewItem>
        <IfxTreeViewItem label="Deaktiviert" icon="folder" disableItem={true}>
          <IfxTreeViewItem label="Auch deaktiviert" icon="file"></IfxTreeViewItem>
        </IfxTreeViewItem>
        <IfxTreeViewItem label="Wieder aktiv" icon="file"></IfxTreeViewItem>
      </IfxTreeView>
    </div>
  );
}

export default TreeView;
