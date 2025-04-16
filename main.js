/**
 * @typedef {author:string, genre:string, title:string} kontent_Array
 * @type {kontent_Array[]}
 */
const array = [] // letrehozok egy tombot

const container_d = div1('container')// letrehozok egy divet aminek az osztalya container
document.body.appendChild(container_d)// hozzadom a bodyhoz
tabla_generalas(container_d, (tbody) => { // letrehozok egy tablageneralas fuggvenyt
  form_generalas(container_d, tbody, array) // meghivom a form_generalas fuggvenyt
  fajl_feltoltes1(container_d, tbody) // meghivom a fajl_feltoltes fuggvenyt
  letoltes_gomb(container_d, array) // meghivom a letoltes_gomb fuggvenyt
  szures_form(container_d, array, tbody) // meghivom a szures_form fuggvenyt
})