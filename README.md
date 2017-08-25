## Features

Adds a simple to use, yet flexible Aurelia Custom Element into your project.

## Install using Aurelia CLI

1. Install dependencies

  Summernote is built on Boostrap and Jquery. This plugin doesn't not directly depends on these librairies so that you can decide on how you include them in your project. If needed, below is an example on how you can add them properly in your Aurelia CLI project.

2. Install the plugin

  ```shell
  npm install aurelia-summernote
  ```

3. Configure your aurelia.json file

  ```js
  "dependencies": [
    //...
    // the following lines to link to the plugin
    {
      "name": "aurelia-summernote",
      "path": "../node_modules/aurelia-summernote/dist/amd",
      "main": "index"
    },
    // the following lines to link to the summernote dependency
    {
      "name": "summernote",
      "path": "../node_modules/summernote/dist",
      "main": "summernote",
      "exports": "$",
      "deps": ["jquery"],
      "resources": [
        "summernote.css"
      ]
    }
  ],
  "copyFiles": {
    //...
    // this will copy the font files in the /font folder of your project
    // to make them available for summernote CSS
    "node_modules/summernote/dist/font/*": "font",
  }
  ```

3. In your `main.js`

  ```js
  aurelia.use.feature('aurelia-summernote')
  ```

  If you want to provide custom default options, you can instanciate the plugin like so:

  ```js
  aurelia.use.feature('aurelia-summernote', {
    // add here any options from summernote documentation
    height: 600,
    toolbar: [
      ['style', ['bold', 'italic', 'underline', 'clear']]
    ]
  })
  ```

4. Finally in your code you can use the Custom Element

  ```html
  <template>
    <summernote-editor value.bind="mytext"></summernote-editor>
  </template>
  ```

  Again if you need custom options for this specific instance, you can bind an option object to the custom element

  ```html
  <template>
    <summernote-editor value.bind="mytext" options.bind="{height: 500}"></summernote-editor>
  </template>
  ```