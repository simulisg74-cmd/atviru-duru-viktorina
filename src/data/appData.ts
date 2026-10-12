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
  /**
   * Nuotraukos arba iliustracijos adresas. `.svg` failai rodomi kaip ikonos
   * be fono (object-contain), kiti – kaip užpildanti nuotrauka.
   */
  image?: string;
  /** Emoji ikona, rodoma vietoj `image`. */
  icon?: string;
  questions: readonly Question[];
}

export interface Sector {
  title: string;
  /** Sektoriaus iliustracija; jei jos nėra arba nepavyksta užkrauti, rodoma `icon`. */
  image?: string;
  /** Emoji ikona – atsarginis variantas. */
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
      image: "/icons/sektoriai/architektura.png",
      icon: "🏗️",
      professions: [
        {
          id: "apdailininkas",
          title: "Apdailininkas",
          image: "/icons/architektura/apdailininkas.svg",
          questions: [
            { text: "Gipso kartonas naudojamas sienoms lyginti ir pertvaroms įrengti.", isTrue: true },
            { text: "Prieš dažant sieną jos niekada nereikia gruntuoti.", isTrue: false },
            { text: "Glaistas padeda išlyginti sieną prieš dažymą.", isTrue: true },
            { text: "Gulsčiukas padeda patikrinti, ar paviršius yra tiesus.", isTrue: true },
          ],
        },
        {
          id: "plyteliu_klojejo_padejejas",
          title: "Plytelių klojėjo-tinkuotojo padėjėjas",
          image: "/icons/architektura/plyteliu_klojejo_padejejas.svg",
          questions: [
            { text: "Tinkuojant specialūs kreiptuvai padeda išlyginti tinką.", isTrue: true },
            { text: "Vonioje prieš klijuojant plyteles svarbu įrengti hidroizoliaciją.", isTrue: true },
            { text: "Sumaišytus plytelių klijus galima laikyti kelias dienas.", isTrue: false },
            { text: "Plytelių kryželiai padeda palikti vienodus tarpus tarp plytelių.", isTrue: true },
          ],
        },
        {
          id: "santechnikas",
          title: "Santechnikas",
          image: "/icons/architektura/santechnikas.svg",
          questions: [
            { text: "Santechnikai dirba su vandentiekio, šildymo ir nuotekų sistemomis.", isTrue: true },
            { text: "Sifonas po kriaukle padeda sulaikyti kanalizacijos kvapus.", isTrue: true },
            { text: "Vandentiekio vamzdžiai dažniausiai sujungiami lipnia juosta.", isTrue: false },
            { text: "Oras radiatoriuose padeda jiems geriau šildyti.", isTrue: false },
          ],
        },
      ],
    },

    gamyba: {
      title: "Gamyba ir perdirbimas",
      image: "/icons/sektoriai/gamyba.png",
      icon: "🏭",
      professions: [
        {
          id: "siuvejas",
          title: "Siuvėjas",
          image: "/icons/gamyba/siuvejas.svg",
          questions: [
            { text: "Siuvimo mašina sujungia viršutinį ir apatinį siūlus.", isTrue: true },
            { text: "Visiems audiniams siūti tinka universali siuvimo adata.", isTrue: false },
            { text: "Overlokas yra speciali mašina, kuri gali vienu metu nukirpti ir apsiūti audinio kraštą.", isTrue: true },
            { text: "Siuvant lygintuvas naudojamas ne tik darbo pabaigoje.", isTrue: true },
          ],
        },
        {
          id: "medienos_staklininkas",
          title: "Medienos apdirbimo staklininkas",
          image: "/icons/gamyba/medienos_staklininkas.svg",
          questions: [
            { text: "Medienos drėgnumas turi įtakos gaminio kokybei.", isTrue: true },
            { text: "Visoms medienos rūšims tinka vienodas pjovimo greitis.", isTrue: false },
            { text: "Obliavimo staklės naudojamos medienai išlyginti.", isTrue: true },
            { text: "Ąžuolo mediena ilgainiui, reaguodama su geležimi ir drėgme, gali tapti visiškai juoda.", isTrue: true },
          ],
        },
      ],
    },

    it: {
      title: "Informacijos ir ryšio technologijos",
      image: "/icons/sektoriai/it.png",
      icon: "💻",
      professions: [
        {
          id: "it_technikas",
          title: "Informacinių ir ryšių technologijų aptarnavimo technikas",
          image: "/icons/it/it_technikas.svg",
          questions: [
            { text: "Pagrindinė kompiuterio plokštė sujungia jo dalis.", isTrue: true },
            { text: "Kad kompiuteris veiktų greičiau, visada užtenka ištrinti failus iš darbalaukio.", isTrue: false },
            { text: "RAM ir kietasis diskas yra tas pats dalykas.", isTrue: false },
            { text: "Termopasta padeda procesoriui geriau atiduoti šilumą.", isTrue: true },
          ],
        },
        {
          id: "multimedijos_technikas",
          title: "Multimedijos technikas",
          image: "/icons/it/multimedijos_technikas.svg",
          questions: [
            { text: "MP3 yra garso failo formatas.", isTrue: true },
            { text: "Kuo daugiau pikselių turi nuotrauka, tuo daugiau ji gali turėti detalių.", isTrue: true },
            { text: "Kuo mažesnė vaizdo raiška, tuo vaizdas detalesnis.", isTrue: false },
            { text: "Vaizdo įrašą galima montuoti tik profesionaliomis programomis.", isTrue: false },
          ],
        },
        {
          id: "jaunesnysis_programuotojas",
          title: "Jaunesnysis programuotojas",
          image: "/icons/it/jaunesnysis_programuotojas.svg",
          questions: [
            { text: "HTML naudojama sudėtingiems dirbtinio intelekto algoritmams kurti.", isTrue: false },
            { text: "Programuotojai daug laiko skiria klaidų paieškai ir taisymui.", isTrue: true },
            { text: "Frontend programuotojas kuria tai, ką mato vartotojas ekrane.", isTrue: true },
            { text: "CSS naudojamas interneto puslapio išvaizdai kurti.", isTrue: true },
          ],
        },
      ],
    },

    inzinerija: {
      title: "Inžinerija ir inžinerinės profesijos",
      image: "/icons/sektoriai/inzinerija.png",
      icon: "⚡",
      professions: [
        {
          id: "suvirintojas",
          title: "Suvirintojas",
          image: "/icons/inzinerija/suvirintojas.svg",
          questions: [
            { text: "Robotas gali visiškai pakeisti visus suvirintojus.", isTrue: false },
            { text: "Virinant būtina naudoti suvirintojo šalmą arba specialius akinius.", isTrue: true },
            { text: "TIG dažniausiai naudojamas ten, kur reikia itin kokybiškų ir tikslių suvirinimo siūlių.", isTrue: true },
            { text: "Ar galima „nudeginti“ akis stovint atokiau ir pažvelgus į suvirinimo lanką?", isTrue: true },
          ],
        },
        {
          id: "kebulu_remontininkas",
          title: "Automobilių kėbulų remontininkas",
          image: "/icons/inzinerija/kebulu_remontininkas.svg",
          questions: [
            { text: "Po didelės avarijos automobilio kėbului tiesinti naudojama speciali įranga.", isTrue: true },
            { text: "Kiekvieną automobilio įlenkimą reikia išpjauti ir įvirinti naują detalę.", isTrue: false },
            { text: "Prieš dažant automobilio detalę ją reikia paruošti, gruntuoti ir šlifuoti.", isTrue: true },
            { text: "Rūdis galima tiesiog uždažyti ir jos daugiau nebeplis.", isTrue: false },
          ],
        },
        {
          id: "auto_remontininkas",
          title: "Transporto priemonių remontininkas",
          image: "/icons/inzinerija/transporto_priemoniu_remontininkas.svg",
          questions: [
            { text: "Šiuolaikinio automobilio gedimai dažnai tikrinami kompiuteriu.", isTrue: true },
            { text: "Stabdžių kaladėles reikia keisti tik tada, kai jos visiškai susidėvi.", isTrue: false },
            { text: "Variklio alyvą reikia keisti pagal nuvažiuotus kilometrus ir praėjusį laiką.", isTrue: true },
            { text: "Padangų protektorius neturi įtakos stabdymui ant šlapio kelio.", isTrue: false },
          ],
        },
        {
          id: "elektrikas",
          title: "Elektrikas",
          image: "/icons/inzinerija/elektrikas.svg",
          questions: [
            { text: "Prieš pradedant elektros darbus visada būtina įsitikinti, kad elektros tiekimas yra atjungtas.", isTrue: true },
            { text: "Įžeminimas reikalingas tam, kad lemputės šviestų ryškiau.", isTrue: false },
            { text: "Elektros smūgį galima patirti net neliečiant pliko laido.", isTrue: true },
            { text: "Automatiniai jungikliai (saugikliai) padeda apsaugoti laidus nuo perkaitimo ir gaisro.", isTrue: true },
          ],
        },
        {
          id: "mechatronikas",
          title: "Automatinių sistemų mechatronikas",
          image: "/icons/inzinerija/mechatronikas.svg",
          questions: [
            { text: "Mechatronika jungia mechaniką, elektroniką ir programavimą.", isTrue: true },
            { text: "Gamyklų įrenginiai dažnai valdomi programuojamais valdikliais.", isTrue: true },
            { text: "Mechatronikas tik sutepa mechanines detales.", isTrue: false },
            { text: "Pramoniniai robotai aplinką mato be kamerų ar jutiklių.", isTrue: false },
          ],
        },
        {
          id: "auto_elektronikas",
          title: "Transporto priemonių elektronikas",
          image: "/icons/inzinerija/transporto_priemoniu_elektronikas.svg",
          questions: [
            { text: "Šiuolaikiniame automobilyje gali būti daugiau nei 50 mažų kompiuterių.", isTrue: true },
            { text: "„Check Engine“ lemputė visada reiškia, kad trūksta alyvos.", isTrue: false },
            { text: "Parkavimo jutikliai ir galinio vaizdo kamera yra elektroninės sistemos.", isTrue: true },
            { text: "Sugedus jutikliui, automobilis visada tampa nevažiuojantis.", isTrue: false },
          ],
        },
        {
          id: "stakliu_operatorius",
          title: "Metalo apdirbimo staklių operatorius",
          image: "/icons/inzinerija/stakliu_operatorius.svg",
          questions: [
            { text: "CNC staklės detales gamina automatiškai, pagal iš anksto parašytą kodą.", isTrue: true },
            { text: "Lankstant metalą svarbu žinoti jo storį ir elastingumą.", isTrue: true },
            { text: "Brėžinių skaitymas yra viena svarbiausių staklių operatoriaus kompetencijų.", isTrue: true },
            { text: "Aušinimo skystis naudojamas staklėse tam, kad detalė po darbo būtų švari.", isTrue: false },
          ],
        },
      ],
    },

    menai: {
      title: "Menai",
      image: "/icons/sektoriai/menai.png",
      icon: "🎨",
      professions: [
        {
          id: "floristas",
          title: "Floristas",
          image: "/icons/menai/floristas.svg",
          questions: [
            { text: "Floristui svarbu mokėti derinti gėlių spalvas.", isTrue: true },
            { text: "Skintos gėlės ilgiau išsilaiko tiesioginėje saulėje.", isTrue: false },
            { text: "Puokštėje visų gėlių stiebai visada turi būti vienodo ilgio.", isTrue: false },
            { text: "Floristinė kempinė (oazė) prieš naudojimą turi prisigerti vandens pati, jos negalima spausti jėga po vandeniu.", isTrue: true },
          ],
        },
      ],
    },

    paslaugos: {
      title: "Paslaugos asmenims",
      image: "/icons/sektoriai/paslaugos.png",
      icon: "🍳",
      professions: [
        {
          id: "kosmetikas",
          title: "Kosmetikas",
          image: "/icons/paslaugos/kosmetikas.svg",
          questions: [
            { text: "Kosmetikas atlieka įvairias veido priežiūros procedūras.", isTrue: true },
            { text: "Kosmetikas turi teisę atlikti botokso injekcijas.", isTrue: false },
            { text: "Odą svarbu prižiūrėti ne tik pas kosmetiką, bet ir namuose.", isTrue: true },
            { text: "Žmonėms su riebia oda nereikia naudoti drėkinamųjų kremų.", isTrue: false },
          ],
        },
        {
          id: "vizazistas",
          title: "Vizažistas",
          image: "/icons/paslaugos/vizazistas.svg",
          questions: [
            { text: "Vizažistas tik užtepa makiažo pagrindą.", isTrue: false },
            { text: "Vizažistas parenka makiažą pagal žmogaus veidą ir odą.", isTrue: true },
            { text: "Visiems žmonėms tinka tos pačios makiažo spalvos.", isTrue: false },
            { text: "Vizažistas gali pakeisti žmogaus nosies formą be jokios operacijos, naudojant tik šviesos ir šešėlių žaismą.", isTrue: true },
          ],
        },
        {
          id: "virejas",
          title: "Virėjas",
          image: "/icons/paslaugos/virejas.svg",
          questions: [
            { text: "Geras virėjas niekada neragauja gaminamo maisto.", isTrue: false },
            { text: "Virėjui svarbu mokėti saugiai ir tiksliai naudotis peiliais.", isTrue: true },
            { text: "Restorane kiekvienas patiekalas visada pradedamas gaminti tik gavus užsakymą.", isTrue: false },
            { text: "Virėjui svarbus ne tik skonis, bet ir patiekalo išvaizda.", isTrue: true },
          ],
        },
        {
          id: "konditeris",
          title: "Konditeris",
          image: "/icons/paslaugos/konditeris.svg",
          questions: [
            { text: "Konditeriai gamina tik tortus ir pyragus.", isTrue: false },
            { text: "Dirbant su šokoladu svarbu žinoti, kaip keičiasi jo savybės nuo temperatūros.", isTrue: true },
            { text: "Mielinė tešla geriausiai kyla labai šaltame šaldytuve.", isTrue: false },
            { text: "Kad kepinys gražiai iškiltų yra naudojama valgomoji soda.", isTrue: true },
          ],
        },
        {
          id: "padavejas_barmenas",
          title: "Padavėjas ir barmenas",
          image: "/icons/paslaugos/padavejas_barmenas.svg",
          questions: [
            { text: "Padavėjui svarbu gerai žinoti restorano meniu.", isTrue: true },
            { text: "Aptarnaujant klientus svarbios tam tikros maisto pateikimo taisyklės.", isTrue: true },
            { text: "Kokteilis plakamas tik dėl gražesnio vaizdo.", isTrue: false },
            { text: "Nešant gėrimus ant padėklo, sunkiausios stiklinės dedamos prie padėklo kraštų.", isTrue: false },
          ],
        },
        {
          id: "kambariu_tvarkytojas",
          title: "Kambarių tvarkytojas",
          image: "/icons/paslaugos/kambariu_tvarkytojas.svg",
          questions: [
            { text: "Kambarių tvarkytojas turi laikytis švaros ir higienos taisyklių.", isTrue: true },
            { text: "Kambarių tvarkytojo darbas nereikalauja fizinės ištvermės.", isTrue: false },
            { text: "Reikia žinoti, kokias valymo priemones galima naudoti skirtingiems paviršiams.", isTrue: true },
            { text: "Tvarkytojas gali svečio daiktus laisvai perkelti į bet kurią vietą.", isTrue: false },
          ],
        },
        {
          id: "kirpejas",
          title: "Kirpėjas",
          image: "/icons/paslaugos/kirpejas.svg",
          questions: [
            { text: "Dažnai kerpant plaukų galiukus, plaukai pradeda augti daug greičiau.", isTrue: false },
            { text: "Kirpėjui reikia išmanyti plaukų sandarą ir dažų poveikį.", isTrue: true },
            { text: "Kirpėjo įrankius reikia dezinfekuoti.", isTrue: true },
            { text: "Ar kirpėjai savo darbe naudoja karštas žirkles?", isTrue: true },
          ],
        },
      ],
    },
    socialine: {
      title: "Socialinė gerovė ir švietimas",
      image: "/icons/sektoriai/socialine.png",
      icon: "🤝",
      professions: [
        {
          id: "ikimokyklinio_padejejas",
          title: "Ikimokyklinio ugdymo pedagogo padėjėjas",
          image: "/icons/socialine/ikimokyklinio_padejejas.svg",
          questions: [
            { text: "Pedagogo padėjėjas darželyje tik padeda prižiūrėti vaikus valgio metu.", isTrue: false },
            { text: "Padėjėjas moko vaikus kasdienių higienos ir savarankiškumo įgūdžių.", isTrue: true },
            { text: "Padėjėjas darželyje dirba tik lauke.", isTrue: false },
            { text: "Padėjėjas padeda paruošti priemones vaikų veikloms.", isTrue: true },
          ],
        },
        {
          id: "individualios_prieziuros",
          title: "Individualios priežiūros darbuotojas",
          image: "/icons/socialine/individualios_prieziuros.svg",
          questions: [
            { text: "Šis darbuotojas padeda žmonėms atlikti kasdienius darbus.", isTrue: true },
            { text: "Individualios priežiūros darbuotojai dirba tik ligoninėse.", isTrue: false },
            { text: "Darbuotojas gali padėti apsipirkti ar palydėti žmogų pas gydytoją.", isTrue: true },
            { text: "Šiame darbe nereikia žinoti pirmosios pagalbos pagrindų.", isTrue: false },
          ],
        },
        {
          id: "pedagogo_padejejas",
          title: "Pedagogo padėjėjas",
          image: "/icons/socialine/pedagogo_padejejas.svg",
          questions: [
            { text: "Pedagogo padėjėjas padeda mokiniams, kuriems mokantis reikia daugiau pagalbos.", isTrue: true },
            { text: "Pedagogo padėjėjas gali pats rašyti pažymius visiems mokiniams.", isTrue: false },
            { text: "Jis gali padėti mokiniui suprasti ir atlikti užduotį.", isTrue: true },
            { text: "Pedagogo padėjėjų reikia tik pradinėse klasėse.", isTrue: false },
          ],
        },
      ],
    },

    sveikata: {
      title: "Sveikatos priežiūra",
      image: "/icons/sektoriai/sveikata.png",
      icon: "🩺",
      professions: [
        {
          id: "slaugytojo_padejejas",
          title: "Slaugytojo padėjėjas",
          image: "/icons/sveikata/slaugytojo_padejejas.svg",
          questions: [
            { text: "Slaugytojo padėjėjas padeda pacientui praustis, judėti ir pasirūpinti higiena.", isTrue: true },
            { text: "Slaugytojo padėjėjas gali pats nuspręsti, kokius vaistus duoti pacientui.", isTrue: false },
            { text: "Šiame darbe labai svarbi pagarba ir empatija žmogui.", isTrue: true },
            { text: "Slaugytojo padėjėjas ligoninėje paskiria operacijos datą ir diagnozuoja ligas.", isTrue: false },
          ],
        },
        {
          id: "paramedikas",
          title: "Paramedikas",
          image: "/icons/sveikata/paramedikas.svg",
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
          image: "/icons/sveikata/masazistas.svg",
          questions: [
            { text: "Masažas gali padėti atpalaiduoti raumenis ir sumažinti įtampą.", isTrue: true },
            { text: "Masažą galima atlikti bet kuriam žmogui, nesvarbu, kokia jo sveikatos būklė.", isTrue: false },
            { text: "Masažuotojui svarbu gerai išmanyti žmogaus kūną ir raumenis.", isTrue: true },
            { text: "Masažuojant niekada nenaudojami aliejai ar kremai.", isTrue: false },
          ],
        },
      ],
    },

    transportas: {
      title: "Transporto paslaugos",
      image: "/icons/sektoriai/transportas.png",
      icon: "🚚",
      professions: [
        {
          id: "eksped",
          title: "Ekspeditorius",
          image: "/icons/transportas/eksped.svg",
          questions: [
            { text: "Ar ekspeditorius planuoja maršrutus?", isTrue: true },
            { text: "Ar ekspeditorius dirba tik sandėlyje?", isTrue: false },
            { text: "Ar ekspeditorius seka krovinius?", isTrue: true },
            { text: "Ar ekspeditoriui nereikia kompiuterio?", isTrue: false },
          ],
        },
        {
          id: "vairuot",
          title: "Motorinių transporto priemonių kroviniams vežti vairuotojas",
          image: "/icons/transportas/vairuot.svg",
          questions: [
            { text: "Ar vilkiko vairuotojas atsako už krovinio saugumą kelyje?", isTrue: true },
            { text: "Ar vieno reiso metu vairuotojas gali kirsti kelias valstybes?", isTrue: true },
            { text: "Vairuotojui visiškai nereikia tvarkyti krovinio dokumentų.", isTrue: false },
            { text: "Tachografas fiksuoja vairavimo ir poilsio laiką.", isTrue: true },
          ],
        },
      ],
    },
    verslas: {
      title: "Verslas ir administravimas",
      image: "/icons/sektoriai/verslas.png",
      icon: "📈",
      professions: [
        {
          id: "apskaita",
          title: "Apskaitininkas",
          image: "/icons/verslas/apskaita.svg",
          questions: [
            { text: "Apskaitininkas registruoja įmonės pajamas, išlaidas ir rengia ataskaitas.", isTrue: true },
            { text: "Įmonei apskaita nėra būtina.", isTrue: false },
            { text: "Apskaitininkai dažnai dirba su „Excel“ ir apskaitos programomis.", isTrue: true },
            { text: "Apskaitininkui nereikia žinoti mokesčių taisyklių.", isTrue: false },
          ],
        },
        {
          id: "admin",
          title: "Biuro administratorius",
          image: "/icons/verslas/admin.svg",
          questions: [
            { text: "Biuro administratorius tik registruoja dokumentus ir nebendrauja su žmonėmis.", isTrue: false },
            { text: "Tvarkingai saugomi dokumentai padeda įmonei geriau dirbti.", isTrue: true },
            { text: "Administratoriui užtenka tik mokėti spausdinti kompiuteriu.", isTrue: false },
            { text: "Mandagus bendravimas telefonu prisideda prie gero įmonės įvaizdžio.", isTrue: true },
          ],
        },
      ],
    },

    zemesukis: {
      title: "Žemės ūkis",
      image: "/icons/sektoriai/zemesukis.png",
      icon: "🌾",
      professions: [
        {
          id: "zud",
          title: "Žemės ūkio darbuotojas",
          image: "/icons/zemesukis/zud.svg",
          questions: [
            { text: "Ar šiuolaikinis traktorius gali važiuoti pats pagal GPS linijas?", isTrue: true },
            { text: "Traktoriaus tepalus užtenka pakeisti kartą per dešimt metų.", isTrue: false },
            { text: "Kukurūzai yra viena daugiausiai pasaulyje užauginamų grūdinių kultūrų.", isTrue: true },
            { text: "Ar dronai naudojami pasėliams stebėti?", isTrue: true },
          ],
        },
        {
          id: "agro",
          title: "Agroverslo darbuotojas",
          image: "/icons/zemesukis/agro.svg",
          questions: [
            { text: "Ar išmanusis telefonas gali padėti valdyti ūkį?", isTrue: true },
            { text: "Ar grūdų kainos visada būna vienodos?", isTrue: false },
            { text: "Ar vienas traktorius gali kainuoti daugiau už namą?", isTrue: true },
            { text: "Ar agroversle svarbu mokėti planuoti išlaidas?", isTrue: true },
          ],
        },
        {
          id: "dekor",
          title: "Dekoratyvinio apželdinimo darbuotojas",
          image: "/icons/zemesukis/dekor.svg",
          questions: [
            { text: "Ar dekoratyviniam apželdinimui naudojami akmenys ir mulčias?", isTrue: true },
            { text: "Ar veja gali būti įrengiama ant stogo?", isTrue: true },
            { text: "Ar visi augalai žydi visus metus?", isTrue: false },
            { text: "Ar kaktusai mėgsta nuolat drėgną dirvą?", isTrue: false },
          ],
        },
      ],
    },
  },
};

export function isSectorId(value: string | null): value is SectorId {
  return value !== null && (SECTOR_IDS as readonly string[]).includes(value);
}
