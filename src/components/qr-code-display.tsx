'use client';

import QRCode from 'react-qr-code';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface QRCodeDisplayProps {
    url: string;
    size?: number;
}

export function QRCodeDisplay({ url, size = 200 }: QRCodeDisplayProps) {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // 버튼과 동일한 primary 색상 (다크모드: 흰색, 라이트모드: 검은색)
    const bgColor = resolvedTheme === 'dark' ? '#fafafa' : '#171717';
    // 페이지 배경색 (다크모드: 검은색, 라이트모드: 흰색)
    const fgColor = resolvedTheme === 'dark' ? '#0a0a0a' : '#ffffff';

    if (!mounted) {
        return (
            <div className="p-4 bg-primary rounded-xl shadow-sm">
                <div style={{ width: size, height: size }} />
            </div>
        );
    }

    return (
        <div className="p-4 bg-primary rounded-xl shadow-sm">
            <QRCode
                value={url}
                size={size}
                level="H"
                bgColor={bgColor}
                fgColor={fgColor}
            />
        </div>
    );
}
