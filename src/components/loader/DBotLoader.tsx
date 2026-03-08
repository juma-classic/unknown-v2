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
                            <div className="dbot-loader__strategy-icon">
                                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="gridGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#3b82f6" />
                                            <stop offset="100%" stopColor="#1d4ed8" />
                                        </linearGradient>
                                    </defs>
                                    <g className="strategy-icon-anim">
                                        <rect x="8" y="8" width="8" height="8" fill="url(#gridGrad)" opacity="0.8" />
                                        <rect x="20" y="8" width="8" height="8" fill="url(#gridGrad)" opacity="0.6" />
                                        <rect x="32" y="8" width="8" height="8" fill="url(#gridGrad)" opacity="0.4" />
                                        <rect x="8" y="20" width="8" height="8" fill="url(#gridGrad)" opacity="0.6" />
                                        <rect x="20" y="20" width="8" height="8" fill="url(#gridGrad)" opacity="0.9" />
                                        <rect x="32" y="20" width="8" height="8" fill="url(#gridGrad)" opacity="0.6" />
                                        <rect x="8" y="32" width="8" height="8" fill="url(#gridGrad)" opacity="0.4" />
                                        <rect x="20" y="32" width="8" height="8" fill="url(#gridGrad)" opacity="0.6" />
                                        <rect x="32" y="32" width="8" height="8" fill="url(#gridGrad)" opacity="0.8" />
                                    </g>
                                </svg>
                            </div>
                            <span>GRID</span>
                        </div>
                        <div className="dbot-loader__strategy-card">
                            <div className="dbot-loader__strategy-icon">
                                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="arbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#10b981" />
                                            <stop offset="100%" stopColor="#059669" />
                                        </linearGradient>
                                    </defs>
                                    <g className="strategy-icon-rotate">
                                        <circle cx="24" cy="24" r="14" fill="none" stroke="url(#arbGrad)" strokeWidth="2" strokeDasharray="4 2" />
                                        <path d="M24 10 L28 14 L24 18 L20 14 Z" fill="url(#arbGrad)" />
                                        <path d="M38 24 L34 28 L30 24 L34 20 Z" fill="url(#arbGrad)" />
                                        <path d="M24 38 L20 34 L24 30 L28 34 Z" fill="url(#arbGrad)" />
                                        <path d="M10 24 L14 20 L18 24 L14 28 Z" fill="url(#arbGrad)" />
                                        <circle cx="24" cy="24" r="4" fill="url(#arbGrad)" />
                                    </g>
                                </svg>
                            </div>
                            <span>ARB</span>
                        </div>
                        <div className="dbot-loader__strategy-card dbot-loader__strategy-card--active">
                            <div className="dbot-loader__strategy-icon">
                                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="martGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#f59e0b" />
                                            <stop offset="100%" stopColor="#d97706" />
                                        </linearGradient>
                                    </defs>
                                    <g className="strategy-icon-pulse">
                                        <path d="M6 36 L12 28 L18 32 L24 20 L30 26 L36 14 L42 18" fill="none" stroke="url(#martGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        <circle cx="12" cy="28" r="2.5" fill="url(#martGrad)" />
                                        <circle cx="18" cy="32" r="2.5" fill="url(#martGrad)" />
                                        <circle cx="24" cy="20" r="3" fill="url(#martGrad)" />
                                        <circle cx="30" cy="26" r="2.5" fill="url(#martGrad)" />
                                        <circle cx="36" cy="14" r="2.5" fill="url(#martGrad)" />
                                        <path d="M36 14 L40 10 L42 14 L38 16 Z" fill="url(#martGrad)" />
                                    </g>
                                </svg>
                            </div>
                            <span>MART</span>
                        </div>
                        <div className="dbot-loader__strategy-card">
                            <div className="dbot-loader__strategy-icon">
                                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="dcaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#8b5cf6" />
                                            <stop offset="100%" stopColor="#6d28d9" />
                                        </linearGradient>
                                    </defs>
                                    <g className="strategy-icon-balance">
                                        <rect x="22" y="8" width="4" height="16" fill="url(#dcaGrad)" />
                                        <rect x="10" y="24" width="28" height="3" fill="url(#dcaGrad)" />
                                        <path d="M12 27 L12 32 L8 36 L16 36 L12 32 Z" fill="url(#dcaGrad)" opacity="0.8" />
                                        <path d="M36 27 L36 32 L32 36 L40 36 L36 32 Z" fill="url(#dcaGrad)" opacity="0.8" />
                                        <circle cx="12" cy="34" r="1.5" fill="#fff" />
                                        <circle cx="36" cy="34" r="1.5" fill="#fff" />
                                        <circle cx="24" cy="10" r="3" fill="url(#dcaGrad)" />
                                    </g>
                                </svg>
                            </div>
                            <span>DCA</span>
                        </div>
                        <div className="dbot-loader__strategy-card">
                            <div className="dbot-loader__strategy-icon">
                                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="scalpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#eab308" />
                                            <stop offset="100%" stopColor="#ca8a04" />
                                        </linearGradient>
                                    </defs>
                                    <g className="strategy-icon-flash">
                                        <path d="M24 6 L18 22 L26 22 L20 42 L30 24 L22 24 Z" fill="url(#scalpGrad)" />
                                        <circle cx="24" cy="24" r="16" fill="none" stroke="url(#scalpGrad)" strokeWidth="1.5" strokeDasharray="2 3" opacity="0.5" />
                                        <path d="M24 8 L26 10 L24 12" fill="none" stroke="url(#scalpGrad)" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M36 20 L34 22 L36 24" fill="none" stroke="url(#scalpGrad)" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M12 28 L14 26 L12 24" fill="none" stroke="url(#scalpGrad)" strokeWidth="1.5" strokeLinecap="round" />
                                    </g>
                                </svg>
                            </div>
                            <span>SCALP</span>
                        </div>
                        <div className="dbot-loader__strategy-card">
                            <div className="dbot-loader__strategy-icon">
                                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="hedgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#06b6d4" />
                                            <stop offset="100%" stopColor="#0891b2" />
                                        </linearGradient>
                                    </defs>
                                    <g className="strategy-icon-shield">
                                        <path d="M24 6 L38 12 L38 24 C38 32 32 38 24 42 C16 38 10 32 10 24 L10 12 Z" fill="url(#hedgeGrad)" opacity="0.3" />
                                        <path d="M24 6 L38 12 L38 24 C38 32 32 38 24 42 C16 38 10 32 10 24 L10 12 Z" fill="none" stroke="url(#hedgeGrad)" strokeWidth="2.5" />
                                        <path d="M18 24 L22 28 L30 18" fill="none" stroke="url(#hedgeGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        <circle cx="24" cy="24" r="2" fill="url(#hedgeGrad)" />
                                    </g>
                                </svg>
                            </div>
                            <span>HEDGE</span>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="dbot-loader__stats">
                        <div className="dbot-loader__stat-card">
                            <div className="dbot-loader__stat-icon">
                                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="botGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#3b82f6" />
                                            <stop offset="100%" stopColor="#1d4ed8" />
                                        </linearGradient>
                                    </defs>
                                    <g className="stat-icon-bot">
                                        <rect x="14" y="18" width="20" height="18" rx="2" fill="url(#botGrad)" opacity="0.3" />
                                        <rect x="14" y="18" width="20" height="18" rx="2" fill="none" stroke="url(#botGrad)" strokeWidth="2" />
                                        <circle cx="20" cy="25" r="2" fill="url(#botGrad)" />
                                        <circle cx="28" cy="25" r="2" fill="url(#botGrad)" />
                                        <rect x="19" y="30" width="10" height="2" rx="1" fill="url(#botGrad)" />
                                        <rect x="18" y="12" width="3" height="6" fill="url(#botGrad)" />
                                        <rect x="27" y="12" width="3" height="6" fill="url(#botGrad)" />
                                        <circle cx="19.5" cy="11" r="2" fill="url(#botGrad)" />
                                        <circle cx="28.5" cy="11" r="2" fill="url(#botGrad)" />
                                        <rect x="10" y="36" width="4" height="6" rx="1" fill="url(#botGrad)" />
                                        <rect x="34" y="36" width="4" height="6" rx="1" fill="url(#botGrad)" />
                                        <path d="M20 25 L22 27 L26 23" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
                                    </g>
                                </svg>
                            </div>
                            <div className="dbot-loader__stat-content">
                                <span className="dbot-loader__stat-label">BOTS</span>
                                <span className="dbot-loader__stat-value">2/6 <span className="dbot-loader__stat-change">+2</span></span>
                            </div>
                        </div>
                        <div className="dbot-loader__stat-card">
                            <div className="dbot-loader__stat-icon">
                                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="profitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#10b981" />
                                            <stop offset="100%" stopColor="#059669" />
                                        </linearGradient>
                                    </defs>
                                    <g className="stat-icon-profit">
                                        <circle cx="24" cy="24" r="14" fill="url(#profitGrad)" opacity="0.2" />
                                        <circle cx="24" cy="24" r="14" fill="none" stroke="url(#profitGrad)" strokeWidth="2.5" />
                                        <path d="M24 14 L24 20 M24 28 L24 34" stroke="url(#profitGrad)" strokeWidth="2.5" strokeLinecap="round" />
                                        <path d="M20 18 C20 18 20 16 24 16 C28 16 28 18 28 20 C28 22 26 23 24 23 C22 23 20 24 20 26 C20 28 20 30 24 30 C28 30 28 28 28 28" fill="none" stroke="url(#profitGrad)" strokeWidth="2.5" strokeLinecap="round" />
                                        <circle cx="24" cy="24" r="18" fill="none" stroke="url(#profitGrad)" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
                                        <path d="M24 6 L26 8" stroke="url(#profitGrad)" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M38 18 L36 20" stroke="url(#profitGrad)" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M42 24 L40 24" stroke="url(#profitGrad)" strokeWidth="1.5" strokeLinecap="round" />
                                    </g>
                                </svg>
                            </div>
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
                            <div className="community-modal__description-icon">
                                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="chatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#3b82f6" />
                                            <stop offset="100%" stopColor="#1d4ed8" />
                                        </linearGradient>
                                    </defs>
                                    <g className="chat-icon-anim">
                                        <rect x="8" y="12" width="28" height="20" rx="3" fill="url(#chatGrad)" opacity="0.3" />
                                        <rect x="8" y="12" width="28" height="20" rx="3" fill="none" stroke="url(#chatGrad)" strokeWidth="2" />
                                        <path d="M18 32 L22 36 L22 32 Z" fill="url(#chatGrad)" />
                                        <line x1="14" y1="18" x2="30" y2="18" stroke="url(#chatGrad)" strokeWidth="2" strokeLinecap="round" />
                                        <line x1="14" y1="23" x2="26" y2="23" stroke="url(#chatGrad)" strokeWidth="2" strokeLinecap="round" />
                                        <circle cx="32" cy="16" r="3" fill="#10b981" />
                                        <circle cx="32" cy="16" r="3" fill="#10b981" opacity="0.5">
                                            <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
                                        </circle>
                                    </g>
                                </svg>
                            </div>
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
