export const parseInlineHTML = (html) => {
    const tokenRegex = /<([^>]+)>|([^<]+)/g;
    const stack = [{ type: 'root', children: [] }];
    let current = stack[0];
    let match;
    while ((match = tokenRegex.exec(html)) !== null) {
        if (match[1]) {
            const tag = match[1].toLowerCase();
            if (!tag.startsWith('/')) {
                const token = { type: tag, children: [] };
                current.children.push(token);
                stack.push(token);
                current = token;
            }
            else {
                stack.pop();
                current = stack[stack.length - 1];
            }
        }
        else if (match[2]) {
            current.children.push({ type: 'text', text: match[2] });
        }
    }
    return stack[0].children;
};
