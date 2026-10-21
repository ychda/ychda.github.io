'use client';

import {useEffect} from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.min.css';

const CodeHighlight = () => {
    useEffect(() => {
        document.querySelectorAll('pre code').forEach((el) => {
            hljs.highlightElement(el as HTMLElement);
        });
    }, []);

    return null;
};

export default CodeHighlight;
