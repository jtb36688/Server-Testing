const request = require('supertest')

const server = require('./server.js')

describe('server.js', () => {
    it('should be associated with the testing object in knexfile', () => {
        expect(process.env.DB_ENV).toBe('testing')
    })
})

describe('GET /', () => {
    it('should return a status code of 200 on GET', async () => {
        const res = await request(server).get('/')
        expect(res.status).toBe(200)
    }
})