//area class megcsinalom
class Area{

    #div //csinalok egy privat valtozot

    get div(){// letrehozok egy gettert ami visszaadja a div elemet
        return this.#div// visszaadom a div elemet
    }

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

        this.#div = document.createElement("div")// letrehozok egy div elemet
        this.#div.className = osztaly// osztalynevet adok neki
        d_container.appendChild(this.#div)// hozzadom a containeroop divhez
    }
}

/**
 * 
 */
class Table extends Area{// letrehozok egy Table osztalyt ami az Area osztalybol szarmazik
    constructor(cssClass){// letrehozok egy constructort es parameterbe megadok valamit
        super(cssClass)// meghivom a szulo osztaly konstruktorat
        const table = document.createElement("table")// letrehozok egy table elemet
        this.div.appendChild(table)// hozzadom a divhez
        const thead = document.createElement("thead")// letrehozok egy thead elemet
        table.appendChild(thead)// hozzadom a tablehez
        const th_row = document.createElement("tr")// letrehozok egy tr elemet
        thead.appendChild(th_row)// hozzadom a theadhez
        const th_ertek = ['Szerző', 'Műfaj','cím'] // eltarolom a fejlec adatait egy valtozoba
        for(const fej of th_ertek){// vegigmegyek a th_ertek tomb elemein
            const th = document.createElement("th")// letrehozok egy th elemet
            th.innerText = fej// beallitom a szoveget
            th_row.appendChild(th)// hozzadom a sorhoz
        }
        const tbody = document.createElement("tbody")// letrehozok egy tbody elemet
        table.appendChild(tbody)// hozzadom a tablehez

    }
}