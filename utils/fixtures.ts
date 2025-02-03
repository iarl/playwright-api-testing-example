require("dotenv").config()
import { test as base } from "@playwright/test"
import { BookingController } from "./controllers/booking.controller"
import { AuthController } from "./controllers/auth.controller"

export type TestUser = {
  emailAddress: string;
  password: string;
};

const illuvidexUser: TestUser = {
    emailAddress: `${process.env.USER_EMAIL}`,
    password: `${process.env.USER_PASSWORD}`,
};

export const test = base.extend<{
  bookingController: BookingController
  authController: AuthController
}>({
    authController: async ({ request }, use) => {
        use(new AuthController(request))
    },
    bookingController: async ({ request }, use) => {
        use(new BookingController(request))
    }
});
