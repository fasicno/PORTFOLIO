import React, { useState, useEffect } from 'react';

const Loader = ({ isLoading }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (!isLoading) {
            setProgress(100);
            return;
        }

        const interval = setInterval(() => {
            setProgress(prev => {
                const next = prev + Math.floor(Math.random() * 15) + 2;
                return next > 99 ? 99 : next; // Hold at 99 until isLoading becomes false
            });
        }, 100);

        return () => clearInterval(interval);
    }, [isLoading]);

    return (
        <div className={`cinematic-loader ${!isLoading ? 'fade-out' : ''}`}>
            <div className="loader-inner">
                <div className="count-display">
                    {progress === 100 ? 100 : progress}<span className="percent-sign">%</span>
                </div>
                <div className="progress-bar-container">
                    <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
                </div>
                <div className="loader-label">INITIALIZING WORKSPACE</div>
            </div>
        </div>
    );
};

export default Loader;
