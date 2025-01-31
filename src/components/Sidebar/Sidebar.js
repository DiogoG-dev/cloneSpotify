import './Sidebar.css'
import logoSpotify from '../../assets/icons/logo-spotify.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faGlobe, faBook,  faPlus } from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => {
    return (
        <div className="sidebar">
                <nav className="sidebar-navigation">
                    <div className="logo">
                        <a href="">
                            <img src={logoSpotify} alt="logo-spotify" />
                        </a>
                    </div>
                    <ul>
                        <li>
                            <a href="">
                                <span className="fa"><FontAwesomeIcon icon={faHome} /></span>
                                <span>Início</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span className="fa"><FontAwesomeIcon icon={faSearch} /></span>
                                <span>Buscar</span>
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className="library">
                    <div className="library-content">
                        <div className="library-title">
                            <span className="fa"><FontAwesomeIcon icon={faBook} /></span>
                            <span>Sua biblioteca</span>
                        </div>
                        <button className="fa"><FontAwesomeIcon icon={faPlus} /></button>
                    </div>
                    <section className="section-playlist">
                        <div className="section-playlist-content">
                            <span className="text title">Crie sua primeira playlist</span>
                            <span className="text subtitle">É facil, vamos te ajudar.</span>
                            <button className="section-playlist-button"><span>Criar playlist</span></button>
                        </div>
                    </section>

                    <div className="cookies">
                        <a href="">Cookies</a>
                    </div>

                    <div className="languages">
                        <button className="languages-button">
                            <span className="fa"><FontAwesomeIcon icon={faGlobe} /></span>
                            <span>Português do Brasil</span>
                        </button>
                    </div>
                </div>
            </div>
    )
}

export default Sidebar;