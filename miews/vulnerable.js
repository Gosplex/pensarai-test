import { randomBytes } from 'crypto';
import depd from 'depd';
import { renderHTML } from './template.js';

// --- pseudo-random issue ---
const unsafeToken = Math.random().toString(36).slice(2); // Pensar should flag this

// --- cryptographically safe alternative ---
const safeToken = randomBytes(16).toString('hex');

console.log('Unsafe token:', unsafeToken);
console.log('Safe token:', safeToken);

// --- HTML in template string ---
const userInput = "<script>alert('XSS')</script>";
const htmlOutput = renderHTML(userInput);
console.log(htmlOutput);

// --- depd usage triggers eval detection ---
const deprecate = depd('myFeature');
deprecate('This is a deprecated function');
