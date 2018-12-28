import React from 'react';
import './style.css';

const DropAndUploadUI = (props) =>
    <div>
        <input className="input" ref={props.inputOpenFileRef} type="file" multiple={true} accept='image/*' style={{ display: "none" }} onChange={props.events.onUploadFiles} />
        <div
            onDrop={props.events.onDropFiles}
            onDragOver={props.events.onFilesOver}
            onDragLeave={props.events.onFilesOut}
            className={props.values.maxFilesUploaded
                ? "maxLimitReached uploadImage"
                : (props.values.dragOver
                    ? "uploadImage onDragOver"
                    : "uploadImage")}>
            {
                props.values.files.length >= 1 &&
                props.values.files.length < props.values.uploadLimit &&
                <div className="addAnother" onClick={props.events.showOpenFileDlg}> Add Another</div>
            }
            {
                props.values.maxFilesUploaded &&  
                props.values.files.length===0 &&
                <div className="addAnother" onClick={props.events.showOpenFileDlg}> Add Files</div>
            }
            {
                props.values.maxFilesUploaded &&
                <div style={{ color: "red" }}>
                    <em>Maximum {props.values.uploadLimit} images allowed</em>
                </div>
            }
            {
                props.values.files.length > 0 &&
                <div className="previewPane">
                    {
                        props.values.files.map((file, idx) => {
                            return (
                                <div key={idx} className="images">

                                    <i className="delete" aria-hidden="true" onClick={() => props.events.removeFile(idx)}> &#10007;</i>
                                    <img title={file.name} src={URL.createObjectURL(file)} alt="room" />
                                </div>
                            )
                        })
                    }
                </div>
            }
            {
                !props.values.maxFilesUploaded &&
                props.values.files.length < 1 &&
                <div>
                    <span>Drag'n'Drop or<strong onClick={props.events.showOpenFileDlg}> Click here </strong>to upload</span>
                    <p><em>(Maximum {props.values.uploadLimit} images allowed)</em></p>
                </div>
            }

        </div>

    </div>

export default DropAndUploadUI;