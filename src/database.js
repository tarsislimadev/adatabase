const { v4: uuid } = require('@brtmvdl/uuid')

const fs = require('fs')
const path = require('path')

const { DatabaseObject } = require('./object.js')

class Database {
  path = ''

  constructor(path = process.env.DATA_PATH) {
    this.path = path
  }

  in(dir = '') {
    return new Database(path.resolve(this.path, dir))
  }

  new(id = uuid()) {
    return new DatabaseObject(this, id)
  }

  list() {
    const { path: dir } = this
    return fs.readDirSync(dir).map((path) => new DatabaseObject(dir, path))
  }

  find(search = {}) {
    return this.list().find((_, ix) => ix === 0)
  }
}

module.exports = {
  Database,
}
