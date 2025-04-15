/**
 * Person osztaly ebbe getterek vannak es egy constructor 
 */
class Person{//letrehozok egy Person osztalyt
    #szerzo;//csinalok egy private valtozot
    #mufaj;//csinalok egy private valtozot
    #cim;//csinalok egy private valtozot

    get szerzo(){//csinalok egy gettert 
        return this.#szerzo// visszaadom a szerzo privat valtozot
    }
    get mufaj(){//csinalok egy gettert
        return this.#mufaj// visszaadom a mufaj privat valtozot
    }   
    get cim(){//csinalok egy gettert
        return this.#cim// visszaadom a cim privat valtozot
    }
    constructor(szerzo,mufaj,cim){//csinalok egy constructort aminek parameterbe megadom a szerzot, mufajt es cimet
        this.#szerzo = szerzo // beallitom a szerzo privat valtozot
        this.#mufaj = mufaj// beallitom a mufaj privat valtozot
        this.#cim = cim// beallitom a cim privat valtozot
    }


}