import React from 'react'
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'

class Directory extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            sections: [{
                title: 'Winter Wetsuits',
                imageUrl: './winter-wetsuits.jfif',
                id: 1,
                linkUrl: 'winter'
            },
            {
                title: 'Summer Wetsuits',
                imageUrl: './summer-wetsuits.jfif',
                id: 2,
                linkUrl: ''
            },
            {
                title: 'Kids Wetsuits',
                imageUrl: './kids-wetsuits.jfif',
                id: 3,
                linkUrl: ''
            },
            {
                title: 'Long Boards',
                imageUrl: './longboards.jfif',
                id: 4,
                size: 'large',
                linkUrl: ''
            },
            {
                title: 'Short Boards',
                imageUrl: './shortboards.jfif',
                id: 5,
                size: 'large',
                linkUrl: ''
            },]
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(( {id, ...otherSectionProps}) => (
                <MenuItem key={id} {...otherSectionProps}/>
                ))}
            </div>

        )
    }
}

export default Directory