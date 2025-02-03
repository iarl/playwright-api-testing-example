require("dotenv").config()
import { Logger } from "./logger"
import { APIRequestContext } from "@playwright/test"

const logger = new Logger()

type RequestOptions = {
  path: string
  url?: string
  token?: string;
  payload?: object
}

// Wrapper for Playwright request to return necessary response information, write logs, and handle errors
export class Request {
    request: APIRequestContext

    constructor(request: APIRequestContext) {
        this.request = request
    }

    public async get(opts: RequestOptions) {
        const baseUrl = opts.url || String(process.env.BASE_URL);
        const response = await this.request.get(baseUrl + opts.path, {
            headers: { authorization: opts.token || "" },
        });
        return this.getResponse(response, "GET")
    }

    public async post(opts: RequestOptions) {
        const baseUrl = opts.url || String(process.env.BASE_URL);
        const response = await this.request.post(baseUrl + opts.path, {
            data: opts.payload
        });
        return this.getResponse(response, "POST")
    }

    public async put(opts: RequestOptions) {
        const baseUrl = opts.url || String(process.env.BASE_URL);
        const response = await this.request.put(baseUrl + opts.path, {
            data: opts.payload
        });
        return this.getResponse(response, "PUT")
    }

    public async patch(opts: RequestOptions) {
        const baseUrl = opts.url || String(process.env.BASE_URL);
        const response = await this.request.patch(baseUrl + opts.path, {
            data: opts.payload
        });
        return this.getResponse(response, "PATCH")
    }

    public async delete(opts: RequestOptions) {
        const baseUrl = opts.url || String(process.env.BASE_URL);
        const response = await this.request.delete(baseUrl + opts.path, {
            headers: { cookie: opts.token || "" },
        });
        return this.getResponse(response, "DELETE")
    }

    private async getResponse(response, method: string){
        let json, statusCode
        try {
            try {
                json = await response.json()
            } catch (error) {
                json = {}
            }
            statusCode = await response.status()
        } catch (error) {
            console.log(error)
        }
        await logger.logger(response, method)
        return {body: json, statusCode: statusCode}
    }
}
