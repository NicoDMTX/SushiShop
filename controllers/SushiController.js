const SushiService = require("../services/sushiServices");

module.exports = class Sushi{
    static async apiGetAllSushis(req, res, next) {
        try {
            const sushis = await SushiService.getAllSushis()
            if(!sushis){
                res.status(404).json("There are no sushis published yet!")
             }
             res.json(sushis);

           } catch (error) {
              res.status(500).json({error: error})
           }
    }

    static async apiGetSushiById(req, res, next){
        try {
           let id = req.params.id || {};
           const sushi = await SushiService.getSushibyId(id);
           res.json(sushi);
        } catch (error) {
           res.status(500).json({error: 'erreur ici'})
        }
     }

     static async apiCreateSushi(req, res, next) {
      try {
         const createdSushi = await SushiService.createSushi(req.body);
         res.json(createdSushi);
      } catch (error) {
         res.status(500).json({error: error})
      }
     }
}