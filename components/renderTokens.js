import React from 'react';
import { Text } from 'react-native';
import { styles } from '../utils/stylesdata';
export const renderTokens = (tokens, baseStyle, wordCount, context) => {
    return (React.createElement(Text, null, tokens.map((token, idx) => {
        if (token.type === 'text') {
            const words = token.text.split(' ').filter(Boolean);
            return words.map((word, i) => {
                const isBold = context.wordIndex < wordCount;
                const style = isBold ? [baseStyle, styles.bold] : [baseStyle];
                context.wordIndex++;
                return (React.createElement(Text, { key: `${idx}-${i}`, style: style }, word + ' '));
            });
        }
        else {
            let extraStyle = {};
            if (token.type === 'b')
                extraStyle = styles.bold;
            else if (token.type === 'i')
                extraStyle = styles.italic;
            else if (token.type === 'u')
                extraStyle = styles.underline;
            else if (token.type === 'mark')
                extraStyle = styles.mark;
            else if (token.type === 'span')
                extraStyle = styles.span;
            return (React.createElement(Text, { key: idx, style: [baseStyle, extraStyle] }, renderTokens(token.children || [], { ...baseStyle, ...extraStyle }, wordCount, context)));
        }
    })));
};
