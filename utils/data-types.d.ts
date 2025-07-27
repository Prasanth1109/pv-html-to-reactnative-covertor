type TitleAlign = 'left' | 'center' | 'right';
export interface ConvertOptions {
    html: string;
    titleAlign?: TitleAlign;
    imageUrl?: string;
    insertAfterParagraph?: number;
    wordCount?: number;
}
export interface Token {
    type: string;
    children?: Token[];
    text?: string;
}
export {};
