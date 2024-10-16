
const rateLimit = require('express-rate-limit')
const slowDown = require("express-slow-down");

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 1, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
    standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
    // store: ... , // Redis, Memcached, etc. See below.
    message: {
        flage: false,
        message:"You have reached the maximum limit, please try after some time"
    }
})
// Apply the rate limiting middleware to all requests.
// app.use(limiter)
const speedLimiter = slowDown({
    windowMs: 15 * 60 * 1000, // 15 minutes
    delayAfter: 1, // Allow 5 requests per 15 minutes.
    delayMs: (hits) => hits * 100, // Add 100 ms of delay to every request after the 5th one.
    /**
     * So:
     *
     * - requests 1-5 are not delayed.
     * - request 6 is delayed by 600ms
     * - request 7 is delayed by 700ms
     * - request 8 is delayed by 800ms
     *
     * and so on. After 15 minutes, the delay is reset to 0.
     */
})

module.exports = {
    limiter, speedLimiter
}