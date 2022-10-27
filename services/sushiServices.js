const Sushi = require("../models/SushiModel");

module.exports = class SushiService {
    static async getAllSushis() {
        try {
            const allSushis = await Sushi.find();
            return allSushis;
        } catch (e) {
            console.log(`Canno't find sushis ${e}`)
        }
    }

    static async getSushibyId(sushiId){
        try {
            const singleSushiResponse = await Sushi.findById({_id: sushiId});
            console.log(singleSushiResponse)
            return singleSushiResponse;
        } catch (error) {
            console.log(`Sushi not found. ${error}`)
        }
    }

    static async createSushi(data) {
        try {
            const newSushi = {
                sushiname: data.sushiname,
                body: data.body,
                sushi_image: data.sushi_image
            }
            const response = await new Sushi(newSushi).save();
            return response;
        } catch (error) {
            console.log(error)
        }
    }
}