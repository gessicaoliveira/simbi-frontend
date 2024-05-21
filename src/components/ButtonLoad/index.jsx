import Button from '@mui/material/Button'

import { Component } from "react"

export class ButtonLoad extends Component {
    render() {
        const {text, onClick } = this.props;
        return (
            <Button style={{color:'#888'}}
                onClick={onClick}
            >
                {text}
            </Button>
        )
    }
}
