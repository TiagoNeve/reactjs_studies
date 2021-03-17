import React, { Component } from 'react'

export default class Panel extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { headerColor, data, borderColor, headerText } = this.props; // Desconstructor
        return (
            <div className="panel" style={{ border:`1px solid ${borderColor}`, width:'500px', height:'100px', position:'relative'}}>
                <div className="panel-head" style={{ width: '100%', background: headerColor, height:'50px'}}>
                    { headerText }
                </div>
                <div className="panel-body">
                    { data }
                </div>
            </div>
        )
    }
}