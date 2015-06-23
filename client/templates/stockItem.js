Template.stockItem.helpers({
  lessthanzero: function (s) {
    return s.value < 0;
  },
  parseValue: function(value) {
    return value.toFixed(2) + "%";
  },
  parseDelta: function(value) {
    return value.toFixed(2);
  }
});
