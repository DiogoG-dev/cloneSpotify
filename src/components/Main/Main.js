import './Main.css';
import pl1 from '../../assets/playlist/1.jpeg';
import pl2 from '../../assets/playlist/2.png';
import pl3 from '../../assets/playlist/3.jpeg';
import pl4 from '../../assets/playlist/4.jpeg';
import pl5 from '../../assets/playlist/5.jpeg';
import pl6 from '../../assets/playlist/6.jpeg';
import pl7 from '../../assets/playlist/7.jpeg';
import pl8 from '../../assets/playlist/8.jpeg';
import pl9 from '../../assets/playlist/9.jpeg';
import pl10 from '../../assets/playlist/10.jpeg';
import pl11 from '../../assets/playlist/11.jpeg';
import pl12 from '../../assets/playlist/12.jpeg';
import pl13 from '../../assets/playlist/13.jpeg';
import pl14 from '../../assets/playlist/14.jpeg';
import pl15 from '../../assets/playlist/15.jpeg';

const Main = () => {
    return (
        <div className="playlist-container">
                <div id="result-playlists">
                    <div className="playlist">
                        <h1 id="greeting">Boas vindas</h1>
                        <h2 className="session">Navegar por todas as seções</h2>
                    </div>

                    <div className="offer__scroll-container">
                        <div className="offer__list">
                            <section className="offer__list-item">
                                <a href="" className="cards">
                                    <div className="cards card1">
                                        <img src={pl1} alt="" />
                                        <span>Boas festas</span>
                                    </div>
                                </a>

                                <a href="" className="cards">
                                    <div className="cards card2">
                                        <img src={pl2} alt="" />
                                        <span>Feitos para você</span>
                                    </div>
                                </a>

                                <a href="" className="cards">
                                    <div className="cards card3">
                                        <img src={pl3} alt="" />
                                        <span>Lançamentos</span>
                                    </div>
                                </a>

                                <a href="" className="cards">
                                    <div className="cards card4">
                                        <img src={pl4} alt="" />
                                        <span>Creators</span>
                                    </div>
                                </a>

                                <a href="" className="cards">
                                    <div className="cards card5">
                                        <img src={pl5} alt="" />
                                        <span>Para treinar</span>
                                    </div>
                                </a>

                                <a href="" className="cards">
                                    <div className="cards card6">
                                        <img src={pl6} alt="" />
                                        <span>Podcasts</span>
                                    </div>
                                </a>

                                <a href="" className="cards">
                                    <div className="cards card7">
                                        <img src={pl7} alt="" />
                                        <span>Sertanejo</span>
                                    </div>
                                </a>

                                <a href="" className="cards">
                                    <div className="cards card8">
                                        <img src={pl8} alt="" />
                                        <span>Samba e pagode</span>
                                    </div>
                                </a>

                                <a href="" className="cards">
                                    <div className="cards card9">
                                        <img src={pl9} alt="" />
                                        <span>Funk</span>
                                    </div>
                                </a>

                                <a href="" className="cards">
                                    <div className="cards card10">
                                        <img src={pl10} alt="" />
                                        <span>MPB</span>
                                    </div>
                                </a>

                                <a href="" className="cards">
                                    <div className="cards card11">
                                        <img src={pl11} alt="" />
                                        <span>Rock</span>
                                    </div>
                                </a>

                                <a href="" className="cards">
                                    <div className="cards card12">
                                        <img src={pl12} alt="" />
                                        <span>Hip Hop</span>
                                    </div>
                                </a>

                                <a href="" className="cards">
                                    <div className="cards card13">
                                        <img src={pl13} alt="" />
                                        <span>Indie</span>
                                    </div>
                                </a>

                                <a href="" className="cards">
                                    <div className="cards card14">
                                        <img src={pl14} alt="" />
                                        <span>Relax</span>
                                    </div>
                                </a>

                                <a href="" className="cards">
                                    <div className="cards card15">
                                        <img src={pl15} alt="" />
                                        <span>Música Latina</span>
                                    </div>
                                </a>
                            </section>
                        </div>
                    </div>
                </div>
                <div id="result-artist" className="hidden">
                    <div className="grid-container">
                        <div className="artist-card" id="">
                            <div className="card-img">
                                <img id="artist-img" className="artist-img" />
                                <div className="play">
                                    <span className="fa fa-solid fa-play"></span>
                                </div>
                            </div>
                            <div className="card-text">
                                <a title="Foo Fighters" className="vst" href=""></a>
                                <span className="artist-name" id="artist-name"></span>
                                <span className="artist-categorie">Artista</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Main;