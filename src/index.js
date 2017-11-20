export { SummernoteEditor } from './summernote-editor';

export function configure(config, editorConfig) {
  // default config (if none provided)
  let defaultConfig = {
    placeholder: "Type your text here...",
    airMode: false,
    minHeight: 60,             // set minimum height of editor
    maxHeight: null,             // set maximum height of editor
    toolbar: [
      // [groupName, [list of button]]
      ['style', ['style', 'bold', 'italic', 'underline', 'clear']],
      ['color', ['color']],
      ['para', ['ul', 'ol', 'paragraph']],
      ['link', ['linkDialogShow', 'unlink']]
    ],
    popover: {
      air: [
        ['style', ['bold', 'italic', 'underline', 'clear']],
        ['color', ['color']],
        ['insert', ['link', 'unlink', 'picture']]
      ]
    }
  };

  if (!editorConfig || typeof editorConfig === 'object') {
    // merge quill options if any with our default options
    let options = Object.assign({}, defaultConfig, editorConfig);
    // register it with the DI to be used as global summernote options
    config.container.registerInstance('summernote-editor-config', options);
  }
  config.globalResources('./summernote-editor');
}
