import http from "http";

// ❌ Open redirect
export function redirectTo(url: string, res: http.ServerResponse) {
    res.writeHead(302, { Location: url });
    res.end();
}
