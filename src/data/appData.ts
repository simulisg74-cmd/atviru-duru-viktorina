export const SECTOR_IDS = [
  "architektura",
  "gamyba",
  "it",
  "inzinerija",
  "menai",
  "paslaugos",
  "socialine",
  "sveikata",
  "transportas",
  "verslas",
  "zemesukis",
] as const;

export type SectorId = (typeof SECTOR_IDS)[number];

export interface Question {
  text: string;
  isTrue: boolean;
}

export interface Profession {
  id: string;
  title: string;
  image: string;
  questions: readonly Question[];
}

export interface Sector {
  title: string;
  icon: string;
  professions: readonly Profession[];
}

export interface AppData {
  sectors: Record<SectorId, Sector>;
}

export const appData: AppData = {
  sectors: {
    architektura: {
      title: "Architektūra ir statyba",
      icon: "🏗️",
      professions: [
        {
          id: "apdailininkas",
          title: "Apdailininkas",
          image: "/images/architektura/apdailininkas.webp",
          questions: [
            { text: "Gipso kartono plokštės naudojamos greitam sienų lyginimui bei pertvarų formavimui.", isTrue: true },
            { text: "Prieš dažant sieną užtenka ją tik nuplauti – specialus gruntavimas nėra būtinas.", isTrue: false },
            { text: "Glaistymas atliekamas norint paslėpti sienos nelygumus ir paruošti ją dažymui.", isTrue: true },
            { text: "Apdailininkas dirba tik patalpų viduje ir niekada neatlieka pastato fasado darbų.", isTrue: false },
            { text: "Apdailininko darbe naudojamas gulsčiukas padeda nustatyti, ar paviršius yra idealiai tiesus.", isTrue: true },
          ],
        },
        {
          id: "plyteliu_klojejo_padejejas",
          title: "Plytelių klojėjo-tinkuotojo padėjėjas",
          image: "/images/architektura/plyteliu-klojejas.webp",
          questions: [
            { text: "Padėjėjo pagrindinė užduotis – tik stebėti meistro darbą ir neprisiliesti prie įrankių.", isTrue: false },
            { text: "Tinkuojant sienas, „švyturėliai“ (gairės) naudojami tam, kad tinko sluoksnis būtų idealiai lygus.", isTrue: true },
            { text: "Klijuojant plyteles vonioje, prieš tai būtina sienas ir grindis padengti hidroizoliacija.", isTrue: true },
            { text: "Sumaišyti plytelių klijai gali stovėti kibire kelias dienas ir neprarasti savo savybių.", isTrue: false },
            { text: "Plytelių kryželiai naudojami tam, kad tarp visų plytelių būtų išlaikytas vienodas tarpas.", isTrue: true },
          ],
        },
        {
          id: "santechnikas",
          title: "Santechnikas",
          image: "/images/architektura/santechnikas.webp",
          questions: [
            { text: "Santechnikai montuoja ne tik vandentiekio, bet ir pastatų šildymo bei nuotekų sistemas.", isTrue: true },
            { text: "Sifonas po kriaukle montuojamas tam, kad sulaikytų nemalonius kvapus iš kanalizacijos.", isTrue: true },
            { text: "Plastikinius vandentiekio vamzdžius meistrai dažniausiai sujungia juos tiesiog suklijuodami lipnia juosta.", isTrue: false },
            { text: "Šildymo sistemoje susikaupęs oras padeda radiatoriams greičiau ir stipriau įšilti.", isTrue: false },
            { text: "Santechniko darbe būtina išmanyti brėžinius, kad vamzdynai būtų išvedžioti tiksliai pagal projektą.", isTrue: true },
          ],
        },
      ],
    },

    gamyba: {
      title: "Gamyba ir perdirbimas",
      icon: "🏭",
      professions: [
        {
          id: "siuvejas",
          title: "Siuvėjas",
          image:
            "https://images.unsplash.com/photo-1551893665-f843f600794e?w=500&q=80",
          questions: [
            { text: "Siuvimo mašinose viršutinis ir apatinis siūlai susipina audinio viduryje, suformuodami dygsnį.", isTrue: true },
            { text: "Visiems audiniams (šilkui, džinsui, odai) siūti visada naudojama ta pati universali adata.", isTrue: false },
            { text: "Overlokas yra speciali mašina, apkerpanti ir apmėtanti audinio kraštus, kad jie neirtų.", isTrue: true },
            { text: "Siuvėjui pakanka tik mokėti siūti, iškarpų (lekalų) išmanyti nereikia.", isTrue: false },
            { text: "Lygintuvas (presavimas) naudojamas ne tik baigus siūti, bet ir po kiekvienos atliktos siūlės.", isTrue: true },
          ],
        },
        {
          id: "medienos_staklininkas",
          title: "Medienos apdirbimo staklininkas",
          image:
            "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=500&q=80",
          questions: [
            { text: "Medienos drėgnumas turi didžiulę įtaką jos apdirbimo kokybei ir gaminio ilgaamžiškumui.", isTrue: true },
            { text: "Kietmedžiui (ąžuolui) ir minkštai medienai staklėse visada taikomi tie patys pjovimo greičiai.", isTrue: false },
            { text: "Obliavimo staklės naudojamos medienos paviršiui idealiai išlyginti ir glotninti.", isTrue: true },
            { text: "Jei staklėse įjungtas dulkių siurblys, apsauginiai akiniai operatoriui nebėra būtini.", isTrue: false },
            { text: "CNC medienos apdirbimo centrai detales pjauna ir frezuoja automatiškai pagal kompiuterinį brėžinį.", isTrue: true },
          ],
        },
      ],
    },

    it: {
      title: "Informacijos ir ryšio technologijos",
      icon: "💻",
      professions: [
        {
          id: "it_technikas",
          title: "Informacinių ir ryšių technologijų aptarnavimo technikas",
          image:
            "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&q=80",
          questions: [
            { text: "Pagrindinė kompiuterio plokštė (Motherboard) sujungia visus komponentus į vieną sistemą.", isTrue: true },
            { text: "Norint pagreitinti kompiuterį, visada užtenka tik ištrinti nereikalingus failus iš darbalaukio.", isTrue: false },
            { text: "Terminai „RAM“ ir „Kietasis diskas (HDD/SSD)“ reiškia tą patį – ilgalaikę kompiuterio atmintį.", isTrue: false },
            { text: "Šis technikas diagnozuoja gedimus bei konfigūruoja operacines sistemas ir tinklus.", isTrue: true },
            { text: "Termopastos paskirtis yra užtikrinti gerą šilumos perdavimą nuo procesoriaus į aušintuvą.", isTrue: true },
          ],
        },
        {
          id: "multimedijos_technikas",
          title: "Multimedijos technikas",
          image:
            "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=500&q=80",
          questions: [
            { text: "Multimedijos technikas dirba tik su vaizdu ir niekada neprisiliečia prie garso montavimo.", isTrue: false },
            { text: "RGB spalvų modelis (Raudona, Žalia, Mėlyna) yra standartas skaitmeniniuose ekranuose.", isTrue: true },
            { text: "Kuo mažesnė vaizdo rezoliucija (pikselių skaičius), tuo ryškesnis ir detalesnis bus vaizdas.", isTrue: false },
            { text: "Geras apšvietimas ir garso kokybė vaizdo įrašui yra tokie pat svarbūs, kaip ir gera kamera.", isTrue: true },
            { text: "Vektorinė grafika (pvz., logotipai) praranda kokybę ir susilieja ją stipriai priartinus.", isTrue: false },
          ],
        },
        {
          id: "jaunesnysis_programuotojas",
          title: "Jaunesnysis programuotojas",
          image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=80",
          questions: [
            { text: "HTML yra programavimo kalba, skirta kurti sudėtingus dirbtinio intelekto algoritmus.", isTrue: false },
            { text: "Kodo testavimas (debugging) ir klaidų ieškojimas užima didelę dalį programuotojo laiko.", isTrue: true },
            { text: "Sintaksės klaida (Syntax error) reiškia, kad programa neveiks dėl netaisyklingos kodo gramatikos.", isTrue: true },
            { text: "Programuotojai viską moka atmintinai ir niekada neieško informacijos internete.", isTrue: false },
            { text: "CSS kodas yra naudojamas interneto puslapių dizainui, spalvoms ir išdėstymui stiliuoti.", isTrue: true },
          ],
        },
      ],
    },

    inzinerija: {
      title: "Inžinerija ir inžinerinės profesijos",
      icon: "⚡",
      professions: [
        {
          id: "suvirintojas",
          title: "Suvirintojas",
          image:
            "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&q=80",
          questions: [
            { text: "Visi specializuoti MIG/MAG suvirinimo aparatai visada turi ir MMA (elektrodinio) suvirinimo funkciją.", isTrue: false },
            { text: "Suvirinimo skydelis su automatiniu užtamsėjimu apsaugo nuo UV spindulių tik tada, kai užtamsėja.", isTrue: false },
            { text: "MIG/MAG suvirinime naudojamos dujos yra būtinos siūlės apsaugai nuo deguonies.", isTrue: true },
            { text: "Suvirintojo profesijoje svarbus tik fizinis jėgos panaudojimas, o ne rankų judesių tikslumas.", isTrue: false },
            { text: "TIG suvirinimas dažniausiai naudojamas ploniems metalams ir reikalauja kruopštumo.", isTrue: true },
          ],
        },
        {
          id: "kebulu_remontininkas",
          title: "Automobilių kėbulų remontininkas",
          image:
            "https://images.unsplash.com/photo-1599256621730-535171e28f32?w=500&q=80",
          questions: [
            { text: "Kėbulo geometrijos atstatymui po didelės avarijos naudojami specialūs tempimo stendai.", isTrue: true },
            { text: "Automobilio kėbulo įlenkimus visada būtina lyginti išpjaunant pažeistą vietą ir virinant naują.", isTrue: false },
            { text: "Prieš dažant automobilio detalę, ji turi būti kruopščiai gruntuojama ir šlifuojama.", isTrue: true },
            { text: "Kėbulo remontininkui nereikia išmanyti metalų, nes visos mašinos gaminamos iš vienodo plieno.", isTrue: false },
            { text: "Rūdžių pažeistas vietas galima tiesiog uždažyti – nauji dažai visiškai sustabdys koroziją.", isTrue: false },
          ],
        },
        {
          id: "auto_remontininkas",
          title: "Transporto priemonių remontininkas",
          image:
            "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=500&q=80",
          questions: [
            { text: "Moderniame automobilyje diagnostika dažniausiai atliekama prisijungiant per OBD jungtį.", isTrue: true },
            { text: "Stabdžių kaladėles reikia keisti tik tada, kai jos nutrupa ir pradeda skleisti garsą.", isTrue: false },
            { text: "Variklio alyvos keitimo intervalas priklauso ne tik nuo kilometrų, bet ir nuo praėjusio laiko.", isTrue: true },
            { text: "Padangų protektoriaus gylis neturi jokios įtakos automobilio stabdymo keliui ant šlapios dangos.", isTrue: false },
            { text: "Šiuolaikiniuose automobiliuose antifrizo lygį rekomenduojama tikrinti tik varikliui esant šaltam.", isTrue: true },
          ],
        },
        {
          id: "elektrikas",
          title: "Elektrikas",
          image:
            "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&q=80",
          questions: [
            { text: "Žmogaus kūnui pavojingiausia yra elektros srovės stiprumas (amperai), o ne vien įtampa (voltai).", isTrue: true },
            { text: "Įžeminimas namo elektros tinkle reikalingas tik tam, kad elektros lemputės šviestų ryškiau.", isTrue: false },
            { text: "Elektros srovė dažniausiai teka mažiausio pasipriešinimo keliu.", isTrue: true },
            { text: "Automatiniai jungikliai (saugikliai) elektros skydelyje apsaugo laidus nuo perkaitimo.", isTrue: true },
            { text: "Dirbant su aukšta įtampa pakanka mūvėti paprastas gumines indų plovimo pirštines.", isTrue: false },
          ],
        },
        {
          id: "mechatronikas",
          title: "Automatinių sistemų mechatronikas",
          image:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&q=80",
          questions: [
            { text: "Mechatronika į vieną visumą apjungia mechaniką, elektroniką ir programavimą (IT).", isTrue: true },
            { text: "Gamyklos konvejerių linijoms valdyti dažniausiai naudojami programuojami loginiai valdikliai (PLC).", isTrue: true },
            { text: "Mechatroniko darbas apsiriboja tik mechaninių detalių sutepimu.", isTrue: false },
            { text: "Pneumatinėse sistemose energijai perduoti naudojamas suslėgtas oras.", isTrue: true },
            { text: "Pramoniniai robotai patys „mato“ aplinką be jokių papildomų jutiklių ar kamerų.", isTrue: false },
          ],
        },
        {
          id: "auto_elektronikas",
          title: "Transporto priemonių elektronikas",
          image:
            "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500&q=80",
          questions: [
            { text: "Šiuolaikiniame automobilyje gali būti daugiau nei 50 kompiuterių, sujungtų į bendrą CAN tinklą.", isTrue: true },
            { text: "Jei užsidega „Check Engine“ lemputė, tai visada reiškia, kad varikliui trūksta tepalo.", isTrue: false },
            { text: "Osciloskopas yra prietaisas, naudojamas elektrinių signalų formoms vizualiai stebėti.", isTrue: true },
            { text: "Perdegusį automobilio saugiklį galima saugiai pakeisti tiesiog apvyniojus jį varine viela.", isTrue: false },
            { text: "Autoelektronikas dažnai atnaujina automobilio valdymo blokų programinę įrangą.", isTrue: true },
          ],
        },
        {
          id: "stakliu_operatorius",
          title: "Metalo apdirbimo staklių operatorius",
          image:
            "https://images.unsplash.com/photo-1565515268481-8b209e9db677?w=500&q=80",
          questions: [
            { text: "CNC staklės detales gamina automatiškai, pagal iš anksto parašytą G-kodą.", isTrue: true },
            { text: "Dirbant su programuojamomis metalo lankstymo staklėmis, būtina atsižvelgti į metalo storį ir elastingumą.", isTrue: true },
            { text: "Tekinimo staklėse dideliu greičiu sukasi pats pjovimo įrankis, o metalo ruošinys stovi vietoje.", isTrue: false },
            { text: "Staklių operatorius privalo mokėti skaityti inžinerinius brėžinius ir naudotis slankmačiu.", isTrue: true },
            { text: "Metalo apdirbimo staklėse naudojamas aušinimo skystis skirtas tik tam, kad detalė po darbo būtų švari.", isTrue: false },
          ],
        },
      ],
    },

    menai: {
      title: "Menai",
      icon: "🎨",
      professions: [
        {
          id: "floristas",
          title: "Floristas",
          image:
            "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=500&q=80",
          questions: [
            { text: "Floristikoje svarbu išmanyti ne tik gėlių rūšis, bet ir spalvų derinimo dėsnius.", isTrue: true },
            { text: "Pamerktos skintos gėlės ilgiausiai išsilaiko pastatytos ant tiesioginių saulės spindulių.", isTrue: false },
            { text: "Floristai kuria ne tik puokštes, bet ir dideles erdvines kompozicijas renginiams.", isTrue: true },
            { text: "Kuriant puokštes, visų gėlių stiebai visada privalo būti nukerpami vienodu ilgiu.", isTrue: false },
            { text: "Floristinė kempinė (oazė) vandeniu turi prisigerti pati, jos negalima spausti jėga.", isTrue: true },
          ],
        },
      ],
    },

    paslaugos: {
      title: "Paslaugos asmenims",
      icon: "🍳",
      professions: [
        {
          id: "kosmetikas",
          title: "Kosmetikas",
          image:
            "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&q=80",
          questions: [
            { text: "Kosmetikas atlieka veido valymo, drėkinimo ir maitinimo procedūras.", isTrue: true },
            { text: "Kosmetikas turi teisę atliekant procedūras naudoti botokso injekcijas.", isTrue: false },
            { text: "Tinkama odos priežiūra namuose yra tokia pat svarbi kaip ir vizitai pas kosmetiką.", isTrue: true },
            { text: "Žmonėms su riebia oda nereikia naudoti drėkinamųjų kremų.", isTrue: false },
            { text: "Kosmetikas privalo puikiai išmanyti higienos ir sanitarijos reikalavimus.", isTrue: true },
          ],
        },
        {
          id: "vizazistas",
          title: "Vizažistas",
          image:
            "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=500&q=80",
          questions: [
            { text: "Vizažisto pagrindinis darbas yra tik užtepti makiažo pagrindą (pudrą).", isTrue: false },
            { text: "Vizažistas parenka makiažą atsižvelgdamas į kliento veido bruožus ir odos tipą.", isTrue: true },
            { text: "Visiems klientams tinka tie patys makiažo produktai ir atspalviai.", isTrue: false },
            { text: "Spalvų teorijos išmanymas yra vienas svarbiausių vizažisto įgūdžių.", isTrue: true },
            { text: "Švarūs makiažo šepetėliai yra būtina sąlyga siekiant išvengti odos infekcijų.", isTrue: true },
          ],
        },
        {
          id: "virejas",
          title: "Virėjas",
          image:
            "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=500&q=80",
          questions: [
            { text: "Virėjas privalo išmanyti maisto saugos ir higienos reikalavimus.", isTrue: true },
            { text: "Geras virėjas niekada neragauja savo ruošiamo maisto.", isTrue: false },
            { text: "Tinkamas peilių valdymo (pjaustymo) greitis ir technika yra esminis virėjo įgūdis.", isTrue: true },
            { text: "Visi patiekalai restorane pradedami gaminti nuo nulio tik gavus kliento užsakymą.", isTrue: false },
            { text: "Skonių derinimas ir patiekalo estetinė išvaizda lėkštėje yra neatsiejama virėjo darbo dalis.", isTrue: true },
          ],
        },
        {
          id: "konditeris",
          title: "Konditeris",
          image:
            "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&q=80",
          questions: [
            { text: "Konditerijoje ingredientų proporcijų tikslumas yra daug svarbesnis nei paprastoje kulinarijoje.", isTrue: true },
            { text: "Konditeriai gamina tik tortus ir pyragus.", isTrue: false },
            { text: "Šokolado temperavimas (lydymas tam tikroje temperatūroje) reikalauja specifinių cheminių žinių.", isTrue: true },
            { text: "Mielinė tešla kyla geriausiai, jei ją įdėsime į šaldytuvą.", isTrue: false },
            { text: "Konditerio darbas reikalauja didelio kruopštumo bei kantrybės dekoruojant gaminius.", isTrue: true },
          ],
        },
        {
          id: "padavejas_barmenas",
          title: "Padavėjas ir barmenas",
          image:
            "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&q=80",
          questions: [
            { text: "Padavėjas turi puikiai išmanyti restorano meniu, kad galėtų patarti klientui.", isTrue: true },
            { text: "Barmeno darbas yra tik sumaišyti gėrimus, bendravimas su klientais nėra svarbus.", isTrue: false },
            { text: "Klasikinis aptarnavimo standartas reikalauja maistą paduoti iš kliento dešinės pusės.", isTrue: true },
            { text: "Kokteilius plakti plaktuve reikia tik dėl gražaus vaizdo, tai nekeičia skonio.", isTrue: false },
            { text: "Konfliktų sprendimas ir šypsena sunkiose situacijose yra būtini šios profesijos įgūdžiai.", isTrue: true },
          ],
        },
        {
          id: "kambariu_tvarkytojas",
          title: "Kambarių tvarkytojas",
          image:
            "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&q=80",
          questions: [
            { text: "Kambarių tvarkytojas privalo laikytis griežtų viešbučio švaros ir higienos standartų.", isTrue: true },
            { text: "Šis darbas nereikalauja fizinės ištvermės, nes viską atlieka valymo mašinos.", isTrue: false },
            { text: "Tvarkytojai turi žinoti, kokias chemines priemones saugu naudoti ant skirtingų paviršių.", isTrue: true },
            { text: "Viešbučio svečio asmeniniai daiktai tvarkant kambarį gali būti laisvai perkeliami į kitas vietas.", isTrue: false },
            { text: "Diskrecija ir privatumas – tvarkytojas neturi atskleisti detalių apie viešbučio svečius.", isTrue: true },
          ],
        },
        {
          id: "kirpejas",
          title: "Kirpėjas",
          image:
            "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500&q=80",
          questions: [
            { text: "Jei dažnai kirpsi plaukų galiukus, plaukai augs daug greičiau.", isTrue: false },
            { text: "Kirpėjas turi išmanyti plauko struktūrą ir cheminių dažų poveikį plaukui.", isTrue: true },
            { text: "Visiems klientams tinka tas pats kirpimo stilius, nepriklausomai nuo veido formos.", isTrue: false },
            { text: "Darbo įrankių dezinfekcija po kiekvieno kliento yra privaloma.", isTrue: true },
            { text: "Geras kirpėjas dažnai atlieka ir psichologo vaidmenį, išklausydamas kliento.", isTrue: true },
          ],
        },
      ],
    },
    socialine: {
      title: "Socialinė gerovė ir švietimas",
      icon: "🤝",
      professions: [
        {
          id: "ikimokyklinio_padejejas",
          title: "Ikimokyklinio ugdymo pedagogo padėjėjas",
          image:
            "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&q=80",
          questions: [
            { text: "Padėjėjas darželyje tik valo patalpas ir neprisideda prie vaikų ugdymo.", isTrue: false },
            { text: "Šios profesijos atstovas padeda vaikams ugdyti kasdienius higienos ir savitarnos įgūdžius.", isTrue: true },
            { text: "Padėjėjas gali savarankiškai keisti visą darželio ugdymo programą.", isTrue: false },
            { text: "Emocinis jautrumas ir kantrybė yra vienos svarbiausių savybių šiame darbe.", isTrue: true },
            { text: "Padėjėjas padeda pedagogui paruošti priemones kūrybinėms ir edukacinėms veikloms.", isTrue: true },
          ],
        },
        {
          id: "individualios_prieziuros",
          title: "Individualios priežiūros darbuotojas",
          image:
            "https://images.unsplash.com/photo-1576765974102-b756026ecee3?w=500&q=80",
          questions: [
            { text: "Šis specialistas padeda senyvo amžiaus ar negalią turintiems asmenims atlikti kasdienius buities darbus.", isTrue: true },
            { text: "Individualios priežiūros darbuotojai dirba tik ligoninių reanimacijos skyriuose.", isTrue: false },
            { text: "Darbuotojas gali padėti klientui apsipirkti, sumokėti mokesčius ar palydėti į polikliniką.", isTrue: true },
            { text: "Šio darbo atstovams nereikia išmanyti pirmosios pagalbos pagrindų.", isTrue: false },
            { text: "Gebėjimas išklausyti ir pabendrauti yra ne mažiau svarbus nei fizinė pagalba klientui.", isTrue: true },
          ],
        },
        {
          id: "pedagogo_padejejas",
          title: "Pedagogo padėjėjas",
          image:
            "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=500&q=80",
          questions: [
            { text: "Pedagogo padėjėjas mokykloje padeda specialiųjų ugdymosi poreikių turintiems mokiniams įsitraukti į pamoką.", isTrue: true },
            { text: "Padėjėjas turi teisę savarankiškai rašyti pažymius visiems klasės mokiniams.", isTrue: false },
            { text: "Jis padeda mokiniui susikaupti, paaiškina mokytojo skirtas užduotis ir padeda jas atlikti.", isTrue: true },
            { text: "Pedagogo padėjėjas reikalingas tik pradinėse klasėse.", isTrue: false },
            { text: "Bendradarbiavimas su pagrindiniu mokytoju ir švietimo pagalbos specialistais yra kasdienė šio darbo dalis.", isTrue: true },
          ],
        },
      ],
    },

    sveikata: {
      title: "Sveikatos priežiūra",
      icon: "🩺",
      professions: [
        {
          id: "slaugytojo_padejejas",
          title: "Slaugytojo padėjėjas",
          image:
            "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=500&q=80",
          questions: [
            { text: "Slaugytojo padėjėjas gali savarankiškai skirti ir suleisti vaistus pacientui.", isTrue: false },
            { text: "Emocinis palaikymas ir bendravimas su pacientu yra labai svarbi šio darbo dalis.", isTrue: true },
            { text: "Šios profesijos atstovai padeda pacientams atlikti higienos procedūras ir maitintis.", isTrue: true },
            { text: "Slaugytojo padėjėjai dirba išskirtinai tik ligoninėse.", isTrue: false },
            { text: "Reguliarus paciento vartymas lovoje padeda išvengti pragulų.", isTrue: true },
          ],
        },
        {
          id: "paramedikas",
          title: "Paramedikas",
          image:
            "https://images.unsplash.com/photo-1582716401301-b2407dc7563d?w=500&q=80",
          questions: [
            { text: "Paramedikai teikia būtinąją medicinos pagalbą įvykio vietoje ir pakeliui į ligoninę.", isTrue: true },
            { text: "Paramediko darbas yra ramus ir nereikalauja fizinės ištvermės.", isTrue: false },
            { text: "Defibriliatorius naudojamas atkurti normalų širdies ritmą staigios mirties atveju.", isTrue: true },
            { text: "Greitosios pagalbos automobilyje paramedikai atlieka sudėtingas chirurgines operacijas.", isTrue: false },
            { text: "Gebėjimas dirbti didelio streso sąlygomis yra esminė šios profesijos savybė.", isTrue: true },
          ],
        },
        {
          id: "masazistas",
          title: "Gydomojo masažo specialistas",
          image:
            "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500&q=80",
          questions: [
            { text: "Gydomasis masažas naudojamas tik atsipalaidavimui ir neturi medicininio poveikio.", isTrue: false },
            { text: "Masažas efektyviai padeda pagerinti kraujotaką ir sumažinti raumenų įtampą.", isTrue: true },
            { text: "Profesionaliam masažuotojui būtina idealiai išmanyti žmogaus anatomiją.", isTrue: true },
            { text: "Gydomąjį masažą galima atlikti bet kuriam žmogui, nepaisant jo turimų ligų.", isTrue: false },
            { text: "Taisyklinga paties masažuotojo darbo padėtis apsaugo jį nuo profesinių traumų.", isTrue: true },
          ],
        },
      ],
    },

    transportas: {
      title: "Transporto paslaugos",
      icon: "🚚",
      professions: [
        {
          id: "eksped",
          title: "Ekspeditorius",
          image:
            "https://images.unsplash.com/photo-1586528116311-ad8ed7c50a40?w=500&q=80",
          questions: [
            { text: "Ekspeditorius yra tas pats, kas tolimųjų reisų vairuotojas.", isTrue: false },
            { text: "Ekspeditoriaus užduotis yra sekti krovinio vietą ir informuoti klientą.", isTrue: true },
            { text: "Ekspeditoriaus darbe dažniausiai užtenka mokėti tik vieną kalbą.", isTrue: false },
            { text: "Ekspeditorius atsako už optimaliausio maršruto parinkimą.", isTrue: true },
            { text: "Ekspeditoriams nereikia išmanyti tarptautinių gabenimo dokumentų.", isTrue: false },
          ],
        },
        {
          id: "vairuot",
          title: "Motorinių transporto priemonių kroviniams vežti vairuotojas",
          image:
            "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=500&q=80",
          questions: [
            { text: "Krovinių vežimo vairuotojas privalo naudoti tachografą darbo ir poilsio laikui fiksuoti.", isTrue: true },
            { text: "Sunkvežimio vairuotojui nebūtina žinoti krovinio svorio, jei jis telpa į priekabą.", isTrue: false },
            { text: "Tinkamas krovinio tvirtinimas priekaboje yra tiesioginė vairuotojo atsakomybė.", isTrue: true },
            { text: "Sunkvežimiai neturi „aklųjų zonų“, nes jų veidrodėliai yra labai dideli.", isTrue: false },
            { text: "Ekovairavimo įgūdžiai padeda sutaupyti tūkstančius litrų degalų per metus.", isTrue: true },
          ],
        },
      ],
    },
    verslas: {
      title: "Verslas ir administravimas",
      icon: "📈",
      professions: [
        {
          id: "apskaita",
          title: "Apskaitininkas",
          image:
            "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&q=80",
          questions: [
            { text: "Šiuolaikiniai apskaitininkai didžiąją dalį skaičiavimų atlieka tik popieriuje su skaičiuotuvu.", isTrue: false },
            { text: "Sąvokos „Debetas“ ir „Kreditas“ yra esminis apskaitos pagrindas.", isTrue: true },
            { text: "Apskaitininkui nebūtina sekti mokesčių įstatymų pakeitimų.", isTrue: false },
            { text: "Santrumpa PVM reiškia „Pridėtinės vertės mokestis“.", isTrue: true },
            { text: "Įmonės balansas parodo jos finansinę būklę konkrečiai datai.", isTrue: true },
          ],
        },
        {
          id: "admin",
          title: "Biuro administratorius",
          image:
            "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=500&q=80",
          questions: [
            { text: "Biuro administratoriaus pagrindinis darbas yra tik virti kavą svečiams.", isTrue: false },
            { text: "Biuro administratorius yra pirmasis asmuo, pasitinkantis įmonės klientus.", isTrue: true },
            { text: "Oficialiame verslo laiške naudoti pasisveikinimą ir parašą nėra būtina.", isTrue: false },
            { text: "Daugiaprogramio darbo (multitasking) įgūdžiai yra būtini šioje profesijoje.", isTrue: true },
            { text: "Visi įmonės dokumentai archyvuojami tik elektroniniu būdu, popierinių nebeliko.", isTrue: false },
          ],
        },
      ],
    },

    zemesukis: {
      title: "Žemės ūkis",
      icon: "🌾",
      professions: [
        {
          id: "zud",
          title: "Žemės ūkio darbuotojas",
          image:
            "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=500&q=80",
          questions: [
            { text: "Karvės turi 4 skrandžio skyrius, kad suvirškintų žolę.", isTrue: true },
            { text: "Augalai naktį išskiria anglies dioksidą, o ne jį sugeria.", isTrue: true },
            { text: "Vienas centimetras derlingo dirvožemio gamtoje susidaro per penkerius metus.", isTrue: false },
            { text: "Žemės ūkio dronai naudojami tik laukams purkšti chemikalais.", isTrue: false },
            { text: "Kukurūzai yra didžiausią derlių pasaulyje duodanti grūdinė kultūra, o kviečiai pirmauja pagal pasėlių plotą.", isTrue: true },
          ],
        },
        {
          id: "agro",
          title: "Agroverslo darbuotojas",
          image:
            "https://images.unsplash.com/photo-1592982537447-6f2334208f86?w=500&q=80",
          questions: [
            { text: "Ekologiškuose ūkiuose visiškai draudžiama naudoti bet kokias trąšas.", isTrue: false },
            { text: "Lietuva yra viena didžiausių grūdų eksportuotojų Europoje vienam gyventojui.", isTrue: true },
            { text: "Agroversle pelnas priklauso išimtinai tik nuo gerų oro sąlygų.", isTrue: false },
            { text: "Didžioji dalis Lietuvoje užauginamo rapso perdirbama į biokurą.", isTrue: true },
            { text: "GPS diegimas ūkyje padeda ženkliai sumažinti trąšų sunaudojimą.", isTrue: true },
          ],
        },
        {
          id: "dekor",
          title: "Dekoratyvinio apželdinimo darbuotojas",
          image:
            "https://images.unsplash.com/photo-1589123053646-4e89bb9e414c?w=500&q=80",
          questions: [
            { text: "Vejos skarifikavimas padeda pašalinti seną žolę ir samanų veltinį.", isTrue: true },
            { text: "Kalninės pušys reikalauja ypač derlingos žemės ir nuolatinio laistymo.", isTrue: false },
            { text: "Lanksva yra populiarus dekoratyvinis krūmas, tinkantis gyvatvorėms.", isTrue: true },
            { text: "Mechaniniai lapų rinktuvai drasko veją, todėl juos naudoti pavojinga.", isTrue: false },
            { text: "Medžius geriausia genėti pavasarį, kai jau pilnai išsiskleidę lapai.", isTrue: false },
          ],
        },
      ],
    },
  },
};

export function isSectorId(value: string | null): value is SectorId {
  return value !== null && (SECTOR_IDS as readonly string[]).includes(value);
}
