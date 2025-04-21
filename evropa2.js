import { radio } from "./radio.js";  //chceme načíst data,kt byla exportována ze souboru radio.js
/*const evropa2 = radio.find((element) => element.name === "Evropa 2") //funkce vyššího řádu
document.body.innerHTML=` <div>
    
      <h1>name: '${evropa2.name}'</h1>
      <p>frequency: '${evropa2.frequency}'</p>
      <p>description:
        '${evropa2.description}'</p>
      <p>link: '${evropa2.link}'</p>
  </div>`*/

  //v souboru vytvořte funkci renderNavigation
  //pomocí které vykreslíte do hlavičky stránky navigaci s odkazy na jednotlivé stanice. Použijte k tomu funkci forEach.

  const renderStation = (index) => {  //vytváříme funkci renderStation, parametr index umožňuje funkci vědět, kterou stanici rádii z datového seznamu má použít
  const station = radio[index]; //z datového seznamu vyber položku podle čísla(indexu),které předáme funkci,
//v programování má každý prvek seznamu svou pozici, která se označuje jako index
  const main = document.getElementById("station"); //hledáme HTML element s ID station, pomocí tohoto ID budeme moct vložit obsah do tohoto konkrétního místa na stránce
  //pomocí funkce innerHTML vložíme obsah do elementu main
  main.innerHTML = `          
  <h1>${station.name}</h1>
  <p>${station.frequency}</p>
  <p>${station.description}</p>
  `;
  }

  renderStation(0); //Zobrazíme první stanici
