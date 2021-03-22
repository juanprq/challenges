class RequestCounter {
  pings = [];

  ping(time) {
    this.pings.push(time);
    const lowerBound = time - 3000;
    this.pings = this.pings.filter(p => p >= lowerBound);

    return this.pings.length;
  }
}

module.exports = RequestCounter;
