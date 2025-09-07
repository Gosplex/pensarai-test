import http from "http";

// ✅ Fixed open redirect
export function redirectTo(url: string, res: http.ServerResponse) {
    // Only allow relative URLs to prevent open redirects
    if (typeof url !== 'string' || !url.startsWith('/') || url.startsWith('//')) {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Invalid redirect URL');
        return;
    }
    res.writeHead(302, { Location: url });
    res.end();
}
