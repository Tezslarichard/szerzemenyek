    /**
     * A manager osztaly kezeli a fuggvenyeket
     */
    class Manager{// letrehozok egy manager osztalyt
        /**
         * @type {array} array
         */
        #array;//  letrehozok egy privat valtozot
        /**
         * @type {AddCallback} addPersonCallBack
         */
        #addPersonCallBack;//  letrehozok egy privat callbacket
        /**
         * @type {renderTableCallBack}
         */
        #renderTableCallBack;//  letrehozok egy privat renderTable callbacket
        /**
         * nem kell ide irni nagyon semmit
         */
        constructor(){// letrehozok egy constructort
            this.#array = [] // letrehozok egy tombot
            
        }
        /**
         * 
         * @param {AddPersonCallBack} callback 
         */
        setAddPersonCallBack(callback){//letrehozok egy setAddPersonCallBack metodust
            this.#addPersonCallBack = callback// beallitom a callbacket
        }
        /**
         * 
         * @param {RenderTableCallBack} callback
         */
        setRenderTableCallBack(callback){// letrehozok egy setRenderTableCallBack metodust
            this.#renderTableCallBack = callback// beallitom a callbacket
        }
        /**
         * 
         * @param {Person} elem
         */
        addPerson(elem){// letrehozok egy addPerson metodust
            this.#array.push(elem)// hozzadom a tombhoz
            this.#addPersonCallBack(elem)// meghivom a callbacket
        }
    /**
     * 
     * @param {eredmeny} callback 
     */
    filter(callback){
        const eredmeny = []
        for(const elem of this.#array){// vegigmegyek a tomb elemein
            if(callback(elem)){// ha a callback igazat ad vissza
                eredmeny.push(elem)// hozzadom az eredmenyhez
            }
        }
        this.#renderTableCallBack(eredmeny)// meghivom a renderTable callbacket
    }
    /**
     * 
     * @returns {kontent_Array[]} egy tombot fog visszaadni
     */
    generateExportString(){// letrehozok egy generateExportString metodust
        const kontent_Array = ['Szerző;Műfaj;Cím'] // letrehozok egy tombot amiben eltarolom a szoveget
     for(const pers of this.#array){ // vegigmegyek a tomb elemein
        kontent_Array.push(`${pers.szerzo || pers.author };${pers.mufaj || pers.genre };${pers.cim || pers.title }`) // beallitom a tomb elemeit, kicsit furan van megoldva mert kesze kuszan csinaltam a cim es a title keveredik igy lefedem az osszes lehetoseget
     }
     return kontent_Array.join('\n')// visszaadom a tombot
    }

    
}