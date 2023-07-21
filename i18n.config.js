// import fs from 'fs';
// import YAML from 'yaml';
import localeEN from "@/locales/en.json";
import localeVI from "@/locales/vi.json";

// function readYamlFile(filePath) {
//   const file = fs.readFileSync(filePath, 'utf8');
//
//   return YAML.parse(file);
// }

export default {
  fallbackLocale: {
    vi: ['en'],
    default: ['en'],
  },
  silentTranslationWarn: true,
  messages: {
    // en: readYamlFile('./locales/en.yaml'),
    // vi: readYamlFile('./locales/vi.yaml'),
    en: localeEN,
    vi: localeVI,
  },
};
