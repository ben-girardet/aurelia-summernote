export { SummernoteEditor } from './summernote-editor';

export function configure(config, editorConfig) {
  let defaultConfig = {
    placeholder: "Type your text here...",
    airMode: true,
    minHeight: 60,
    maxHeight: null,
    toolbar: [['style', ['bold', 'italic', 'underline', 'clear']], ['color', ['color']], ['para', ['ul', 'ol', 'paragraph']], ['link', ['linkDialogShow', 'unlink']]],
    popover: {
      air: [['style', ['bold', 'italic', 'underline', 'clear']], ['color', ['color']], ['insert', ['link', 'unlink', 'picture']]]
    }
  };

  if (!editorConfig || typeof editorConfig === 'object') {
    let options = Object.assign({}, defaultConfig, editorConfig);

    config.container.registerInstance('summernote-editor-config', options);
  }
  config.globalResources('./summernote-editor');
}