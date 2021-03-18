class RequestCounter {
  pings = [];

  ping(time) {
    this.pings.push(time);

    return this.pings
      .filter(p => p >= time - 3000)
      .length;
  }
}

module.exports = RequestCounter;
