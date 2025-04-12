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
    constructor(osztaly){// letrehozok egy constructort es parameterbe megadok valamit
        super(osztaly)// meghivom a szulo osztaly konstruktorat
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

/**
 * 
 */
class Form extends Area{
    constructor(osztaly){// letrehozok egy constructort es parameterbe megadok valamit
        super(osztaly)// meghivom a szulo osztaly konstruktorat
        const form1 = document.createElement("form")// letrehozok egy form elemet
        this.div.appendChild(form1)// hozzadom a divhez
        const field_elemek = [{ //csinálok egy tombot amiben eltarolom az elemeket
            f_id : 'author',//fieldnek givelek idt (americaba been so torom a hungariant)
            f_label : 'Szerző', // labelnek adok nevet
            },
            {
                f_id :'genre', // fieldnek givelek idt (americaba been so torom a hungariant)
                f_label : 'Műfaj',// labelnek adok nevet
            },
            {
                f_id : 'title',//  fieldnek givelek idt (americaba been so torom a hungariant)
                f_label : 'Cím',// labelnek adok nevet
            }
        ]
        for(const elem of field_elemek){// vegigmegyek a field_elemek tomb elemein
            const field = div1('field')// letrehozok egy div elemet aminek az osztalya field
            form1.appendChild(field)// hozzadom a formhoz

            const label = document.createElement("label")// letrehozok egy label elemet
            label.htmlFor = elem.f_id// beallitom az idjat
            label.textContent = elem.f_label// beallitom a szoveget
            field.appendChild(label)// hozzadom a fieldhez

            const input = document.createElement("input")// letrehozok egy input elemet
            input.id = elem.f_id// beallitom az idjat
            field.appendChild(document.createElement('br'))// letrehozok egy br elemet es hozzadom a fieldhez
            field.appendChild(input)// hozzadom a fieldhez

        }
        const button = document.createElement("button")// letrehozok egy button elemet
        button.textContent = "Hozzáadás"// beallitom a szoveget
        form1.appendChild(button)// hozzadom a formhoz
}
}