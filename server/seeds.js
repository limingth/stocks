Meteor.startup(function() {
  var stocks = [
    {
      code: '600001',
      name: '机场',
      value: '-10%'
    },
    {
      code: '600002',
      name: '矿业',
      value: '-5%'
    },
    {
      code: '600003',
      name: '教育',
      value: '-0.5%'
    },
    {
      code: '600004',
      name: '科技',
      value: '0.5%'
    },
    {
      code: '600005',
      name: '食品',
      value: '5%'
    },
    {
      code: '600006',
      name: '团购',
      value: '10%'
    }

  ];


  if (Stocks.find({}).count() === 0) {
    _(stocks).each(function (stock) {
      Stocks.insert({
        code: stock.code,
        name: stock.name,
        value: stock.value,
      });
    });
  }
});
