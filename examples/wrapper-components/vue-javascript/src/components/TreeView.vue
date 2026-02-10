<template>
  <div class="component">
    <h2>Tree View Test</h2>
    <ifx-tree-view label="Tree Test" expand-all-items>
      <ifx-tree-view-item label="Root Folder" icon="folder-16" initially-expanded="true">
        <ifx-tree-view-item label="Subfolder" icon="folder-16">
          <ifx-tree-view-item label="File.txt" icon="file-16"></ifx-tree-view-item>
        </ifx-tree-view-item>
        <ifx-tree-view-item label="File at root.txt" icon="file-16"></ifx-tree-view-item>
      </ifx-tree-view-item>
      <ifx-tree-view-item label="Single File" icon="file-16"></ifx-tree-view-item>
    </ifx-tree-view>
  </div>
</template>

