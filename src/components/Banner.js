import logo from '../assets/LOGO.png'
import '../styles/Banner.css'

function Banner() {
    const title = 'kasa'
    return (
        <div className='lmj-banner'>
            <img src={logo} alt='La maison jungle' className='kasa-logo' />
            <h1 className='lmj-title'>{title}</h1>
        </div>
    )
}

export default Banner