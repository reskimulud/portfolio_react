import React, { Component } from "react"
import ItemTitle from "../../atoms/item-title"
import SectionSubTitle from "../../atoms/section-subtitle"
import Paragraph from "../../atoms/paragraph"

class Item extends Component {
    render () {
        return (
            <div className="mt-4">
                <div className="d-flex justify-content-between">
                    <ItemTitle>{this.props.title}</ItemTitle>
                    <SectionSubTitle >{this.props.date}</SectionSubTitle>
                </div>
                <SectionSubTitle>{this.props.subtitle}</SectionSubTitle>
                <Paragraph>{this.props.paragraph}</Paragraph>
            </div>
        )
    }
}

export default Item