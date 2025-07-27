import React from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import { styles } from '../utils/stylesdata';
import { parseInlineHTML } from './parseInlineHTML';
import { renderTokens } from './renderTokens';
export const convertHtmlLayoutToReactNative = (html, options = { titleAlign: 'center', wordCount: 0 }) => {
    const { titleAlign = 'center', imageUrl, insertAfterParagraph = 1, wordCount = 0 } = options;
    const titleMatch = html.match(/<title>(.*?)<\/title>/i);
    const title = titleMatch ? titleMatch[1] : 'Untitled';
    html = html.replace(/<\/?(html|head|body)[^>]*>/gi, '').replace(/\n/gi, '');
    const contentRegex = /<(h[1-6]|p|img)[^>]*>(.*?)<\/\1>|<img\s+[^>]*src="([^"]+)"[^>]*>/gis;
    const content = [];
    let match;
    while ((match = contentRegex.exec(html)) !== null) {
        if (match[1] && match[1].startsWith('h')) {
            content.push({ type: match[1], text: match[2].trim() });
        }
        else if (match[1] === 'p') {
            content.push({ type: 'p', text: match[2].trim() });
        }
        else if (match[3]) {
            content.push({ type: 'img', src: match[3] });
        }
    }
    return (React.createElement(ScrollView, { style: styles.container },
        React.createElement(Text, { style: [styles.title, { textAlign: titleAlign }] }, title),
        content.map((item, index) => {
            if (item.type === 'p') {
                return (React.createElement(View, { key: index },
                    renderHTML(item.text || '', styles.paragraph, wordCount),
                    imageUrl && index === insertAfterParagraph && (React.createElement(View, { style: styles.imgCon },
                        React.createElement(Image, { source: { uri: imageUrl }, style: styles.dynamicImage, resizeMode: "cover" })))));
            }
            else if (item.type.startsWith('h')) {
                const headingStyle = styles[`heading${item.type.charAt(1)}`];
                return React.createElement(View, { key: index }, renderHTML(item.text || '', headingStyle, wordCount));
            }
            else if (item.type === 'img') {
                return (React.createElement(View, { key: index, style: styles.imgCon },
                    React.createElement(Image, { source: { uri: item.src }, style: styles.dynamicImage, resizeMode: "cover" })));
            }
            return null;
        })));
};
const renderHTML = (html, baseStyle, wordCount) => {
    const tokens = parseInlineHTML(html);
    return renderTokens(tokens, baseStyle, wordCount, { wordIndex: 0 });
};
