const request = require("supertest");
const app = require('../server');


describe('CRUD PRODUCTS', () => {
    it('SHOULD INSERT PRODUCTS', async () => {

        const products = [{
                    "title": "Brown eggs",
                    "type": "dairy",
                    "description": "Raw organic brown eggs in a basket",
                    "filename": "0.jpg",
                    "height": 600,
                    "width": 400,
                    "price": 28.1,
                    "rating": 4
                }, {
                    "title": "Sweet fresh stawberry",
                    "type": "fruit",
                    "description": "Sweet fresh stawberry on the wooden table",
                    "filename": "1.jpg",
                    "height": 450,
                    "width": 299,
                    "price": 29.45,
                    "rating": 4
                }, {
                    "title": "Asparagus",
                    "type": "vegetable",
                    "description": "Asparagus with ham on the wooden table",
                    "filename": "2.jpg",
                    "height": 450,
                    "width": 299,
                    "price": 18.95,
                    "rating": 3
                }];
        let response = await request(app).post('/products')
        .send(products)
        .set('Accept', 'application/json');
        expect(response.status).toBe(200);

    });
    it('SHOULD GET ALL PRODUCTS', async () => {
        var response = await request(app).get('/products')
        .set('Accept', 'application/json');
        expect(response.status).toBe(200);
    });
    
    it('SHOULD UPDATE A PRODUCT', async () => {
        var response = await request(app).get('/products')
            .set('Accept', 'application/json');
        let product = response.body[0];
        
        product.title="Novo title";
        response = await request(app).put(`/products/${product._id}`)
        .send(product)
        .set('Accept', 'application/json');
        expect(response.status).toBe(200);
    });

    it('SHOULD REMOVE A CUSTOMER', async () => {
        var response = await request(app).get('/products')
            .set('Accept', 'application/json');
        let product = response.body[1];
        response = await request(app).delete(`/products/${product._id}`)
        .set('Accept', 'application/json');

        expect(response.status).toBe(200);
    });

    it('SHOULD INSERT WITH NO DATA', async () => {
        let response = await request(app).post('/products')
        .send({})
        .set('Accept', 'application/json');
        expect(response.status).toBe(400);
    });

    it('SHOULD UPDATE WITH NO DATA', async () => {
        var response = await request(app).get('/products')
            .set('Accept', 'application/json');
        let product = response.body[0];
        response = await request(app).put(`/products/${product._id}`)
        .send({})
        .set('Accept', 'application/json');
        expect(response.status).toBe(400);
    });
});