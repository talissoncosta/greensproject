const Products = require("../model/products");
const _ = require("lodash");

const get_all_products = async (req, res) => {
    const data = await Products.find({});
    return res.json(data);
}

const get_product = async (req, res) => {
    try {
        const { productId } = req.params;
        if (!productId)
            return res.status(400).json({
                error: "Invalid data"
            });  
        const data = await Products.findById(productId);
        if(data.length > 0)
            data = data[0];
            
        return res.json(data);      
    } catch (error) {
        return res.status(500).json(error)
    }

}

const store_products = async (req, res) => {
    try {
        if(_.isEmpty(req.body)) 
            return res.status(400).json({
                error: "Invalid data"
            });   

        await Products.create(req.body);
        return res.status(200).json({
            success: "Data loaded successfully!"
        });    
    } catch (error) {
        return res.status(500).json(error)
    }

}

const update_product = async (req, res) => {

    try {
        const { productId } = req.params;
        if(_.isEmpty(req.body)) 
            return res.status(400).json({
                error: "Invalid data"
            });   


        const update = {
            $set: req.body
        }
        const data = await Products.findByIdAndUpdate(productId, update);
            
    
        return res.status(200).json({
            success:"The product was update successfully!",
            product:data
        });
    } catch (error) {
        return res.status(500).json(error)
    }


}

var remove_product = async (req, res) => {
    try {
        const { productId } = req.params;
        if (!productId)
            return res.status(400).json({
                error: "Invalid data"
            });  
        const data = await Products.findByIdAndRemove(productId);

        return res.status(200).json({
            success: "The product was successfully deleted!",
            product:data
        });
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = {
    get_all_products,
    get_product,
    store_products,
    update_product,
    remove_product
}