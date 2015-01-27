$(document).ready(function(){
inputUpdate();
  $('input').change(function () {
    
    inputUpdate();
  });
});


function inputUpdate() {
  firstName = $('#firstName').val();
  lastName = $('#lastName').val();

  baseStr = $('#baseStr').val();
  enhStr = $('#enhStr').val();
  miscStr = $('#miscStr').val();
  totalStr = attributeTotal(baseStr,enhStr,miscStr);
  $('#totalStr').html(totalStr);
  $('#modStr').html(attributeMod(totalStr));

  baseDex = $('#baseDex').val();
  enhDex = $('#enhDex').val();
  miscDex = $('#miscDex').val();
  $('#totalDex').html(attributeTotal(baseDex,enhDex,miscDex));

  baseCon = $('#baseCon').val();
  enhCon = $('#enhCon').val();
  miscCon = $('#miscCon').val();
  $('#totalCon').html(attributeTotal(baseCon,enhCon,miscCon));

  baseInt = $('#baseInt').val();
  enhInt = $('#enhInt').val();
  miscInt = $('#miscInt').val();
  $('#totalInt').html(attributeTotal(baseInt,enhInt,miscInt));

  baseWis = $('#baseWis').val();
  enhWis = $('#enhWis').val();
  miscWis = $('#miscWis').val();
  $('#totalWis').html(attributeTotal(baseWis,enhWis,miscWis));

  baseCha = $('#baseCha').val();
  enhCha = $('#enhCha').val();
  miscCha = $('#miscCha').val();
  $('#totalCha').html(attributeTotal(baseCha,enhCha,miscCha));
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