import { convertHtmlLayoutToReactNative } from './components/convertHtmlLayoutToReactNative';
export const HtmlView = (props) => {
    const { html, titleAlign = 'center', imageUrl, insertAfterParagraph = 1, wordCount = 0, } = props;
    return convertHtmlLayoutToReactNative(html, {
        titleAlign,
        imageUrl,
        insertAfterParagraph,
        wordCount,
    });
};
