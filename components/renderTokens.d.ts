import { JSX } from 'react';
import { TextStyle } from 'react-native';
import { Token } from '../utils/data-types';
export declare const renderTokens: (tokens: Token[], baseStyle: TextStyle, wordCount: number, context: {
    wordIndex: number;
}) => JSX.Element;
