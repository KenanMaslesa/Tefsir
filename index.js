const data = require('./data');

function getTafsirAndTranslationForHolyQuran() {
    return data.tafsir;
}

function getTafsirAndTranslationForSura(suraId) {
    return data.tafsir.filter(ayah => ayah.sura == suraId);
}

function getTafsirAndTranslationForIndex(index) {
    return data.tafsir.filter(ayah => ayah.index == index);
}

function getTafsirAndTranslationForAyah(suraId, ayahId) {
    return data.tafsir.filter(ayah => ayah.sura == suraId && ayah.aya == ayahId);
}

function getTafsirAndTranslationForPage(page) {
    const indexesFromPage = data.indexes.filter(item => item.page == page).map(item => item.index);
    return data.tafsir.filter(ayah => indexesFromPage.indexOf(ayah.index)!=-1);
}

module.exports = {
    getTafsirAndTranslationForHolyQuran,
    getTafsirAndTranslationForSura,
    getTafsirAndTranslationForPage,
    getTafsirAndTranslationForIndex,
    getTafsirAndTranslationForAyah
}