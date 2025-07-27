# pv-html-to-reactnative-covertor

A lightweight React Native utility to convert **HTML-like content** into React Native components.

## Installation
```bash
npm install pv-html-to-reactnative-covertor
```

## ⚡Usage
### **Example:**
```tsx
import React from 'react';
import { HtmlView } from 'pv-html-to-reactnative-covertor';

const rawHtml = `
<html>
  <head>
    <title>Lorem Ipsum Universe</title>
  </head>
  <body>
    <header>
      <h1><span>Welcome to the <b>Lorem Ipsum</b> World</span></h1>
      <h2><i>Sample & Placeholder Updates</i></h2>
    </header>
    <main>
      <h3>Main Storyline</h3>
      <div>
        <p>
          <b>Lorem</b> and <u>Ipsum</u> are placeholder texts used for design. 
          Their goal is to create a <mark>dummy layout</mark>.
        </p>
        <p>
          The world is full of <i>meaningless filler</i> text.<br>
          However, <i>Lorem</i> was designed for readability.
        </p>
        <hr>
        <p>
          Here is a sample image for design:
        </p>
        <img src="https://fastly.picsum.photos/id/64/4326/2884.jpg?hmac=9_SzX666YRpR_fOyYStXpfSiJ_edO3ghlSRnH2w09Kg" />
      </div>

      <h4>Highlights</h4>
      <p>
        <span>Placeholder content</span> is <b>helpful</b> and <i>versatile</i>, filled with <u>dummy text</u>.
      </p>

      <h5>Upcoming Content</h5>
      <p>
        Stay tuned for more <mark>updates</mark> and <b>samples</b> in upcoming versions.
      </p>
    </main>

    <footer>
      <h6>Contact Us</h6>
      <p>
        For more info, visit the official <u>Lorem Ipsum</u> documentation.
      </p>
    </footer>
  </body>
</html>
`;

export default function App() {
  const imageUrl = "https://fastly.picsum.photos/id/64/4326/2884.jpg?hmac=9_SzX666YRpR_fOyYStXpfSiJ_edO3ghlSRnH2w09Kg";
  
  return (
    <HtmlView
      html={rawHtml}
      count={2}                // Bold first 2 words of each block
      titleAlign="center"      // Align title: 'left' | 'center' | 'right'
      imageUrl={imageUrl}
      insertAfterParagraph={1} // Insert dynamic image after first paragraph
    />
  );
}

```

## ✨Features
- Works with **Rich Text Editor (RTE) output** as input HTML.
- Convert **HTML headings, paragraphs, and images** to React Native components.
- Inline tag support: `<b>`, `<i>`, `<u>`, `<mark>`, `<span>`.
- Automatic `<title>` extraction.
- Insert dynamic images after specific paragraphs.
- **Count-based word bolding** (first `n` words bold).
- Fully customizable with **`StyleSheet`**.
- Written in **TypeScript** (ESNext).

## License
ISC © 2025 Prasanth K
