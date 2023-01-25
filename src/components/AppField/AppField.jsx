import { Component } from "react";

import "./AppField.scss"

export class AppField extends Component {

    props = this.props


    render() {
        return (
            <div className="app__field_wrapper">
                <input type='text' value={this.props.value} onChange={this.props.onInputChange} placeholder='press' />
            </div>
        )
    }
}