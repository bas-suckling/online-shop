import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {ReactComponent as Logo} from '../../assets/shaka.svg'

import './header.styles.scss'
import { auth } from '../../firebase/firebase.utils'

const Header = ({currentUser}) => (
<div className="header">
    <Link className='logo-container' to='/'>
        <Logo className='logo'/>
        <span className='brandLink'>SURF STORE</span>
    </Link>
    <div className="options">
        <Link className='option' to='/shop'>SHOP</Link>
        <Link className='option' to='/shop'>CONTACT</Link>
        {
            currentUser ?
            <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
            :
            <Link className="option" to='/signin'>
                SIGN IN
            </Link>

        }
    </div>
</div>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header)