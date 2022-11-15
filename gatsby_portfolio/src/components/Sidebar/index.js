import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHome, faUser } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () =>  (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo' />
            <img src={LogoSubtitle} alt='Jonathan' />
        </Link>
    </div>
)

export default Sidebar
