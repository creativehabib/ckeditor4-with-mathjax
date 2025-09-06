/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	
	
        // Path to the MathJax library that enables TeX preview and output
        config.mathJaxLib = 'https://cdn.jsdelivr.net/npm/mathjax@2/MathJax.js?config=TeX-AMS_HTML';

        // Load MathJax and the WIRIS (MathType) plugin
        config.extraPlugins = 'mathjax,ckeditor_wiris';
        config.removePlugins = 'image,about,iframe,specialchar,emoticons,flash,smiley,pagebreak,preview,print,horizontalrule,stickies,blockselection,div,save,templates,showblocks,scayt,wsc,menubutton,contextmenu,find,selectall,copyformatting,removeformat';

        // Expose MathType buttons in the toolbar
        config.toolbar = [
                { name: 'clipboard', items: [ 'Cut', 'Copy', 'Paste', '-', 'Undo', 'Redo' ] },
                { name: 'basicstyles', items: [ 'Bold', 'Italic', 'Subscript', 'Superscript' ] },
                { name: 'wiris', items: [ 'ckeditor_wiris_formulaEditor', 'ckeditor_wiris_formulaEditorChemistry' ] }
        ];
};
