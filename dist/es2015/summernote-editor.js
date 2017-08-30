var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

import { bindable, bindingMode, inlineView, customElement, Container } from 'aurelia-framework';
import 'summernote';

export let SummernoteEditor = (_dec = inlineView(`<template>
  <require from="summernote/summernote.css"></require>
  <div ref="summernoteEditor"></div>
</template>`), _dec2 = customElement('summernote-editor'), _dec3 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec(_class = _dec2(_class = (_class2 = class SummernoteEditor {
  constructor() {
    _initDefineProp(this, 'value', _descriptor, this);

    _initDefineProp(this, 'options', _descriptor2, this);

    this.onTextChanged = () => {
      this.value = $(this.summernoteEditor).summernote('code');
    };
  }

  bind() {
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

  detached() {
    this.destroy();
  }

  init() {
    this.editor = $(this.summernoteEditor).summernote(this._options);

    if (this.value) {
      $(this.summernoteEditor).summernote('code', this.value);
    }

    this.editor.on('summernote.change', this.onTextChanged);
  }

  destroy() {
    this.editor.off('summernote.change', this.onTextChanged);
    $(this.editor).summernote('destroy');
    this.editor = null;
  }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec3], {
  enumerable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'options', [bindable], {
  enumerable: true,
  initializer: null
})), _class2)) || _class) || _class);