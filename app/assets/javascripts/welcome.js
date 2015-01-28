var baseStr, enhStr, miscStr, totalStr, modStr;
var baseDex, enhDex, miscDex, totalDex, modDex;
var baseCon, enhCon, miscCon, totalCon, modCon;
var baseInt, enhInt, miscInt, totalInt, modInt;
var baseWis, enhWis, miscWis, totalWis, modWis;
var baseCha, enhCha, miscCha, totalCha, modCha;


$(document).ready(function(){
inputUpdate();
attributePointSpent(baseStr,baseDex,baseCon,baseInt,baseWis,baseCha);
  $('input').change(function () {
    
    inputUpdate();
    attributePointSpent(baseStr,baseDex,baseCon,baseInt,baseWis,baseCha);
  });
});


function inputUpdate() {
  firstName = $('#firstName').val();
  lastName = $('#lastName').val();

  playerclass = $('#class').val().toLowerCase();


  switch (playerclass) {
    case 'dwarf':
      $('#enhStr').val(0);
      $('#enhDex').val(0);
      $('#enhCon').val(2);
      $('#enhInt').val(0);
      $('#enhWis').val(2);
      $('#enhCha').val(-2);
      break;
    case 'elf':
      $('#enhStr').val(0);
      $('#enhDex').val(2);
      $('#enhCon').val(-2);
      $('#enhInt').val(2);
      $('#enhWis').val(0);
      $('#enhCha').val(0);
      break;
    case '':
      $('#enhStr').val(0);
      $('#enhDex').val(0);
      $('#enhCon').val(0);
      $('#enhInt').val(0);
      $('#enhWis').val(0);
      $('#enhCha').val(0);
      break;
  }



  baseStr = $('#baseStr').val();
  enhStr = $('#enhStr').val();
  miscStr = $('#miscStr').val();
  totalStr = attributeTotal(baseStr,enhStr,miscStr);
  modStr = attributeMod(totalStr);
  $('#totalStr').html(totalStr);
  $('#modStr').html(modStr);

  baseDex = $('#baseDex').val();
  enhDex = $('#enhDex').val();
  miscDex = $('#miscDex').val();
  totalDex = attributeTotal(baseDex,enhDex,miscDex);
  modDex = attributeMod(totalDex);
  $('#totalDex').html(totalDex);
  $('#modDex').html(modDex);

  baseCon = $('#baseCon').val();
  enhCon = $('#enhCon').val();
  miscCon = $('#miscCon').val();
  totalCon = attributeTotal(baseCon,enhCon,miscCon);
  modCon = attributeMod(totalCon);
  $('#totalCon').html(totalCon);
  $('#modCon').html(modCon);

  baseInt = $('#baseInt').val();
  enhInt = $('#enhInt').val();
  miscInt = $('#miscInt').val();
  totalInt = attributeTotal(baseInt,enhInt,miscInt);
  modInt = attributeMod(totalInt);
  $('#totalInt').html(totalInt);
  $('#modInt').html(modInt);

  baseWis = $('#baseWis').val();
  enhWis = $('#enhWis').val();
  miscWis = $('#miscWis').val();
  totalWis = attributeTotal(baseWis,enhWis,miscWis);
  modWis = attributeMod(totalWis);
  $('#totalWis').html(totalWis);
  $('#modWis').html(modWis);

  baseCha = $('#baseCha').val();
  enhCha = $('#enhCha').val();
  miscCha = $('#miscCha').val();
  totalCha = attributeTotal(baseCha,enhCha,miscCha);
  modCha = attributeMod(totalCha);
  $('#totalCha').html(totalCha);
  $('#modCha').html(modCha);
}

function attributeMod(total) {
  parseInt(total);
  var mod;
  if (total >= 10) {
    mod = Math.floor((total - 10) / 2);
  }
  else {
    mod = Math.ceil((total - 10) / 2);
  }
  return mod;
}

function attributeTotal(base,enh,misc) {
  return parseInt(base) + parseInt(enh) + parseInt(misc);
}

function attributePointSpent(str,dex,con,intel,wis,cha) {
  var attArray = [str,dex,con,intel,wis,cha];
  var attTotal = 0;

  for (var i = attArray.length - 1; i >= 0; i--) {
    switch (parseInt(attArray[i])) {
      case 7:
        attTotal += -4;
        break;
      case 8:
        attTotal += -2;
        break;
      case 9:
        attTotal += -1;
        break;
      case 10:
        attTotal += 0;
        break;
      case 11:
        attTotal += 1;
        break;
      case 12:
        attTotal += 2;
        break;
      case 13:
        attTotal += 3;
        break;
      case 14:
        attTotal += 5;
        break;
      case 15:
        attTotal += 7;
        break;
      case 16:
        attTotal += 10;
        break;
      case 17:
        attTotal += 13;
        break;
      case 18:
        attTotal += 17;
        break;
    }
  }

  $('#attributeTotal').html(attTotal);
}