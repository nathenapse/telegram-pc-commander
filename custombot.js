module.exports = (bot) => {
  // async for each to do ForEach with sequencial callbacks
  bot.__proto__.asyncForEach = async(array, callback) => {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array)
    }
  }
  // chunk any string to specific number of character length
  bot.__proto__.chunkString = (str, len) => {
    var _size = Math.ceil(str.length / len),
      _ret = new Array(_size),
      _offset;

    for (var _i = 0; _i < _size; _i++) {
      _offset = _i * len;
      _ret[_i] = str.substring(_offset, _offset + len);
    }

    return _ret;
  }

  // add send very long string sequencially 
  bot.__proto__.sendLongMessage = (id, longMessage, option) => {
    let stringChunk = bot.chunkString(longMessage, 4000)
    return bot.asyncForEach(stringChunk, (message) => {
      return bot.sendMessage(id, message, option)
    })
  }
}