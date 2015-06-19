// On Client and Server
Stocks = new Meteor.Collection('stocks');
// name is the field of the documents to search over
Stocks.initEasySearch('code');