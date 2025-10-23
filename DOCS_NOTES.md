# Notes for writing documentation

## Vanilla
There are `dist` and `dist-custom-elements` output targets available.
`dist` automatically lazily loads all components. It can then be importaed via
```
<script type="module" src="https://unpkg.com/@infineon/infineon-design-system-stencil"></script>
```
or
```javascript
import '@infineon/infineon-design-system-stencil';
```

`dist-custom-elements` builds all components as standalone classes that extend HTMLElement without any lazy loading.
This may be preferred when using a bundler like Vite, Webpack or Rollup as it allows for better tree-shaking and optimization.


## Angualar Wrapper Usage

### Standalone

```

```

### With Module

