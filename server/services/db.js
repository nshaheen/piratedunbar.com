
module.exports.insert = (db, collection, dataSet, callback) => {
  if (collection.length) {
    let _collection = db.collection(collection)
    dataSet = dataSet || {}

    _collection.insertMany(dataSet, function(err, result) {
      assert.equal(err, null)
      callback(result)
    })
  }
}

module.exports.update = (db, collection, dataSet, where, callback) => {
  if (collection.length) {
    let _collection = db.collection(collection)
    dataSet = dataSet || []

    _collection.updateOne(dataSet, where, function(err, result) {
      assert.equal(err, null)
      callback(result)
    })
  }
}

module.exports.delete = (db, collection, callback) => {
  if (collection.length) {
    let _collection = db.collection(collection)

    _collection.deleteOne(dataSet, function(err, result) {
      assert.equal(err, null)
      callback(result)
    })
  }
}

module.exports.find = (db, collection, dataSet, callback) => {
  if (collection.length) {
    let _collection = db.collection(collection)

    _collection.find(dataSet).toArray(function(err, docs) {
      assert.equal(err, null)
      callback(docs)
    })
  }
}
