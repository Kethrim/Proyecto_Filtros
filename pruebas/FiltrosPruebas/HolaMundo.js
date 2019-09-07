//var chai = require('chai');
//
//var updateMsg = require('../../src/app/filtros/Filtros.js');
//
//	describe('updateMsg', function () {
//  before(function() {
//    return JSDOM.fromFile('index.html')
//      .then((dom) => {
//        global.window = dom.window;
//        global.document = window.document;
//      });
//  })
//  it ('updates the innerHTML of element with id "msg"', function () {
//    expect(document.getElementById('msg').innerHTML).to.equal('Hello, World!');
//    updateMsg('The new msg!');
//    expect(document.getElementById('msg').innerHTML).to.equal('The new msg!');
//  });
//});