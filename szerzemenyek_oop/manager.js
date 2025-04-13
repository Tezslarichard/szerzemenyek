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
    }