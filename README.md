# بسم الله الرحمن الرحيم


## Tefsir i prijevod Kur'ana
Prijevod skraćenog tefsira na kojem je radilo preko dvadeset alima i stručnjaka iz oblasti tefsira:

Prof. dr. Salih Humejd (imam harema u Mekki i član Vijeća velikih učenjaka)

Prof. dr. Abdurrahman Šehri (Univerzitet Kralj Saud)

Dr. Nasir El Madžid ( Univerzitet Muhammed b. SAUD)

Prof. dr. Ahmed Šukri (Jordanski univerzitet)

Prof. dr. Ahmed Sa’d Hatib (Azhar)

Prof. dr. Ahmed Davi (Univerzitet Šuajb Dukali, Maroko)

Dr. Halid Sebt ( Univerzitet Imam Abdurrahman b. Fejsal)

Prof. dr. Seid Felah (Zejtuna, Tunis)

Prof. dr. Salih Savab (Univerzitet Sana, Jemen)

Prof. dr. Ganim Hamd (Univerzitet Tikrit, Irak)

Prof. dr. Abdulaziz Al Abdu Latif (Univerzitet Muhammed b. SAUD)

Prof. dr. Abdullah Ankari (Univerzitet Kralj Saud)

i dr.


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
tefsir.getTafsirAndTranslationForSura(suraId); //suraId=(1-114)
tefsir.getTafsirAndTranslationForIndex(index); index=(1-6236)
tefsir.getTafsirAndTranslationForAyah(suraId, ayahId);
tefsir.getTafsirAndTranslationForPage(pageId); //pageId = (1-604)
tefsir.getTafsirAndTranslationForJuz(juzId); //juzId = (1-30)
tefsir.getTafsirAndTranslationForHizb(hizbId); //hizbId = (1-60)
tefsir.searchAyahs(searchTerm);
tefsir.getNumberOfAyahsByPage(pageId); //pageId = (1-604)
tefsir.getOrdinalNumberOfAyahOnPage(ayahIndex, pageId); //ayahIndex = (1-6236) - pageId(1-604)
```

```bash
tefsir.getTafsirAndTranslationForHolyQuran();
RESPONSE:
[
	{
		"index":1,
		"sura":1,
		"ayaNumber":1,
		"aya":"بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
		"juz":1,
		"hizb":1,
		"page":1,
		"korkutsTranslation":"U ime Allaha, Milostivog, Samilosnog!",
		"tafsir":"Svoje učenje Kur’ana počinjem s imenom Allaha Uzvišenog, od Njega tražeći snagu za to, moleći za Njegov blagoslov i spominjući Njegovo ime. Bismila sadrži tri Allahova lijepa imena, i to: 1. Allah, tj. Onaj Koji istinski zaslužuje da bude obožavan. To je najposebnije Allahovo ime i niko se njime ne smije nazvati osim Allaha; 2. er-Rahman – Milostivi, tj. Onaj Koji posjeduje svojstvo apsolutne milosti, i ovo ime ukazuje na to da Allah posjeduje milost kao svojstvo Svog Bića; 3. er-Rahim – Samilosni, tj. Onaj Koji Svoju milost spušta na ona stvorenja na koja On hoće, a među koja spadaju i vjernici."
	},
	{
		"index":2,
		"sura":1,
		"ayaNumber":2,
		"aya":"ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ",
		"juz":1,
		"hizb":1,
		"page":1,
		"korkutsTranslation":"Tebe, Allaha, Gospodara svjetova, hvalimo,",
		"tafsir":"Sve vrste hvale, koje predstavljaju opisivanje nekog svojstvima veličanstva i savršenstva, pripadaju Allahu Jedinom, jer je On gospodar svega, stvoritelj svega, upravitelj svime. Riječ \"svjetovi\" (el-alemun) množina je riječi \"svijet\" (el-alem), a označava sve mimo Allaha."
	},
	{
		"index":3,
		"sura":1,
		"ayaNumber":3,
		"aya":"ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
		"juz":1,
		"hizb":1,
		"page":1,
		"korkutsTranslation":"Milostivog, Samilosnog,",
		"tafsir":"Ovim riječima iskazuje se pohvala Uzvišenom Allahu, nakon što Mu se, u prethodnom ajetu, iskazala zahvala."
	},
	{
		"index":4,
		"sura":1,
		"ayaNumber":4,
		"aya":"مَٰلِكِ يَوْمِ ٱلدِّينِ",
		"juz":1,
		"hizb":1,
		"page":1,
		"korkutsTranslation":"Vladara Dana sudnjeg,",
		"tafsir":"Ovim riječima ukazuje se na veličanje Uzvišenog Allaha spominjanjem činjenice da će On biti vladar svega na Sudnjem danu, kada niko ništa neće posjedovati. Izraz “Jevmud-din” ovdje znači Dan obračuna, dan kada će svako polagati račun i shodno tome biti nagrađen ili kažnjen."
	},
	{
		"index":5,
		"sura":1,
		"ayaNumber":5,
		"aya":"إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
		"juz":1,
		"hizb":1,
		"page":1,
		"korkutsTranslation":"Tebi se klanjamo i od Tebe pomoć tražimo!",
		"tafsir":"Isključivo Tebi upućujemo sve vidove obožavanja (ibadeta) i pokornosti, i nikoga Ti, u tome, ne pridružujemo, i samo od Tebe tražimo pomoć u svim našim poslovima. U Tvojoj ruci je svako dobro i niko mimo Tebe ne može pomoći."
	},
	{
		"index":6,
		"sura":1,
		"ayaNumber":6,
		"aya":"ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ",
		"juz":1,
		"hizb":1,
		"page":1,
		"korkutsTranslation":"Uputi nas na Pravi put,",
		"tafsir":"Ukaži nam na Pravi put, podari da idemo njime, učvrsti nas na njemu, i povećaj nam uputu. Konstrukcija \"es-siratul-mustekim\" (Pavi put) označava jasnu stazu na kojoj nema stranputica i devijacija. To je, ustvari, islam, odnosno vjera koju je od Allaha dostavio Muhammed, sallallahu alejhi ve sellem."
	},
	{
		"index":7,
		"sura":1,
		"ayaNumber":7,
		"aya":"صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ",
		"juz":1,
		"hizb":1,
		"page":1,
		"korkutsTranslation":"na Put onih kojima si milost Svoju darovao, a ne onih koji su protiv sebe srdžbu izazvali, niti onih koji su zalutali!",
		"tafsir":"Na put onih Tvojih robova kojima ti dao blagodat upute, poput vjerovjesnika, istinoljubivih, šehida i dobrih ljudi, a divno je li je to društvo. Sačuvaj nas puta onih na koje se je rasrdilo, koji su spoznali istinu ali je nisu slijedili, poput židova, i sačuvaj nas puta onih koji nisu spoznali put istine zbog svog nemara u traženju istine i upute, poput kršćana."
	},
	{
		"index":8,
		"sura":2,
		"ayaNumber":1,
		"aya":"الٓمٓ",
		"juz":1,
		"hizb":1,
		"page":2,
		"korkutsTranslation":"Elif Lām Mīm.",
		"tafsir":"Elif-Lām-Mīm su harfovi kojima počinju neke kur’anske sure. To su slova arapske abecede koja sama po sebi nemaju značenje, ali njihovo izdvojeno spominjanje u Kur’anu ima mudrost i cilj, jer u Kur’anu ništa nije navedeno bez mudrosti i svrhe. Od najbitnijih mudrosti spominjanja ovih harfova je ukazivanje na izazov Arapima da sastave nešto slično ovom Kur'anu, jer se Kur'an sastoji od harfova koji su bili poznati tadašnjim Arapima i od kojih su oni sastavljali riječi. Zbog toga, u većini slučajeva, nakon otpočinjanja neke sure ovim harfovima spominje se Kur'an, kao što je slučaj i u ovoj suri."
	},
	{
		"index":9,
		"sura":2,
		"ayaNumber":2,
		"aya":"ذَٰلِكَ ٱلْكِتَٰبُ لَا رَيْبَ فِيهِ هُدًى لِّلْمُتَّقِينَ",
		"juz":1,
		"hizb":1,
		"page":2,
		"korkutsTranslation":"Ova Knjiga, u koju nema nikakve sumnje, uputstvo je svima onima koji se budu Allaha bojali;",
		"tafsir":"U ovaj veličanstveni Kur'an nema sumnje ni sa kojeg aspekta, pa nema sumnje u to da ga je Allah objavio, niti ima sumnje u to da su sve njegove riječi, i u formi i u značenju – Allahov govor koji bogobojazne upućuje na Pravi put."
	}
   .....]
```

```bash
tefsir.getTafsirAndTranslationForSura(suraId); //suraId=(1-114)
tefsir.getTafsirAndTranslationForSura(66);
```
RESPONSE:
```bash
{
	"suraInfo":{
		"index":1,
		"numberOfAyas":7,
		"startAyaIndex":0,
		"name":{
			"arabic":"الفاتحة",
			"english":"The Opener",
			"englishTranscription":"Al-Fatihah",
			"bosnian":"Pristup",
			"bosnianTranscription":"El-Fatiha"
		},
		"aboutSura":{
			"bosnian":"Obraćanje i usmjeravanje ka Allahu kroz obožavanje jedino Njega."
		},
		"type":"Meccan",
		"orderInPublishing":5,
		"numberOfWords":29,
		"numberOfLetters":142,
		"startJuz":1,
		"endJuz":1,
		"startPage":1,
		"endPage":1,
		"totalPages":1
	},
	"ayahsPerPages":[
		[
			{
				"index":1,
				"sura":1,
				"ayaNumber":1,
				"aya":"بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
				"juz":1,
				"hizb":1,
				"page":1,
				"korkutsTranslation":"U ime Allaha, Milostivog, Samilosnog!",
				"tafsir":"Svoje učenje Kur’ana počinjem s imenom Allaha Uzvišenog, od Njega tražeći snagu za to, moleći za Njegov blagoslov i spominjući Njegovo ime. Bismila sadrži tri Allahova lijepa imena, i to: 1. Allah, tj. Onaj Koji istinski zaslužuje da bude obožavan. To je najposebnije Allahovo ime i niko se njime ne smije nazvati osim Allaha; 2. er-Rahman – Milostivi, tj. Onaj Koji posjeduje svojstvo apsolutne milosti, i ovo ime ukazuje na to da Allah posjeduje milost kao svojstvo Svog Bića; 3. er-Rahim – Samilosni, tj. Onaj Koji Svoju milost spušta na ona stvorenja na koja On hoće, a među koja spadaju i vjernici."
			},
			{
				"index":2,
				"sura":1,
				"ayaNumber":2,
				"aya":"ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ",
				"juz":1,
				"hizb":1,
				"page":1,
				"korkutsTranslation":"Tebe, Allaha, Gospodara svjetova, hvalimo,",
				"tafsir":"Sve vrste hvale, koje predstavljaju opisivanje nekog svojstvima veličanstva i savršenstva, pripadaju Allahu Jedinom, jer je On gospodar svega, stvoritelj svega, upravitelj svime. Riječ \"svjetovi\" (el-alemun) množina je riječi \"svijet\" (el-alem), a označava sve mimo Allaha."
			},
			{
				"index":3,
				"sura":1,
				"ayaNumber":3,
				"aya":"ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
				"juz":1,
				"hizb":1,
				"page":1,
				"korkutsTranslation":"Milostivog, Samilosnog,",
				"tafsir":"Ovim riječima iskazuje se pohvala Uzvišenom Allahu, nakon što Mu se, u prethodnom ajetu, iskazala zahvala."
			},
			{
				"index":4,
				"sura":1,
				"ayaNumber":4,
				"aya":"مَٰلِكِ يَوْمِ ٱلدِّينِ",
				"juz":1,
				"hizb":1,
				"page":1,
				"korkutsTranslation":"Vladara Dana sudnjeg,",
				"tafsir":"Ovim riječima ukazuje se na veličanje Uzvišenog Allaha spominjanjem činjenice da će On biti vladar svega na Sudnjem danu, kada niko ništa neće posjedovati. Izraz “Jevmud-din” ovdje znači Dan obračuna, dan kada će svako polagati račun i shodno tome biti nagrađen ili kažnjen."
			},
			{
				"index":5,
				"sura":1,
				"ayaNumber":5,
				"aya":"إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
				"juz":1,
				"hizb":1,
				"page":1,
				"korkutsTranslation":"Tebi se klanjamo i od Tebe pomoć tražimo!",
				"tafsir":"Isključivo Tebi upućujemo sve vidove obožavanja (ibadeta) i pokornosti, i nikoga Ti, u tome, ne pridružujemo, i samo od Tebe tražimo pomoć u svim našim poslovima. U Tvojoj ruci je svako dobro i niko mimo Tebe ne može pomoći."
			},
			{
				"index":6,
				"sura":1,
				"ayaNumber":6,
				"aya":"ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ",
				"juz":1,
				"hizb":1,
				"page":1,
				"korkutsTranslation":"Uputi nas na Pravi put,",
				"tafsir":"Ukaži nam na Pravi put, podari da idemo njime, učvrsti nas na njemu, i povećaj nam uputu. Konstrukcija \"es-siratul-mustekim\" (Pravi put) označava jasnu stazu na kojoj nema stranputica i devijacija. To je, ustvari, islam, odnosno vjera koju je od Allaha dostavio Muhammed, sallallahu alejhi ve sellem."
			},
			{
				"index":7,
				"sura":1,
				"ayaNumber":7,
				"aya":"صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ",
				"juz":1,
				"hizb":1,
				"page":1,
				"korkutsTranslation":"na Put onih kojima si milost Svoju darovao, a ne onih koji su protiv sebe srdžbu izazvali, niti onih koji su zalutali!",
				"tafsir":"Na put onih Tvojih robova kojima ti dao blagodat upute, poput vjerovjesnika, istinoljubivih, šehida i dobrih ljudi, a divno je li je to društvo. Sačuvaj nas puta onih na koje se je rasrdilo, koji su spoznali istinu ali je nisu slijedili, poput židova, i sačuvaj nas puta onih koji nisu spoznali put istine zbog svog nemara u traženju istine i upute, poput kršćana."
			}
		]
	]
}
```

```bash
tefsir.getTafsirAndTranslationForIndex(index); index=(1-6236)
tefsir.getTafsirAndTranslationForIndex(1);
```
RESPONSE:
```bash
{"index":1,"sura":1,"ayaNumber":1,"aya":"بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ","juz":1,"hizb":1,"page":1,"korkutsTranslation":"U ime Allaha, Milostivog, Samilosnog!","tafsir":"Svoje učenje Kur’ana počinjem s imenom Allaha Uzvišenog, od Njega tražeći snagu za to, moleći za Njegov blagoslov i spominjući Njegovo ime. Bismila sadrži tri Allahova lijepa imena, i to: 1. Allah, tj. Onaj Koji istinski zaslužuje da bude obožavan. To je najposebnije Allahovo ime i niko se njime ne smije nazvati osim Allaha; 2. er-Rahman – Milostivi, tj. Onaj Koji posjeduje svojstvo apsolutne milosti, i ovo ime ukazuje na to da Allah posjeduje milost kao svojstvo Svog Bića; 3. er-Rahim – Samilosni, tj. Onaj Koji Svoju milost spušta na ona stvorenja na koja On hoće, a među koja spadaju i vjernici."}
```

```bash
tefsir.getTafsirAndTranslationForAyah(suraId, ayahId);
tefsir.getTafsirAndTranslationForAyah(1, 2);
```
RESPONSE:
```bash
{"index":2,"sura":1,"ayaNumber":2,"aya":"ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ","juz":1,"hizb":1,"page":1,"korkutsTranslation":"Tebe, Allaha, Gospodara svjetova, hvalimo,","tafsir":"Sve vrste hvale, koje predstavljaju opisivanje nekog svojstvima veličanstva i savršenstva, pripadaju Allahu Jedinom, jer je On gospodar svega, stvoritelj svega, upravitelj svime. Riječ \"svjetovi\" (el-alemun) množina je riječi \"svijet\" (el-alem), a označava sve mimo Allaha."}
```

```bash
tefsir.getTafsirAndTranslationForPage(604)
```
RESPONSE: 
```bash
[
	{
		"index":6222,
		"sura":112,
		"ayaNumber":1,
		"aya":"قُلْ هُوَ ٱللَّهُ أَحَدٌ",
		"juz":30,
		"hizb":60,
		"page":604,
		"korkutsTranslation":"Reci: \"On je Allah – Jedan!",
		"tafsir":"Reci, o Poslaniče: Allah je jedinstven u božanskim osobinama i On je jedini Bog.",
		"suraTitle":{
			"arabic":"الإخلاص",
			"english":"The Sincerity",
			"englishTranscription":"Al-Ikhlas",
			"bosnian":"Iskrenost",
			"bosnianTranscription":"El-Ihlas"
		}
	},
	{
		"index":6223,
		"sura":112,
		"ayaNumber":2,
		"aya":"ٱللَّهُ ٱلصَّمَدُ",
		"juz":30,
		"hizb":60,
		"page":604,
		"korkutsTranslation":"Allah je Utočište svakom!",
		"tafsir":"On je Gospodar Apsolutni i savršeni u svojim svojstvima i ljepoti, Onaj kome sva stvorenja teže i kod Njega utočište traže.",
		"suraTitle":{
			"arabic":"الإخلاص",
			"english":"The Sincerity",
			"englishTranscription":"Al-Ikhlas",
			"bosnian":"Iskrenost",
			"bosnianTranscription":"El-Ihlas"
		}
	},
	{
		"index":6224,
		"sura":112,
		"ayaNumber":3,
		"aya":"لَمْ يَلِدْ وَلَمْ يُولَدْ",
		"juz":30,
		"hizb":60,
		"page":604,
		"korkutsTranslation":"Nije rodio i rođen nije,",
		"tafsir":"Onaj koji nikog nije rodio, niti je Njega iko rodio. On Uzvišeni nema ni djeteta ni roditelja.",
		"suraTitle":{
			"arabic":"الإخلاص",
			"english":"The Sincerity",
			"englishTranscription":"Al-Ikhlas",
			"bosnian":"Iskrenost",
			"bosnianTranscription":"El-Ihlas"
		}
	},
	{
		"index":6225,
		"sura":112,
		"ayaNumber":4,
		"aya":"وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ",
		"juz":30,
		"hizb":60,
		"page":604,
		"korkutsTranslation":"i niko Mu ravan nije!\"",
		"tafsir":"Njemu niko od stvorenja nije sličan.",
		"suraTitle":{
			"arabic":"الإخلاص",
			"english":"The Sincerity",
			"englishTranscription":"Al-Ikhlas",
			"bosnian":"Iskrenost",
			"bosnianTranscription":"El-Ihlas"
		}
	},
	{
		"index":6226,
		"sura":113,
		"ayaNumber":1,
		"aya":"قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ",
		"juz":30,
		"hizb":60,
		"page":604,
		"korkutsTranslation":"Reci: \"Utječem se Gospodaru svitanja",
		"tafsir":"O Poslaniče, reci: Tražim zaštitu kod Gospodara jutra.",
		"suraTitle":{
			"arabic":"الفلق",
			"english":"The Daybreak",
			"englishTranscription":"Al-Falaq",
			"bosnian":"Svitanje",
			"bosnianTranscription":"El-Felek"
		}
	},
	{
		"index":6227,
		"sura":113,
		"ayaNumber":2,
		"aya":"مِن شَرِّ مَا خَلَقَ",
		"juz":30,
		"hizb":60,
		"page":604,
		"korkutsTranslation":"od zla onoga što On stvara,",
		"tafsir":"od zla kojeg čine stvorenja i njihovih uznemiravanja.",
		"suraTitle":{
			"arabic":"الفلق",
			"english":"The Daybreak",
			"englishTranscription":"Al-Falaq",
			"bosnian":"Svitanje",
			"bosnianTranscription":"El-Felek"
		}
	},
	{
		"index":6228,
		"sura":113,
		"ayaNumber":3,
		"aya":"وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ",
		"juz":30,
		"hizb":60,
		"page":604,
		"korkutsTranslation":"i od zla mrkle noći kada razastre tmine,",
		"tafsir":"I kod Allaha tražim spas od zla koje se pojavljuje noću, u vidu životinja i lopova.",
		"suraTitle":{
			"arabic":"الفلق",
			"english":"The Daybreak",
			"englishTranscription":"Al-Falaq",
			"bosnian":"Svitanje",
			"bosnianTranscription":"El-Felek"
		}
	},
	{
		"index":6229,
		"sura":113,
		"ayaNumber":4,
		"aya":"وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ",
		"juz":30,
		"hizb":60,
		"page":604,
		"korkutsTranslation":"i od zla onih koje u čvorove pušu ",
		"tafsir":"I kod njega tražim spas od sihirbasica koje pušu u čvorove.",
		"suraTitle":{
			"arabic":"الفلق",
			"english":"The Daybreak",
			"englishTranscription":"Al-Falaq",
			"bosnian":"Svitanje",
			"bosnianTranscription":"El-Felek"
		}
	},
	{
		"index":6230,
		"sura":113,
		"ayaNumber":5,
		"aya":"وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
		"juz":30,
		"hizb":60,
		"page":604,
		"korkutsTranslation":"i od zla zavidljivca kad zavist ne krije!\"",
		"tafsir":"I kod Njega tražim spas od zla zavidnika koji radi ono iz čega proizlazi zavist.",
		"suraTitle":{
			"arabic":"الفلق",
			"english":"The Daybreak",
			"englishTranscription":"Al-Falaq",
			"bosnian":"Svitanje",
			"bosnianTranscription":"El-Felek"
		}
	},
	{
		"index":6231,
		"sura":114,
		"ayaNumber":1,
		"aya":"قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ",
		"juz":30,
		"hizb":60,
		"page":604,
		"korkutsTranslation":"Reci: \"Tražim zaštitu Gospodara ljudi,",
		"tafsir":"O Poslaniče, reci: Tražim zaštitu kod Gospodara ljudi i Njemu se utičem.",
		"suraTitle":{
			"arabic":"الناس",
			"english":"The Mankind",
			"englishTranscription":"An-Nas",
			"bosnian":"Ljudi",
			"bosnianTranscription":"En-Nas"
		}
	},
	{
		"index":6232,
		"sura":114,
		"ayaNumber":2,
		"aya":"مَلِكِ ٱلنَّاسِ",
		"juz":30,
		"hizb":60,
		"page":604,
		"korkutsTranslation":"Vladara ljudi,",
		"tafsir":"Vladaru ljudi koji čini s njima šta hoće i pored kojeg niko nema vlasti.",
		"suraTitle":{
			"arabic":"الناس",
			"english":"The Mankind",
			"englishTranscription":"An-Nas",
			"bosnian":"Ljudi",
			"bosnianTranscription":"En-Nas"
		}
	},
	{
		"index":6233,
		"sura":114,
		"ayaNumber":3,
		"aya":"إِلَٰهِ ٱلنَّاسِ",
		"juz":30,
		"hizb":60,
		"page":604,
		"korkutsTranslation":"Boga ljudi,",
		"tafsir":"Onome koji zaslužuje da se istinski obožava, pored kojeg niko drugi to ne zaslužuje.",
		"suraTitle":{
			"arabic":"الناس",
			"english":"The Mankind",
			"englishTranscription":"An-Nas",
			"bosnian":"Ljudi",
			"bosnianTranscription":"En-Nas"
		}
	},
	{
		"index":6234,
		"sura":114,
		"ayaNumber":4,
		"aya":"مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ",
		"juz":30,
		"hizb":60,
		"page":604,
		"korkutsTranslation":"od zla šejtana-napasnika,",
		"tafsir":"Od zla šejtana koji čovjeku donosi ružne misli kada zaboravi na Allaha, a kada Ga se sjeti, on se skrije i ne dolazi.",
		"suraTitle":{
			"arabic":"الناس",
			"english":"The Mankind",
			"englishTranscription":"An-Nas",
			"bosnian":"Ljudi",
			"bosnianTranscription":"En-Nas"
		}
	},
	{
		"index":6235,
		"sura":114,
		"ayaNumber":5,
		"aya":"ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ",
		"juz":30,
		"hizb":60,
		"page":604,
		"korkutsTranslation":"koji zle misli unosi u srca ljudi –",
		"tafsir":"koji unosi zle misli u ljudska sca.",
		"suraTitle":{
			"arabic":"الناس",
			"english":"The Mankind",
			"englishTranscription":"An-Nas",
			"bosnian":"Ljudi",
			"bosnianTranscription":"En-Nas"
		}
	},
	{
		"index":6236,
		"sura":114,
		"ayaNumber":6,
		"aya":"مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ",
		"juz":30,
		"hizb":60,
		"page":604,
		"korkutsTranslation":"od džina i od ljudi!\"",
		"tafsir":"a on nekada bude ljudske, a nekada džinske vrste.",
		"suraTitle":{
			"arabic":"الناس",
			"english":"The Mankind",
			"englishTranscription":"An-Nas",
			"bosnian":"Ljudi",
			"bosnianTranscription":"En-Nas"
		}
	}
]
```

```bash
tefsir.getNumberOfAyahsByPage(604);

RESPONSE:
15
```

```bash
tefsir.getTafsirAndTranslationForJuz(1)
```
RESPONSE: 
```bash
[
	{
		"index":1,
		"sura":1,
		"ayaNumber":1,
		"aya":"بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
		"juz":1,
		"hizb":1,
		"page":1,
		"korkutsTranslation":"U ime Allaha, Milostivog, Samilosnog!",
		"tafsir":"Svoje učenje Kur’ana počinjem s imenom Allaha Uzvišenog, od Njega tražeći snagu za to, moleći za Njegov blagoslov i spominjući Njegovo ime. Bismila sadrži tri Allahova lijepa imena, i to: 1. Allah, tj. Onaj Koji istinski zaslužuje da bude obožavan. To je najposebnije Allahovo ime i niko se njime ne smije nazvati osim Allaha; 2. er-Rahman – Milostivi, tj. Onaj Koji posjeduje svojstvo apsolutne milosti, i ovo ime ukazuje na to da Allah posjeduje milost kao svojstvo Svog Bića; 3. er-Rahim – Samilosni, tj. Onaj Koji Svoju milost spušta na ona stvorenja na koja On hoće, a među koja spadaju i vjernici."
	},
	{
		"index":2,
		"sura":1,
		"ayaNumber":2,
		"aya":"ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ",
		"juz":1,
		"hizb":1,
		"page":1,
		"korkutsTranslation":"Tebe, Allaha, Gospodara svjetova, hvalimo,",
		"tafsir":"Sve vrste hvale, koje predstavljaju opisivanje nekog svojstvima veličanstva i savršenstva, pripadaju Allahu Jedinom, jer je On gospodar svega, stvoritelj svega, upravitelj svime. Riječ \"svjetovi\" (el-alemun) množina je riječi \"svijet\" (el-alem), a označava sve mimo Allaha."
	},
	{
		"index":3,
		"sura":1,
		"ayaNumber":3,
		"aya":"ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
		"juz":1,
		"hizb":1,
		"page":1,
		"korkutsTranslation":"Milostivog, Samilosnog,",
		"tafsir":"Ovim riječima iskazuje se pohvala Uzvišenom Allahu, nakon što Mu se, u prethodnom ajetu, iskazala zahvala."
	},
	{
		"index":4,
		"sura":1,
		"ayaNumber":4,
		"aya":"مَٰلِكِ يَوْمِ ٱلدِّينِ",
		"juz":1,
		"hizb":1,
		"page":1,
		"korkutsTranslation":"Vladara Dana sudnjeg,",
		"tafsir":"Ovim riječima ukazuje se na veličanje Uzvišenog Allaha spominjanjem činjenice da će On biti vladar svega na Sudnjem danu, kada niko ništa neće posjedovati. Izraz “Jevmud-din” ovdje znači Dan obračuna, dan kada će svako polagati račun i shodno tome biti nagrađen ili kažnjen."
	},
	{
		"index":5,
		"sura":1,
		"ayaNumber":5,
		"aya":"إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
		"juz":1,
		"hizb":1,
		"page":1,
		"korkutsTranslation":"Tebi se klanjamo i od Tebe pomoć tražimo!",
		"tafsir":"Isključivo Tebi upućujemo sve vidove obožavanja (ibadeta) i pokornosti, i nikoga Ti, u tome, ne pridružujemo, i samo od Tebe tražimo pomoć u svim našim poslovima. U Tvojoj ruci je svako dobro i niko mimo Tebe ne može pomoći."
	},
	{
		"index":6,
		"sura":1,
		"ayaNumber":6,
		"aya":"ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ",
		"juz":1,
		"hizb":1,
		"page":1,
		"korkutsTranslation":"Uputi nas na Pravi put,",
		"tafsir":"Ukaži nam na Pravi put, podari da idemo njime, učvrsti nas na njemu, i povećaj nam uputu. Konstrukcija \"es-siratul-mustekim\" (Pavi put) označava jasnu stazu na kojoj nema stranputica i devijacija. To je, ustvari, islam, odnosno vjera koju je od Allaha dostavio Muhammed, sallallahu alejhi ve sellem."
	},
	{
		"index":7,
		"sura":1,
		"ayaNumber":7,
		"aya":"صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ",
		"juz":1,
		"hizb":1,
		"page":1,
		"korkutsTranslation":"na Put onih kojima si milost Svoju darovao, a ne onih koji su protiv sebe srdžbu izazvali, niti onih koji su zalutali!",
		"tafsir":"Na put onih Tvojih robova kojima ti dao blagodat upute, poput vjerovjesnika, istinoljubivih, šehida i dobrih ljudi, a divno je li je to društvo. Sačuvaj nas puta onih na koje se je rasrdilo, koji su spoznali istinu ali je nisu slijedili, poput židova, i sačuvaj nas puta onih koji nisu spoznali put istine zbog svog nemara u traženju istine i upute, poput kršćana."
	},
	{
		"index":8,
		"sura":2,
		"ayaNumber":1,
		"aya":"الٓمٓ",
		"juz":1,
		"hizb":1,
		"page":2,
		"korkutsTranslation":"Elif Lām Mīm.",
		"tafsir":"Elif-Lām-Mīm su harfovi kojima počinju neke kur’anske sure. To su slova arapske abecede koja sama po sebi nemaju značenje, ali njihovo izdvojeno spominjanje u Kur’anu ima mudrost i cilj, jer u Kur’anu ništa nije navedeno bez mudrosti i svrhe. Od najbitnijih mudrosti spominjanja ovih harfova je ukazivanje na izazov Arapima da sastave nešto slično ovom Kur'anu, jer se Kur'an sastoji od harfova koji su bili poznati tadašnjim Arapima i od kojih su oni sastavljali riječi. Zbog toga, u većini slučajeva, nakon otpočinjanja neke sure ovim harfovima spominje se Kur'an, kao što je slučaj i u ovoj suri."
	},
	{
		"index":9,
		"sura":2,
		"ayaNumber":2,
		"aya":"ذَٰلِكَ ٱلْكِتَٰبُ لَا رَيْبَ فِيهِ هُدًى لِّلْمُتَّقِينَ",
		"juz":1,
		"hizb":1,
		"page":2,
		"korkutsTranslation":"Ova Knjiga, u koju nema nikakve sumnje, uputstvo je svima onima koji se budu Allaha bojali;",
		"tafsir":"U ovaj veličanstveni Kur'an nema sumnje ni sa kojeg aspekta, pa nema sumnje u to da ga je Allah objavio, niti ima sumnje u to da su sve njegove riječi, i u formi i u značenju – Allahov govor koji bogobojazne upućuje na Pravi put."
	},
	{
		"index":10,
		"sura":2,
		"ayaNumber":3,
		"aya":"ٱلَّذِينَ يُؤْمِنُونَ بِٱلْغَيْبِ وَيُقِيمُونَ ٱلصَّلَوٰةَ وَمِمَّا رَزَقْنَٰهُمْ يُنفِقُونَ",
		"juz":1,
		"hizb":1,
		"page":2,
		"korkutsTranslation":"onima koji u nevidljivi svijet budu vjerovali i molitvu obavljali i udjeljivali dio od onoga što im Mi budemo davali;",
		"tafsir":"3-4. Bogobojazni su oni koji vjeruju u ono što je čulima nedokučivo, a to je sve ono o čemu nas je obavijestio Uzvišeni Allah u Svojoj knjizi ili kroz govor Njegovog Poslanika, poput Sudnjeg dana, i oni koji uspostavljaju namaz tako što ga obavljaju onako kako je Allah propisao, poštujući njegove uslove, sastavne dijelove (ruknove) obavezne i pohvalne radnje, i oni koji udjeljuju od onoga čime ih je Allah opskrbio time što izdvajaju zekat, koji je obavezan, ili sadaku, koja je dobrovoljna. Oni sve to rade nadajući se Allahovoj nagradi. Oni vjeruju u Objavu koju je Allah spustio Svom Vjerovjesniku, i koju je spustio ostalim vjerovjesnicima, neke na njih Allahov mir i spas, ne praveći razliku između tih Objava u pogledu vjerovanja. Oni čvrsto vjeruju u ahiret, onaj svijet, te u nagradu i kaznu koji tamo slijede."
	}...]
```

```bash
tefsir.getTafsirAndTranslationForHizb(2)
```
RESPONSE: 
```bash
{
		"index":82,
		"sura":2,
		"ayaNumber":75,
		"aya":"أَفَتَطْمَعُونَ أَن يُؤْمِنُوا۟ لَكُمْ وَقَدْ كَانَ فَرِيقٌ مِّنْهُمْ يَسْمَعُونَ كَلَٰمَ ٱللَّهِ ثُمَّ يُحَرِّفُونَهُۥ مِنۢ بَعْدِ مَا عَقَلُوهُ وَهُمْ يَعْلَمُونَ",
		"juz":1,
		"hizb":2,
		"page":11,
		"korkutsTranslation":"Zar se vi nadate da će vam se jevreji odazvati i vama za ljubav vjernici postati, a neki među njima su Allahove riječi slušali pa su ih, pošto su ih shvatili, svjesno izvrnuli.",
		"tafsir":"O vjernici, zar se nadate da će Židovi povjerovati i vama se odazvati nakon što ste spoznali njihov inat? Skupina njihovih učenjaka je slušala Allahov govor koji im je objavljen u Tevratu, a zatim su mijenjali njegove riječi i njegova značenja nakon što su ih spoznali, iako su znali koliko je to veliki zločin."
	},
	{
		"index":83,
		"sura":2,
		"ayaNumber":76,
		"aya":"وَإِذَا لَقُوا۟ ٱلَّذِينَ ءَامَنُوا۟ قَالُوٓا۟ ءَامَنَّا وَإِذَا خَلَا بَعْضُهُمْ إِلَىٰ بَعْضٍ قَالُوٓا۟ أَتُحَدِّثُونَهُم بِمَا فَتَحَ ٱللَّهُ عَلَيْكُمْ لِيُحَآجُّوكُم بِهِۦ عِندَ رَبِّكُمْ أَفَلَا تَعْقِلُونَ",
		"juz":1,
		"hizb":2,
		"page":11,
		"korkutsTranslation":"Kad sretnu vjernike, oni govore: \"Vjerujemo!\", a čim se osame jedni s drugima, kažu: \"Zar ćete im kazivati o onome što je Allah samo vama objavio, pa da im to bude dokaz protiv vas pred Gospodarom vašim? Zar se nećete opametiti?\"",
		"tafsir":"Jedna od kontradikcija i spletki židova i to je što, kada bi neki od njih sreli vjernike priznali bi im istinitost vjerovjesnika Muhammeda, sallallahu alejhi ve sellem, i njegovog poslanstva, i to je ono čemu svjedoči Tevrat, ali kada bi se osamili, korili bi jedni druge zbog ovih priznanja, jer će muslimani ta priznanja koristiti kao dokaz protiv židova."
	},
	{
		"index":84,
		"sura":2,
		"ayaNumber":77,
		"aya":"أَوَلَا يَعْلَمُونَ أَنَّ ٱللَّهَ يَعْلَمُ مَا يُسِرُّونَ وَمَا يُعْلِنُونَ",
		"juz":1,
		"hizb":2,
		"page":12,
		"korkutsTranslation":"A zar oni ne znaju da Allah zna i ono što oni kriju i ono što pokazuju?",
		"tafsir":"Ovi židovi rade ove ružne postupke kao da su smetnuli s uma da Allah zna njihove i javne skrivene riječi i njihova skrivena i javna djela, i On će to obznaniti ljudima i time obrukati spletkaroše."
	},
	{
		"index":85,
		"sura":2,
		"ayaNumber":78,
		"aya":"وَمِنْهُمْ أُمِّيُّونَ لَا يَعْلَمُونَ ٱلْكِتَٰبَ إِلَّآ أَمَانِىَّ وَإِنْ هُمْ إِلَّا يَظُنُّونَ",
		"juz":1,
		"hizb":2,
		"page":12,
		"korkutsTranslation":"Neki od njih su neuki, oni ne znaju za Knjigu, nego samo za gatke, i oni se samo domišljaju.",
		"tafsir":"Među židovima ima skupina koja Tevrat uči jezikom, ali ne razumije ono na šta on ukazuje. Oni samo prenose laži koje su uzeli od svojih velikana, i misle da je to Tevrat, koji je Allah objavio."
	},
	{
		"index":86,
		"sura":2,
		"ayaNumber":79,
		"aya":"فَوَيْلٌ لِّلَّذِينَ يَكْتُبُونَ ٱلْكِتَٰبَ بِأَيْدِيهِمْ ثُمَّ يَقُولُونَ هَٰذَا مِنْ عِندِ ٱللَّهِ لِيَشْتَرُوا۟ بِهِۦ ثَمَنًا قَلِيلًا فَوَيْلٌ لَّهُم مِّمَّا كَتَبَتْ أَيْدِيهِمْ وَوَيْلٌ لَّهُم مِّمَّا يَكْسِبُونَ",
		"juz":1,
		"hizb":2,
		"page":12,
		"korkutsTranslation":"A teško onima koji svojim rukama pišu Knjigu, a zatim govore: \"Evo, ovo je od Allaha\" – da bi za to korist neznatnu izvukli. I teško njima zbog onoga što ruke njihove pišu i teško njima što na taj način zarađuju!",
		"tafsir":"Propast i žestoka kazna čekaju ove koji svojim rukama pišu knjigu a zatim kažu, lažući: \"Ovo je od Allaha\", kako bi istinu i slijeđenje istine zamijenili za bezvrijedne dunjalučke koristi, poput imetka i vlasti. Propast i žestoka kazna ih čekaju za ono što su svojim rukama napisali, i za njihove laži na Allaha. Propast i žestoka kazna ih čekaju za njihovo imetak i vlast koje dobijaju u zamjenu za ta njihova ružna djela."
	},
	{
		"index":87,
		"sura":2,
		"ayaNumber":80,
		"aya":"وَقَالُوا۟ لَن تَمَسَّنَا ٱلنَّارُ إِلَّآ أَيَّامًا مَّعْدُودَةً قُلْ أَتَّخَذْتُمْ عِندَ ٱللَّهِ عَهْدًا فَلَن يُخْلِفَ ٱللَّهُ عَهْدَهُۥٓ أَمْ تَقُولُونَ عَلَى ٱللَّهِ مَا لَا تَعْلَمُونَ",
		"juz":1,
		"hizb":2,
		"page":12,
		"korkutsTranslation":"Oni govore: \"Vatra će nas doticati samo neko vrijeme.\" Reci: \"Da li ste o tome dobili od Allaha obećanje – jer, Allah će sigurno ispuniti obećanje Svoje – ili na Allaha iznosite ono što ne znate?\"",
		"tafsir":"Kažu, lažući i obmanjujući: \"Vatra nas neće pržiti osim nekoliko dana.\" Reci im, o Vjerovjesniče: \"Da li ste za to od Allaha uzeli čvrsto obećanje? Ako jeste, onda će biti tako, jer Allah ne krši Svoja obećanja i zavjete, ili o Allahu govorite ono što ne znate, lažući?\""
	},
	{
		"index":88,
		"sura":2,
		"ayaNumber":81,
		"aya":"بَلَىٰ مَن كَسَبَ سَيِّئَةً وَأَحَٰطَتْ بِهِۦ خَطِيٓـَٔتُهُۥ فَأُو۟لَٰٓئِكَ أَصْحَٰبُ ٱلنَّارِ هُمْ فِيهَا خَٰلِدُونَ",
		"juz":1,
		"hizb":2,
		"page":12,
		"korkutsTranslation":"A nije tako! Oni koji budu zlo činili i grijesi njihovi ih budu sa svih strana stigli, oni će stanovnici Džehennema biti i u njemu će vječno ostati.",
		"tafsir":"Nije onako kako su ovi umislili, Allah će kazniti svakog ko je bio nevjernik, i koga su njegovi grijesi okružili sa svake strane, i kaznit će ih bacanjem u Vatru i vječnim boravkom u njoj."
	},
	{
		"index":89,
		"sura":2,
		"ayaNumber":82,
		"aya":"وَٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّٰلِحَٰتِ أُو۟لَٰٓئِكَ أَصْحَٰبُ ٱلْجَنَّةِ هُمْ فِيهَا خَٰلِدُونَ",
		"juz":1,
		"hizb":2,
		"page":12,
		"korkutsTranslation":"A oni koji budu vjerovali i dobra djela činili – oni će stanovnici Dženneta biti i u njemu će vječno boraviti.",
		"tafsir":"Oni koji su u Allaha i Njegovog Poslanika povjerovali, i koji su dobra djela radili, ući će u džennet i vječno u njemu ostati, kao nagrada za ono što su činili."
	}...]
```

```bash
tefsir.searchAyahs(searchTerm);
```

```bash
EXAMPLE: 
tefsir.searchAyahs('krava');
tefsir.searchAyahs('خَٰلِدُونَ');

RESPONSE:
[
	{
		"index":75,
		"sura":2,
		"ayaNumber":68,
		"aya":"قَالُوا۟ ٱدْعُ لَنَا رَبَّكَ يُبَيِّن لَّنَا مَا هِىَ قَالَ إِنَّهُۥ يَقُولُ إِنَّهَا بَقَرَةٌ لَّا فَارِضٌ وَلَا بِكْرٌ عَوَانٌۢ بَيْنَ ذَٰلِكَ فَٱفْعَلُوا۟ مَا تُؤْمَرُونَ",
		"juz":1,
		"hizb":1,
		"page":10,
		"korkutsTranslation":"\"Zamoli Gospodara svoga, u naše ime\" – rekoše – \"da nam objasni kojih godina ona treba biti.\" – \"On kaže\" – odgovori on – \"da ta krava ne smije biti ni stara ni mlada, nego između toga, srednje dobi, pa izvršite to što se od vas traži!\"",
		"tafsir":"Oni rekoše Musau: \"Zamoli svog Gospodara da nam pojasni kakva je to krava koju nam je naredio da zakoljemo.\" On im reče: \"Allah vam kaže: 'To je srednja krava, ni premlada ni stara, već između tog dvoga', pa požurite i izvršite naredbu vašeg Gospodara!\""
	},
	{
		"index":76,
		"sura":2,
		"ayaNumber":69,
		"aya":"قَالُوا۟ ٱدْعُ لَنَا رَبَّكَ يُبَيِّن لَّنَا مَا لَوْنُهَا قَالَ إِنَّهُۥ يَقُولُ إِنَّهَا بَقَرَةٌ صَفْرَآءُ فَاقِعٌ لَّوْنُهَا تَسُرُّ ٱلنَّٰظِرِينَ",
		"juz":1,
		"hizb":1,
		"page":10,
		"korkutsTranslation":"\"Zamoli Gospodara svoga, u naše ime\" – rekoše – \"da nam objasni kakve boje treba biti.\" – \"On poručuje\" – odgovori on – \"da ta krava treba biti jarkorumene boje, da se svidi onima koji je vide.\"",
		"tafsir":"Oni su nastavili da se raspravljaju i inate, pa rekoše Musau, alejhis-selam: \"Zamoli svog Gospodara da nam pojasni koje je boje ta krava\", pa im Musa reče: \"Allah kaže: 'To je jako žuta krava koja se svidi svakom ko je vidi.'\""
	},
	{
		"index":78,
		"sura":2,
		"ayaNumber":71,
		"aya":"قَالَ إِنَّهُۥ يَقُولُ إِنَّهَا بَقَرَةٌ لَّا ذَلُولٌ تُثِيرُ ٱلْأَرْضَ وَلَا تَسْقِى ٱلْحَرْثَ مُسَلَّمَةٌ لَّا شِيَةَ فِيهَا قَالُوا۟ ٱلْـَٰٔنَ جِئْتَ بِٱلْحَقِّ فَذَبَحُوهَا وَمَا كَادُوا۟ يَفْعَلُونَ",
		"juz":1,
		"hizb":1,
		"page":11,
		"korkutsTranslation":"\"On poručuje\" – reče on – \"da ta krava ne smije biti istrošena oranjem zemlje i natapanjem usjeva; treba biti bez mahane i bez ikakva biljega.\" – \"E sad si je opisao kako treba!\" – rekoše, pa je zaklaše, i jedva to učiniše.",
		"tafsir":"Musa im reče: \"Allah kaže da ta krava nije korišćena za obrađivanje zemlje, niti za njeno navodnjavanje, i da nema nikakve mahane niti na njoj ima ikakve druge boje mimo žute.\" Onda su rekli: \"E, sada si nam je opisao tako precizno da se tačno može odrediti koja je to krava.\" Zatim su je zaklali, nakon što su umalo odbili tu naredbu svojim inatom i raspravljanjem."
	},
	{
		"index":1639,
		"sura":12,
		"ayaNumber":43,
		"aya":"وَقَالَ ٱلْمَلِكُ إِنِّىٓ أَرَىٰ سَبْعَ بَقَرَٰتٍ سِمَانٍ يَأْكُلُهُنَّ سَبْعٌ عِجَافٌ وَسَبْعَ سُنۢبُلَٰتٍ خُضْرٍ وَأُخَرَ يَابِسَٰتٍ يَٰٓأَيُّهَا ٱلْمَلَأُ أَفْتُونِى فِى رُءْيَٰىَ إِن كُنتُمْ لِلرُّءْيَا تَعْبُرُونَ",
		"juz":12,
		"hizb":24,
		"page":240,
		"korkutsTranslation":"I vladar reče: \"Sanjao sam kako sedam mršavih krava pojede sedam debelih, i sanjao sam sedam klasova zelenih i sedam drugih sasušenih. O velikaši, protumačite mi san moj ako snove znate tumačiti!\"",
		"tafsir":"Kralj reče: \"Sanjao sam sedam debelih krava kako jedu sedam mršavih krava, i vidio sam sedam zelenih klasova i sedam suhih klasova. O prvaci i uglednici, obavijestite me o tumačenju mog sna ako znate tumačiti snove.\""
	},
	{
		"index":1642,
		"sura":12,
		"ayaNumber":46,
		"aya":"يُوسُفُ أَيُّهَا ٱلصِّدِّيقُ أَفْتِنَا فِى سَبْعِ بَقَرَٰتٍ سِمَانٍ يَأْكُلُهُنَّ سَبْعٌ عِجَافٌ وَسَبْعِ سُنۢبُلَٰتٍ خُضْرٍ وَأُخَرَ يَابِسَٰتٍ لَّعَلِّىٓ أَرْجِعُ إِلَى ٱلنَّاسِ لَعَلَّهُمْ يَعْلَمُونَ",
		"juz":12,
		"hizb":24,
		"page":241,
		"korkutsTranslation":"\"Jusufe, o prijatelju, protumači nam šta znači: sedam mršavih krava pojede sedam debelih; i sedam klasova zelenih i sedam drugih sasušenih – pa da se vratim ljudima, da bi oni saznali.\"",
		"tafsir":"Kada je taj momak stigao do Jusufa reče mu: \"O Jusufe, o ti koji si uvijek iskren, obavijesti me o tumačenju sna u kojem je čovjek vidio sedam debelih krava bivaju pojedene od strane sedam mršavih krava, i u kojem je vidio sedam zelenih klasova a nakon njih sedam suhih klasova. Obavijesti me pa da se vratim kralju i onima koji su kod njega, pa da oni saznaju tumačenje kraljevog sna i da spoznaju tvoju vrijednost.\""
	}
]
```
```bash
tefsir.getOrdinalNumberOfAyahOnPage(23,3);

RESPONSE:
11
```
## License
[MIT](https://choosealicense.com/licenses/mit/)