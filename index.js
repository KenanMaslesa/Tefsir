const data = require('./data');

function getTafsirAndTranslationForHolyQuran() {
    return data.tafsir;
}

function getTafsirAndTranslationForSura(suraId) {
    const ayahsForSura = data.tafsir.filter(item => item.sura === suraId);
    const pages = ayahsForSura.map(item => item.page);
    const uniquepages = [...new Set(pages)];
    const ayahsPerPages = [];
    uniquepages.forEach(page => {
        ayahsPerPages.push(ayahsForSura.filter(item => item.page === page));
    });
    const sura = data.suraList.filter(sura => sura.index === suraId)[0];

    return {
        suraInfo: {
            ...sura
        },
        ayahsPerPages
    };
}

function getTafsirAndTranslationForIndex(index) {
    return data.tafsir.filter(ayah => ayah.index == +index)[0];
}

function getTafsirAndTranslationForAyah(suraId, ayahId) {
    return data.tafsir.filter(ayah => ayah.sura == +suraId && ayah.ayaNumber == +ayahId)[0];
}

function getTafsirAndTranslationForPage(page) {
    const sura = data.suraList.filter(sura => page >= sura.startPage)[1];
    const ayahsPerPages = data.tafsir.filter(ayah => ayah.page == +page);
    return {
        suraInfo: {
            ...sura
        },
        ayahsPerPages
    };
}

function getTafsirAndTranslationForJuz(juz) {
    return data.tafsir.filter(ayah => ayah.juz == +juz);
}

function getTafsirAndTranslationForHizb(hizb) {
    return data.tafsir.filter(ayah => ayah.hizb == +hizb);
}

function searchAyahs(searchTerm) {
    return data.tafsir.filter(ayah => ayah.korkutsTranslation.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    || ayah.aya.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)
}

function getNumberOfAyahsByPage(page) {
    const ayahsPerPages = data.tafsir.filter(ayah => ayah.page == +page);
    return ayahsPerPages.length;
}

function getOrdinalNumberOfAyahOnPage(ayahIndex, page) {
    let ordinalNumberOnThePage;
    const ayahsPerPages = data.tafsir.filter(ayah => ayah.page == +page);
    ayahsPerPages.forEach((ayah,index) => {
        if(ayah.index === +ayahIndex) {
            ordinalNumberOnThePage = index;
        }
    });
    return ordinalNumberOnThePage+1;
}


module.exports = {
    getTafsirAndTranslationForHolyQuran,
    getTafsirAndTranslationForSura,
    getTafsirAndTranslationForPage,
    getTafsirAndTranslationForIndex,
    getTafsirAndTranslationForAyah,
    getTafsirAndTranslationForJuz,
    getTafsirAndTranslationForHizb,
    searchAyahs,
    getNumberOfAyahsByPage,
    getOrdinalNumberOfAyahOnPage
}