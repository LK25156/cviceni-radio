import {renderStation, renderNavigation } from "./radio.js";  


  renderNavigation()
  renderStation(0); //Zobrazíme první stanici

  //funkce pro navigaci

  export const renderNavigation = () => {    //funkce renderNavigation, slovo export umožňuje, aby byla funkce dostupná i v jiných souborech
    const header = document.querySelector("header"); //hledá HTML prvek header na stránce, to je místo 
    const links = []; // Vytvoříme prázdný seznam odkazů
    // Pro každou stanici vytvoříme odkaz a přidáme ho do seznamu
    radio.forEach(station => {
    const link = `<a href="${station.link}">${station.name}</a>`;
    links.push(link);
  });
   // Spojíme odkazy pomocí " | " a přidáme je do hlavičky
   header.innerHTML = links.join(' | ');
  };
  
  
