const div1 = (osztaly)  => { //div1 valtozoba eltarolok egy arrow functiont , parameterbe megadom az osztalyt
    const div = document.createElement("div")// letrehozok egy div elemet
    div.className = osztaly// osztalynevet adok neki
    return div //visszaadom a div elemet
}

const d_container = div1("container") // letrehozok egy divet aminek az osztalya container
document.body.appendChild(d_container)// hozzadom a bodyhoz
const d_table = div1("table")// letrehozok egy divet aminek az osztalya table
const d_form = div1("form")//letrehozok egy divet aminek az osztalya form

d_container.appendChild(d_table)// hozzadom a table divet a containerhez
d_container.appendChild(d_form)// hozzadom a form divet a containerhez



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