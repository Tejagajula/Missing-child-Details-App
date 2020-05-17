import React, { Component } from 'react';
import '../css/home.css';
import data from './data.json';
import Popup from "reactjs-popup";
import FullcardWithDetail from "./addComments.js";

class CardsForMissingChild extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            child: null,
        }
    }
    openModal = (child) => {
        this.setState({ open: true, child: child })
    }
    closeModal = () => {
        this.setState({ open: false, child: null })
    }

    render() {
        return (

            <div id="desBox" style={{ display: this.props.displaycard }}>
                <div className="row">
                    {
                        data.map((child, i) => {
                            return (<div className="col-md-3">
                                <div className="card" key={i} onClick={() => this.openModal(child)}>
                                    <div className="box">
                                        <div className="img">
                                            <img src={child.childImage} />
                                        </div>
                                        <h2>{child.childName}<br /><span>Missing Child</span></h2>
                                        <p>{child.childDescrip}</p>
                                    </div>
                                </div>
                            </div>)
                        })
                    }
                </div>
                <Popup
                    open={this.state.open}
                    closeOnDocumentClick
                    onClose={this.closeModal}
                >
                    {
                        () => {
                            return <div>
                                <a onClick={this.closeModal}>
                                    &times;
                                </a>
                                <FullcardWithDetail child={this.state.child} />
                            </div>
                        }
                    }
                </Popup>
            </div>
        );
    }
}



export default CardsForMissingChild;
