'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _summernoteEditor = require('./summernote-editor');

Object.defineProperty(exports, 'SummernoteEditor', {
  enumerable: true,
  get: function get() {
    return _summernoteEditor.SummernoteEditor;
  }
});
exports.configure = configure;
function configure(config, editorConfig) {
  var defaultConfig = {
    placeholder: "Type your text here...",
    airMode: false,
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