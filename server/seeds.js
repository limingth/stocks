Meteor.startup(function() {
  var stocks = [
    {
      code: '600230',
      name: '沧州大化',
      value: '-10%'
    },
    {
      code: '600231',
      name: '凌钢股份',
      value: '-5%'
    },
    {
      code: '600232',
      name: '金鹰股份',
      value: '-0.5%'
    },
    {
      code: '600233',
      name: '大杨创世',
      value: '0.5%'
    },
    {
      code: '600234',
      name: '山水文化',
      value: '5%'
    },
    {
      code: '600235',
      name: '民丰特纸',
      value: '10%'
    },
    {
      code: '600236',
      name: '桂冠电力',
      value: '5%'
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
