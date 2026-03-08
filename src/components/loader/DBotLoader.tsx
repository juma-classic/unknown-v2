import React, { useEffect, useState } from 'react';
import './DBotLoader.scss';

interface DBotLoaderProps {
    onFinish: () => void;
}

const DBotLoader: React.FC<DBotLoaderProps> = ({ onFinish }) => {
    const [progress, setProgress] = useState(0);
    const [loadingText, setLoadingText] = useState('Loading MART');
    const [currentStep, setCurrentStep] = useState(1);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        // Simulate loading progress
        const progressInterval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    // Show modal after 3 seconds at 100%
                    setTimeout(() => {
                        setShowModal(true);
                    }, 3000);
                    return 100;
                }
                return prev + 2;
            });
        }, 100);

        // Update loading text based on progress
        const textInterval = setInterval(() => {
            const texts = ['Loading MART', 'Loading GRID', 'Loading ARB', 'Loading DCA', 'Loading SCALP', 'Loading HEDGE'];
            setLoadingText(texts[Math.floor(Math.random() * texts.length)]);
            setCurrentStep(prev => (prev >= 6 ? 1 : prev + 1));
        }, 800);

        return () => {
            clearInterval(progressInterval);
            clearInterval(textInterval);
        };
    }, []);

    const handleCloseModal = () => {
        setShowModal(false);
        onFinish();
    };

    const handleMaybeLater = () => {
        setShowModal(false);
        onFinish();
    };

    return (
        <>
            <div className="dbot-loader">
                <div className="dbot-loader__container">
                    {/* Logo */}
                    <div className="dbot-loader__logo">
                        <div className="dbot-loader__logo-icon">D</div>
                        <div className="dbot-loader__logo-text">
                            <h1>Unknown Traders</h1>
                            <p>unknowntraders.com</p>
                        </div>
                        <span className="dbot-loader__version">v2</span>
                    </div>

                    {/* AI Engine Status */}
                    <div className="dbot-loader__ai-status">
                        <div className="dbot-loader__ai-indicator"></div>
                        <span>AI Engine</span>
                        <span className="dbot-loader__ai-percentage">{progress}%</span>
                    </div>

                    {/* Progress Section */}
                    <div className="dbot-loader__progress-section">
                        <div className="dbot-loader__progress-header">
                            <span>INIT</span>
                            <span className="dbot-loader__progress-value">{progress}%</span>
                        </div>
                        <div className="dbot-loader__progress-bar">
                            <div 
                                className="dbot-loader__progress-fill" 
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                        <div className="dbot-loader__loading-text">
                            {loadingText}
                            <span className="dbot-loader__step-count">{currentStep}/6</span>
                        </div>
                    </div>

                    {/* Strategy Cards */}
                    <div className="dbot-loader__strategies">
                        <div className="dbot-loader__strategy-card">
                            <div className="dbot-loader__strategy-icon">📊</div>
                            <span>GRID</span>
                        </div>
                        <div className="dbot-loader__strategy-card">
                            <div className="dbot-loader__strategy-icon">🔄</div>
                            <span>ARB</span>
                        </div>
                        <div className="dbot-loader__strategy-card dbot-loader__strategy-card--active">
                            <div className="dbot-loader__strategy-icon">📈</div>
                            <span>MART</span>
                        </div>
                        <div className="dbot-loader__strategy-card">
                            <div className="dbot-loader__strategy-icon">⚖️</div>
                            <span>DCA</span>
                        </div>
                        <div className="dbot-loader__strategy-card">
                            <div className="dbot-loader__strategy-icon">⚡</div>
                            <span>SCALP</span>
                        </div>
                        <div className="dbot-loader__strategy-card">
                            <div className="dbot-loader__strategy-icon">🛡️</div>
                            <span>HEDGE</span>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="dbot-loader__stats">
                        <div className="dbot-loader__stat-card">
                            <div className="dbot-loader__stat-icon">🤖</div>
                            <div className="dbot-loader__stat-content">
                                <span className="dbot-loader__stat-label">BOTS</span>
                                <span className="dbot-loader__stat-value">2/6 <span className="dbot-loader__stat-change">+2</span></span>
                            </div>
                        </div>
                        <div className="dbot-loader__stat-card">
                            <div className="dbot-loader__stat-icon">💰</div>
                            <div className="dbot-loader__stat-content">
                                <span className="dbot-loader__stat-label">PROFIT</span>
                                <span className="dbot-loader__stat-value">$190 <span className="dbot-loader__stat-change">+18%</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Community Modal */}
            {showModal && (
                <div className="community-modal">
                    <div className="community-modal__overlay" onClick={handleCloseModal}></div>
                    <div className="community-modal__content">
                        <button className="community-modal__close" onClick={handleCloseModal}>×</button>
                        
                        <div className="community-modal__icon">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>

                        <h2 className="community-modal__title">Join Our Trading Community</h2>
                        <p className="community-modal__subtitle">Connect & Grow Together</p>

                        <div className="community-modal__description">
                            <div className="community-modal__description-icon">💬</div>
                            <p>Connect with fellow traders! Share your trading experiences, strategies, and get the latest updates on new features and classes.</p>
                        </div>

                        <div className="community-modal__buttons">
                            <a href="https://chat.whatsapp.com/your-link" target="_blank" rel="noopener noreferrer" className="community-modal__button community-modal__button--whatsapp">
                                Join WhatsApp Channel
                            </a>
                            <a href="https://t.me/your-channel" target="_blank" rel="noopener noreferrer" className="community-modal__button community-modal__button--telegram">
                                Join Telegram
                            </a>
                            <a href="https://youtube.com/your-channel" target="_blank" rel="noopener noreferrer" className="community-modal__button community-modal__button--youtube">
                                Subscribe YouTube
                            </a>
                        </div>

                        <div className="community-modal__links">
                            <p>Get access to strategies, bots and guides sent earlier on our channels</p>
                            <a href="https://chat.whatsapp.com/your-link" target="_blank" rel="noopener noreferrer">WhatsApp Channel</a>
                            <a href="https://t.me/your-channel" target="_blank" rel="noopener noreferrer">Telegram Channel</a>
                            <a href="https://youtube.com/your-channel" target="_blank" rel="noopener noreferrer">YouTube Channel</a>
                        </div>

                        <div className="community-modal__actions">
                            <button className="community-modal__action community-modal__action--no" onClick={handleCloseModal}>
                                NO THANKS
                            </button>
                            <button className="community-modal__action community-modal__action--later" onClick={handleMaybeLater}>
                                MAYBE LATER
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default DBotLoader;
