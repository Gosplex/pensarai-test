// ❌ XSS in template
export function renderHTML(userInput: string) {
    return `<div>${userInput}</div>`;
}

// ❌ JS injection in template
export function renderScript(userInput: string) {
    return `<script>${userInput}</script>`;
}
