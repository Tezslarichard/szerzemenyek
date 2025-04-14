    /**
     * 
     */
    class Manager{// letrehozok egy manager osztalyt
        #array;//  letrehozok egy privat valtozot
        #addPersonCallBack;//  letrehozok egy privat callbacket

        constructor(){// letrehozok egy constructort
            this.#array = [] // letrehozok egy tombot
            
        }

        setAddPersonCallBack(callback){//letrehozok egy setAddPersonCallBack metodust
            this.#addPersonCallBack = callback// beallitom a callbacket
        }

        addPerson(elem){// letrehozok egy addPerson metodust
            this.#array.push(elem)// hozzadom a tombhoz
            this.#addPersonCallBack(elem)// meghivom a callbacket
        }
    

    generateExportString(){// letrehozok egy generateExportString metodust
        const kontent_Array = ['Szerző;Műfaj;Cím'] // letrehozok egy tombot amiben eltarolom a szoveget
     for(const pers of this.#array){ // vegigmegyek a tomb elemein
        kontent_Array.push(`${pers.szerzo || pers.author };${pers.mufaj || pers.genre };${pers.cim || pers.title }`) // beallitom a tomb elemeit, kicsit furan van megoldva mert kesze kuszan csinaltam a cim es a title keveredik igy lefedem az osszes lehetoseget
     }
     return kontent_Array.join('\n')// visszaadom a tombot
    }

}