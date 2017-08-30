import {bindable, bindingMode, inlineView, customElement, Container} from 'aurelia-framework';
import 'summernote';

@inlineView(`<template>
  <require from="summernote/summernote.css"></require>
  <div ref="summernoteEditor"></div>
</template>`)
@customElement('summernote-editor')
export class SummernoteEditor {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) value;
  @bindable options; // per instance options

  bind() {
      // merge the global options with any instance options
      let editorConfig = Container.instance.get('summernote-editor-config');
      this._options = Object.assign({}, editorConfig, this.options);
  }

  optionsChanged() {
    this.destroy();
    setTimeout(() => {
      let editorConfig = Container.instance.get('summernote-editor-config');
      this._options = Object.assign({}, editorConfig, this.options);
      this.init();
    }, 20);
  }

  attached() {
    this.init();
  }

  onTextChanged = () => {
    this.value = $(this.summernoteEditor).summernote('code');
  }

  detached() {
    // clean up
    this.destroy();
  }

  init() {
    // initialize a new instance of the Summernote editor
    // with the supplied options
    this.editor = $(this.summernoteEditor).summernote(this._options);
    // if an initial value is provided, let's set the editor
    // with this content
    if (this.value) {
      $(this.summernoteEditor).summernote('code', this.value);
    }
    // listen for changes and update the value
    this.editor.on('summernote.change', this.onTextChanged);
  }

  destroy() {
    this.editor.off('summernote.change', this.onTextChanged);
    $(this.editor).summernote('destroy');
    this.editor = null;
  }
}
