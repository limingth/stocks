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
    },
    {
      "code":'600000',
      "name":"浦发银行",
      "value": "0"
    },
    {
      "code":'600004',
      "name":"白云机场",
      "value": "0"
    },
    {
      "code":'600005',
      "name":"武钢股份",
      "value": "0"
    },
    {
      "code":'600006',
      "name":"东风汽车",
      "value": "0"
    },
    {
      "code":'600007',
      "name":"中国国贸",
      "value": "0"
    },
    {
      "code":'600008',
      "name":"首创股份",
      "value": "0"
    },
    {
      "code":'600009',
      "name":"上海机场",
      "value": "0"
    },
    {
      "code":'600010',
      "name":"包钢股份",
      "value": "0"
    },
    {
      "code":'600011',
      "name":"华能国际",
      "value": "0"
    },
    {
      "code":'600012',
      "name":"皖通高速",
      "value": "0"
    },
    {
      "code":'600015',
      "name":"华夏银行",
      "value": "0"
    },
    {
      "code":'600016',
      "name":"民生银行",
      "value": "0"
    },
    {
      "code":'600017',
      "name":"日照港",
      "value": "0"
    },
    {
      "code":'600018',
      "name":"上港集团",
      "value": "0"
    },
    {
      "code":'600019',
      "name":"宝钢股份",
      "value": "0"
    },
    {
      "code":'600020',
      "name":"中原高速",
      "value": "0"
    },
    {
      "code":'600021',
      "name":"上海电力",
      "value": "0"
    },
    {
      "code":'600022',
      "name":"山东钢铁",
      "value": "0"
    },
    {
      "code":'600023',
      "name":"浙能电力",
      "value": "0"
    },
    {
      "code":'600026',
      "name":"中海发展",
      "value": "0"
    },
    {
      "code":'600027',
      "name":"华电国际",
      "value": "0"
    },
    {
      "code":'600028',
      "name":"中国石化",
      "value": "0"
    },
    {
      "code":'600029',
      "name":"南方航空",
      "value": "0"
    },
    {
      "code":'600030',
      "name":"中信证券",
      "value": "0"
    },
    {
      "code":'600031',
      "name":"三一重工",
      "value": "0"
    },
    {
      "code":'600033',
      "name":"福建高速",
      "value": "0"
    },
    {
      "code":'600035',
      "name":"楚天高速",
      "value": "0"
    },
    {
      "code":'600036',
      "name":"招商银行",
      "value": "0"
    },
    {
      "code":'600037',
      "name":"歌华有线",
      "value": "0"
    },
    {
      "code":'600038',
      "name":"中直股份",
      "value": "0"
    },
    {
      "code":'600039',
      "name":"四川路桥",
      "value": "0"
    },
    {
      "code":'600048',
      "name":"保利地产",
      "value": "0"
    },
    {
      "code":'600050',
      "name":"中国联通",
      "value": "0"
    },
    {
      "code":'600051',
      "name":"宁波联合",
      "value": "0"
    },
    {
      "code":'600052',
      "name":"浙江广厦",
      "value": "0"
    },
    {
      "code":'600053',
      "name":"中江地产",
      "value": "0"
    },
    {
      "code":'600054',
      "name":"黄山旅游",
      "value": "0"
    },
    {
      "code":'600055',
      "name":"华润万东",
      "value": "0"
    },
    {
      "code":'600056',
      "name":"中国医药",
      "value": "0"
    },
    {
      "code":'600057',
      "name":"象屿股份",
      "value": "0"
    },
    {
      "code":'600058',
      "name":"五矿发展",
      "value": "0"
    },
    {
      "code":'600059',
      "name":"古越龙山",
      "value": "0"
    },
    {
      "code":'600060',
      "name":"海信电器",
      "value": "0"
    },
    {
      "code":'600061',
      "name":"中纺投资",
      "value": "0"
    },
    {
      "code":'600062',
      "name":"华润双鹤",
      "value": "0"
    },
    {
      "code":'600063',
      "name":"皖维高新",
      "value": "0"
    },
    {
      "code":'600064',
      "name":"南京高科",
      "value": "0"
    },
    {
      "code":'600066',
      "name":"宇通客车",
      "value": "0"
    },
    {
      "code":'600067',
      "name":"冠城大通",
      "value": "0"
    },
    {
      "code":'600068',
      "name":"葛洲坝",
      "value": "0"
    }

  ];


  if (Stocks.find({}).count() < 10) {
    Stocks.remove({});
    _(stocks).each(function (stock) {
      Stocks.insert({
        code: stock.code,
        name: stock.name,
        value: stock.value,
      });
    });
  }
});
