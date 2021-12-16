A content module for [Blades](https://getblades.org) that renders formulas
using [KaTeX](https://katex.org).
Formulas delimited by `$` are rendered in inline mode and by `$$` in display mode.

This plugin can be installed as
```bash
yarn global add https://github.com/grego/blades-katex
```

Then, it can be used in Blades as
```toml
[plugins.content]
katex = "blades-katex"
```

On each page where KaTeX should be rendered, it can be enabled by
```toml
plugins = ["katex"]
```

This plugin is basically a stripped-down version of
[auto-render extension](https://katex.org/docs/autorender.html) for KaTeX.
