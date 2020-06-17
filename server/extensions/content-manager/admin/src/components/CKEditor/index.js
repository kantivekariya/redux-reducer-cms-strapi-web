import React from 'react';
import PropTypes from 'prop-types';
import CKEditor from 'ckeditor4-react';
import styled from 'styled-components';
import $ from 'jquery';

const Wrapper = styled.div`
  .ck-editor__main {
    min-height: 200px;
    > div {
      min-height: 200px;
    }
  }
`;

const Editor = ({ onChange, name, value }) => {
  return (
    <Wrapper>
      <CKEditor
        onBeforeLoad={(CKEDITOR, getEditorInstance) => {
          console.log('CKEDITOR 2', CKEDITOR);
          //console.log('getEditorInstance 2', getEditorInstance;
          CKEDITOR.disableAutoInline = true;
          // const finalEditor = CKEDITOR.editor();
          // console.log('finalEditor', finalEditor);
          if (!(CKEDITOR.plugins.registered && CKEDITOR.plugins.registered.imageUploader)) {
            CKEDITOR.plugins.add('imageUploader', {
              requires: 'filetools',
              beforeInit: function(editor) {
                if (!!!CKEDITOR.fileTools) {
                  console.log('Please add the plugins fileTools and its requirements.');
                }
              },
              init: function(editor) {
                // add file type filter
                var fileDialog = $('<input type="file" accept="image/*" />'),
                  allowed = 'img[alt,!src]{border-style,border-width,float,height,margin,margin-bottom,margin-left,margin-right,margin-top,width}',
                  required = 'img[alt,src]';

                fileDialog.on('change', function(e) {
                  var fileTools = CKEDITOR.fileTools,
                    uploadUrl = fileTools.getUploadUrl(editor.config, 'image'),
                    file = e.target.files[0],
                    loader = editor.uploadRepository.create(file),
                    reader = new FileReader(),
                    notification,
                    img;

                  // verify
                  if (!/image/i.test(file.type)) {
                    notification = editor.showNotification('Please check the correct format.', 'warning');

                    setTimeout(function() {
                      notification.hide();
                    }, 2000);

                    return false;
                  }
                  console.log('loader', loader);
                  loader.upload(uploadUrl, { files: file });

                  // preview image
                  reader.readAsDataURL(e.target.files[0]);

                  reader.onload = function(e) {
                    console.log('onload', e);
                    img = editor.document.createElement('img');
                    img.setAttribute('src', e.target.result);
                    // img.setStyle('opacity', 0.3);
                    editor.insertElement(img);
                  };

                  loader.on('uploaded', function(evt) {
                    console.log('uploaded', evt);
                    editor.widgets.initOn(img, 'image', {
                      src: evt.sender.url,
                    });
                    img.setAttribute('src', evt.sender.url);
                    //img.setStyle('opacity', 1);
                  });

                  loader.on('error', function() {
                    console.log('error', evt);
                    img.$ && img.$.remove();
                  });

                  fileTools.bindNotifications(editor, loader);

                  // empty input
                  fileDialog[0].value = '';
                });

                // Add toolbar button for this plugin.
                editor.ui.addButton &&
                  editor.ui.addButton('Image', {
                    label: 'Insert Image',
                    command: 'openDialog',
                    toolbar: 'insert',
                  });

                // Add ACF rule to allow img tag
                editor.addCommand('openDialog', {
                  allowedContent: allowed,
                  requiredContent: required,
                  contentTransformations: [
                    ['img{width}: sizeToStyle', 'img[width]: sizeToAttribute'],
                    ['img{float}: alignmentToStyle', 'img[align]: alignmentToAttribute'],
                  ],
                  exec: function(editor) {
                    fileDialog.click();
                  },
                });

                //
                editor.on('fileUploadResponse', function(evt) {
                  console.log('ON - fileUploadResponse', evt);
                  // Prevent the default response handler.
                  evt.stop();

                  // Get XHR and response.
                  var data = evt.data,
                    xhr = data.fileLoader.xhr,
                    response = xhr.responseText.split('|');
                  console.log('ON - fileUploadResponse response', response);
                  var response2 = JSON.parse(xhr.responseText);
                  console.log('ON - fileUploadResponse response2', response2);
                  if (response2 && response2.length > 0) {
                    // // An error occurred during upload.
                    // data.message = response[1];
                    // evt.cancel();
                    data.url = response2[0].url;
                  } else {
                    evt.cancel();
                  }
                });
              },
            });
          }
        }}
        data={value}
        onChange={(evt) => {
          console.log();
          const data = evt.editor.getData();
          onChange({ target: { name, value: data } });
        }}
        config={{
          extraPlugins: 'uploadwidget,filetools,imageUploader',
          uploadUrl: '/upload',
          allowedContent: true,
        }}
      />
    </Wrapper>
  );
};

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Editor;
