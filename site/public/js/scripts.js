var TO_ASCII_OFFSET = 65;

// **************************************
// Decimal number to Base Representation:
// **************************************

function decimalToBase(number, base){
  var difference = number;
  var answer = [];
  var exponent = 0;

  while (number >= Math.pow(base, exponent)) {
    answer.push(0);
    exponent++;
  }
  exponent -= 1;

  for (var i = 0; i <= exponent; i++){
    while ((difference - Math.pow(base, exponent - i)) >= 0){
      answer[i] += 1;
      difference = difference - Math.pow(base, exponent - i);
    }
    if (answer[i] > 9){
      answer[i] = String.fromCharCode(answer[i] - 10 + TO_ASCII_OFFSET)
    }
  }

  return number === 0 ? '0' : answer.join("");
};

// solution using recursion supporting base <= 9:
// (NOTE: ~~ operator is a faster substitute for Math.floor())
// var t = function f(n, s, base) {
//     return n === 0 ? s || "0" : f(~~(n / base), (n % base) + s, base);
// }
//
// invoke with: t(2, "", 2) = "10" for decimal 2 to binary form

// **************************************
// String to Base Representation:
// **************************************

var bases = {
  '1' : {max : '0', name : 'unary', icon : 'automobile'},
  '2' : {max : '1', name : 'binary', icon : 'bicycle'},
  '3' : {max : '2', name : 'trinary', icon : 'bus'},
  '4' : {max : '3', name : 'quaternary', icon : 'cab'},
  '5' : {max : '4', name : 'quinary', icon : 'ambulance'},
  '6' : {max : '5', name : 'senary', icon : 'fighter-jet'},
  '7' : {max : '6', name : 'septenary', icon : 'motorcycle'},
  '8' : {max : '7', name : 'octal', icon : 'plane'},
  '9' : {max : '8', name : 'nonary', icon : 'rocket'},
  '10' : {max : '9', name : 'decimal', icon : 'ship'},
  '11' : {max : 'A', name : 'undecimal', icon : 'space-shuttle'},
  '12' : {max : 'B', name : 'duodecimal', icon : 'subway'},
  '13' : {max : 'C', name : 'tridecimal', icon : 'taxi'},
  '14' : {max : 'D', name : 'tetradecimal', icon : 'train'},
  '15' : {max : 'E', name : 'pentadecimal', icon : 'truck'},
  '16' : {max : 'F', name : 'hexadecimal', icon : 'wheelchair'}
};

function BaseRepresentation(representation, base) {
  this.representation = representation;
  this.base = base;
}

String.prototype.toBase = function(base) {
  var baseRepresentations = [];
  for (var i = 0; i < this.length; i++) {
    var asciiRepresentation = this.charCodeAt(i);
    var baseRepresentation = decimalToBase(asciiRepresentation, base);
    if (base === 2) {
      baseRepresentation = '0' + baseRepresentation
    }
    baseRepresentations.push(baseRepresentation);
  }
  return baseRepresentations.join("");
}

$(function() {
  $("#submit-button").html('<i class="fa fa-hand-o-right"></i>');
  $("form#text-input-form").submit(function(event) {
    event.preventDefault();
    resetOutput();
    $("#submit-button").html('<i class="fa fa-thumbs-o-up"></i>');

    $("#text-to-convert").focus(function() {
      $("#submit-button").html('<i class="fa fa-hand-o-right"></i>');
    });

    var textToConvert = $("input#text-to-convert").val();
    var base = Number($("input#base").val());
    var based = new BaseRepresentation(textToConvert.toBase(base), base);

    $("#representation-header").text(capitalize(bases[base].name));
    $("#converted-text").append(based.representation);
    $("#result").fadeIn();
    appendGraphicalRepresentation($("#graphical-representation"), based);
  });
});

function resetOutput() {
  $(".output").html("");
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function appendGraphicalRepresentation(element, based) {
  element.html("");
  if (based.base <= Object.keys(bases).length) {
    element.append("<h3>Graphical Representation<br>" +
                     "<small>represented in transportation icons:</small>" +
                   "</h3>");
    based.representation.split("").forEach(function(char) {
      element.append('<i class="fa fa-' + getIcon(char) + '"></i>');
    });
  }
}

function getIcon(char) {
  for (var key in bases) {
    if (bases[key].max === char) {
      return bases[key].icon;
    }
  }
  return '';
}
