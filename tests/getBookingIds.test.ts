import { expect } from "chai"
const chai = require('chai')
chai.use(require('chai-json-schema'))
import { test } from "../utils/fixtures"
import { bookingIdsSchema } from "../utils/schemas/bookingIds.schema"

const invalidNames = ['78797', '!@#', '', 1243, true]

test.describe('Get Booking Ids', { tag: '@getBookingIds'}, () => {

    test.describe('Negative', { tag: '@negative'}, () => {
        for(const invalidName of invalidNames){
            test(`GET /booking returns empty array with invalid first name = ${invalidName}`, {tag: '@smoke'}, 
                async ({bookingController}) => {
                    const { body, statusCode } = await bookingController.getBookingIds(
                        {
                            firstname: invalidName
                        }
                    )
                    expect(statusCode).to.be.equal(200)
                    expect(body).to.be.eql([])
                })
            test(`GET /booking returns empty array with invalid last name = ${invalidName}`, {tag: '@smoke'}, 
                async ({bookingController}) => {
                    const { body, statusCode } = await bookingController.getBookingIds(
                        {
                            lastname: invalidName
                        }
                    )
                    expect(statusCode).to.be.equal(200)
                    expect(body).to.be.eql([])
                }) 
        }
    })

    test.describe('Positive', { tag: '@positive'}, () => {
        test('GET /booking returns 200 without query parameters', {tag: '@smoke'}, 
            async ({bookingController}) => {
                const { body, statusCode } = await bookingController.getBookingIds()
                expect(statusCode).to.be.equal(200)
                expect(body).to.be.jsonSchema(bookingIdsSchema)
            }) 
    })

})