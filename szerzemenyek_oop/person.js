/**
 * Person osztaly ebbe getterek vannak es egy constructor 
 */
class Person{//letrehozok egy Person osztalyt
    /**
     * @type {szerzo}
     */
    #szerzo;//csinalok egy private valtozot
    /**
     * @type {mufaj}
     */
    #mufaj;//csinalok egy private valtozot
    /**
     * @type {cim}
     */
    #cim;//csinalok egy private valtozot
    /** 
     * @returns {string}
     */
    get szerzo(){//csinalok egy gettert 
        return this.#szerzo// visszaadom a szerzo privat valtozot
    }
    /**
     * @returns {string}
     */
    get mufaj(){//csinalok egy gettert
        return this.#mufaj// visszaadom a mufaj privat valtozot
    }
    /**
     *  @returns {string} 
     */   
    get cim(){//csinalok egy gettert
        return this.#cim// visszaadom a cim privat valtozot
    }
    /**
     * 
     * @param {String} szerzo 
     * @param {String} mufaj 
     * @param {String} cim 
     */
    constructor(szerzo,mufaj,cim){//csinalok egy constructort aminek parameterbe megadom a szerzot, mufajt es cimet
        this.#szerzo = szerzo // beallitom a szerzo privat valtozot
        this.#mufaj = mufaj// beallitom a mufaj privat valtozot
        this.#cim = cim// beallitom a cim privat valtozot
    }


}