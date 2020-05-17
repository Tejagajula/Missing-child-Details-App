import React, {Component} from "react";
import '../css/home.css'

class AddChilsDetails extends Component{
    render(){
        return(
            <div id="addchildDetails" className="container" style={{display:this.props.visibility}}>
                <div className="imagePost">
                    <input type="file" className="btn btn-info" onChange={this.props.fileChangedHandler} />
                </div>
                <div>
                    <label className="col-sm-12 col-form-label">
                        missingChildName
                    </label>
                    <input type="text" placeholder="enter name" className="form-control" name="missingChildName" value={this.props.missingChildName} onChange={this.props.fileChangedHandler} /> 
                    <label className="col-sm-12 col-form-label">
                        Description
                    </label>
                    <textarea className="form-control" type="text" placeholder="enter description" name="Description" value={this.props.Description} onChange={this.props.fileChangedHandler} />
                    <div>
                    <button className="btn btn-info" onClick={this.props.postData} >Submit</button>
                    </div>
                </div>
            </div>
        )
    }
};     

export default AddChilsDetails;