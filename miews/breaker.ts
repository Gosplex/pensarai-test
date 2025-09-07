import { exec, spawn } from "child_process";
import crypto from "crypto";
import fs from "fs";
import axios from "axios";

// ❌ Arbitrary code execution
export function runUserCode(code: string) {
    return eval(code);
}

// ❌ Command injection
export function runCommand(cmd: string) {
    exec(cmd);
}

// ❌ Weak cryptography
export function generateWeakToken() {
    return crypto.randomBytes(4).toString("hex");
}

// ❌ Hardcoded secret
export const API_KEY = "12345-SECRET-KEY";

// ❌ Prototype pollution
export function pollute(obj: any, prop: string, value: any) {
    obj.__proto__[prop] = value;
}

// ❌ SSRF
export async function fetchURL(url: string) {
    return await axios.get(url);
}

// ❌ Insecure deserialization
export function deserialize(data: string) {
    // Use JSON.parse instead of eval for safe deserialization
    return JSON.parse(data);
}

// ❌ Unsafe file write
export function overwriteFile(path: string, content: string) {
    fs.writeFileSync(path, content);
}
