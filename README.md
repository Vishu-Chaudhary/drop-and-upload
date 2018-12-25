# React component for drag and drop to upload files

[![npm version](https://badge.fury.io/js/drop-and-upload.svg)](//npmjs.com/package/drop-and-upload)

A plug and play react component to upload files by drag and drop. Files dropped will be returned as [Files Array](https://w3c.github.io/FileAPI/)

[Demo](https://vishu-chaudhary.github.io/drop-and-upload/)


How to use?
======

Install our package through NPM.

   `npm install drop-and-upload`
   
Add the following code to your React component to import the `drop-and-upload` component.

```javascript
    import DropAndUpload from 'drop-and-upload'
  ```
 
and add component to render with callback to get droped files `getFiles`
```javascript
    ...
      state={
        files:[],
        uploadLimit:10
      }
      getFiles = (files)=>{
        this.setSate({
          files:files
        });
      }

      render(){
        return <DropAndUpload 
                  getFiles={this.getFiles} 
                  uploadLimit={this.state.uploadLimit}/>
      }
    ...
```
| Props         | type | Description   | 
| ------------- | -----| -------------| 
| uploadLimit   | number|Number of images allowed to be uploaded | 
| getFiles     |  function()|callback passed to component for getting uploaded files      | 

