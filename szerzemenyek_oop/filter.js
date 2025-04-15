class Filter extends Area{
    constructor(osztaly, manager){// letrehozok egy Filter osztalyt ami az Area osztalybol szarmazik
        super(osztaly, manager)
        
    const form = document.createElement('form')// letrehozok egy form elemet
    this.div.appendChild(form)// hozzadom a divhez

    const kivalaszt = document.createElement('select')// letrehozok egy select elemet
    form.appendChild(kivalaszt)// beallitom a nevet

    const opciok = [{// letrehozok egy tombot amiben eltarolom az opciokat
        ertek:'author', //beallitom az erteket
        innerText:'Szerző'  // beallitom a szoveget
    },
    { 
        ertek:'genre',  // beallitom az erteket
        innerText:'Műfaj'   // beallitom a szoveget
    },  
    {   
        ertek:'title',  // beallitom az erteket
        innerText:'Cím' // beallitom a szoveget
    },  
    {   
        ertek: '',  //ez egy ures opcio lesz
        innerText:''  // beallitom a szoveget uresre  
    }]
   
    for(const opcio of opciok){// vegigmegyek az opciokon
        const opcio_elem = document.createElement('option')// letrehozok egy opcio elemet
        opcio_elem.value = opcio.ertek// beallitom az erteket
        opcio_elem.innerText = opcio.innerText// beallitom a szoveget
        kivalaszt.appendChild(opcio_elem)// hozzadom a selecthez
    }
    const input = document.createElement('input')// letrehozok egy input elemet
    input.id = 'kivalaszt_input'// beallitom a tipust
    form.appendChild(input)// hozzadom a formhoz

    const button = document.createElement('button')// letrehozok egy button elemet
    button.innerText = 'Szűrés'// beallitom a szoveget
    form.appendChild(button)// hozzadom a formhoz
    form.addEventListener('submit', (e) => {// letrehozok egy eventet
        e.preventDefault()// megakadalyozom az alapertelmezett viselkedest
        const kivalasztott_opcio = e.target.querySelector('#kivalaszt_input')// beallitom a kivalasztott opciot
        const kivalaszt = e.target.querySelector('select')// beallitom a kivalasztott opciot
        
        this.manager.filter((elem) => {// letrehozok egy filter metodust
            if(kivalaszt.value === 'author'){// ha a kivalaszt valueja author
                if(kivalasztott_opcio.value === elem.szerzo){// ha a szuroinput valueja megegyezik a szerzovel
                    return true //true-t ad vissza
            }
        }else if(kivalaszt.value === 'genre'){// ha a kivalaszt valueja genre
            if(kivalasztott_opcio.value === elem.mufaj){// ha a kivalasztott_opcio valueja megegyezik a mufajjal
                return true //true-t ad vissza
            }
        }
        else if(kivalaszt.value === 'title'){// ha a kivalaszt valueja title
            if(kivalasztott_opcio.value === elem.cim){// ha a kivalasztott_opcio valueja megegyezik a cimmel
                return true //true-t ad vissza
            }
        }
        else { //vagy ha ures
            return true //true-t ad vissza
        }
    
            })
        })
    }

}
