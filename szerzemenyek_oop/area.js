/**
* Az area osztaly az egesznek az alapja
 */
class Area{
    /** 
     * @type {Div}
     */
    #div; //csinalok egy privat valtozot

    /** 
     * @type {Manager}
     */
    #manager;//csinalok egy privat valtozot

    /**
     * @returns {HTMLDivElement} visszaadja a div elemet
     */
    get div(){// letrehozok egy gettert ami visszaadja a div elemet
        return this.#div// visszaadom a div elemet
    }
    /**
     * @returns {Manager} visszaadja a manager elemet
     */
    get manager(){// letrehozok egy gettert ami visszaadja a manager elemet
        return this.#manager// visszaadom a manager elemet
    }
    /**
     * 
     * @param {string} osztaly az osztaly neve
     * @param {Manager} manager  a manager peldany
     */
    constructor(osztaly,manager){//letrehozok egy constructort aminek parameterbe megadom az osztalyt
        this.#manager = manager// beallitom a manager privat valtozot
        const container_tar = this.#ContanerDiv()// letrehozok egy valtozot amibe eltarolom a #ContanerDiv visszateresi erteket
        this.#div = document.createElement("div")// letrehozok egy div elemet
        this.#div.className = osztaly// osztalynevet adok neki
        container_tar.appendChild(this.#div)// hozzadom a containeroop divhez
    
    }
        /**
         * 
         * @returns {HTMLDivElement} visszaadja a div elemet
         * 
         */
        #ContanerDiv(){ //letrehozok egy ContanerDiv privat metodust
        let d_container = document.querySelector('.containeroop')// letrehozok egy divet aminek az osztalya containeroop
        if(!d_container){ // ha nem letezik a containeroop osztalyu div
            d_container = document.createElement("div")// letrehozok egy div elemet
            d_container.className = "containeroop"// osztalynevet adok neki
            document.body.appendChild(d_container)// hozzadom a bodyhoz
        }
        return d_container //visszaadom a div elemet
       }
       /**
        * @param {String} label ez lesz a button innertextje
        * @returns {HTMLElement} visszaadja a button elemet
        */
       buttonkeszites(label){
       const buttonka = document.createElement("button")// letrehozok egy button elemet
       buttonka.innerText = label// beallitom a szoveget
       return buttonka // visszaadom a button elemet

    }
}

/**
 * * @param {string} osztaly  az osztaly neve
 * * @param {Manager} manager  a manager peldany
 * 
 */
class Table extends Area{// letrehozok egy Table osztalyt ami az Area osztalybol szarmazik
    /**
     * @param {string} osztaly 
     * @param {Manager} manager 
     */
    constructor(osztaly , manager){// letrehozok egy constructort es parameterbe megadok valamit
        super(osztaly,manager)// meghivom a szulo osztaly konstruktorat
        const t_body = this.#tablageneralas()// letrehozok egy valtozot amibe eltarolom a #tablageneralas() visszateresi erteket

       this.manager.setAddPersonCallBack(this.#addPersonCallBack(t_body))
       this.manager.setRenderTableCallBack(this.#RenderTableCallBack(t_body))// meghivom a setRenderTableCallBack metodust
    }
        /**
         * 
         * @param {HTMLElement} t_body tbody az egy html element lesz
         * @returns {(pers: Array<Object>) => void} 
         */
        #RenderTableCallBack(t_body){// letrehozok egy privat metodust ami a renderelest vegzi
            return (pers) => {// letrehozok egy valtozot amibe eltarolom a person sorokat
                t_body.innerHTML = ""// beallitom a tbody elemet uresre
                for(const person of pers){// vegigmegyek a person tomb elemein
                    this.#PersonSorkrealas(person,t_body)// meghivom a #PersonSorkrealas metodust
                }
            }
        }  

        /**
         * 
         * @param {HTMLElement} t_body tbody az egy html element lesz
         * @returns {pers: Array<Object>} visszaadja a tombot
         */
        #addPersonCallBack(t_body){// letrehozok egy privat metodust ami a person sorokat generalja
            return (pers) => {// letrehozok egy valtozot amibe eltarolom a person sorokat
                this.#PersonSorkrealas(pers,t_body)// meghivom a #PersonSorkrealas metodust
            }
        }
    
            /**
             * 
             * @param {author:string: genre:string: title:string} pers person objektum
             * @param {HTMLElement} t_body htmlelementet adja vissza
             */
            #PersonSorkrealas(pers,t_body){// letrehozok egy privat metodust ami a person sorokat generalja
            const tr1 = document.createElement("tr")// letrehozok egy tr elemet

            this.#CellaKrealas(tr1,pers.szerzo || pers.author)// meghivom a #CellaKrealas metodust
            this.#CellaKrealas(tr1,pers.mufaj || pers.genre)// meghivom a #CellaKrealas metodust
            this.#CellaKrealas(tr1,pers.cim || pers.title)// meghivom a #CellaKrealas metodust
            t_body.appendChild(tr1)// hozzadom a tbodyhoz
        }
        /**
         *
         * @param {HtmlElement} tr1  tr1 az egy html elementet csinal
         * @param {string} szoveg  string lesz
         * @param {string} type td lesz ami htmlelement
         */
    #CellaKrealas(tr1,szoveg,type='td'){// letrehozok egy privat metodust ami a cellakat generalja
        const td1 = document.createElement(type)// letrehozok egy td elemet
        td1.innerText = szoveg// beallitom a szoveget
        tr1.appendChild(td1)// hozzadom a sorhoz
    }

        /**
         * 
         * @returns {HTMLElement} visszaadja a tbody elemet
         */
        #tablageneralas(){//letrehozok egy tablageneralas privat metodust
        const table = document.createElement("table")// letrehozok egy table elemet
        this.div.appendChild(table)// hozzadom a divhez
        const thead = document.createElement("thead")// letrehozok egy thead elemet
        table.appendChild(thead)// hozzadom a tablehez
        const th_row = document.createElement("tr")// letrehozok egy tr elemet
        thead.appendChild(th_row)// hozzadom a theadhez
        const th_ertek = ['Szerző', 'Műfaj','cím'] // eltarolom a fejlec adatait egy valtozoba
        for(const fej of th_ertek){// vegigmegyek a th_ertek tomb elemein
            this.#CellaKrealas(th_row,fej,'th')// meghivom a #CellaKrealas metodust
        }
        const tbody = document.createElement("tbody")// letrehozok egy tbody elemet
        table.appendChild(tbody)// hozzadom a tablehez
        return tbody// visszaadom a tbody elemet
    }
 
}   
    



/**
 * 
 * ez a formot kepciseli az area leszarmazottja
 * 
 */
class Form extends Area{ // letrehozok egy Form osztalyt ami az Area osztalybol szarmazik
    /** 
     * @type {FormField[]} ez egy arraylesz
     */
    #formFieldArray; //letrehozok egy privat valtozot
    /**
     * 
     * @param {string} osztaly  
     * @param {HTMLFormElement} field_elemek 
     * @param {Manager} manager 
     */
    constructor(osztaly,field_elemek,manager){// letrehozok egy constructort es parameterbe megadok valamit
        super(osztaly,manager)// meghivom a szulo osztaly konstruktorat
        this.#formFieldArray = [] // letrehozok egy ures tombot
        const forma = this.#FormKrealas(field_elemek)// letrehozok egy valtozot amibe eltarolom a #FormKrealas visszateresi erteket
        forma.addEventListener("submit", this.#Formesemenykezelo())// letrehozok egy eventlistnert

    }
    /**
     * 
     * @param {id: string, label : string} field_elemek_config 
     * @returns {HTMLFormElement} 
     */
    #FormKrealas(field_elemek_config){// letrehozok egy privat metodust ami a formot generalja
        const form1 = document.createElement("form")// letrehozok egy form elemet
        this.div.appendChild(form1)// hozzadom a divhez
        
        for(const elem of field_elemek_config){// vegigmegyek a field_elemek tomb elemein
            const f_Field = new FormField(elem.f_id,elem.f_label)// letrehozok egy FormField elemet
            this.#formFieldArray.push(f_Field)// hozzadom a formFieldArrayhoz
            form1.appendChild(f_Field.getDiv())// hozzadom a formhoz

        }
        const button = this.buttonkeszites("Hozzáadás")// letrehozok egy button elemet
        form1.appendChild(button)// hozzadom a formhoz
        return form1// visszaadom a form elemet
    }
        /**
         * 
         * @returns {EventListener} itt hivjuk meg
         */
        #Formesemenykezelo(){// letrehozok egy privat metodust ami az esemenykezelo
            return (e) => {// letrehozok egy valtozot amibe eltarolom az esemenykezelo fuggvenyt
                e.preventDefault()// megakadalyozom az alapertelmezett viselkedest
                if(this.#OsszesValidalas()){ // ha igaz
                const uj_elemek = this.#Objectertek()
                const uj_elemek2 = new Person(uj_elemek.author,uj_elemek.genre,uj_elemek.title)// letrehozok egy uj person objektumot az elemek adatai alpjan
                this.manager.addPerson(uj_elemek2)// hozzadom a managerhez
            }
        }
    }
            
    /**
     * 
     * @returns {boolean}  visszaadja a valid valtozot
     */      
    #OsszesValidalas(){// letrehozok egy privat metodust ami az osszes validalast vegzi
        let valid = true

        for(const elem of this.#formFieldArray){// vegigmegyek a formFieldArray tomb elemein
            elem.error = ""// beallitom az error elemet uresre
            if(elem.ertek === ""){// ha az ertek ures
                elem.error = "Kötelező kitölteni!"// beallitom az error elemet
                valid = false// beallitom a valid valtozot hamisra
            }
            
        }
        return valid// visszaadom a valid valtozot
    }
    /**
     * 
     * @returns {id: string, ertek: string}  visszaadja az objektumot
     */
    #Objectertek(){// letrehozok egy privat metodust ami az objektumot generalja
    const v_object = {}// letrehozok egy ures objektumot
        for(const elem of this.#formFieldArray){// vegigmegyek a formFieldArray tomb elemein
            v_object[elem.id] = elem.ertek// beallitom az objektum elemeit
        }
        return v_object// visszaadom az objektumot
    }
    



}
/**
 *  A feltoltes es letoltes osztaly az area osztalybol szarmazik
 */
class Feltoltes_Letoltes extends Area{// letrehozok egy Feltoltes osztalyt ami az Area osztalybol szarmazik
    /**
     * 
     * @param {string} osztaly 
     * @param {Manager} manager 
     */
    constructor(osztaly,manager){// letrehozok egy constructort
        super(osztaly,manager)//meghivom a szulo osztaly konstruktorat
        const input = document.createElement("input")// letrehozok egy input elemet
        input.id = "file"// beallitom az idjat
        input.type = "file"// beallitom a tipusat
        this.div.appendChild(input)// hozzadom a divhez
        input.addEventListener("change", this.#importInputEsemeny())// letrehozok egy eventlistnert
        const exportButton = this.buttonkeszites("Letöltés")// letrehozok egy button elemet
        this.div.appendChild(exportButton)// hozzadom a divhez
        exportButton.addEventListener("click", 
        this.#ExportButtonEsemeny())// letrehozok egy eventlistnert
    }     
        /**
         * 
         * @returns {EventListener}  Az esemenykezelo fuggveny
         */
        #ExportButtonEsemeny(){// letrehozok egy privat metodust ami az exportot vegz
            return () => {// letrehozok egy valtozot amibe eltarolom az esemenykezelo fuggvenyt
            const link = document.createElement("a")// letrehozok egy a elemet
            const kontent = this.manager.generateExportString()// letrehozok egy valtozot amibe eltarolom a manager export stringjet
            const fajl2 = new Blob([kontent])// letrehozok egy fajlt amiben eltarolom a fajl szoveget
            link.href = URL.createObjectURL(fajl2)// beallitom a linket
            link.download = 'newdata.csv'// beallitom a letoltesi nevet
            link.click()// meghivom a click fuggvenyt
            URL.revokeObjectURL(link.href)// meghivom a revokeObjectURL fuggvenyt
            }
       }
       /**
        * 
        * @returns {EventListener}  Az esemenykezelo ad vissza
        */
        #importInputEsemeny(){// letrehozok egy privat metodust ami az importot vegzi
            return(e) => {// letrehozok egy valtozot amibe eltarolom az esemenykezelo fuggvenyt
            const fajl = e.target.files[0]; // letrehozok egy valtozot amibe eltarolom a fajlt
            const fajlolvaso = new FileReader();//letrehozok egy fajl olvasot
            fajlolvaso.onload = () => {//letrehozok egy eventlistenert az olvasora
               const sorok1 = fajlolvaso.result.split('\n')//letrehozok egy valtozot amibe eltarolom az elemeket
               const levagott_elemek = sorok1.slice(1);//letrehozok egy valtozot amibe eltarolom a levagott elemeket
               for(const sor of levagott_elemek){//vegigmegyek a tomb elemein
                    const vagott_sor = sor.trim();//letrehozok egy valtozot amibe eltarolom a levagott elemeket
                    const fields = vagott_sor.split(';');//letrehozok egy valtozot amibe eltarolom a sze szedett elemeket
                    const person = new Person(fields[0],fields[1],fields[2])//letrehozok egy uj person objektumot az elemek adatai alpjan
                    this.manager.addPerson(person)//hozzadom a managerhez
               }
        
            }    
            fajlolvaso.readAsText(fajl)// beallitom a fajl olvasot
        }
    }
}
/**
 * A formfield egy urlapot kepvisel
 */
class FormField{ // letrehozok egy FormField osztalyt
    /**
     * @type {id}
     */
    #id; // privat valtozo
    /**
     * @type {inputElemek}
     */
    #inputElemek; // privat valtozo
    /**
     * @type {labelElemek}
     */
    #labelElemek; // privat valtozo
    /** 
     * *@type {errorElemek}
     */
    #errorElemek; // privat valtozo
    /** 
     * * @returns {string}  visszaadja az idt
     */
    get id(){//csinalok egy gettert
        return this.#id // getter ami visszaadja az idt
    }
    /**
     * @returns {string}  visszaadja az input elemet
     */
    get ertek(){//csinalok egy gettert
        return this.#inputElemek.value // getter ami visszaadja az input elemet
    }
    /**
     * * @param {string} ertek  beallitja az error elemet
     */
    set error(ertek){ // csinalok egy settert
        this.#errorElemek.textContent = ertek // beallitom az error elemet
    }
    /**
     * 
     * @param {string} id 
     * @param {HTMLLabelElement} label 
     */
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
    /**
     * 
     * @returns {HTMLDivElement}  visszaadja a div elemet
     */
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