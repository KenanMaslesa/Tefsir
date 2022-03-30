const data = require('./data');

function getTafsirAndTranslationForHolyQuran() {
    return data.tafsir;
}

function getTafsirAndTranslationForSura(suraId) {
    const sura = data.suraList.filter(sura => sura.index === suraId)[0];
    const array = [];
    for(let i = sura.startPage; i<= sura.endPage; i++) {
        array.push(getTafsirAndTranslationForPage(i));
    }
    return {
        suraInfo: {
            ...sura
        },
        ayahsPerPages: array
    };
}

function getTafsirAndTranslationForIndex(index) {
    return data.tafsir.filter(ayah => ayah.index == +index)[0];
}

function getTafsirAndTranslationForAyah(suraId, ayahId) {
    return data.tafsir.filter(ayah => ayah.sura == +suraId && ayah.ayaNumber == +ayahId)[0];
}

function getTafsirAndTranslationForPage(page) {
    return data.tafsir.filter(ayah => ayah.page == +page);
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


module.exports = {
    getTafsirAndTranslationForHolyQuran,
    getTafsirAndTranslationForSura,
    getTafsirAndTranslationForPage,
    getTafsirAndTranslationForIndex,
    getTafsirAndTranslationForAyah,
    getTafsirAndTranslationForJuz,
    getTafsirAndTranslationForHizb,
    searchAyahs
}