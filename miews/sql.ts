import mysql from "mysql";

// ❌ SQL Injection
export function unsafeQuery(userInput: string) {
    const connection = mysql.createConnection({ host: "localhost", user: "root", password: "" });
    connection.query("SELECT * FROM users WHERE username = '" + userInput + "'", (err, results) => {
        console.log(results);
    });
}
