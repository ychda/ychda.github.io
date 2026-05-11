'use client';

import {useEffect} from 'react';
import hljs from 'highlight.js';
// 🔥 直接在客户端组件里导入样式，彻底解决报错
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
