# MobileAppExample

MobileAppExample on React Native mobiilirakendus, mis on loodud nii Androidi kui ka iOS platvormidele.

## Eeldused

Enne projekti käivitamist veenduge, et teil on installitud järgmised tööriistad:

- Node.js (versioon 16)
- npm või yarn
- React Native CLI
- Android Studio (Android SDK ja emulaator)
- Xcode (iOS arendamiseks)

## Projekti seadistamine

1. Kloonige repositoorium:
   ```bash
   git clone https://github.com/<kasutajanimi>/MobileAppExample.git
   cd MobileAppExample
   ```

2. Installige sõltuvused:
   ```bash
   npm install
   # või
   yarn install
   ```

3. iOS platvormi seadistamine:
   ```bash
   cd ios
   pod install
   cd ..
   ```

## Rakenduse käivitamine

### Android

1. Käivitage Android emulaator või ühendage füüsiline seade.
2. Käivitage rakendus:
   ```bash
   npm run android
   # või
   yarn android
   ```

### iOS

1. Käivitage iOS emulaator või ühendage füüsiline seade.
2. Käivitage rakendus:
   ```bash
   npm run ios
   # või
   yarn ios
   ```

## Skriptid

- `npm run android` või `yarn android`: Käivitab rakenduse Android seadmes või emulaatoris.
- `npm run ios` või `yarn ios`: Käivitab rakenduse iOS seadmes või emulaatoris.
- `npm run start` või `yarn start`: Käivitab React Native Metro bundleri.
- `npm run test` või `yarn test`: Käivitab Jest testid.
- `npm run lint` või `yarn lint`: Käivitab ESLint koodi analüüsi.

## Kataloogistruktuur

- `src/`: Rakenduse lähtekood.
  - `components/`: Üldised komponendid.
  - `screens/`: Rakenduse ekraanid.
  - `utils/`: Abifunktsioonid ja konstandid.
- `ios/`: iOS platvormi spetsiifilised failid.
- `android/`: Android platvormi spetsiifilised failid.
- `__tests__/`: Testfailid.

## Koodi stiil

Projekt kasutab ESLint ja Prettier koodi stiili kontrollimiseks ja vormindamiseks. Enne commit'i tegemist veenduge, et teie kood vastab nendele standarditele.

## Panustamine

Kui soovite projekti panustada, järgige neid samme:

1. Forkige repositoorium.
2. Looge uus haru:
   ```bash
   git checkout -b feature/teie-funktsioon
   ```
3. Tehke oma muudatused ja commit'id.
4. Pushige oma muudatused:
   ```bash
   git push origin feature/teie-funktsioon
   ```
5. Looge pull request GitHub'is.

## Litsents

See projekt on litsentseeritud MIT litsentsi alusel. Vaadake [LICENSE](./LICENSE) faili lisateabe saamiseks.
