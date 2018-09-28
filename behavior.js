


// -----------------------------------
// Global Variables Go Here
var I = [//index [0]
         'http://munsellb.people.cofc.edu/img/pound.jpeg',
         //index [1]
         'http://munsellb.people.cofc.edu/img/euro.jpeg',
         //index [2]
         'http://munsellb.people.cofc.edu/img/kroon.jpeg',
         //index [3]
         'http://munsellb.people.cofc.edu/img/canadian.jpeg',
         //index [4]
         'http://munsellb.people.cofc.edu/img/yuan.jpeg'];

// -----------------------------------
// Convert Function Goes Here
 function convert() {
   var dollar;
   var selectElement;
   var exchangeRate;
   var index;
   var currency;
   dollar = document.getElementsByName("dollars")[0].value;
   selectElement = document.getElementById('currency');
   index = selectElement.selectedIndex;
   currency = selectElement.options[index].text;
   }

   updateExchange.call(dollar);
   updateExchange.call(exchangeRate);
   updateExchange.call(currency);
   updateExchange.call(index);

// -----------------------------------
// Calculate Function Goes Here
funciton calculate(dollar, exchangeRate) {

  conversion = dollar * exchangeRate;

  return conversion;

}


// -----------------------------------
// Functions that are given
// Do not modify

function updateImage( index ) {

    var url = 'url(' + I[index] + ')';
    document.getElementById('bill_img').style.backgroundImage=url;

}

function updateExchange( dollar, exchangeRate, currency, index ) {

    document.getElementsByName("exchange")[0].value = calculate( dollar, exchangeRate ).toPrecision(4) + ' ' + currency;

    updateImage( index );

}
