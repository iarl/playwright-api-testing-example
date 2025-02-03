import { expect } from "chai"
const chai = require('chai')
chai.use(require('chai-json-schema'))
import { test } from "../utils/fixtures"
import { bookingSchema } from "../utils/schemas/booking.schema"

const invalidIds = ['asd', '!', 0, true, null, undefined]

test.describe('Get Booking Ids', { tag: '@getBookingIds'}, () => {

    test.describe('Negative', { tag: '@negative'}, () => {
        for(const invalidId of invalidIds){
            test(`GET /booking returns 404 with invalid id = ${invalidId}`, {tag: '@smoke'}, 
                async ({bookingController}) => {
                    const { statusCode } = await bookingController.getBooking(invalidId)
                    expect(statusCode).to.be.equal(404)
                }) 
        }
    })

    test.describe('Positive', { tag: '@positive'}, () => {
        test('GET /booking returns 200 without query parameters', {tag: '@smoke'}, 
            async ({bookingController}) => {
                const bookingId = await bookingController.getRandomBookingId()
                const { body, statusCode } = await bookingController.getBooking(bookingId)
                expect(statusCode).to.be.equal(200)
                expect(body).to.be.jsonSchema(bookingSchema)
            }) 
    })

})