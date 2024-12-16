# [adatabase](https://www.npmjs.com/package/adatabase)

Easy Database Node.js library

[![npm](https://img.shields.io/npm-stat/dw/adatabase?label=NPM%20Weekly%20Downloads)](https://www.npmjs.com/package/adatabase) [![github/stars](https://img.shields.io/github/stars/adatabase?style=social)](https://img.shields.io/github/stars/adatabase?style=social) 

## social & donate

[Donate](https://link.mercadopago.com.br/brtmvdl) - [Telegram](https://t.me/+KRmg5MlqgMk0MTg5) - [Discord](https://discord.gg/2zWpWBgmPj)

## how to install

```bash
npm i adatabase
```

## how to use

```js
// index.js

import { Database } from 'adatabase'

const db = new Database({ type: 'fs', config: '/data' })

const users = db.in('users')

const user = users.new()

user.writeMany({ email: 'mail@mail.com', password: 'password' })

console.log('user', user.readManyString(['email', 'password']))
```

```sh
node index.js
```

## author

[@tarsislimadev](https://www.linkedin.com/in/tarsislimadev/)

## license

[MIT](./LICENSE)
