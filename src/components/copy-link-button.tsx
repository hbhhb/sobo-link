'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { SupportedLanguage } from '@/lib/i18n';
import { getText } from '@/lib/ui-text';

interface CopyLinkButtonProps {
    url: string;
    lang: SupportedLanguage;
}

export function CopyLinkButton({ url, lang }: CopyLinkButtonProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (error) {
            console.error('Failed to copy:', error);
        }
    };

    return (
        <Button
            onClick={handleCopy}
            variant="default"
            size="lg"
            className="w-full max-w-xs gap-2"
        >
            {copied ? (
                <>
                    <Check className="h-4 w-4" />
                    {getText('copied', lang)}
                </>
            ) : (
                <>
                    <Copy className="h-4 w-4" />
                    {getText('copyLink', lang)}
                </>
            )}
        </Button>
    );
}
