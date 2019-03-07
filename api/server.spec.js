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
    })
    it('should return JSON', async () => {
        const res = await request(server).get('/')
        expect(res.type).toBe('application/json')
    })
})


describe('POST /', () => {
    it('should return a status code of 201 on POST', async () => {
        const res = await request(server).post('/')
        expect(res.status).toBe(201)
    })
    it('should return JSON', async () => {
        const res = await request(server).post('/')
        expect(res.type).toBe('application/json')
    })
})


describe('PUT /', () => {
    it('should return a status code of 200 on PUT to valid entry', async () => {
        const res = await request(server).put('/api/1')
        expect(res.status).toBe(201)
    })
    it('should return a status code of 404 on PUT to invalid entry', async () => {
        const res = await request(server).put('/api/0')
        expect(res.status).toBe(201)
    })
    it('should return JSON', async () => {
        const res = await request(server).put('/')
        expect(res.type).toBe('application/json')
    })
})


describe('DELETE /', () => {
    it('should return a status code of 200 on DELETE on valid entry', async () => {
        const res = await request(server).delete('/api/1')
        expect(res.status).toBe(204)
    })
    it('should return a status code of 404 on DELETE on invalid entry', async () => {
        const res = await request(server).delete('/api/0')
        expect(res.status).toBe(404)
    })
})
