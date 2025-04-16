/**
 * 
 * @param {string} osztaly div osztalya ezt hozzuk letre
 * @returns {HTMLDivElement} div elemet hoztuk letre
 */
const div1 = (osztaly)  => { //div1 valtozoba eltarolok egy arrow functiont  parameterbe megadom az osztalyt
    const div = document.createElement("div")// letrehozok egy div elemet
    div.className = osztaly// osztalynevet adok neki
    return div //visszaadom a div elemet
}

/**
 * 
 * 
 * @param {pers_Array[]} pers_Array 
 * @param {Function} callback   
 * @returns {eredmeny[]} eredmeny tombot ad vissza
 */
const szures = (pers_Array, callback) =>{ // letrehozok egy szures fuggvenyt ami parameterbe kap egy tombot es egy callbacket
    const eredmeny = [] // letrehozok egy tombot
    for(const pers of pers_Array){// vegigmegyek a tomb elemein
        if(callback(pers)){//ha callback igaz akkor
            eredmeny.push(pers)// hozzadom a tombhoz
        }
    }
    return eredmeny // visszaadom a tombot
}

/**
 * 
 * @param {HTMLElement} container 
 * @param {Function} callback 
 */
const tabla_generalas = (container, callback,)=>{// letrehozok egy tabla_generalas fuggvenyt
    const table_div = div1("table")// letrehozok egy divet aminek az osztalya table_div
    container.appendChild(table_div)// hozzadom a containerhez
    const table = document.createElement("table")// letrehozok egy table elemet
    table_div.appendChild(table)// hozzadom a table_divhez
    const thead = document.createElement("thead")// letrehozok egy thead elemet
    table.appendChild(thead)// hozzadom a tablehez
    const tr = document.createElement("tr")// letrehozok egy tr elemet
    thead.appendChild(tr)// hozzadom a theadhez
    const fejlec_cella = ['Szerző', 'Műfaj', 'Cím'] // letrehozok egy tombot amiben eltarolom a fejlec cellakat
    for(const fejlec of fejlec_cella){// vegigmegyek a fejlec cellak elemein
        const th = document.createElement("th")// letrehozok egy th elemet
        th.innerText = fejlec// beallitom a szoveget
        tr.appendChild(th)// hozzadom a sorhoz
    }
    const tbody = document.createElement("tbody")// letrehozok egy tbody elemet
    table.appendChild(tbody)// hozzadom a tablehez
    callback(tbody)// meghivom a callbacket a tbodyval
}
/**
 * 
 * @param {HTMLElement} d_container 
 * @param {HTMLElement} tbody 
 * @param {Object} array 
 */
const form_generalas = (d_container, tbody,array) => { // letrehozok egy form_generalas fuggvenyt
    const d_form = div1("form")// letrehozok egy divet aminek az osztalya form
    d_container.appendChild(d_form)// hozzadom a containerhez
    const formSima = document.createElement("form")// letrehozok egy form elemet
    d_form.appendChild(formSima)// hozzadom a formhoz
    const field_elem =[{// //csinálok egy tombot amiben eltarolom az elemeket
        fieldid: 'author', // letrehozok egy tombot amiben eltarolom a form elemeit
        fieldLabel: 'Szerző' // beallitom a szoveget

    }
    ,{
        fieldid: 'genre', // letrehozok egy tombot amiben eltarolom a form elemeit
        fieldLabel: 'Műfaj' // beallitom a szoveget
    }
    ,{
        fieldid: 'title', // letrehozok egy tombot amiben eltarolom a form elemeit
        fieldLabel: 'Cím' // beallitom a szoveget
    }    
    ]
    for(const field of field_elem){ // vegigmegyek a tomb elemein
        const field1 = document.createElement("field")// letrehozok egy input elemet
        formSima.appendChild(field1)// hozzadom a formhoz
        const label = document.createElement("label")// letrehozok egy label elemet
        label.htmlFor = field.fieldid// beallitom az idjat
        label.innerText = field.fieldLabel// beallitom a szoveget
        field1.appendChild(label)// hozzadom a fieldhez
        field1.appendChild(document.createElement("br"))// hozzadom a fieldhez
        const input = document.createElement("input")// letrehozok egy input elemet
        input.id = field.fieldid// beallitom az idjat
        field1.appendChild(input)// hozzadom a fieldhez
        field1.appendChild(document.createElement("br"))// hozzadom a fieldhez
        const error = document.createElement("span")// letrehozok egy div elemet
        error.className = 'error'// beallitom az osztalyat
        field1.appendChild(error)// hozzadom a fieldhez
    }


const buttonsima = document.createElement("button")// letrehozok egy button elemet
buttonsima.textContent = "Hozzáadás"// beallitom a szoveget
formSima.appendChild(buttonsima)// hozzadom a formhoz


formSima.addEventListener("submit", (e) => { //hozzadok egy eventlistenert a formhoz
    e.preventDefault()//form viselkedeset megakadalyozom
    const v_object = {} // letrehozok egy ures objektumot
    const inputok = e.target.querySelectorAll('input'); // letrehozok egy valtozot amiben eltarolom az inputokat
    let valid = true // letrehozok egy valtozot ami alapbol true
    for(const input_f of inputok){ // vegigmegyek az inputokon
       
        const error =input_f.parentElement.querySelector('.error')// letrehozok egy valtozot amiben eltarolom az error elemet
        if(!error){ //ha minden kivan toltve konzolba irja hogy nincs error
            console.error('Nincs error') // kiirja a konzolba hogy nincs error
            return //kilep a fuggvenybol
        }
        error.textContent = ''// beallitom az error szoveget uresre
        if(input_f.value === ''){ // ha az inputfield ures
            error.innerText = 'Ird be mert hianyos'// beallitom az error szoveget
            valid = false // atallitom falsera false
        } 
        v_object[input_f.id] = input_f.value;// beallitom az objektum elemeit az inputok idja alapjan
    }

if(valid){ // ha valid
    array.push(v_object) // hozzadom a tombhoz az uj elemet
    sorhoz_adas(tbody, v_object) // meghivom a sorhoz_adas fuggvenyt
}})

d_container.appendChild(d_form)// hozzadom a form divet a containerhez
}
/**
 * 
 * @param {HTMLElement} tbody 
 * @param {Object} elem 
 */
const sorhoz_adas = (tbody,elem) =>{ // letrehozok egy sorhoz adas fuggvenyt

        const tr = document.createElement("tr")// letrehozok egy tr elemet
        tbody.appendChild(tr)// hozzadom a tbodyhoz
    
        const nev_cell2 = document.createElement("td")// letrehozok egy td elemet
        nev_cell2.innerText = elem.szerzo || elem.author// beallitom a szoveget megint minden esetet beirok inkabb
        tbody.appendChild(nev_cell2)// hozzadom a tbodyhoz
    
        const mufaj_cell2 = document.createElement("td")// letrehozok egy td elemet
        mufaj_cell2.innerText = elem.mufaj || elem.genre// beallitom a szoveget megint minden esetet beirok inkabb
        tbody.appendChild(mufaj_cell2)// hozzadom a tbodyhoz
    
        const cim_cell2 = document.createElement("td")// letrehozok egy td elemet
        cim_cell2.innerText = elem.cim || elem.title// beallitom a szoveget megint minden esetet beirok inkabb
        tbody.appendChild(cim_cell2)// hozzadom a tbodyhoz
    
}
/**
 * 
 * @param {HTMLElement} d_container 
 * @param {HTMLElement} tbody 
 */
const fajl_feltoltes1 =(d_container, tbody) =>{ // letrehozok egy fajl feltoltes fuggvenyt
const fajl_input = document.createElement("input")// letrehozok egy input elemet
d_container.appendChild(fajl_input)// hozzadom a containerhez
fajl_input.type = "file"// beallitom a tipusat
fajl_input.addEventListener("change", (e) => {// letrehozok egy eventlistenert
const fajl = e.target.files[0]// letrehozok egy valtozot amiben eltarolom a fajlt
const fajl_olvaso = new FileReader()// letrehozok egy fajl olvasot
fajl_olvaso.onload = () => {//letrehozok egy eventlistenert az olvasora
    const sorok = fajl_olvaso.result.split('\n')// letrehozok egy valtozot amiben eltarolom a sorokat
    const felvagott = sorok.slice(1)// letrehozok egy valtozot amiben eltarolom a felvagott elemeket

    for(const sor of felvagott){// vegigmegyek a felvagott elemein a sor
        const felvagottak = sor.trim() // letrehozok egy valtozot amiben eltarolom a felvagott elemeket
        const fields = felvagottak.split(';')// letrehozok egy valtozot amiben eltarolom a felvagott elemeket

        const pers = { // letrehozok egy valtozot amiben eltarolom a felvagott elemeket
            szerzo: fields[0],// beallitom a szerzot
            mufaj: fields[1],// beallitom a mufajt
            cim: fields[2]// beallitom a cimet
        }
        array.push(pers)// hozzadom a tombhoz az uj elemet

        const tr1 = document.createElement("tr")// letrehozok egy tr elemet
        tbody.appendChild(tr1)// hozzadom a tbodyhoz

        const nev_cell1 = document.createElement("td")// letrehozok egy td elemet
        nev_cell1.innerText = pers.szerzo// beallitom a szoveget
        tbody.appendChild(nev_cell1)// hozzadom a tbodyhoz

        const mufaj_cell1 = document.createElement("td")// letrehozok egy td elemet
        mufaj_cell1.innerText = pers.mufaj// beallitom a szoveget
        tbody.appendChild(mufaj_cell1)// hozzadom a tbodyhoz

        const cim_cell1 = document.createElement("td")// letrehozok egy td elemet
        cim_cell1.innerText = pers.cim// beallitom a szoveget
        tbody.appendChild(cim_cell1)// hozzadom a tbodyhoz

    }
}
fajl_olvaso.readAsText(fajl)// beallitom hogy szoveg legyen
})
}
/**
 * 
 * @param {HTMLElement} d_container 
 * @param {Object} array 
 */
const letoltes_gomb =(d_container, array)=>{ // letrehozok egy gombot
    const exportgomb = document.createElement('button') //letrehozok egy button elemet
    exportgomb.textContent = 'Letöltés' //beallitom a szoveget
    d_container.appendChild(exportgomb) //hozzadom a containerhez
    exportgomb.addEventListener('click', () => {   // letrehozok egy eventlistenert a gombhoz

     const link = document.createElement('a') // letrehozok egy a elemet
     const kontent_Array = ['Szerző;Műfaj;Cím'] // letrehozok egy tombot amiben eltarolom a szoveget
     for(const pers of array){ // vegigmegyek a tomb elemein
        kontent_Array.push(`${pers.szerzo || pers.author };${pers.mufaj || pers.genre };${pers.cim || pers.title }`) // beallitom a tomb elemeit, kicsit furan van megoldva mert kesze kuszan csinaltam a cim es a title keveredik igy lefedem az osszes lehetoseget
     }
     const kontent = kontent_Array.join('\n') // letrehozok egy valtozot amiben eltarolom a tomb elemeit
     const fajl2 = new Blob([kontent]) // letrehozok egy fajlt amiben eltarolom a fajl szoveget
     link.href = URL.createObjectURL(fajl2) // beallitom a linket
     link.download = 'newdata.csv' // beallitom a letoltesi nevet
     link.click() //meghivom a click fuggvenyt
     URL.revokeObjectURL(link.href) // meghivom a revokeObjectURL fuggvenyt
 })
}
/**
 * 
 * @param {HTMLElement} d_container 
 * @param {Object} array 
 * @param {HTMLElement} tbody 
 */
const szures_form =(d_container, array,tbody) =>{ // letrehozok egy szures formot
 const szures_F_div = div1("filterForm")// letrehozok egy divet aminek az osztalya szures_F_div
 d_container.appendChild(szures_F_div)// hozzadom a containerhez

 const formForSzures = document.createElement("form")// letrehozok egy form elemet
szures_F_div.appendChild(formForSzures)// hozzadom a szures_F_divhez

const kivalaszt = document.createElement("select")// letrehozok egy select elemet
formForSzures.appendChild(kivalaszt)// hozzadom a formhoz

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
}
]

for(const opcio of opciok){// vegigmegyek az opciok tomb elemein
    const option = document.createElement("option")// letrehozok egy option elemet
    option.value = opcio.ertek// beallitom az erteket
    option.innerText = opcio.innerText// beallitom a szoveget
    kivalaszt.appendChild(option)// hozzadom a selecthez
}

const input_szures = document.createElement("input")// letrehozok egy input elemet
input_szures.id = 'szures_input'// beallitom az idjat
formForSzures.appendChild(input_szures)// hozzadom a formhoz

const szures_gomb = document.createElement("button")// letrehozok egy button elemet
szures_gomb.innerText = 'Szűrés'// beallitom a szoveget
formForSzures.appendChild(szures_gomb)// hozzadom a formhoz

formForSzures.addEventListener("submit", (e) => {// letrehozok egy eventlistenert a formhoz
    e.preventDefault()// megakadalyozom a form viselkedeset
    const szuroinput = document.querySelector('#szures_input')// letrehozok egy valtozot amiben eltarolom a szuroinputot
    const select = e.target.querySelector('select')// letrehozok egy valtozot amiben eltarolom a selectet

    const kivalasztott_array = szures(array, (elem) => {// letrehozok egy valtozot amiben eltarolom a kivalasztott tombot
    if(select.value === 'author'){// ha a select valueja author
            if(szuroinput.value === elem.szerzo){// ha a szuroinput valueja megegyezik a szerzovel
                return true //truet ad vissza
        }
    }else if(select.value === 'genre'){// ha a select valueja genre
        if(szuroinput.value === elem.mufaj){// ha a szuroinput valueja megegyezik a mufajjal
            return true //truet ad vissza
        }
    }
    else if(select.value === 'title'){// ha a select valueja title
        if(szuroinput.value === elem.cim){// ha a szuroinput valueja megegyezik a cimmel
            return true //truet ad vissza
        }
    }
    else{ //vagy ha ures
        return true //truet ad vissza
    }

    })


tbody.innerHTML = ''// uresre allitom a tbodyt
for(const elem of kivalasztott_array){ // vegigmegyek a kivalasztott tomb elemein
    sorhoz_adas(tbody, elem) // meghivom a sorhoz_adas fuggvenyt
}


})}