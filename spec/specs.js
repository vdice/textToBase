describe('decimalToBase', function() {
  describe('base = 2', function() {
    var base = 2;
    var data = [{args: [0, base], expected: '0'},
               {args: [1, base], expected: '1'},
               {args: [2, base], expected: '10'},
               {args: [3, base], expected: '11'},
               {args: [7, base], expected: '111'},
               {args: [12, base], expected: '1100'},
               {args: [15, base], expected: '1111'},
               {args: [16, base], expected: '10000'},
               {args: [32, base], expected: '100000'}];

    data.forEach(function(obj) {
      it('returns \'' + obj.expected + '\' when the input is ' + obj.args, function(){
        expect(decimalToBase(obj.args[0], obj.args[1])).to.equal(obj.expected);
      });
    });
  });

  describe('base = 3', function() {
    var base = 3;
    var data = [{args: [0, base], expected: '0'},
               {args: [1, base], expected: '1'},
               {args: [2, base], expected: '2'},
               {args: [3, base], expected: '10'},
               {args: [7, base], expected: '21'},
               {args: [12, base], expected: '110'},
               {args: [15, base], expected: '120'},
               {args: [16, base], expected: '121'},
               {args: [26, base], expected: '222'},
               {args: [27, base], expected: '1000'}];

    data.forEach(function(obj) {
      it('returns \'' + obj.expected + '\' when the input is ' + obj.args, function(){
        expect(decimalToBase(obj.args[0], obj.args[1])).to.equal(obj.expected);
      });
    });
  });

  describe('base = 10', function() {
    var base = 10;
    var data = [{args: [0, base], expected: '0'},
               {args: [1, base], expected: '1'},
               {args: [2, base], expected: '2'},
               {args: [3, base], expected: '3'},
               {args: [7, base], expected: '7'},
               {args: [12, base], expected: '12'},
               {args: [15, base], expected: '15'},
               {args: [16, base], expected: '16'},
               {args: [26, base], expected: '26'},
               {args: [27, base], expected: '27'}];

    data.forEach(function(obj) {
      it('returns \'' + obj.expected + '\' when the input is ' + obj.args, function(){
        expect(decimalToBase(obj.args[0], obj.args[1])).to.equal(obj.expected);
      });
    });
  });

  describe('base = 16', function() {
    var base = 16;
    var data = [{args: [0, base], expected: '0'},
               {args: [1, base], expected: '1'},
               {args: [2, base], expected: '2'},
               {args: [3, base], expected: '3'},
               {args: [7, base], expected: '7'},
               {args: [12, base], expected: 'C'},
               {args: [15, base], expected: 'F'},
               {args: [16, base], expected: '10'},
               {args: [26, base], expected: '1A'},
               {args: [27, base], expected: '1B'},
               {args: [234, base], expected: 'EA'}];

    data.forEach(function(obj) {
      it('returns \'' + obj.expected + '\' when the input is ' + obj.args, function(){
        expect(decimalToBase(obj.args[0], obj.args[1])).to.equal(obj.expected);
      });
    });
  });
});

describe('String.prototype.toBase', function() {
  it('returns the correct binary translation for \'SISYPHUS\'', function() {
    expect('SISYPHUS'.toBase(2)).to.equal('0101001101001001010100110101100101010000010010000101010101010011');
    expect('sisyphus'.toBase(2)).to.equal('0111001101101001011100110111100101110000011010000111010101110011');
  });
  it('returns the correct hex translation for \'SISYPHUS\'', function() {
    expect('SISYPHUS'.toBase(16)).to.equal('5349535950485553');
    expect('sisyphus'.toBase(16)).to.equal('7369737970687573');
  });
});
