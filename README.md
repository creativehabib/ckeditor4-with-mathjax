# ckeditor4-with-mathjax

Demo project showing CKEditor 4 integrated with the MathJax and WIRIS (MathType) plugins.

## Usage

1. Open `index.html` in a browser (an internet connection is required to load the external scripts).
2. Use the Mathjax button to insert TeX equations and the MathType buttons to insert math and chemistry formulas.

The editor loads the MathJax and WIRIS plugins by specifying `extraPlugins: 'mathjax,ckeditor_wiris'` and adds the `Mathjax`, `MathType` and `ChemType` buttons to the toolbar. The MathJax library is loaded from the CDN configured via the `mathJaxLib` option.
