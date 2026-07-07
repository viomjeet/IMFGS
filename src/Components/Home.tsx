import React from 'react';
import { Container, Row, Col, Card, Button, Nav } from 'react-bootstrap';

export default function Home() {
    return (
        <div className="office-gallery-wrapper">

            <header className="hero-section">
                <div className="custom-container">
                    <div className="hero-grid">
                        <div className="hero-content">
                            <h1>Best Design Offices</h1>
                            <p>Most workplaces of dreams are splashed sprawling outdoor color saturated nooks are some hallmarks. Most lovers of design would all work in awesome office spaces.</p>
                        </div>
                        <div className="hero-image-box">
                            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" alt="Office Hero" />
                        </div>
                    </div>
                </div>
            </header>

            <section className="coolest-workplaces">
                <div className="custom-container">
                    <div className="split-layout">
                        <div className="text-block">
                            <h2>The coolest workplaces offices in the world</h2>
                            <p>Best office design of group layout. Are coolest workplaces offices in the world. Architecture studio architecture life. Home office best design interior luxury offices. Office design ideas make work my home organization.</p>
                            <button className="btn-dark-flat">Read More</button>
                        </div>
                        <div className="image-badge-block">
                            <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=500&q=80" alt="Worker" />
                                <div className="badge-card">
                                    <h3>10</h3>
                                    <span>Office ideas</span>
                                </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="icon-strip">
                <div className="custom-container">
                    <div className="icon-grid">
                        <div className="icon-item"><i>📷</i><span>Gallery</span></div>
                        <div className="icon-item"><i>💡</i><span>Ideas</span></div>
                        <div className="icon-item"><i>🏆</i><span>Awards</span></div>
                        <div className="icon-item"><i>🚀</i><span>Features</span></div>
                        <div className="icon-item"><i>📐</i><span>Design</span></div>
                        <div className="icon-item"><i>🎧</i><span>Support</span></div>
                    </div>
                </div>
            </div>

            <section className="gallery-section">
                <div className="custom-container">
                    <div className="section-header">
                        <h2>Office Design Gallery</h2>
                        <p>Coolest office a new cool of in world best office around. spaces incl annual of coolest headquarters check all these more best worlds offices.</p>
                    </div>
                    <div className="gallery-four-col">
                        <div className="img-card"><img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80" alt="Gallery 1" /></div>
                        <div className="img-card"><img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=400&q=80" alt="Gallery 2" /></div>
                        <div className="img-card"><img src="https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=400&q=80" alt="Gallery 1" /></div>
                        <div className="img-card"><img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=400&q=80" alt="Gallery 4" /></div>
                    </div>
                </div>
            </section>

            <section className="efficient-layouts-section">
                <div className="custom-container">
                    <div className="split-layout reverse">
                        <div className="image-block">
                            <img src="https://images.unsplash.com/photo-1532372320978-9b4d7a92b24d?auto=format&fit=crop&w=600&q=80" alt="Layout Main" />
                        </div>
                        <div className="text-block text-white">
                            <h2>5 Highly Efficient Office Layouts</h2>
                            <p>Here are quite a few critical decisions that will underpin the structure of an office layout, such as the division of public and private areas and the relative arrangement of empty space. The layout of an office is an extension of the brand of a business.</p>
                            <button className="btn-beige">Read More</button>
                        </div>
                    </div>
                    <div className="bottom-thumbnails">
                        <div><img src="https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=300&q=80" alt="Thumb 1" /></div>
                        <div><img src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=300&q=80" alt="Thumb 2" /></div>
                        <div><img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=300&q=80" alt="Thumb 3" /></div>
                        <div><img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=300&q=80" alt="Thumb 4" /></div>
                    </div>
                </div>
            </section>

            <section className="tips-ideas-section">
                <div className="custom-container">
                    <div className="split-layout align-stretch">
                        <div className="tips-box">
                            <h4 className="accent-title">Tips for designing a modern office</h4>
                            <ol className="numbered-list">
                                <li><span>01</span> Open up the space</li>
                                <li><span>02</span> Introduce more light</li>
                                <li><span>03</span> Consider glass partitions</li>
                            </ol>
                        </div>
                        <div className="creative-grid-block">
                            <div className="quad-grid">
                                <div className="cell"><img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=300&q=80" alt="Grid 1" /></div>
                                <div className="cell"><img src="https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=300&q=80" alt="Grid 2" /></div>
                                <div className="cell"><img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=300&q=80" alt="Grid 3" /></div>
                                <div className="cell text-card">
                                    <h5>Creative Office Layout Ideas</h5>
                                    <p>New ideas for your office layout do not have to be time consuming or expensive.</p>
                                    <a href="#" className="learn-more">Learn more →</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="main-footer">
                <div className="custom-container">
                    <div className="footer-flex">
                        <span className="brand">Office Design Gallery</span>
                        <div className="footer-links">
                            <span>© 2026 Office Design Gallery</span>
                            <a href="#">Privacy</a>
                            <a href="#">Terms</a>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
}