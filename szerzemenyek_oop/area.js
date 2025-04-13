//area class megcsinalom
class Area{

    #div; //csinalok egy privat valtozot

    #manager;//csinalok egy privat valtozot

    get div(){// letrehozok egy gettert ami visszaadja a div elemet
        return this.#div// visszaadom a div elemet
    }

    get manager(){// letrehozok egy gettert ami visszaadja a manager elemet
        return this.#manager// visszaadom a manager elemet
    }
    /**
     * 
     * @param {string} osztaly majd a vegen irom be
     */
    constructor(osztaly,manager){//letrehozok egy constructort aminek parameterbe megadom az osztalyt
        this.#manager = manager// beallitom a manager privat valtozot
        const container_tar = this.#ContanerDiv()// letrehozok egy valtozot amibe eltarolom a #ContanerDiv visszateresi erteket
        this.#div = document.createElement("div")// letrehozok egy div elemet
        this.#div.className = osztaly// osztalynevet adok neki
        d_container.appendChild(this.#div)// hozzadom a containeroop divhez
    
    }
        #ContanerDiv(){ //letrehozok egy ContanerDiv privat metodust
        let d_container = document.querySelector('.containeroop')// letrehozok egy divet aminek az osztalya containeroop
        if(!d_container){ // ha nem letezik a containeroop osztalyu div
            d_container = document.createElement("div")// letrehozok egy div elemet
            d_container.className = "containeroop"// osztalynevet adok neki
            document.body.appendChild(d_container)// hozzadom a bodyhoz
        }
        return d_container //visszaadom a div elemet
       }
    
}

/**
 * 
 */
class Table extends Area{// letrehozok egy Table osztalyt ami az Area osztalybol szarmazik
    constructor(osztaly , manager){// letrehozok egy constructort es parameterbe megadok valamit
        super(osztaly,manager)// meghivom a szulo osztaly konstruktorat
        const t_body = this.#tablageneralas()// letrehozok egy valtozot amibe eltarolom a #tablageneralas() visszateresi erteket

        this.manager.setAddPersonCallBack((pers) => {// beallitom a setAddPersonCallback metodust
            const tr1 = document.createElement("tr")// letrehozok egy tr elemet

            const nev_cell = document.createElement("td")// letrehozok egy td elemet
            nev_cell.innerText = pers.szerzo// beallitom a szoveget
            tr1.appendChild(nev_cell)// hozzadom a sorhoz

            const mufaj_cell = document.createElement("td")// letrehozok egy td elemet
            mufaj_cell.innerText = pers.mufaj// beallitom a szoveget
            tr1.appendChild(mufaj_cell)// hozzadom a sorhoz

            const cim_cell = document.createElement("td")// letrehozok egy td elemet    
            cim_cell.innerText = pers.cim// beallitom a szoveget
            tr1.appendChild(cim_cell)// hozzadom a sorhoz
            t_body.appendChild(tr1)// hozzadom a tbodyhoz
        })
    }

        #tablageneralas(){ //letrehozok egy tablageneralas privat metodust
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

        return tbody// visszaadom a tbody elemet
        }
    }


/**
 * 
 */
class Form extends Area{ // letrehozok egy Form osztalyt ami az Area osztalybol szarmazik
    constructor(osztaly,field_elemek,manager){// letrehozok egy constructort es parameterbe megadok valamit
        super(osztaly,manager)// meghivom a szulo osztaly konstruktorat
        const form1 = document.createElement("form")// letrehozok egy form elemet
        this.div.appendChild(form1)// hozzadom a divhez
        
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

        form1.addEventListener("submit", (e) => {// letrehozok egy eventlistnert
            e.preventDefault() // megakadalyozom a form viselkedeset

            const inputok1 = e.target.querySelectorAll("input")// letrehozok egy valtozot amibe eltarolom az inputokat
            const elemek = {}// letrehozok egy ures tombot amibe eltarolom az inputokat
            for(const futo of inputok1){// vegigmegyek az inputokon
                elemek[futo.id] = futo.value// beallitom az idjat es a valuejat
            }
            const uj_elemek = new Person(elemek.author,elemek.genre,elemek.title)// letrehozok egy uj elemet
            this.manager.addPerson(uj_elemek)// hozzadom a managerhez

        })
}
}