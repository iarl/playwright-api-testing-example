import { Request } from '../request'
import { type APIRequestContext} from "@playwright/test"


export class AuthController extends Request{
    constructor(request: APIRequestContext){
        super(request)
    }

    async createToken(payload: object){
        try {
            const { body, statusCode } = await this.post({
                path: `/auth`,
                payload: payload
            })
            return { body, statusCode }
        } catch (error) {
            console.log(error)
            return error
        }
    }
}