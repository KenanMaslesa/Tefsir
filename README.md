# بسم الله الرحمن الرحيم


## Tefsir i prijevod Kur'ana

Tefsir i prijevod preuzeti sa stranice: https://quranenc.com/en/browse/bosnian_mokhtasar

O tefsiru: https://www.n-um.com/novi-online-skraceni-tefsir-plemenitog-kurana/


## Kako koristiti?

```bash
npm install @kmaslesa/tefsir

const tefsir = require('@kmaslesa/tefsir');
```

## Metode:
```bash
tefsir.getTafsirAndTranslationForHolyQuran();
```

RESPONSE:
```bash
[
    {
       "index":"1",
       "sura":"1",
       "aya":"1",
       "arabicText":"بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ",
       "tafsir":"Svoje učenje Kur’ana počinjem s imenom Allaha Uzvišenog, od Njega tražeći snagu za to, moleći za Njegov blagoslov i spominjući Njegovo ime. Bismila sadrži tri Allahova lijepa imena, i to: 1. Allah, tj. Onaj Koji istinski zaslužuje da bude obožavan. To je najposebnije Allahovo ime i niko se njime ne smije nazvati osim Allaha; 2. er-Rahman – Milostivi, tj. Onaj Koji posjeduje svojstvo apsolutne milosti, i ovo ime ukazuje na to da Allah posjeduje milost kao svojstvo Svog Bića; 3. er-Rahim – Samilosni, tj. Onaj Koji Svoju milost spušta na ona stvorenja na koja On hoće, a među koja spadaju i vjernici.",
       "translation":"'U ime Allaha, Milostivog, Samilosnog!'"
    },
    {
       "index":"2",
       "sura":"1",
       "aya":"2",
       "arabicText":"ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ",
       "tafsir":"Sve vrste hvale, koje predstavljaju opisivanje nekog svojstvima veličanstva i savršenstva, pripadaju Allahu Jedinom, jer je On gospodar svega, stvoritelj svega, upravitelj svime. Riječ \"svjetovi\" (el-alemun) množina je riječi \"svijet\" (el-alem), a označava sve mimo Allaha.",
       "translation":"'Tebe, Allaha, Gospodara svjetova, hvalimo,'"
    },
    {
       "index":"3",
       "sura":"1",
       "aya":"3",
       "arabicText":"ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ",
       "tafsir":"Ovim riječima iskazuje se pohvala Uzvišenom Allahu, nakon što Mu se, u prethodnom ajetu, iskazala zahvala.",
       "translation":"'Milostivog, Samilosnog,'"
    },
    {
       "index":"4",
       "sura":"1",
       "aya":"4",
       "arabicText":"مَٰلِكِ يَوۡمِ ٱلدِّينِ",
       "tafsir":"Ovim riječima ukazuje se na veličanje Uzvišenog Allaha spominjanjem činjenice da će On biti vladar svega na Sudnjem danu, kada niko ništa neće posjedovati. Izraz “Jevmud-din” ovdje znači Dan obračuna, dan kada će svako polagati račun i shodno tome biti nagrađen ili kažnjen.",
       "translation":"'Vladara Dana sudnjeg,'"
    },
    {
       "index":"5",
       "sura":"1",
       "aya":"5",
       "arabicText":"إِيَّاكَ نَعۡبُدُ وَإِيَّاكَ نَسۡتَعِينُ",
       "tafsir":"Isključivo Tebi upućujemo sve vidove obožavanja (ibadeta) i pokornosti, i nikoga Ti, u tome, ne pridružujemo, i samo od Tebe tražimo pomoć u svim našim poslovima. U Tvojoj ruci je svako dobro i niko mimo Tebe ne može pomoći.",
       "translation":"'Tebi se klanjamo i od Tebe pomoć tražimo!'"
    },
    {
       "index":"6",
       "sura":"1",
       "aya":"6",
       "arabicText":"ٱهۡدِنَا ٱلصِّرَٰطَ ٱلۡمُسۡتَقِيمَ",
       "tafsir":"Ukaži nam na Pravi put, podari da idemo njime, učvrsti nas na njemu, i povećaj nam uputu. Konstrukcija \"es-siratul-mustekim\" (Pavi put) označava jasnu stazu na kojoj nema stranputica i devijacija. To je, ustvari, islam, odnosno vjera koju je od Allaha dostavio Muhammed, sallallahu alejhi ve sellem.",
       "translation":"'Uputi nas na Pravi put,'"
    },
    {
       "index":"7",
       "sura":"1",
       "aya":"7",
       "arabicText":"صِرَٰطَ ٱلَّذِينَ أَنۡعَمۡتَ عَلَيۡهِمۡ غَيۡرِ ٱلۡمَغۡضُوبِ عَلَيۡهِمۡ وَلَا ٱلضَّآلِّينَ",
       "tafsir":"Na put onih Tvojih robova kojima ti dao blagodat upute, poput vjerovjesnika, istinoljubivih, šehida i dobrih ljudi, a divno je li je to društvo. Sačuvaj nas puta onih na koje se je rasrdilo, koji su spoznali istinu ali je nisu slijedili, poput židova, i sačuvaj nas puta onih koji nisu spoznali put istine zbog svog nemara u traženju istine i upute, poput kršćana.",
       "translation":"'na Put onih kojima si milost Svoju darovao, a ne onih koji su protiv sebe srdžbu izazvali, niti onih koji su zalutali!'"
    },
.....]
```

```bash
tefsir.getTafsirAndTranslationForSura(suraId); //suraId=(1-114)
tefsir.getTafsirAndTranslationForSura(114);
```
RESPONSE:
```bash
[{"index":"6231","sura":"114","aya":"1","arabicText":"قُلۡ أَعُوذُ بِرَبِّ ٱلنَّاسِ","tafsir":"O Poslaniče, reci: Tražim zaštitu kod Gospodara ljudi i Njemu se utičem.","translation":"'Reci: \"Tražim zaštitu Gospodara ljudi,'"},{"index":"6232","sura":"114","aya":"2","arabicText":"مَلِكِ ٱلنَّاسِ","tafsir":"Vladaru ljudi koji čini s njima šta hoće i pored kojeg niko nema vlasti.","translation":"'Vladara ljudi,'"},{"index":"6233","sura":"114","aya":"3","arabicText":"إِلَٰهِ ٱلنَّاسِ","tafsir":"Onome koji zaslužuje da se istinski obožava, pored kojeg niko drugi to ne zaslužuje.","translation":"'Boga ljudi,'"},{"index":"6234","sura":"114","aya":"4","arabicText":"مِن شَرِّ ٱلۡوَسۡوَاسِ ٱلۡخَنَّاسِ","tafsir":"Od zla šejtana koji čovjeku donosi ružne misli kada zaboravi na Allaha, a kada Ga se sjeti, on se skrije i ne dolazi.","translation":"'od zla šejtana-napasnika,'"},{"index":"6235","sura":"114","aya":"5","arabicText":"ٱلَّذِي يُوَسۡوِسُ فِي صُدُورِ ٱلنَّاسِ","tafsir":"koji unosi zle misli u ljudska sca.","translation":"'koji zle misli unosi u srca ljudi –'"},{"index":"6236","sura":"114","aya":"6","arabicText":"مِنَ ٱلۡجِنَّةِ وَٱلنَّاسِ","tafsir":"a on nekada bude ljudske, a nekada džinske vrste.","translation":"'od džina i od ljudi!\"'"}]
```

```bash
tefsir.getTafsirAndTranslationForIndex(index); index=(1-6236)
tefsir.getTafsirAndTranslationForIndex(6236);
```
RESPONSE:
```bash
[{"index":"6236","sura":"114","aya":"6","arabicText":"مِنَ ٱلۡجِنَّةِ وَٱلنَّاسِ","tafsir":"a on nekada bude ljudske, a nekada džinske vrste.","translation":"'od džina i od ljudi!\"'"}]
```

```bash
tefsir.getTafsirAndTranslationForAyah(suraId, ayahId);
tefsir.getTafsirAndTranslationForAyah(1, 2);
```
RESPONSE:
```bash
[{"index":"2","sura":"1","aya":"2","arabicText":"ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ","tafsir":"Sve vrste hvale, koje predstavljaju opisivanje nekog svojstvima veličanstva i savršenstva, pripadaju Allahu Jedinom, jer je On gospodar svega, stvoritelj svega, upravitelj svime. Riječ \"svjetovi\" (el-alemun) množina je riječi \"svijet\" (el-alem), a označava sve mimo Allaha.","translation":"'Tebe, Allaha, Gospodara svjetova, hvalimo,'"}]
```

```bash
tefsir.getTafsirAndTranslationForPage(2)
```
RESPONSE: 
```bash
[{"index":"8","sura":"2","aya":"1","arabicText":"الٓمٓ","tafsir":"Elif-Lām-Mīm su harfovi kojima počinju neke kur’anske sure. To su slova arapske abecede koja sama po sebi nemaju značenje, ali njihovo izdvojeno spominjanje u Kur’anu ima mudrost i cilj, jer u Kur’anu ništa nije navedeno bez mudrosti i svrhe. Od najbitnijih mudrosti spominjanja ovih harfova je ukazivanje na izazov Arapima da sastave nešto slično ovom Kur'anu, jer se Kur'an sastoji od harfova koji su bili poznati tadašnjim Arapima i od kojih su oni sastavljali riječi. Zbog toga, u većini slučajeva, nakon otpočinjanja neke sure ovim harfovima spominje se Kur'an, kao što je slučaj i u ovoj suri.","translation":"'Elif Lām Mīm.'"},{"index":"9","sura":"2","aya":"2","arabicText":"ذَٰلِكَ ٱلۡكِتَٰبُ لَا رَيۡبَۛ فِيهِۛ هُدٗى لِّلۡمُتَّقِينَ","tafsir":"U ovaj veličanstveni Kur'an nema sumnje ni sa kojeg aspekta, pa nema sumnje u to da ga je Allah objavio, niti ima sumnje u to da su sve njegove riječi, i u formi i u značenju – Allahov govor koji bogobojazne upućuje na Pravi put.","translation":"'Ova Knjiga, u koju nema nikakve sumnje, uputstvo je svima onima koji se budu Allaha bojali;'"},{"index":"10","sura":"2","aya":"3","arabicText":"ٱلَّذِينَ يُؤۡمِنُونَ بِٱلۡغَيۡبِ وَيُقِيمُونَ ٱلصَّلَوٰةَ وَمِمَّا رَزَقۡنَٰهُمۡ يُنفِقُونَ","tafsir":"3-4. Bogobojazni su oni koji vjeruju u ono što je čulima nedokučivo, a to je sve ono o čemu nas je obavijestio Uzvišeni Allah u Svojoj knjizi ili kroz govor Njegovog Poslanika, poput Sudnjeg dana, i oni koji uspostavljaju namaz tako što ga obavljaju onako kako je Allah propisao, poštujući njegove uslove, sastavne dijelove (ruknove) obavezne i pohvalne radnje, i oni koji udjeljuju od onoga čime ih je Allah opskrbio time što izdvajaju zekat, koji je obavezan, ili sadaku, koja je dobrovoljna. Oni sve to rade nadajući se Allahovoj nagradi. Oni vjeruju u Objavu koju je Allah spustio Svom Vjerovjesniku, i koju je spustio ostalim vjerovjesnicima, neke na njih Allahov mir i spas, ne praveći razliku između tih Objava u pogledu vjerovanja. Oni čvrsto vjeruju u ahiret, onaj svijet, te u nagradu i kaznu koji tamo slijede.","translation":"'onima koji u nevidljivi svijet budu vjerovali i molitvu obavljali i udjeljivali dio od onoga što im Mi budemo davali;'"},{"index":"11","sura":"2","aya":"4","arabicText":"وَٱلَّذِينَ يُؤۡمِنُونَ بِمَآ أُنزِلَ إِلَيۡكَ وَمَآ أُنزِلَ مِن قَبۡلِكَ وَبِٱلۡأٓخِرَةِ هُمۡ يُوقِنُونَ","tafsir":"3-4. Bogobojazni su oni koji vjeruju u ono što je čulima nedokučivo, a to je sve ono o čemu nas je obavijestio Uzvišeni Allah u Svojoj knjizi ili kroz govor Njegovog Poslanika, poput Sudnjeg dana, i oni koji uspostavljaju namaz tako što ga obavljaju onako kako je Allah propisao, poštujući njegove uslove, sastavne dijelove (ruknove) obavezne i pohvalne radnje, i oni koji udjeljuju od onoga čime ih je Allah opskrbio time što izdvajaju zekat, koji je obavezan, ili sadaku, koja je dobrovoljna. Oni sve to rade nadajući se Allahovoj nagradi. Oni vjeruju u Objavu koju je Allah spustio Svom Vjerovjesniku, i koju je spustio ostalim vjerovjesnicima, neke na njih Allahov mir i spas, ne praveći razliku između tih Objava u pogledu vjerovanja. Oni čvrsto vjeruju u ahiret, onaj svijet, te u nagradu i kaznu koji tamo slijede.","translation":"'i onima koji budu vjerovali u ono što se objavljuje tebi i u ono što je objavljeno prije tebe, i onima koji u onaj svijet budu čvrsto vjerovali.'"},{"index":"12","sura":"2","aya":"5","arabicText":"أُوْلَٰٓئِكَ عَلَىٰ هُدٗى مِّن رَّبِّهِمۡۖ وَأُوْلَٰٓئِكَ هُمُ ٱلۡمُفۡلِحُونَ","tafsir":"Ovi ljudi koji posjeduju navedene osobine idu čvrsto pravim putem, i oni su istinski pobjednici na dunjaluku i na ahiretu jer su postigli ono čemu se nadaju i spasili od onoga čega se boje.","translation":"'Njima će Gospodar njihov na Pravi put ukazati i oni će ono što žele ostvariti.'"}]
```

## License
[MIT](https://choosealicense.com/licenses/mit/)