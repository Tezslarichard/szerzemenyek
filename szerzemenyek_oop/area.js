//area class megcsinalom
class Area{
    /**
     * 
     * @param {string} osztaly majd a vegen irom be
     */
    constructor(osztaly){//letrehozok egy constructort aminek parameterbe megadom az osztalyt
        let d_container = document.querySelector('.containeroop')// letrehozok egy divet aminek az osztalya containeroop
        if(!d_container){ // ha nem letezik a containeroop osztalyu div
            d_container = document.createElement("div")// letrehozok egy div elemet
            d_container.className = "containeroop"// osztalynevet adok neki
            document.body.appendChild(d_container)// hozzadom a bodyhoz
        }

        const div = document.createElement("div")// letrehozok egy div elemet
        div.className = osztaly// osztalynevet adok neki
        d_container.appendChild(div)// hozzadom a containeroop divhez
    }
}