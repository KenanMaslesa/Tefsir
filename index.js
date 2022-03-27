const data = require('./data');

function getTafsirAndTranslationForHolyQuran() {
    return data.tafsir;
}

function getTafsirAndTranslationForSura(suraId) {
    return data.tafsir.filter(ayah => ayah.sura == +suraId);
}

function getTafsirAndTranslationForIndex(index) {
    return data.tafsir.filter(ayah => ayah.index == +index);
}

function getTafsirAndTranslationForAyah(suraId, ayahId) {
    return data.tafsir.filter(ayah => ayah.sura == +suraId && ayah.ayaNumber == +ayahId);
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

module.exports = {
    getTafsirAndTranslationForHolyQuran,
    getTafsirAndTranslationForSura,
    getTafsirAndTranslationForPage,
    getTafsirAndTranslationForIndex,
    getTafsirAndTranslationForAyah,
    getTafsirAndTranslationForJuz,
    getTafsirAndTranslationForHizb
}