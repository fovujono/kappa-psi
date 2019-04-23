import React from 'react';
import '../../Documents/DocumentContainer/Document.css'

class DocumentContainer extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
            <div className="document-container">
            <div className="documents-list">
                <h2>Kappa Psi Exec Board Documents</h2>
                <ul>
                    <li><a href='#'>Link Here to Doc XYZ</a></li>
                    <li><a href='#'>Link Here to Doc ABC</a></li>
                </ul>
                <h2>Kappa Psi Ritual Documents</h2>
                <ul>
                    <li><a href='#'>Link Here to Doc XYZ</a></li>
                    <li><a href='#'>Link Here to Doc XYZ</a></li>
                </ul>
                <h2>Kappa Psi Membership Documents</h2>
                <ul>
                    <li><a href='#'>Link Here to Doc XYZ</a></li>
                    <li><a href='#'>Link Here to Doc ABC</a></li>
                </ul>
                <h2>Kappa Psi Committee Documents</h2>
                <ul>
                    <li><a href='#'>Link Here to Doc XYZ</a></li>
                    <li><a href='#'>Link Here to Doc ABC</a></li>
                </ul>
            </div>
            </div>

             {/* use https://malcoded.com/posts/react-file-upload/ for instructions on making this functional */}

            <div className="upload-documents">
                <h2>Upload a File</h2>
                <button>Choose a file...</button>
            </div>
            </div>
        )
    }

}

export default DocumentContainer;