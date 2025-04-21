
export const radio = [
  {
    name: 'Evropa 2',
    frequency: '88.6 FM',
    description:
      'Evropa 2 je nejposlouchanější česká komerční rádio mezi mladými posluchači. Vysílá hudbu z žebříčků, kterou si sami vybírají posluchači a nejnovější hity.',
    link: '/evropa2.html',
  },
  
  {
    name: 'Frekvence 1',
    frequency: '102.1 FM',
    description:
      'Frekvence 1 je česká soukromá rozhlasová stanice, která vysílá od roku 1991. Vysílá hudbu z žebříčků, kterou si sami vybírají posluchači a nejnovější hity.',
    link: '/frekvence1.html',
  },
  {
    name: 'Radiožurnál',
    frequency: '92.6 FM',
    description:
      'Radiožurnál je česká rozhlasová stanice Českého rozhlasu. Vysílá hudbu z žebříčků, kterou si sami vybírají posluchači a nejnovější hity.',
    link: '/radiozurnal.html',
  },
];


export const renderStation = (i) => {  //vytváříme funkci renderStation, parametr index umožňuje funkci vědět, kterou stanici rádií z datového pole má použít
  document.querySelector("main").innerHTML += ` 
  <div>         
  <h1>${radio[i].name }</h1>
  <p>${radio[i].frequency}</p>
  <p>${radio[i].description}</p>
  </div>
  `;
  }

  //v souboru vytvořte funkci renderNavigation
  //pomocí které vykreslíte do hlavičky stránky navigaci s odkazy na jednotlivé stanice. Použijte k tomu funkci forEach.
  

  export const renderNavigation = () => {    //funkce renderNavigation, slovo export umožňuje, aby byla funkce dostupná i v jiných souborech
    // Pro každou stanici vytvoříme odkaz a přidáme ho do seznamu
    radio.forEach((stanice) => {
      document.querySelector("header").innerHTML +=
     `<a href="${stanice.link}">${stanice.name}</a>`;
  });
    }
  