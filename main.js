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