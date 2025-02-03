export class Logger {
    //colorful output in terminal
    protected colors(color, value) {
        switch (color) {
        case "red":
            return `\x1b[31m${value}\x1b[0m`;
        case "green":
            return `\x1b[32m${value}\x1b[0m`;
        case "blue":
            return `\x1b[34m${value}\x1b[0m`;
        case "yellow":
            return `\x1b[33m${value}\x1b[0m'`;
        case "cyan":
            return `\x1b[36m${value}\x1b[0m`;
        }
    }

    async logger(response, method: string) {
        const time = new Date().toISOString();
        const url = this.colors("blue", response.url());
        let status = String(response.status() + " " + response.statusText());
        if (status.startsWith("1") || status.startsWith("3")) {
            status = String(this.colors("blue", status))
        } else if (status.startsWith("2")) {
            status = String(this.colors("green", status));
        } else {
            status = String(this.colors("red", status));
        }
        console.log(
            `[${time}] Sending request ${method} ${url} Status = ${status}`
        );
    }
}
