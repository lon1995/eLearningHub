
 // example procider
 export const cacheProvider = {
  get: (language, key) =>
    ((JSON.parse(localStorage.getItem('translations')) || {})[key] || {})[
      language
    ],
  set: (language, key, value) => {
    const existing = JSON.parse(localStorage.getItem('translations')) || {
      [key]: {},
    };
    existing[key] = {...existing[key], [language]: value};
    localStorage.setItem('translations', JSON.stringify(existing));
  },
 };