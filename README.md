# ckeditor4-with-mathjax

Demo project showing CKEditor 4 integrated with the MathJax and WIRIS (MathType) plugins.

## Usage

1. Open `index.html` in a browser. The MathType integration script is bundled locally, but an internet connection is still required to load the MathJax library from the CDN.
2. Use the MathJax button to insert TeX equations and the MathType buttons to insert math and chemistry formulas.

The editor loads the MathJax and WIRIS plugins by specifying `extraPlugins: 'mathjax,ckeditor_wiris'`, allows MathML content with `allowedContent: true`, and adds the `Mathjax`, `ckeditor_wiris_formulaEditor` and `ckeditor_wiris_formulaEditorChemistry` buttons to the toolbar. The MathJax library is loaded from the CDN configured via the `mathJaxLib` option.
