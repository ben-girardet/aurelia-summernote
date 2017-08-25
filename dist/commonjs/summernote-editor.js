'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SummernoteEditor = undefined;

var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2;

var _aureliaFramework = require('aurelia-framework');

require('summernote');

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var SummernoteEditor = exports.SummernoteEditor = (_dec = (0, _aureliaFramework.inlineView)('<template>\n  <require from="summernote/summernote.css"></require>\n  <div ref="summernoteEditor"></div>\n</template>'), _dec2 = (0, _aureliaFramework.customElement)('summernote-editor'), _dec3 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec(_class = _dec2(_class = (_class2 = function () {
  function SummernoteEditor() {
    var _this = this;

    _classCallCheck(this, SummernoteEditor);

    _initDefineProp(this, 'value', _descriptor, this);

    _initDefineProp(this, 'options', _descriptor2, this);

    this.onTextChanged = function () {
      _this.value = $(_this.summernoteEditor).summernote('code');
    };
  }

  SummernoteEditor.prototype.bind = function bind() {
    var editorConfig = _aureliaFramework.Container.instance.get('summernote-editor-config');
    this.options = Object.assign({}, editorConfig, this.options);
  };

  SummernoteEditor.prototype.attached = function attached() {
    this.editor = $(this.summernoteEditor).summernote(this.options);

    if (this.value) {
      $(this.summernoteEditor).summernote('code', this.value);
    }

    this.editor.on('summernote.change', this.onTextChanged);
  };

  SummernoteEditor.prototype.detached = function detached() {
    this.editor.off('summernote.change', this.onTextChanged);
    $(this.editor).summernote('destroy');
    this.editor = null;
  };

  return SummernoteEditor;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec3], {
  enumerable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'options', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: null
})), _class2)) || _class) || _class);