import './styles.css'

import { Component } from "react"

export class ButtonLoad extends Component {
    render() {
        const {text, onClick } = this.props;
        return (
            <button className="button"
                onClick={onClick}
            >
                {text}
            </button>
        )
    }
}
