# eslint-plugin-detect-no-assignment

Detect functions like map, filter and reduce without being assigned to a variable.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

or if you use `yarn`

```
$ yarn add eslint -D
```

Next, install `eslint-plugin-detect-no-assignment`:

```
$ npm install eslint-plugin-detect-no-assignment --save-dev
```

or

```
$ yarn add eslint-plugin-detect-no-assignment -D
```

## Usage

Add `detect-no-assignment` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["detect-no-assignment"],
  "rules": {
    "detect-no-assignment/detect-no-assignment": "error"
  }
}
```
