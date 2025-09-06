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

	 config.extraPlugins = 'mathjax,ckeditor_wiris';
	   config.removePlugins = 'image,about,iframe,specialchar,emoticons,flash,smiley,pagebreak,preview,print,horizontalrule,stickies,blockselection,div,save,templates,showblocks,scayt,wsc,menubutton,contextmenu,find,selectall,copyformatting,removeformat';
	 config.toolbarGroups = [
		{ name: 'basicstyles', groups: [ 'Bold', 'Italic', 'Subscript', 'Superscript' ] },
		{ name: 'insert',      groups: [ 'insert' ] },
		{ name: 'tools',      groups: [ 'tools' ] },
	];
	
	 
};
