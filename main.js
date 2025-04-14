const array = [] // letrehozok egy tombot
const div1 = (osztaly)  => { //div1 valtozoba eltarolok egy arrow functiont , parameterbe megadom az osztalyt
    const div = document.createElement("div")// letrehozok egy div elemet
    div.className = osztaly// osztalynevet adok neki
    return div //visszaadom a div elemet
}

const d_container = div1("container") // letrehozok egy divet aminek az osztalya container
document.body.appendChild(d_container)// hozzadom a bodyhoz
const d_table = div1("table")// letrehozok egy divet aminek az osztalya table
const d_form = div1("form")//letrehozok egy divet aminek az osztalya form





const table1 = document.createElement("table")// letrehozok egy table elemet
d_table.appendChild(table1)// hozzadom a table divhez

const fejlec = document.createElement("thead")// letrehozok egy thead elemet
table1.appendChild(fejlec)// hozzadom a tablehez

const fejsor = document.createElement("tr")// letrehozok egy sort elemet
fejlec.appendChild(fejsor)// hozzadom a theadhez

const th_ertek = ['Szerző', 'Műfaj','cím'] // eltarolom a fejlec adatait egy valtozoba

for(const fej of th_ertek){// vegigmegyek a th_ertek tomb elemein
    const th = document.createElement("th")// letrehozok egy th elemet
    th.innerText = fej// beallitom a szoveget
    fejsor.appendChild(th)// hozzadom a sorhoz
}

const tbody = document.createElement("tbody")// letrehozok egy tbody elemet
table1.appendChild(tbody)// hozzadom a tablehez


const formSima = document.createElement("form")// letrehozok egy form elemet
d_form.appendChild(formSima)// hozzadom a form divhez
const field_elemek = [{ //csinálok egy tombot amiben eltarolom az elemeket
    f_id : 'author',//fieldnek givelek idt (americaba been so torom a hungariant)
    f_label : 'Szerző', // labelnek adok nevet
    },
    {
        f_id :'genre', // fieldnek givelek idt (americaba been so torom a hungariant)
        f_label : 'Műfaj',// labelnek adok nevet
    },
    {
        f_id : 'title',//  fieldnek givelek idt (americaba been so torom a hungariant)
        f_label : 'Cím',// labelnek adok nevet
    }
]
for(const elem of field_elemek){// vegigmegyek a field_elemek tomb elemein
    const field = div1("field")// letrehozok egy div elemet aminek az osztalya field
    formSima.appendChild(field)// hozzadom a formhoz
    const label = document.createElement("label")// letrehozok egy label elemet
    label.htmlFor = elem.f_id// beallitom az idjat
    label.textContent = elem.f_label// beallitom a szoveget
    field.appendChild(label)// hozzadom a fieldhez
    const br = document.createElement("br")// letrehozok egy sortorest
    
    const input = document.createElement("input")// letrehozok egy input elemet
    input.id = elem.f_id// beallitom az idjat
    field.appendChild(document.createElement("br"))// hozzadok egy sortorest
    field.appendChild(input)// hozzadom a fieldhez
    field.appendChild(br)// hozzadom a fieldhez
    const span_error = document.createElement("span")// letrehozok egy span elemet
    span_error.className = "error"// beallitom az osztalyt
    field.appendChild(span_error)// hozzadom a fieldhez
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
    array.push(v_object)// hozzadom a tombhoz az uj elemet
    const tr = document.createElement("tr")// letrehozok egy tr elemet
    tbody.appendChild(tr)// hozzadom a tbodyhoz

    const nev_cella = document.createElement("td")// letrehozok egy td elemet
    nev_cella.innerText = v_object.author// beallitom a szoveget
    tr.appendChild(nev_cella)// hozzadom a sorhoz

    const mufaj_cella = document.createElement("td")// letrehozok egy td elemet
    mufaj_cella.innerText = v_object.genre// beallitom a szoveget
    tr.appendChild(mufaj_cella)// hozzadom a sorhoz

    const cim_cella = document.createElement("td")// letrehozok egy td elemet
    cim_cella.innerText = v_object.title// beallitom a szoveget
    tr.appendChild(cim_cella)// hozzadom a sorhoz
}})
d_container.appendChild(d_table)// hozzadom a table divet a containerhez
d_container.appendChild(d_form)// hozzadom a form divet a containerhez

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

        const pers = { //// letrehozok egy valtozot amiben eltarolom a felvagott elemeket
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


