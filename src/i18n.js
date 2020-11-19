import i18n from 'i18next';
// import i18next-browser-languageDetector For Auto detect the user language
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next, reactI18nextModule } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      home: 'Home',
      missingPeople: 'Missing People',
      aboutUs: 'About Us',
      contactUs: 'Contact Us',
      search: 'Search',
      post: 'Post',
      signInWithGoogle: 'Sign In with Google',
      signOut: 'Sign Out',
      statisticsSeens: 'seens',
      statisticsFoundPeople: 'found people',
      statisticsNumberOfLost: 'lost',
      lostSomeone: 'Lost Someone?',
      searchHereToFind: 'Search here to find him/her',
      websiteBrief:
        'Our website is a service that connects lost people with anyone who is looking for them. We have two scenarios on our website of loss, the first type is a lost person and the other type is people who are found but missing their relatives or anyone that takes care of them.',
      findMeButton: 'Find Me',
      found: 'Found',
      lost: 'lost',
      location: 'Location',
      age: 'Age',
      moreDetails: 'More Details',
      moreMissingPeopleLink: 'More Missing People &rarr;',
      lostSince: 'Lost since',
    },
  },
  ar: {
    translation: {
      home: 'الرئيسية',
      missingPeople: 'المفقودون',
      aboutUs: 'حول الموقع',
      contactUs: 'اتصل بنا',
      search: 'Search',
      post: 'Post',
      signInWithGoogle: 'سجّل باستخدام جوجل',
      signOut: 'سجل الخروج',
      statisticsSeens: 'مشاهدة',
      statisticsFoundPeople: 'شخص وُجد',
      statisticsNumberOfLost: 'مفقود',
      lostSomeone: 'هل فقدت أحدهم؟',
      searchHereToFind: 'ابحث عنها لإيجاده/ا',
      websiteBrief:
        '.موقعنا هو خدمة تصل المفقودين مع أي أحد يبحث عنهم. لدينا سيناريوهين في موقعنا، النوع الأولي يكون الشخص مفقودًا، والنوع الثاني يكون الشخص باحثًا عن أهله أو من يعوله',
      findMeButton: 'ابحث عني',
      found: 'موجود',
      lost: 'مفقود',
      location: 'الموقع',
      age: 'العمر',
      moreDetails: 'مزيدًا من التفاصيل',
      moreMissingPeopleLink: '&larr; مزيدًا من المفقودين',
      lostSince: 'مفقود منذ',
    },
  },
};

i18n
  .use(initReactI18next)
  .use(HttpApi) // passes i18n down to react-i18next
  .use(LanguageDetector) // passes i18n down to react-i18next
  .init({
    supportedLngs: ['en', 'ar'],
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    preload: ['en'],

    // resources,
    // lng: 'en',
    // fallbackLng: 'en', // use en if detected lng is not available

    // keySeparator: false, // we do not use keys in form messages.welcome
  });

export default i18n;
