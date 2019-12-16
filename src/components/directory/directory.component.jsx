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
                id: 1
            },
            {
                title: 'Summer Wetsuits',
                imageUrl: './summer-wetsuits.jfif',
                id: 2
            },
            {
                title: 'Kids Wetsuits',
                imageUrl: './kids-wetsuits.jfif',
                id: 3
            },
            {
                title: 'Long Boards',
                imageUrl: './longboards.jfif',
                id: 4,
                size: 'large'
            },
            {
                title: 'Short Boards',
                imageUrl: './shortboards.jfif',
                id: 5,
                size: 'large'
            },]
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(( {title, imageUrl, id, size}) => (<MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>))}
            </div>

        )
    }
}

export default Directory