import { IfxTreeView, IfxTreeViewItem } from '@infineon/infineon-design-system-react';

function TreeView() {
  return (
    <div className="component">
      <h2>Tree View</h2>

      <h3>Default</h3>
      <IfxTreeView label="Tree Example" aria-label="Tree View">
        <IfxTreeViewItem icon="folder" initially-expanded="true" value="root-folder">
          Root Folder
          <IfxTreeViewItem slot="children" icon="folder" initially-expanded="true" value="subfolder-1">
            Subfolder 1
            <IfxTreeViewItem slot="children" icon="file" value="file-1-1">File 1-1.txt</IfxTreeViewItem>
            <IfxTreeViewItem slot="children" icon="file" value="file-1-2">File 1-2.txt</IfxTreeViewItem>
            <IfxTreeViewItem slot="children" icon="folder" value="subfolder-1-1">
              Subfolder 1-1
              <IfxTreeViewItem slot="children" icon="file" value="file-1-1-1">File 1-1-1.txt</IfxTreeViewItem>
              <IfxTreeViewItem slot="children" icon="file" value="file-1-1-2">File 1-1-2.txt</IfxTreeViewItem>
            </IfxTreeViewItem>
          </IfxTreeViewItem>
          <IfxTreeViewItem slot="children" icon="folder" value="subfolder-2">
            Subfolder 2
            <IfxTreeViewItem slot="children" icon="file" value="file-2-1">File 2-1.txt</IfxTreeViewItem>
            <IfxTreeViewItem slot="children" icon="folder" value="subfolder-2-1">
              Subfolder 2-1
              <IfxTreeViewItem slot="children" icon="file" value="file-2-1-1">File 2-1-1.txt</IfxTreeViewItem>
              <IfxTreeViewItem slot="children" icon="folder" value="subfolder-2-1-1">
                Subfolder 2-1-1
                <IfxTreeViewItem slot="children" icon="file" value="file-2-1-1-1">File 2-1-1-1.txt</IfxTreeViewItem>
              </IfxTreeViewItem>
            </IfxTreeViewItem>
          </IfxTreeViewItem>
          <IfxTreeViewItem slot="children" icon="file" value="file-at-root">File at root.txt</IfxTreeViewItem>
        </IfxTreeViewItem>
        <IfxTreeViewItem icon="folder" value="another-root">
          Another Root Folder
          <IfxTreeViewItem slot="children" icon="file" value="file-a">File A.txt</IfxTreeViewItem>
          <IfxTreeViewItem slot="children" icon="file" value="file-b">File B.txt</IfxTreeViewItem>
        </IfxTreeViewItem>
        <IfxTreeViewItem icon="file" value="single-file">Single File</IfxTreeViewItem>
      </IfxTreeView>

      <h3>With Scrollbar</h3>
      <div style={{ maxWidth: '225px', border: '1px solid rgb(204, 204, 204)', padding: '8px', overflow: 'auto' }} >
        <IfxTreeView label="Tree Example" aria-label="Tree View">
          <IfxTreeViewItem icon="folder" initially-expanded="true" value="root-folder" aria-label="Tree Item">
            Root Folder
            <IfxTreeViewItem slot="children" icon="folder" initially-expanded="true" value="subfolder-1" aria-label="Tree Item">
              Subfolder 1
              <IfxTreeViewItem slot="children" icon="file" value="file-1-1">File 1-1.txt</IfxTreeViewItem>
              <IfxTreeViewItem slot="children" icon="file" value="file-1-2">File 1-2.txt</IfxTreeViewItem>
              <IfxTreeViewItem slot="children" icon="folder" value="subfolder-1-1">
                Subfolder 1-1
                <IfxTreeViewItem slot="children" icon="file" value="file-1-1-1">File 1-1-1.txt</IfxTreeViewItem>
                <IfxTreeViewItem slot="children" icon="file" value="file-1-1-2">File 1-1-2.txt</IfxTreeViewItem>
              </IfxTreeViewItem>
            </IfxTreeViewItem>
            <IfxTreeViewItem slot="children" icon="folder" value="subfolder-2" aria-label="Tree Item">
              Subfolder 2
              <IfxTreeViewItem slot="children" icon="file" value="file-2-1" aria-label="Tree Item">File 2-1.txt</IfxTreeViewItem>
              <IfxTreeViewItem slot="children" icon="folder" value="subfolder-2-1" aria-label="Tree Item">
                Subfolder 2-1
                <IfxTreeViewItem slot="children" icon="file" value="file-2-1-1" aria-label="Tree Item">File 2-1-1.txt</IfxTreeViewItem>
                <IfxTreeViewItem slot="children" icon="folder" value="subfolder-2-1-1" aria-label="Tree Item">
                  Subfolder 2-1-1
                  <IfxTreeViewItem slot="children" icon="file" value="file-2-1-1-1" aria-label="Tree Item">File 2-1-1-1.txt</IfxTreeViewItem>
                </IfxTreeViewItem>
              </IfxTreeViewItem>
            </IfxTreeViewItem>
            <IfxTreeViewItem slot="children" icon="file" value="file-at-root" aria-label="Tree Item">File at root.txt</IfxTreeViewItem>
          </IfxTreeViewItem>
          <IfxTreeViewItem icon="folder" value="another-root" aria-label="Tree Item">
            Another Root Folder
            <IfxTreeViewItem slot="children" icon="file" value="file-a" aria-label="Tree Item">File A.txt</IfxTreeViewItem>
            <IfxTreeViewItem slot="children" icon="file" value="file-b" aria-label="Tree Item">File B.txt</IfxTreeViewItem>
          </IfxTreeViewItem>
          <IfxTreeViewItem icon="file" value="single-file" aria-label="Tree Item">Single File</IfxTreeViewItem>
        </IfxTreeView>
      </div>

      <h3>Single Item Expanded & Disabled</h3>
      <IfxTreeView label="Tree Example" aria-label="Tree View">
        <IfxTreeViewItem value="file-1">File</IfxTreeViewItem>
        <IfxTreeViewItem value="file-disabled" disable-item="true">File disabled</IfxTreeViewItem>
        <IfxTreeViewItem initially-expanded="true" value="folder-expanded">
          Folder initially expanded
          <IfxTreeViewItem slot="children" initially-selected="true" value="file-selected">File</IfxTreeViewItem>
          <IfxTreeViewItem slot="children" value="file-normal">File</IfxTreeViewItem>
        </IfxTreeViewItem>
        <IfxTreeViewItem value="item-1">Normal Item</IfxTreeViewItem>
        <IfxTreeViewItem value="item-2">Normal Item</IfxTreeViewItem>
      </IfxTreeView>
    </div>
  );
}

export default TreeView;