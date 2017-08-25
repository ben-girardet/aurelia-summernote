'use strict';

System.register(['./summernote-editor'], function (_export, _context) {
  "use strict";

  var _typeof;

  function configure(config, editorConfig) {
    var defaultConfig = {
      placeholder: "Type your text here...",
      airMode: true,
      minHeight: 60,
      maxHeight: null,
      toolbar: [['style', ['bold', 'italic', 'underline', 'clear']], ['color', ['color']], ['para', ['ul', 'ol', 'paragraph']], ['link', ['linkDialogShow', 'unlink']]],
      popover: {
        air: [['style', ['bold', 'italic', 'underline', 'clear']], ['color', ['color']], ['insert', ['link', 'unlink', 'picture']]]
      }
    };

    if (!editorConfig || (typeof editorConfig === 'undefined' ? 'undefined' : _typeof(editorConfig)) === 'object') {
      var options = Object.assign({}, defaultConfig, editorConfig);

      config.container.registerInstance('summernote-editor-config', options);
    }
    config.globalResources('./summernote-editor');
  }

  _export('configure', configure);

  return {
    setters: [function (_summernoteEditor) {
      var _exportObj = {};
      _exportObj.SummernoteEditor = _summernoteEditor.SummernoteEditor;

      _export(_exportObj);
    }],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }
  };
});