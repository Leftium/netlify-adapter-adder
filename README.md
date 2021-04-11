<h1 align="center">☕ Deploy SvelteKit to Netlify</h1>

## ❓ What is this?
This is an **experimental** command to run to add CoffeeScript to your SvelteKit project.

## 🧰 Adding to SvelteKit
You must start with a fresh copy of the official SvelteKit template, which is currently created by running this command:
```sh
npm init svelte@next
```

Once that is set up, run this command in your project directory to set up CoffeeScript:
```sh
npx svelte-add Leftium/netlify-adapter-adder
```

## 🛠 Usage
After the adder runs,
* You can deploy to Netlify.

* You can apply *another* [Svelte Adder](https://github.com/svelte-add/svelte-adders) to your project for more functionality. **Note:** some adders (specifically postcss and bulma) overwrite sveltePrepocess() options. Ensure the required options are set by either running coffeescript-adder last, or running it again after adding postcss/bulma (coffeescript-adder preserves the options).

## 😵 Help! I have a question
[Create an issue](https://github.com/Leftium/netlify-adapter-adder/new) and I'll try to help.

## 😡 Fix! There is something that needs improvement
[Create an issue](https://github.com/Leftium/netlify-adapter-adder/issues/new) or [pull request](https://github.com/Leftium/netlify-adapter-adder/pulls) and I'll try to fix.

These are new tools, so there are likely to be problems in this project. Thank you for bringing them to my attention or fixing them for me.

## 📄 License
MIT

---

*Repository preview image generated with [GitHub Social Preview](https://social-preview.pqt.dev/)*

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
