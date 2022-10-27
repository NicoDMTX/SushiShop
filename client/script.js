const db = "http://localhost:5000"
const sushis = []

class Sushi {
    constructor() {

    }

    async getAllSushi() {
        try {
            const response = await axios.get(`${db}/sushi`)
            return response.data
        } catch (e) {
            console.log(e)
        }
    }

    async getSushi(id) {
        try {
            const response = await axios.get(`${db}/sushi/${id}`)
            return response
        } catch (e) {
            console.log(e)
        }
    }

    generateSushi(sushiname, body, sushi_image) {
        const sushiCard = document.createElement("div");
        sushiCard.classList.add('sushi_card');
        sushiCard.innerHTML = `
            <span class="sushi_name">${sushiname}</span>
            <img class="sushi_image" src="${sushi_image ? sushi_image : ''}">
            <p class="sushi_body">${body}</p>
        `

        return sushiCard;
    }

    generateAllSushi(datas) {
        datas.forEach(data => {
            const div = this.generateSushi(data.sushiname, data.body, data.sushi_image)
            sushis.push(div)

            document.querySelector('.main_div').appendChild(div);
        });
    }
}



document.addEventListener('DOMContentLoaded', async () => {
    const res = await axios.get(`${db}/sushi`)
    const datas = res.data
    const sushiBuilder = new Sushi;
    sushiBuilder.generateAllSushi(datas)
})
