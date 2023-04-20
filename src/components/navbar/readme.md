# ifx-navbar



<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [ifx-icon](../icon)
- [ifx-dropdown-menu](../dropdown-menu)
- [ifx-dropdown-item](../dropdown-item)
- [ifx-search-bar](../search-bar)

### Graph
```mermaid
graph TD;
  ifx-navbar --> ifx-icon
  ifx-navbar --> ifx-dropdown-menu
  ifx-navbar --> ifx-dropdown-item
  ifx-navbar --> ifx-search-bar
  ifx-dropdown-item --> ifx-icon
  ifx-search-bar --> ifx-search-input
  ifx-search-bar --> ifx-icon
  ifx-search-bar --> ifx-link
  ifx-search-input --> ifx-icon
  ifx-link --> ifx-icon
  style ifx-navbar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
