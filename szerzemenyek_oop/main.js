const elvalaszto = document.createElement("hr")// letrehozok egy elvalaszto elemet
document.body.appendChild(elvalaszto)// hozzadom a bodyhoz

const fieldek = [{ //csinálok egy tombot amiben eltarolom az elemeket
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
const tableoop = new Table('table')//letrehozok egy table peldanyt
const formoop = new Form('form',fieldek)//letrehozok egy form area peldanyt