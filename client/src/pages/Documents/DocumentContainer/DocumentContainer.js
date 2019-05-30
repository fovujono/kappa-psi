import React from "react";
import axios from 'axios';
import "../../Documents/DocumentContainer/DocumentContainer.css";

class DocumentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null
    }
  }

onChangeHandler=event=>{
  console.log(event.target.files[0]);
  this.setState({
    selectedFile: event.target.files[0],
    loaded: 0,
  })
}

onClickHandler = () => {
  const data = new FormData()
  data.append('file', this.state.selectedFile)
  axios.post("http://localhost:4001/upload", data, { 
     // receive two parameter endpoint url ,form data
}).then(res => { // then print response status
  console.log(res.statusText)
})
}


  render() {
    return (
      <div>
        <div className="document-container">
          <div className="documents-list">
            <h2>Kappa Psi Documents</h2>
          </div>
        </div>

        <div className="upload-documents">
          <h2>Upload a File</h2>
          <input type="file" name="file" onChange={this.onChangeHandler}/>
          <button type="button" onClick={this.onClickHandler}>Upload</button> 
        </div>
      </div>
    );
  }
}

export default DocumentContainer;
