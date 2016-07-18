const expect = require('chai').expect;
const fs = require('fs');

const invertBitmap = require('../lib/invertBitmap');
const restoreBitmap = require('../lib/restoreBitmap');

describe('hooks', function() {
 var fileData = [];
 var restoredFileData = [];

 before(function(done) {
   fs.readFile('../test/palette-bitmap.bmp', function(err, data) {
     fileData.push(data.toString());
     if(err) console.log(err);
     done();
   });
 });

 it('should return an array', function(){
   expect(Array.isArray(current));
 });

 it('should return the same array', function(){
   expect(expected.length).to.eql(current.length);
   for (var i=0; i<expected.length; i++) {
     expect(expected[i]).to.eql(current[i]);
   }
 });
}); 
