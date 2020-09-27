# memo

npx create-react-native-app で expo を選択して、with typescript でテンプレートを入れて、https://github.com/facebookexperimental/Recoil/pull/114#issuecomment-699077480 に従って recoil nightly を入れてる。

実機で確認するにはアプリストアから expo のアプリをまずインストールして、（Λ みたいなアイコンのやつ）、yarn start して出てきた QR コードをスキャンして開けばあとはよしなにやってくれる。ホットリロードも実機で効くので安心！

Recoil のサンプルは https://sbfl.net/blog/2020/05/17/react-experimental-recoil-usage/ を参考にしてる

# [TypeScript Example](https://www.typescriptlang.org/)

<p>
  <!-- iOS -->
  <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  <!-- Android -->
  <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
  <!-- Web -->
  <img alt="Supports Expo Web" longdesc="Supports Expo Web" src="https://img.shields.io/badge/web-4630EB.svg?style=flat-square&logo=GOOGLE-CHROME&labelColor=4285F4&logoColor=fff" />
</p>

```sh
npx create-react-native-app -t with-typescript
```

TypeScript is a superset of JavaScript which gives you static types and powerful tooling in Visual Studio Code including autocompletion and useful inline warnings for type errors.

## 🚀 How to use

#### Creating a new project

- Install the CLI: `npm i -g expo-cli`
- Create a project: `expo init --template expo-template-blank-typescript`
- `cd` into the project

### Adding TypeScript to existing projects

- Copy the `tsconfig.json` from this repo, or new typescript template
- Add typescript dependencies: `yarn add --dev @types/react @types/react-native @types/react-dom typescript`
- Rename files tpo TypeScript, `.tsx` for React components and `.ts` for plain typescript files

## 📝 Notes

- [Expo TypeScript guide](https://docs.expo.io/versions/latest/guides/typescript/)
