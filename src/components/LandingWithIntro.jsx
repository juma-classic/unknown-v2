import React, { useEffect, useState } from 'react';
import DBotLoader from './loader/DBotLoader';

export default function LandingWithIntro({ onFinish }) {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        if (!showLoader) {
            onFinish();
        }
    }, [showLoader, onFinish]);

    return showLoader ? <DBotLoader onFinish={() => setShowLoader(false)} /> : null;
}
