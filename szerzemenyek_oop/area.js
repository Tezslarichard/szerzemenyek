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
    #formFieldArray; //letrehozok egy privat valtozot
    constructor(osztaly,field_elemek,manager){// letrehozok egy constructort es parameterbe megadok valamit
        super(osztaly,manager)// meghivom a szulo osztaly konstruktorat
        this.#formFieldArray = [] // letrehozok egy ures tombot
        const form1 = document.createElement("form")// letrehozok egy form elemet
        this.div.appendChild(form1)// hozzadom a divhez
        
        for(const elem of field_elemek){// vegigmegyek a field_elemek tomb elemein
            const f_Field = new FormField(elem.f_id,elem.f_label)// letrehozok egy FormField elemet
            this.#formFieldArray.push(f_Field)// hozzadom a formFieldArrayhoz
            form1.appendChild(f_Field.getDiv())// hozzadom a formhoz

        }
        const button = document.createElement("button")// letrehozok egy button elemet
        button.textContent = "Hozzáadás"// beallitom a szoveget
        form1.appendChild(button)// hozzadom a formhoz

        form1.addEventListener("submit", (e) => {// letrehozok egy eventlistnert
            e.preventDefault() // megakadalyozom a form viselkedeset
            const elemek = {}// letrehozok egy ures tombot amibe eltarolom az inputokat
            let valid = true // letrehozok egy valtozot ami igaz
            for(const futo of this.#formFieldArray){// vegigmegyek a formFieldArray elemein
                futo.error = ""// beallitom az error elemet uresre
                if(futo.ertek === ''){ // ha a mezo ures
                    futo.error = "Töltsd ki papi"//akkor beallitom az error elemet
                    valid = false // beallitom a valid valtozot hamisra
                }
                elemek[futo.id] = futo.ertek//az aktuális mező értékét eltárolom az elemek objektumba
            }
            if(valid){ // ha igaz
            const uj_elemek = new Person(elemek.author,elemek.genre,elemek.title)// letrehozok egy uj person objektumot az elemek adatai alpjan
            this.manager.addPerson(uj_elemek)// hozzadom a managerhez

        }
    })

}
}

class FormField{ // letrehozok egy FormField osztalyt
    #id; // privat valtozo
    #inputElemek; // privat valtozo
    #labelElemek; // privat valtozo
    #errorElemek; // privat valtozo

    get id(){//csinalok egy gettert
        return this.#id // getter ami visszaadja az idt
    }

    get ertek(){//csinalok egy gettert
        return this.#inputElemek.value // getter ami visszaadja az input elemet
    }

    set error(ertek){ // csinalok egy settert
        this.#errorElemek.textContent = ertek // beallitom az error elemet
    }

    constructor(id,label){ // letrehozok egy constructort
    this.#id = id // beallitom az idt
    this.#labelElemek = document.createElement("label") // letrehozok egy label elemet
    this.#labelElemek.htmlFor = id // beallitom az idjat
    this.#labelElemek.textContent = label // beallitom a szoveget
    this.#inputElemek = document.createElement("input") // letrehozok egy input elemet
    this.#inputElemek.id = id // beallitom az idjat
    this.#errorElemek = document.createElement("span") // letrehozok egy span elemet
    this.#errorElemek.className = "error" // beallitom az osztalyt    
    }

    getDiv(){// // letrehozok egy metodust
        const div2 = div1("field") // letrehozok egy div elemet aminek az osztalya field
        const br1 = document.createElement("br") // letrehozok egy br elemet
        const br2 = document.createElement("br") // letrehozok egy br elemet
        const htmlElemek = [this.#labelElemek,br1,this.#inputElemek,br2,this.#errorElemek] // letrehozok egy tombot amibe eltarolom az elemeket
        for(const elem of htmlElemek){ // vegigmegyek az elemek tomb elemein
            div2.appendChild(elem) // hozzadom a divhez
        }
        return div2 // visszaadom a div elemet
    }
    
}