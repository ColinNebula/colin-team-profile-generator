function Engineer(name) {
    this.name = name;
  
    if (this.name === 'worker') {
      this.value = Math.floor(Math.random() * 10 + 30);
    } else {
      this.value = Math.floor(Math.random() * 5 + 7);
    }
  }
  
  module.exports = Engineer;