import React, { Component } from 'react';
import DropAndUploadUI from './DropAndUploadUI';

class DropAndUpload extends Component {
    constructor(props) {
        super(props);
        this.inputOpenFileRef = React.createRef();
    }
    state = {
        files: [],
        dragOver: false,
        maxFilesUploaded: false,
        uploadLimit:this.props.uploadLimit || 5
    }

    onFilesOver = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.setState({
            dragOver: true
        })
    }

    onFilesOut = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.setState({
            dragOver: false
        })
    }

    onDropFiles = (event) => {
        event.preventDefault();
        event.stopPropagation();
        let uploadedFiles = this.getOnlyImages(event.dataTransfer.files)
        if (uploadedFiles.length + this.state.files.length <= this.state.uploadLimit) {
            this.setState({
                files: [...this.state.files, ...uploadedFiles],
                dragOver: false,
                maxFilesUploaded: false
            },()=>{this.props.getFiles(this.state.files)})
        }
        else {
            this.setState({
                maxFilesUploaded: true,
                dragOver: false
            })
        }
    }

    onUploadFiles = (event) => {
        event.preventDefault();
        event.stopPropagation();
        let uploadedFiles = this.getOnlyImages(event.target.files);
        if (uploadedFiles.length + this.state.files.length <= this.state.uploadLimit) {
            this.setState({
                files: [...this.state.files, ...uploadedFiles],
                maxFilesUploaded: false
            },()=>{this.props.getFiles(this.state.files)})
        }
        else {
            this.setState({
                maxFilesUploaded: true,
            })
        }
    }

    removeFile = (idx) => {
        let files = this.state.files;
        files.splice(idx, 1)
        this.setState({
            files: files,
            maxFilesUploaded: false
        })
    }

    getOnlyImages = (files) => {
        let uploadedFiles = [];
        [...files].forEach((file) => {
            if (file.type.startsWith("image")) {
                uploadedFiles.push(file)
            }
        })
        return uploadedFiles;
    }

    showOpenFileDlg = () => {
        this.inputOpenFileRef.current.click()
    }

    events = {
        showOpenFileDlg: this.showOpenFileDlg,
        onFilesOver: this.onFilesOver,
        onDropFiles: this.onDropFiles,
        onUploadFiles: this.onUploadFiles,
        onFilesOut: this.onFilesOut,
        removeFile: this.removeFile
    }

    render() {
        return <DropAndUploadUI
            values={this.state}
            inputOpenFileRef={this.inputOpenFileRef}
            events={this.events}/>
    }
}
export default DropAndUpload;
