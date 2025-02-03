import { Request } from '../request'
import { type APIRequestContext} from "@playwright/test"
import { getQuery } from '../queryParams'


export class BookingController extends Request{
    constructor(request: APIRequestContext){
        super(request)
    }

    async getBookingIds(queryParams?: object){
        const params = queryParams ? getQuery(queryParams) : ''
        try {
            const { body, statusCode } = await this.get({
                path: `/booking${params}`,
            })
            return { body, statusCode }
        } catch (error) {
            console.log(error)
            return error
        } 
    }
    async getBooking(bookingId: any, queryParams?: object){
        const params = queryParams ? getQuery(queryParams) : ''
        try {
            const { body, statusCode } = await this.get({
                path: `/booking/${bookingId}`,
            })
            return { body, statusCode }
        } catch (error) {
            console.log(error)
            return error
        } 
    }

    async createBooking(payload: object){
        try {
            const { body, statusCode } = await this.post({
                path: `/booking`,
                payload: payload
            })
            return { body, statusCode }
        } catch (error) {
            console.log(error)
            return error
        }
    }

    async updateBooking(bookingId: string, payload: object){
        try {
            const { body, statusCode } = await this.put({
                path: `/booking/${bookingId}`,
                payload: payload
            })
            return { body, statusCode }
        } catch (error) {
            console.log(error)
            return error
        }
    }

    async partiallyUpdateBooking(bookingId: string, payload: object){
        try {
            const { body, statusCode } = await this.patch({
                path: `/booking/${bookingId}`,
                payload: payload
            })
            return { body, statusCode }
        } catch (error) {
            console.log(error)
            return error
        }
    }

    async deleteBooking(bookingId, token?: string){
        try {
            const { body, statusCode } = await this.delete({
                path: `/booking/${bookingId}`,
                token: `token=${token}`
            })
            return { body, statusCode }
        } catch (error) {
            console.log(error)
            return error
        }
    }

    async getRandomBookingId(){
        const { body } = await this.getBookingIds()
        return body[Math.floor(Math.random() * body.length)].bookingid
    }
}