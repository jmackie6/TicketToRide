$(document).ready(function() {
      $("submit").click(players);
      
      
      $("calcOne").click(getTotalOne);
      $("calcTwo").click(getTotalTwo);
      $("calcThree").click(getTotalThree);
      $("calcFour").click(getTotalFour);
      $("calcFive").click(getTotalFive);
      
});

function players()
{
  $("#background").show();
  
  if($('#numPlayers').val() == "2") {
    $("#play1").show();
    $("#play2").show();
    $("#play3").hide();
    $("#play4").hide();
    $("#play5").hide();
  }
  else if($('#numPlayers').val() == "3") {
    $("#play1").show();
    $("#play2").show();
    $("#play3").show();
    $("#play4").hide();
    $("#play5").hide();
  }
  else if($('#numPlayers').val() == "4") {
    $("#play1").show();
    $("#play2").show();
    $("#play3").show();
    $("#play4").show();
    $("#play5").hide();
  }
  else if($('#numPlayers').val() == "5") {
    $("#play1").show();
    $("#play2").show();
    $("#play3").show();
    $("#play4").show();
    $("#play5").show();
  }
}

function getTotalOne()
{
  var total = parseInt($("#total1").val(),10);
  total = 0;
  

  var mission1 = parseInt($('#1mission1Value').find(":selected").val(), 10);
  if($("#1check1").is(':checked')) {
    total += mission1;
  } 
  else {
    total -= mission1;
  }
  
  var mission2 = parseInt($('#1mission2Value').find(":selected").val(), 10);
  if($("#1check2").is(':checked')) {
     total += mission2;
  } 
  else {
     total -= mission2;
  }
  
  var mission3 = parseInt($('#1mission3Value').find(":selected").val(), 10);
  if($("#1check3").is(':checked')) {
     total += mission3;
  } 
  else {
     total -= mission3;
  }
  
  var mission4 = parseInt($('#1mission4Value').find(":selected").val(), 10);
  if($("#1check4").is(':checked')) {
     total += mission4;
  } 
  else {
     total -= mission4;
  }
  
  var mission5 = parseInt($('#1mission5Value').find(":selected").val(), 10);
  if($("#1check5").is(':checked')) {
     total += mission5;
  } 
  else {
     total -= mission5;
  }
  
  var mission6 = parseInt($('#1mission6Value').find(":selected").val(), 10);
  if($("#1check6").is(':checked')) {
     total += mission6;
  } 
  else {
     total -= mission6;
  }
  
  var mission7 = parseInt($('#1mission7Value').find(":selected").val(), 10);
  if($("#1check7").is(':checked')) {
     total += mission7;
  } 
  else {
     total -= mission7;
  }
  
  var mission8 = parseInt($('#1mission8Value').find(":selected").val(), 10);
  if($("#1check8").is(':checked')) {
     total += mission8;
  } 
  else {
     total -= mission8;
  }
  
  var mission9 = parseInt($('#1mission9Value').find(":selected").val(), 10);
  if($("#1check9").is(':checked')) {
     total += mission9;
  } 
  else {
     total -= mission9;
  }
  
  var mission10 = parseInt($('#1mission10Value').find(":selected").val(), 10);
  if($("#1check10").is(':checked')) {
     total += mission10;
  } 
  else {
     total -= mission10;
  }
  
  var mission11 = parseInt($('#1mission11Value').find(":selected").val(), 10);
  if($("#1check11").is(':checked')) {
     total += mission11;
  } 
  else {
     total -= mission11;
  }
  
  var mission12 = parseInt($('#1mission12Value').find(":selected").val(), 10);
  if($("#1check12").is(':checked')) {
     total += mission12;
  } 
  else {
     total -= mission12;
  }
  
  var mission13 = parseInt($('#1mission13Value').find(":selected").val(), 10);
  if($("#1check13").is(':checked')) {
     total += mission13;
  } 
  else {
     total -= mission13;
  }
  
  var mission14 = parseInt($('#1mission14Value').find(":selected").val(), 10);
  if($("#1check14").is(':checked')) {
     total += mission14;
  } 
  else {
     total -= mission14;
  }
  
  var mission15 = parseInt($('#1mission15Value').find(":selected").val(), 10);
  if($("#1check15").is(':checked')) {
     total += mission15;
  } 
  else {
     total -= mission15;
  }
  
  
  if($("#globeTrotter1").is(':checked')) {
    total += 15;
  }
  else {
    total += 0;
  }
  
  if($("#longestTrain1").is(':checked')) {
    total += 10;
  }
  else {
    total += 0;
  }
  
  if($('#1track1').val() == "1"){
    total += 1;
    $("#total1").val(total);
  }
  else if($('#1track1').val() == "2"){
    total += 2;
    $("#total1").val(total);
  }
  else if($('#1track1').val() == "3"){
    total += 3;
    $("#total1").val(total);
  }
  else if($('#1track1').val() == "4"){
    total += 4;
    $("#total1").val(total);
  }
  else if($('#1track1').val() == "5"){
    total += 5;
    $("#total1").val(total);
  }
  else if($('#1track1').val() == "6"){
    total += 6;
    $("#total1").val(total);
  }
  else if($('#1track1').val() == "7"){
    total += 7;
    $("#total1").val(total);
  }
  else if($('#1track1').val() == "8"){
    total += 8;
    $("#total1").val(total);
  }
  else if($('#1track1').val() == "9"){
    total += 9;
    $("#total1").val(total);
  }
  else if($('#1track1').val() == "10"){
    total += 10;
    $("#total1").val(total);
  }
  else if($('#1track1').val() == "11"){
    total += 11;
    $("#total1").val(total);
  }
  else if($('#1track1').val() == "12"){
    total += 12;
    $("#total1").val(total);
  }
  else {
    total += 0;
    $("#total1").val(total);
  }
  
  
  if($('#2track1').val() == "0"){
    total += 0;
    $("#total1").val(total);
  }
  else if($('#2track1').val() == "2"){
    total += 2;
    $("#total1").val(total);
  }
  else if($('#2track1').val() == "4"){
    total += 4;
    $("#total1").val(total);
  }
  else if($('#2track1').val() == "6"){
    total += 6;
    $("#total1").val(total);
  }
  else if($('#2track1').val() == "8"){
    total += 8;
    $("#total1").val(total);
  }
  else if($('#2track1').val() == "10"){
    total += 10;
    $("#total1").val(total);
  }
  else if($('#2track1').val() == "12"){
    total += 12;
    $("#total1").val(total);
  }
  else if($('#2track1').val() == "14"){
    total += 14;
    $("#total1").val(total);
  }
  else if($('#2track1').val() == "16"){
    total += 16;
    $("#total1").val(total);
  }
  else if($('#2track1').val() == "18"){
    total += 18;
    $("#total1").val(total);
  }
  else if($('#2track1').val() == "20"){
    total += 20;
    $("#total1").val(total);
  }
  else if($('2track1').val() == "22"){
    total += 22;
    $("#total1").val(total);
  }
  else {
    total += 24;
    $("#total1").val(total);
  }
  
  
  
  if($('#3track1').val() == "1"){
    total += 4;
    $("#total1").val(total);
  }
  else if($('#3track1').val() == "2"){
    total += 8;
    $("#total1").val(total);
  }
  else if($('#3track1').val() == "3"){
    total += 12;
    $("#total1").val(total);
  }
  else if($('#3track1').val() == "4"){
    total += 16;
    $("#total1").val(total);
  }
  else if($('#3track1').val() == "5"){
    total += 20;
    $("#total1").val(total);
  }
  else if($('#3track1').val() == "6"){
    total += 24;
    $("#total1").val(total);
  }
  else if($('#3track1').val() == "7"){
    total += 28;
    $("#total1").val(total);
  }
  else if($('#3track1').val() == "8"){
    total += 32;
    $("#total1").val(total);
  }
  else if($('#3track1').val() == "9"){
    total += 36;
    $("#total1").val(total);
  }
  else if($('#3track1').val() == "10"){
    total += 40;
    $("#total1").val(total);
  }
  else if($('#3track1').val() == "11"){
    total += 44;
    $("#total1").val(total);
  }
  else if($('#3track1').val() == "12"){
    total += 48;
    $("#total1").val(total);
  }
  else {
    total += 0;
    $("#total1").val(total);
  }
  
  
  
  if($('#4track1').val() == "1"){
    total += 7;
    $("#total1").val(total);
  }
  else if($('#4track1').val() == "2"){
    total += 14;
    $("#total1").val(total);
  }
  else if($('#4track1').val() == "3"){
    total += 21;
    $("#total1").val(total);
  }
  else if($('#4track1').val() == "4"){
    total += 28;
    $("#total1").val(total);
  }
  else if($('#4track1').val() == "5"){
    total += 35;
    $("#total1").val(total);
  }
  else if($('#4track1').val() == "6"){
    total += 42;
    $("#total1").val(total);
  }
  else if($('#4track1').val() == "7"){
    total += 49;
    $("#total1").val(total);
  }
  else if($('#4track1').val() == "8"){
    total += 56;
    $("#total1").val(total);
  }
  else if($('#4track1').val() == "9"){
    total += 63;
    $("#total1").val(total);
  }
  else if($('#4track1').val() == "10"){
    total += 70;
    $("#total1").val(total);
  }
  else if($('#4track1').val() == "11"){
    total += 77;
    $("#total1").val(total);
  }
  else if($('#4track1').val() == "12"){
    total += 84;
    $("#total1").val(total);
  }
  else {
    total += 0;
    $("#total1").val(total);
  }
  
  
  if($('#5track1').val() == "1"){
    total += 10;
    $("#total1").val(total);
  }
  else if($('#5track1').val() == "2"){
    total += 20;
    $("#total1").val(total);
  }
  else if($('#5track1').val() == "3"){
    total += 30;
    $("#total1").val(total);
  }
  else if($('#5track1').val() == "4"){
    total += 40;
    $("#total1").val(total);
  }
  else if($('#5track1').val() == "5"){
    total += 50;
    $("#total1").val(total);
  }
  else if($('#5track1').val() == "6"){
    total += 60;
    $("#total1").val(total);
  }
  else if($('#5track1').val() == "7"){
    total += 70;
    $("#total1").val(total);
  }
  else if($('#5track1').val() == "8"){
    total += 80;
    $("#total1").val(total);
  }
  else if($('#5track1').val() == "9"){
    total += 90;
    $("#total1").val(total);
  }
  else if($('#5track1').val() == "10"){
    total += 100;
    $("#total1").val(total);
  }
  else {
    total += 0;
    $("#total1").val(total);
  }
  
  
  if($('#6track1').val() == "1"){
    total += 15;
    $("#total1").val(total);
  }
  else if($('#6track1').val() == "2"){
    total += 30;
    $("#total1").val(total);
  }
  else if($('#6track1').val() == "3"){
    total += 45;
    $("#total1").val(total);
  }
  else if($('#6track1').val() == "4"){
    total += 60;
    $("#total1").val(total);
  }
  else if($('#6track1').val() == "5"){
    total += 75;
    $("#total1").val(total);
  }
  else if($('#6track1').val() == "6"){
    total += 90;
    $("#total1").val(total);
  }
  else if($('#6track1').val() == "7"){
    total += 105;
    $("#total1").val(total);
  }
  else if($('#6track1').val() == "8"){
    total += 120;
    $("#total1").val(total);
  }
  else if($('#6track1').val() == "9"){
    total += 135;
    $("#total1").val(total);
  }
  else if($('#6track1').val() == "10"){
    total += 150;
    $("#total1").val(total);
  }
  else {
    total += 0;
    $("#total1").val(total);
  }
  
  
  if($('#7track1').val() == "1"){
    total += 18;
    $("#total1").val(total);
  }
  else if($('#7track1').val() == "2"){
    total += 36;
    $("#total1").val(total);
  }
  else if($('#7track1').val() == "3"){
    total += 54;
    $("#total1").val(total);
  }
  else if($('#7track1').val() == "4"){
    total += 72;
    $("#total1").val(total);
  }
  else if($('#7track1').val() == "5"){
    total += 90;
    $("#total1").val(total);
  }
  else if($('#7track1').val() == "6"){
    total += 108;
    $("#total1").val(total);
  }
  else if($('#7track1').val() == "7"){
    total += 126;
    $("#total1").val(total);
  }
  else if($('#7track1').val() == "8"){
    total += 144;
    $("#total1").val(total);
  }
  else if($('#7track1').val() == "9"){
    total += 162;
    $("#total1").val(total);
  }
  else if($('#7track1').val() == "10"){
    total += 180;
    $("#total1").val(total);
  }
  else {
    total += 0;
    $("#total1").val(total);
  }
  
  
  if($('#8track1').val() == "1"){
    total += 21;
    $("#total1").val(total);
  }
  else if($('#8track1').val() == "2"){
    total += 42;
    $("#total1").val(total);
  }
  else if($('#8track1').val() == "3"){
    total += 63;
    $("#total1").val(total);
  }
  else if($('#8track1').val() == "4"){
    total += 84;
    $("#total1").val(total);
  }
  else if($('#8track1').val() == "5"){
    total += 105;
    $("#total1").val(total);
  }
  else if($('#8track1').val() == "6"){
    total += 126;
    $("#total1").val(total);
  }
  else if($('#8track1').val() == "7"){
    total += 147;
    $("#total1").val(total);
  }
  else if($('#8track1').val() == "8"){
    total += 168;
    $("#total1").val(total);
  }
  else if($('#8track1').val() == "9"){
    total += 189;
    $("#total1").val(total);
  }
  else if($('#8track1').val() == "10"){
    total += 210;
    $("#total1").val(total);
  }
  else {
    total += 0;
    $("#total1").val(total);
  }
  
}





function getTotalTwo()
{
  
  var total = parseInt($("#total2").val(),10);
  total = 0;

  var mission1 = parseInt($('#2mission1Value').find(":selected").val(), 10);
  if($("#2check1").is(':checked')) {
    total += mission1;
  } 
  else {
    total -= mission1;
  }
  
  var mission2 = parseInt($('#2mission2Value').find(":selected").val(), 10);
  if($("#2check2").is(':checked')) {
     total += mission2;
  } 
  else {
     total -= mission2;
  }
  
  var mission3 = parseInt($('#2mission3Value').find(":selected").val(), 10);
  if($("#2check3").is(':checked')) {
     total += mission3;
  } 
  else {
     total -= mission3;
  }
  
  var mission4 = parseInt($('#2mission4Value').find(":selected").val(), 10);
  if($("#2check4").is(':checked')) {
     total += mission4;
  } 
  else {
     total -= mission4;
  }
  
  var mission5 = parseInt($('#2mission5Value').find(":selected").val(), 10);
  if($("#2check5").is(':checked')) {
     total += mission5;
  } 
  else {
     total -= mission5;
  }
  
  var mission6 = parseInt($('#2mission6Value').find(":selected").val(), 10);
  if($("#2check6").is(':checked')) {
     total += mission6;
  } 
  else {
     total -= mission6;
  }
  
  var mission7 = parseInt($('#2mission7Value').find(":selected").val(), 10);
  if($("#2check7").is(':checked')) {
     total += mission7;
  } 
  else {
     total -= mission7;
  }
  
  var mission8 = parseInt($('#2mission8Value').find(":selected").val(), 10);
  if($("#2check8").is(':checked')) {
     total += mission8;
  } 
  else {
     total -= mission8;
  }
  
  var mission9 = parseInt($('#2mission9Value').find(":selected").val(), 10);
  if($("#2check9").is(':checked')) {
     total += mission9;
  } 
  else {
     total -= mission9;
  }
  
  var mission10 = parseInt($('#2mission10Value').find(":selected").val(), 10);
  if($("#2check10").is(':checked')) {
     total += mission10;
  } 
  else {
     total -= mission10;
  }
  
  var mission11 = parseInt($('#2mission11Value').find(":selected").val(), 10);
  if($("#2check11").is(':checked')) {
     total += mission11;
  } 
  else {
     total -= mission11;
  }
  
  var mission12 = parseInt($('#2mission12Value').find(":selected").val(), 10);
  if($("#2check12").is(':checked')) {
     total += mission12;
  } 
  else {
     total -= mission12;
  }
  
  var mission13 = parseInt($('#2mission13Value').find(":selected").val(), 10);
  if($("#2check13").is(':checked')) {
     total += mission13;
  } 
  else {
     total -= mission13;
  }
  
  var mission14 = parseInt($('#2mission14Value').find(":selected").val(), 10);
  if($("#2check14").is(':checked')) {
     total += mission14;
  } 
  else {
     total -= mission14;
  }
  
  var mission15 = parseInt($('#2mission15Value').find(":selected").val(), 10);
  if($("#2check15").is(':checked')) {
     total += mission15;
  } 
  else {
     total -= mission15;
  }


  
  if($("#globeTrotter2").is(':checked')) {
    total += 15;
  }
  else {
    total += 0;
  }
  
  if($("#longestTrain2").is(':checked')) {
    total += 10;
  }
  else {
    total += 0;
  }
  
  if($('#1track2').val() == "1"){
    total += 1;
    $("#total2").val(total);
  }
  else if($('#1track2').val() == "2"){
    total += 2;
    $("#total2").val(total);
  }
  else if($('#1track2').val() == "3"){
    total += 3;
    $("#total2").val(total);
  }
  else if($('#1track2').val() == "4"){
    total += 4;
    $("#total2").val(total);
  }
  else if($('#1track2').val() == "5"){
    total += 5;
    $("#total2").val(total);
  }
  else if($('#1track2').val() == "6"){
    total += 6;
    $("#total2").val(total);
  }
  else if($('#1track2').val() == "7"){
    total += 7;
    $("#total2").val(total);
  }
  else if($('#1track2').val() == "8"){
    total += 8;
    $("#total2").val(total);
  }
  else if($('#1track2').val() == "9"){
    total += 9;
    $("#total2").val(total);
  }
  else if($('#1track2').val() == "10"){
    total += 10;
    $("#total2").val(total);
  }
  else if($('#1track2').val() == "11"){
    total += 11;
    $("#total2").val(total);
  }
  else if($('#1track2').val() == "12"){
    total += 12;
    $("#total2").val(total);
  }
  else {
    total += 0;
    $("#total2").val(total);
  }
  
  
  if($('#2track2').val() == "0"){
    total += 0;
    $("#total2").val(total);
  }
  else if($('#2track2').val() == "2"){
    total += 2;
    $("#total2").val(total);
  }
  else if($('#2track2').val() == "4"){
    total += 4;
    $("#total2").val(total);
  }
  else if($('#2track2').val() == "6"){
    total += 6;
    $("#total2").val(total);
  }
  else if($('#2track2').val() == "8"){
    total += 8;
    $("#total2").val(total);
  }
  else if($('#2track2').val() == "10"){
    total += 10;
    $("#total2").val(total);
  }
  else if($('#2track2').val() == "12"){
    total += 12;
    $("#total2").val(total);
  }
  else if($('#2track2').val() == "14"){
    total += 14;
    $("#total2").val(total);
  }
  else if($('#2track2').val() == "16"){
    total += 16;
    $("#total2").val(total);
  }
  else if($('#2track2').val() == "18"){
    total += 18;
    $("#total2").val(total);
  }
  else if($('#2track2').val() == "20"){
    total += 20;
    $("#total2").val(total);
  }
  else if($('21track2').val() == "22"){
    total += 22;
    $("#total2").val(total);
  }
  else if($('21track2').val() == "24"){
    total += 24;
    $("#total2").val(total);
  }
  else {
    total += 0;
    $("#total2").val(total);
  }
  
  
  
  if($('#3track2').val() == "1"){
    total += 4;
    $("#total2").val(total);
  }
  else if($('#3track2').val() == "2"){
    total += 8;
    $("#total2").val(total);
  }
  else if($('#3track2').val() == "3"){
    total += 12;
    $("#total2").val(total);
  }
  else if($('#3track2').val() == "4"){
    total += 16;
    $("#total2").val(total);
  }
  else if($('#3track2').val() == "5"){
    total += 20;
    $("#total2").val(total);
  }
  else if($('#3track2').val() == "6"){
    total += 24;
    $("#total2").val(total);
  }
  else if($('#3track2').val() == "7"){
    total += 28;
    $("#total2").val(total);
  }
  else if($('#3track2').val() == "8"){
    total += 32;
    $("#total2").val(total);
  }
  else if($('#3track2').val() == "9"){
    total += 36;
    $("#total2").val(total);
  }
  else if($('#3track2').val() == "10"){
    total += 40;
    $("#total2").val(total);
  }
  else if($('#3track2').val() == "11"){
    total += 44;
    $("#total2").val(total);
  }
  else if($('#3track2').val() == "12"){
    total += 48;
    $("#total2").val(total);
  }
  else {
    total += 0;
    $("#total2").val(total);
  }
  
  
  
  if($('#4track2').val() == "1"){
    total += 7;
    $("#total2").val(total);
  }
  else if($('#4track2').val() == "2"){
    total += 14;
    $("#total2").val(total);
  }
  else if($('#4track2').val() == "3"){
    total += 21;
    $("#total2").val(total);
  }
  else if($('#4track2').val() == "4"){
    total += 28;
    $("#total2").val(total);
  }
  else if($('#4track2').val() == "5"){
    total += 35;
    $("#total2").val(total);
  }
  else if($('#4track2').val() == "6"){
    total += 42;
    $("#total2").val(total);
  }
  else if($('#4track2').val() == "7"){
    total += 49;
    $("#total2").val(total);
  }
  else if($('#4track2').val() == "8"){
    total += 56;
    $("#total2").val(total);
  }
  else if($('#4track2').val() == "9"){
    total += 63;
    $("#total2").val(total);
  }
  else if($('#4track2').val() == "10"){
    total += 70;
    $("#total2").val(total);
  }
  else if($('#4track2').val() == "11"){
    total += 77;
    $("#total2").val(total);
  }
  else if($('#4track2').val() == "12"){
    total += 84;
    $("#total2").val(total);
  }
  else {
    total += 0;
    $("#total2").val(total);
  }
  
  
  if($('#5track2').val() == "1"){
    total += 10;
    $("#total2").val(total);
  }
  else if($('#5track2').val() == "2"){
    total += 20;
    $("#total2").val(total);
  }
  else if($('#5track2').val() == "3"){
    total += 30;
    $("#total2").val(total);
  }
  else if($('#5track2').val() == "4"){
    total += 40;
    $("#total2").val(total);
  }
  else if($('#5track2').val() == "5"){
    total += 50;
    $("#total2").val(total);
  }
  else if($('#5track2').val() == "6"){
    total += 60;
    $("#total2").val(total);
  }
  else if($('#5track2').val() == "7"){
    total += 70;
    $("#total2").val(total);
  }
  else if($('#5track2').val() == "8"){
    total += 80;
    $("#total2").val(total);
  }
  else if($('#5track2').val() == "9"){
    total += 90;
    $("#total2").val(total);
  }
  else if($('#5track2').val() == "10"){
    total += 100;
    $("#total2").val(total);
  }
  else {
    total += 0;
    $("#total2").val(total);
  }
  
  
  if($('#6track2').val() == "1"){
    total += 15;
    $("#total2").val(total);
  }
  else if($('#6track2').val() == "2"){
    total += 30;
    $("#total2").val(total);
  }
  else if($('#6track2').val() == "3"){
    total += 45;
    $("#total2").val(total);
  }
  else if($('#6track2').val() == "4"){
    total += 60;
    $("#total2").val(total);
  }
  else if($('#6track2').val() == "5"){
    total += 75;
    $("#total2").val(total);
  }
  else if($('#6track2').val() == "6"){
    total += 90;
    $("#total2").val(total);
  }
  else if($('#6track2').val() == "7"){
    total += 105;
    $("#total2").val(total);
  }
  else if($('#6track2').val() == "8"){
    total += 120;
    $("#total2").val(total);
  }
  else if($('#6track2').val() == "9"){
    total += 135;
    $("#total2").val(total);
  }
  else if($('#6track2').val() == "10"){
    total += 150;
    $("#total2").val(total);
  }
  else {
    total += 0;
    $("#total2").val(total);
  }
  
  
  if($('#7track2').val() == "1"){
    total += 18;
    $("#total2").val(total);
  }
  else if($('#7track2').val() == "2"){
    total += 36;
    $("#total2").val(total);
  }
  else if($('#7track2').val() == "3"){
    total += 54;
    $("#total2").val(total);
  }
  else if($('#7track2').val() == "4"){
    total += 72;
    $("#total2").val(total);
  }
  else if($('#7track2').val() == "5"){
    total += 90;
    $("#total2").val(total);
  }
  else if($('#7track2').val() == "6"){
    total += 108;
    $("#total2").val(total);
  }
  else if($('#7track2').val() == "7"){
    total += 126;
    $("#total2").val(total);
  }
  else if($('#7track2').val() == "8"){
    total += 144;
    $("#total2").val(total);
  }
  else if($('#7track2').val() == "9"){
    total += 162;
    $("#total2").val(total);
  }
  else if($('#7track2').val() == "10"){
    total += 180;
    $("#total2").val(total);
  }
  else {
    total += 0;
    $("#total2").val(total);
  }
  
  
  if($('#8track2').val() == "1"){
    total += 21;
    $("#total2").val(total);
  }
  else if($('#8track2').val() == "2"){
    total += 42;
    $("#total2").val(total);
  }
  else if($('#8track2').val() == "3"){
    total += 63;
    $("#total2").val(total);
  }
  else if($('#8track2').val() == "4"){
    total += 84;
    $("#total2").val(total);
  }
  else if($('#8track2').val() == "5"){
    total += 105;
    $("#total2").val(total);
  }
  else if($('#8track2').val() == "6"){
    total += 126;
    $("#total2").val(total);
  }
  else if($('#8track2').val() == "7"){
    total += 147;
    $("#total2").val(total);
  }
  else if($('#8track2').val() == "8"){
    total += 168;
    $("#total2").val(total);
  }
  else if($('#8track2').val() == "9"){
    total += 189;
    $("#total2").val(total);
  }
  else if($('#8track2').val() == "10"){
    total += 210;
    $("#total2").val(total);
  }
  else {
    total += 0;
    $("#total2").val(total);
  }
  
  
}


function getTotalThree()
{
  var total = parseInt($("#total3").val(),10);
  total = 0;

  var mission1 = parseInt($('#3mission1Value').find(":selected").val(), 10);
  if($("#3check1").is(':checked')) {
    total += mission1;
  } 
  else {
    total -= mission1;
  }
  
  var mission2 = parseInt($('#3mission2Value').find(":selected").val(), 10);
  if($("#3check2").is(':checked')) {
     total += mission2;
  } 
  else {
     total -= mission2;
  }
  
  var mission3 = parseInt($('#3mission3Value').find(":selected").val(), 10);
  if($("#3check3").is(':checked')) {
     total += mission3;
  } 
  else {
     total -= mission3;
  }
  
  var mission4 = parseInt($('#3mission4Value').find(":selected").val(), 10);
  if($("#3check4").is(':checked')) {
     total += mission4;
  } 
  else {
     total -= mission4;
  }
  
  var mission5 = parseInt($('#3mission5Value').find(":selected").val(), 10);
  if($("#3check5").is(':checked')) {
     total += mission5;
  } 
  else {
     total -= mission5;
  }
  
  var mission6 = parseInt($('#3mission6Value').find(":selected").val(), 10);
  if($("#3check6").is(':checked')) {
     total += mission6;
  } 
  else {
     total -= mission6;
  }
  
  var mission7 = parseInt($('#3mission7Value').find(":selected").val(), 10);
  if($("#3check7").is(':checked')) {
     total += mission7;
  } 
  else {
     total -= mission7;
  }
  
  var mission8 = parseInt($('#3mission8Value').find(":selected").val(), 10);
  if($("#3check8").is(':checked')) {
     total += mission8;
  } 
  else {
     total -= mission8;
  }
  
  var mission9 = parseInt($('#3mission9Value').find(":selected").val(), 10);
  if($("#3check9").is(':checked')) {
     total += mission9;
  } 
  else {
     total -= mission9;
  }
  
  var mission10 = parseInt($('#3mission10Value').find(":selected").val(), 10);
  if($("#3check10").is(':checked')) {
     total += mission10;
  } 
  else {
     total -= mission10;
  }
  
  var mission11 = parseInt($('#3mission11Value').find(":selected").val(), 10);
  if($("#3check11").is(':checked')) {
     total += mission11;
  } 
  else {
     total -= mission11;
  }
  
  var mission12 = parseInt($('#3mission12Value').find(":selected").val(), 10);
  if($("#3check12").is(':checked')) {
     total += mission12;
  } 
  else {
     total -= mission12;
  }
  
  var mission13 = parseInt($('#3mission13Value').find(":selected").val(), 10);
  if($("#3check13").is(':checked')) {
     total += mission13;
  } 
  else {
     total -= mission13;
  }
  
  var mission14 = parseInt($('#3mission14Value').find(":selected").val(), 10);
  if($("#3check14").is(':checked')) {
     total += mission14;
  } 
  else {
     total -= mission14;
  }
  
  var mission15 = parseInt($('#3mission15Value').find(":selected").val(), 10);
  if($("#3check15").is(':checked')) {
     total += mission15;
  } 
  else {
     total -= mission15;
  }
  
  if($("#globeTrotter3").is(':checked')) {
    total += 15;
  }
  else {
    total += 0;
  }
  
  if($("#longestTrain3").is(':checked')) {
    total += 10;
  }
  else {
    total += 0;
  }
  
  if($('#1track3').val() == "1"){
    total += 1;
    $("#total3").val(total);
  }
  else if($('#1track3').val() == "2"){
    total += 2;
    $("#total3").val(total);
  }
  else if($('#1track3').val() == "3"){
    total += 3;
    $("#total3").val(total);
  }
  else if($('#1track3').val() == "4"){
    total += 4;
    $("#total3").val(total);
  }
  else if($('#1track3').val() == "5"){
    total += 5;
    $("#total3").val(total);
  }
  else if($('#1track3').val() == "6"){
    total += 6;
    $("#total3").val(total);
  }
  else if($('#1track3').val() == "7"){
    total += 7;
    $("#total3").val(total);
  }
  else if($('#1track3').val() == "8"){
    total += 8;
    $("#total3").val(total);
  }
  else if($('#1track3').val() == "9"){
    total += 9;
    $("#total3").val(total);
  }
  else if($('#1track3').val() == "10"){
    total += 10;
    $("#total3").val(total);
  }
  else if($('#1track3').val() == "11"){
    total += 11;
    $("#total3").val(total);
  }
  else if($('#1track3').val() == "12"){
    total += 12;
    $("#total3").val(total);
  }
  else {
    total += 0;
    $("#total3").val(total);
  }
  
  
  if($('#2track3').val() == "0"){
    total += 0;
    $("#total3").val(total);
  }
  else if($('#2track3').val() == "2"){
    total += 2;
    $("#total3").val(total);
  }
  else if($('#2track3').val() == "4"){
    total += 4;
    $("#total3").val(total);
  }
  else if($('#2track3').val() == "6"){
    total += 6;
    $("#total3").val(total);
  }
  else if($('#2track3').val() == "8"){
    total += 8;
    $("#total3").val(total);
  }
  else if($('#2track3').val() == "10"){
    total += 10;
    $("#total3").val(total);
  }
  else if($('#2track3').val() == "12"){
    total += 12;
    $("#total3").val(total);
  }
  else if($('#2track3').val() == "14"){
    total += 14;
    $("#total3").val(total);
  }
  else if($('#2track3').val() == "16"){
    total += 16;
    $("#total3").val(total);
  }
  else if($('#2track3').val() == "18"){
    total += 18;
    $("#total3").val(total);
  }
  else if($('#2track3').val() == "20"){
    total += 20;
    $("#total3").val(total);
  }
  else if($('#2track3').val() == "22"){
    total += 22;
    $("#total3").val(total);
  }
  else {
    total += 24;
    $("#total3").val(total);
  }
  
  
  
  if($('#3track3').val() == "1"){
    total += 4;
    $("#total3").val(total);
  }
  else if($('#3track3').val() == "2"){
    total += 8;
    $("#total3").val(total);
  }
  else if($('#3track3').val() == "3"){
    total += 12;
    $("#total3").val(total);
  }
  else if($('#3track3').val() == "4"){
    total += 16;
    $("#total3").val(total);
  }
  else if($('#3track3').val() == "5"){
    total += 20;
    $("#total3").val(total);
  }
  else if($('#3track3').val() == "6"){
    total += 24;
    $("#total3").val(total);
  }
  else if($('#3track3').val() == "7"){
    total += 28;
    $("#total3").val(total);
  }
  else if($('#3track3').val() == "8"){
    total += 32;
    $("#total3").val(total);
  }
  else if($('#3track3').val() == "9"){
    total += 36;
    $("#total3").val(total);
  }
  else if($('#3track3').val() == "10"){
    total += 40;
    $("#total3").val(total);
  }
  else if($('#3track3').val() == "11"){
    total += 44;
    $("#total3").val(total);
  }
  else if($('#3track3').val() == "12"){
    total += 48;
    $("#total3").val(total);
  }
  else {
    total += 0;
    $("#total3").val(total);
  }
  
  
  
  if($('#4track3').val() == "1"){
    total += 7;
    $("#total3").val(total);
  }
  else if($('#4track3').val() == "2"){
    total += 14;
    $("#total3").val(total);
  }
  else if($('#4track3').val() == "3"){
    total += 21;
    $("#total3").val(total);
  }
  else if($('#4track3').val() == "4"){
    total += 28;
    $("#total3").val(total);
  }
  else if($('#4track3').val() == "5"){
    total += 35;
    $("#total3").val(total);
  }
  else if($('#4track3').val() == "6"){
    total += 42;
    $("#total3").val(total);
  }
  else if($('#4track3').val() == "7"){
    total += 49;
    $("#total3").val(total);
  }
  else if($('#4track3').val() == "8"){
    total += 56;
    $("#total3").val(total);
  }
  else if($('#4track3').val() == "9"){
    total += 63;
    $("#total3").val(total);
  }
  else if($('#4track3').val() == "10"){
    total += 70;
    $("#total3").val(total);
  }
  else if($('#4track3').val() == "11"){
    total += 77;
    $("#total3").val(total);
  }
  else if($('#4track3').val() == "12"){
    total += 84;
    $("#total3").val(total);
  }
  else {
    total += 0;
    $("#total3").val(total);
  }
  
  
  if($('#5track3').val() == "1"){
    total += 10;
    $("#total3").val(total);
  }
  else if($('#5track3').val() == "2"){
    total += 20;
    $("#total3").val(total);
  }
  else if($('#5track3').val() == "3"){
    total += 30;
    $("#total3").val(total);
  }
  else if($('#5track3').val() == "4"){
    total += 40;
    $("#total3").val(total);
  }
  else if($('#5track3').val() == "5"){
    total += 50;
    $("#total3").val(total);
  }
  else if($('#5track3').val() == "6"){
    total += 60;
    $("#total3").val(total);
  }
  else if($('#5track3').val() == "7"){
    total += 70;
    $("#total3").val(total);
  }
  else if($('#5track3').val() == "8"){
    total += 80;
    $("#total3").val(total);
  }
  else if($('#5track3').val() == "9"){
    total += 90;
    $("#total3").val(total);
  }
  else if($('#5track3').val() == "10"){
    total += 100;
    $("#total3").val(total);
  }
  else {
    total += 0;
    $("#total3").val(total);
  }
  
  
  if($('#6track3').val() == "1"){
    total += 15;
    $("#total3").val(total);
  }
  else if($('#6track3').val() == "2"){
    total += 30;
    $("#total3").val(total);
  }
  else if($('#6track3').val() == "3"){
    total += 45;
    $("#total3").val(total);
  }
  else if($('#6track3').val() == "4"){
    total += 60;
    $("#total3").val(total);
  }
  else if($('#6track3').val() == "5"){
    total += 75;
    $("#total3").val(total);
  }
  else if($('#6track3').val() == "6"){
    total += 90;
    $("#total3").val(total);
  }
  else if($('#6track3').val() == "7"){
    total += 105;
    $("#total3").val(total);
  }
  else if($('#6track3').val() == "8"){
    total += 120;
    $("#total3").val(total);
  }
  else if($('#6track3').val() == "9"){
    total += 135;
    $("#total3").val(total);
  }
  else if($('#6track3').val() == "10"){
    total += 150;
    $("#total3").val(total);
  }
  else {
    total += 0;
    $("#total3").val(total);
  }
  
  
  if($('#7track3').val() == "1"){
    total += 18;
    $("#total3").val(total);
  }
  else if($('#7track3').val() == "2"){
    total += 36;
    $("#total3").val(total);
  }
  else if($('#7track3').val() == "3"){
    total += 54;
    $("#total3").val(total);
  }
  else if($('#7track3').val() == "4"){
    total += 72;
    $("#total3").val(total);
  }
  else if($('#7track3').val() == "5"){
    total += 90;
    $("#total3").val(total);
  }
  else if($('#7track3').val() == "6"){
    total += 108;
    $("#total3").val(total);
  }
  else if($('#7track3').val() == "7"){
    total += 126;
    $("#total3").val(total);
  }
  else if($('#7track3').val() == "8"){
    total += 144;
    $("#total3").val(total);
  }
  else if($('#7track3').val() == "9"){
    total += 162;
    $("#total3").val(total);
  }
  else if($('#7track3').val() == "10"){
    total += 180;
    $("#total3").val(total);
  }
  else {
    total += 0;
    $("#total3").val(total);
  }
  
  
  if($('#8track3').val() == "1"){
    total += 21;
    $("#total3").val(total);
  }
  else if($('#8track3').val() == "2"){
    total += 42;
    $("#total3").val(total);
  }
  else if($('#8track3').val() == "3"){
    total += 63;
    $("#total3").val(total);
  }
  else if($('#8track3').val() == "4"){
    total += 84;
    $("#total3").val(total);
  }
  else if($('#8track3').val() == "5"){
    total += 105;
    $("#total3").val(total);
  }
  else if($('#8track3').val() == "6"){
    total += 126;
    $("#total3").val(total);
  }
  else if($('#8track3').val() == "7"){
    total += 147;
    $("#total3").val(total);
  }
  else if($('#8track3').val() == "8"){
    total += 168;
    $("#total3").val(total);
  }
  else if($('#8track3').val() == "9"){
    total += 189;
    $("#total3").val(total);
  }
  else if($('#8track3').val() == "10"){
    total += 210;
    $("#total3").val(total);
  }
  else {
    total += 0;
    $("#total3").val(total);
  }
  
}


function getTotalFour()
{
  var total = parseInt($("#total4").val(),10);
  total = 0;
  
  var mission1 = parseInt($('#4mission1Value').find(":selected").val(), 10);
  if($("#4check1").is(':checked')) {
    total += mission1;
  } 
  else {
    total -= mission1;
  }
  
  var mission2 = parseInt($('#4mission2Value').find(":selected").val(), 10);
  if($("#4check2").is(':checked')) {
     total += mission2;
  } 
  else {
     total -= mission2;
  }
  
  var mission3 = parseInt($('#4mission3Value').find(":selected").val(), 10);
  if($("#4check3").is(':checked')) {
     total += mission3;
  } 
  else {
     total -= mission3;
  }
  
  var mission4 = parseInt($('#4mission4Value').find(":selected").val(), 10);
  if($("#4check4").is(':checked')) {
     total += mission4;
  } 
  else {
     total -= mission4;
  }
  
  var mission5 = parseInt($('#4mission5Value').find(":selected").val(), 10);
  if($("#4check5").is(':checked')) {
     total += mission5;
  } 
  else {
     total -= mission5;
  }
  
  var mission6 = parseInt($('#4mission6Value').find(":selected").val(), 10);
  if($("#4check6").is(':checked')) {
     total += mission6;
  } 
  else {
     total -= mission6;
  }
  
  var mission7 = parseInt($('#4mission7Value').find(":selected").val(), 10);
  if($("#4check7").is(':checked')) {
     total += mission7;
  } 
  else {
     total -= mission7;
  }
  
  var mission8 = parseInt($('#4mission8Value').find(":selected").val(), 10);
  if($("#4check8").is(':checked')) {
     total += mission8;
  } 
  else {
     total -= mission8;
  }
  
  var mission9 = parseInt($('#4mission9Value').find(":selected").val(), 10);
  if($("#4check9").is(':checked')) {
     total += mission9;
  } 
  else {
     total -= mission9;
  }
  
  var mission10 = parseInt($('#4mission10Value').find(":selected").val(), 10);
  if($("#4check10").is(':checked')) {
     total += mission10;
  } 
  else {
     total -= mission10;
  }
  
  var mission11 = parseInt($('#4mission11Value').find(":selected").val(), 10);
  if($("#4check11").is(':checked')) {
     total += mission11;
  } 
  else {
     total -= mission11;
  }
  
  var mission12 = parseInt($('#4mission12Value').find(":selected").val(), 10);
  if($("#4check12").is(':checked')) {
     total += mission12;
  } 
  else {
     total -= mission12;
  }
  
  var mission13 = parseInt($('#4mission13Value').find(":selected").val(), 10);
  if($("#4check13").is(':checked')) {
     total += mission13;
  } 
  else {
     total -= mission13;
  }
  
  var mission14 = parseInt($('#4mission14Value').find(":selected").val(), 10);
  if($("#4check14").is(':checked')) {
     total += mission14;
  } 
  else {
     total -= mission14;
  }
  
  var mission15 = parseInt($('#4mission15Value').find(":selected").val(), 10);
  if($("#4check15").is(':checked')) {
     total += mission15;
  } 
  else {
     total -= mission15;
  }


  if($("#globeTrotter4").is(':checked')) {
    total += 15;
  }
  else {
    total += 0;
  }
  
  if($("#longestTrain4").is(':checked')) {
    total += 10;
  }
  else {
    total += 0;
  }
  
  if($('#1track4').val() == "1"){
    total += 1;
    $("#total4").val(total);
  }
  else if($('#1track4').val() == "2"){
    total += 2;
    $("#total4").val(total);
  }
  else if($('#1track4').val() == "3"){
    total += 3;
    $("#total4").val(total);
  }
  else if($('#1track4').val() == "4"){
    total += 4;
    $("#total4").val(total);
  }
  else if($('#1track4').val() == "5"){
    total += 5;
    $("#total4").val(total);
  }
  else if($('#1track4').val() == "6"){
    total += 6;
    $("#total4").val(total);
  }
  else if($('#1track4').val() == "7"){
    total += 7;
    $("#total4").val(total);
  }
  else if($('#1track4').val() == "8"){
    total += 8;
    $("#total4").val(total);
  }
  else if($('#1track4').val() == "9"){
    total += 9;
    $("#total4").val(total);
  }
  else if($('#1track4').val() == "10"){
    total += 10;
    $("#total4").val(total);
  }
  else if($('#1track4').val() == "11"){
    total += 11;
    $("#total4").val(total);
  }
  else if($('#1track4').val() == "12"){
    total += 12;
    $("#total4").val(total);
  }
  else {
    total += 0;
    $("#total4").val(total);
  }
  
  
  if($('#2track4').val() == "0"){
    total += 0;
    $("#total4").val(total);
  }
  else if($('#2track4').val() == "2"){
    total += 2;
    $("#total4").val(total);
  }
  else if($('#2track4').val() == "4"){
    total += 4;
    $("#total4").val(total);
  }
  else if($('#2track4').val() == "6"){
    total += 6;
    $("#total4").val(total);
  }
  else if($('#2track4').val() == "8"){
    total += 8;
    $("#total4").val(total);
  }
  else if($('#2track4').val() == "10"){
    total += 10;
    $("#total4").val(total);
  }
  else if($('#2track4').val() == "12"){
    total += 12;
    $("#total4").val(total);
  }
  else if($('#2track4').val() == "14"){
    total += 14;
    $("#total4").val(total);
  }
  else if($('#2track4').val() == "16"){
    total += 16;
    $("#total4").val(total);
  }
  else if($('#2track4').val() == "18"){
    total += 18;
    $("#total4").val(total);
  }
  else if($('#2track4').val() == "20"){
    total += 20;
    $("#total4").val(total);
  }
  else if($('#2track4').val() == "22"){
    total += 22;
    $("#total4").val(total);
  }
  else {
    total += 24;
    $("#total4").val(total);
  }
  
  
  
  if($('#3track4').val() == "1"){
    total += 4;
    $("#total4").val(total);
  }
  else if($('#3track4').val() == "2"){
    total += 8;
    $("#total4").val(total);
  }
  else if($('#3track4').val() == "3"){
    total += 12;
    $("#total4").val(total);
  }
  else if($('#3track4').val() == "4"){
    total += 16;
    $("#total4").val(total);
  }
  else if($('#3track4').val() == "5"){
    total += 20;
    $("#total4").val(total);
  }
  else if($('#3track4').val() == "6"){
    total += 24;
    $("#total4").val(total);
  }
  else if($('#3track4').val() == "7"){
    total += 28;
    $("#total4").val(total);
  }
  else if($('#3track4').val() == "8"){
    total += 32;
    $("#total4").val(total);
  }
  else if($('#3track4').val() == "9"){
    total += 36;
    $("#total4").val(total);
  }
  else if($('#3track4').val() == "10"){
    total += 40;
    $("#total4").val(total);
  }
  else if($('#3track4').val() == "11"){
    total += 44;
    $("#total4").val(total);
  }
  else if($('#3track4').val() == "12"){
    total += 48;
    $("#total4").val(total);
  }
  else {
    total += 0;
    $("#total4").val(total);
  }
  
  
  
  if($('#4track4').val() == "1"){
    total += 7;
    $("#total4").val(total);
  }
  else if($('#4track4').val() == "2"){
    total += 14;
    $("#total4").val(total);
  }
  else if($('#4track4').val() == "3"){
    total += 21;
    $("#total4").val(total);
  }
  else if($('#4track4').val() == "4"){
    total += 28;
    $("#total4").val(total);
  }
  else if($('#4track4').val() == "5"){
    total += 35;
    $("#total4").val(total);
  }
  else if($('#4track4').val() == "6"){
    total += 42;
    $("#total4").val(total);
  }
  else if($('#4track4').val() == "7"){
    total += 49;
    $("#total4").val(total);
  }
  else if($('#4track4').val() == "8"){
    total += 56;
    $("#total4").val(total);
  }
  else if($('#4track4').val() == "9"){
    total += 63;
    $("#total4").val(total);
  }
  else if($('#4track4').val() == "10"){
    total += 70;
    $("#total4").val(total);
  }
  else if($('#4track4').val() == "11"){
    total += 77;
    $("#total4").val(total);
  }
  else if($('#4track4').val() == "12"){
    total += 84;
    $("#total4").val(total);
  }
  else {
    total += 0;
    $("#total4").val(total);
  }
  
  
  if($('#5track4').val() == "1"){
    total += 10;
    $("#total4").val(total);
  }
  else if($('#5track4').val() == "2"){
    total += 20;
    $("#total4").val(total);
  }
  else if($('#5track4').val() == "3"){
    total += 30;
    $("#total4").val(total);
  }
  else if($('#5track4').val() == "4"){
    total += 40;
    $("#total4").val(total);
  }
  else if($('#5track4').val() == "5"){
    total += 50;
    $("#total4").val(total);
  }
  else if($('#5track4').val() == "6"){
    total += 60;
    $("#total4").val(total);
  }
  else if($('#5track4').val() == "7"){
    total += 70;
    $("#total4").val(total);
  }
  else if($('#5track4').val() == "8"){
    total += 80;
    $("#total4").val(total);
  }
  else if($('#5track4').val() == "9"){
    total += 90;
    $("#total4").val(total);
  }
  else if($('#5track4').val() == "10"){
    total += 100;
    $("#total4").val(total);
  }
  else {
    total += 0;
    $("#total4").val(total);
  }
  
  
  if($('#6track4').val() == "1"){
    total += 15;
    $("#total4").val(total);
  }
  else if($('#6track4').val() == "2"){
    total += 30;
    $("#total4").val(total);
  }
  else if($('#6track4').val() == "3"){
    total += 45;
    $("#total4").val(total);
  }
  else if($('#6track4').val() == "4"){
    total += 60;
    $("#total4").val(total);
  }
  else if($('#6track4').val() == "5"){
    total += 75;
    $("#total4").val(total);
  }
  else if($('#6track4').val() == "6"){
    total += 90;
    $("#total4").val(total);
  }
  else if($('#6track4').val() == "7"){
    total += 105;
    $("#total4").val(total);
  }
  else if($('#6track4').val() == "8"){
    total += 120;
    $("#total4").val(total);
  }
  else if($('#6track4').val() == "9"){
    total += 135;
    $("#total4").val(total);
  }
  else if($('#6track4').val() == "10"){
    total += 150;
    $("#total4").val(total);
  }
  else {
    total += 0;
    $("#total4").val(total);
  }
  
  
  if($('#7track4').val() == "1"){
    total += 18;
    $("#total4").val(total);
  }
  else if($('#7track4').val() == "2"){
    total += 36;
    $("#total4").val(total);
  }
  else if($('#7track4').val() == "3"){
    total += 54;
    $("#total4").val(total);
  }
  else if($('#7track4').val() == "4"){
    total += 72;
    $("#total4").val(total);
  }
  else if($('#7track4').val() == "5"){
    total += 90;
    $("#total4").val(total);
  }
  else if($('#7track4').val() == "6"){
    total += 108;
    $("#total4").val(total);
  }
  else if($('#7track4').val() == "7"){
    total += 126;
    $("#total4").val(total);
  }
  else if($('#7track4').val() == "8"){
    total += 144;
    $("#total4").val(total);
  }
  else if($('#7track4').val() == "9"){
    total += 162;
    $("#total4").val(total);
  }
  else if($('#7track4').val() == "10"){
    total += 180;
    $("#total4").val(total);
  }
  else {
    total += 0;
    $("#total4").val(total);
  }
  
  
  if($('#8track4').val() == "1"){
    total += 21;
    $("#total4").val(total);
  }
  else if($('#8track4').val() == "2"){
    total += 42;
    $("#total4").val(total);
  }
  else if($('#8track4').val() == "3"){
    total += 63;
    $("#total4").val(total);
  }
  else if($('#8track4').val() == "4"){
    total += 84;
    $("#total4").val(total);
  }
  else if($('#8track4').val() == "5"){
    total += 105;
    $("#total4").val(total);
  }
  else if($('#8track4').val() == "6"){
    total += 126;
    $("#total4").val(total);
  }
  else if($('#8track4').val() == "7"){
    total += 147;
    $("#total4").val(total);
  }
  else if($('#8track4').val() == "8"){
    total += 168;
    $("#total4").val(total);
  }
  else if($('#8track4').val() == "9"){
    total += 189;
    $("#total4").val(total);
  }
  else if($('#8track4').val() == "10"){
    total += 210;
    $("#total4").val(total);
  }
  else {
    total += 0;
    $("#total4").val(total);
  }
  
}

function getTotalFive()
{
  var total = parseInt($("#total5").val(),10);
  total = 0;


  var mission1 = parseInt($('#5mission1Value').find(":selected").val(), 10);
  if($("#5check1").is(':checked')) {
    total += mission1;
  } 
  else {
    total -= mission1;
  }
  
  var mission2 = parseInt($('#5mission2Value').find(":selected").val(), 10);
  if($("#5check2").is(':checked')) {
     total += mission2;
  } 
  else {
     total -= mission2;
  }
  
  var mission3 = parseInt($('#5mission3Value').find(":selected").val(), 10);
  if($("#5check3").is(':checked')) {
     total += mission3;
  } 
  else {
     total -= mission3;
  }
  
  var mission4 = parseInt($('#5mission4Value').find(":selected").val(), 10);
  if($("#5check4").is(':checked')) {
     total += mission4;
  } 
  else {
     total -= mission4;
  }
  
  var mission5 = parseInt($('#5mission5Value').find(":selected").val(), 10);
  if($("#5check5").is(':checked')) {
     total += mission5;
  } 
  else {
     total -= mission5;
  }
  
  var mission6 = parseInt($('#5mission6Value').find(":selected").val(), 10);
  if($("#5check6").is(':checked')) {
     total += mission6;
  } 
  else {
     total -= mission6;
  }
  
  var mission7 = parseInt($('#5mission7Value').find(":selected").val(), 10);
  if($("#5check7").is(':checked')) {
     total += mission7;
  } 
  else {
     total -= mission7;
  }
  
  var mission8 = parseInt($('#5mission8Value').find(":selected").val(), 10);
  if($("#5check8").is(':checked')) {
     total += mission8;
  } 
  else {
     total -= mission8;
  }
  
  var mission9 = parseInt($('#5mission9Value').find(":selected").val(), 10);
  if($("#5check9").is(':checked')) {
     total += mission9;
  } 
  else {
     total -= mission9;
  }
  
  var mission10 = parseInt($('#5mission10Value').find(":selected").val(), 10);
  if($("#5check10").is(':checked')) {
     total += mission10;
  } 
  else {
     total -= mission10;
  }
  
  var mission11 = parseInt($('#5mission11Value').find(":selected").val(), 10);
  if($("#5check11").is(':checked')) {
     total += mission11;
  } 
  else {
     total -= mission11;
  }
  
  var mission12 = parseInt($('#5mission12Value').find(":selected").val(), 10);
  if($("#5check12").is(':checked')) {
     total += mission12;
  } 
  else {
     total -= mission12;
  }
  
  var mission13 = parseInt($('#5mission13Value').find(":selected").val(), 10);
  if($("#5check13").is(':checked')) {
     total += mission13;
  } 
  else {
     total -= mission13;
  }
  
  var mission14 = parseInt($('#5mission14Value').find(":selected").val(), 10);
  if($("#5check14").is(':checked')) {
     total += mission14;
  } 
  else {
     total -= mission14;
  }
  
  var mission15 = parseInt($('#5mission15Value').find(":selected").val(), 10);
  if($("#5check15").is(':checked')) {
     total += mission15;
  } 
  else {
     total -= mission15;
  }



  
  if($("#globeTrotter5").is(':checked')) {
    total += 15;
  }
  else {
    total += 0;
  }
  
  if($("#longestTrain5").is(':checked')) {
    total += 10;
  }
  else {
    total += 0;
  }
  
  if($('#1track5').val() == "1"){
    total += 1;
    $("#total5").val(total);
  }
  else if($('#1track5').val() == "2"){
    total += 2;
    $("#total5").val(total);
  }
  else if($('#1track5').val() == "3"){
    total += 3;
    $("#total5").val(total);
  }
  else if($('#1track5').val() == "4"){
    total += 4;
    $("#total5").val(total);
  }
  else if($('#1track5').val() == "5"){
    total += 5;
    $("#total5").val(total);
  }
  else if($('#1track5').val() == "6"){
    total += 6;
    $("#total5").val(total);
  }
  else if($('#1track5').val() == "7"){
    total += 7;
    $("#total5").val(total);
  }
  else if($('#1track5').val() == "8"){
    total += 8;
    $("#total5").val(total);
  }
  else if($('#1track5').val() == "9"){
    total += 9;
    $("#total5").val(total);
  }
  else if($('#1track5').val() == "10"){
    total += 10;
    $("#total5").val(total);
  }
  else if($('#1track5').val() == "11"){
    total += 11;
    $("#total5").val(total);
  }
  else if($('#1track5').val() == "12"){
    total += 12;
    $("#total5").val(total);
  }
  else {
    total += 0;
    $("#total5").val(total);
  }
  
  
  if($('#2track5').val() == "0"){
    total += 0;
    $("#total5").val(total);
  }
  else if($('#2track5').val() == "2"){
    total += 2;
    $("#total5").val(total);
  }
  else if($('#2track5').val() == "4"){
    total += 4;
    $("#total5").val(total);
  }
  else if($('#2track5').val() == "6"){
    total += 6;
    $("#total5").val(total);
  }
  else if($('#2track5').val() == "8"){
    total += 8;
    $("#total5").val(total);
  }
  else if($('#2track5').val() == "10"){
    total += 10;
    $("#total5").val(total);
  }
  else if($('#2track5').val() == "12"){
    total += 12;
    $("#total5").val(total);
  }
  else if($('#2track5').val() == "14"){
    total += 14;
    $("#total5").val(total);
  }
  else if($('#2track5').val() == "16"){
    total += 16;
    $("#total5").val(total);
  }
  else if($('#2track5').val() == "18"){
    total += 18;
    $("#total5").val(total);
  }
  else if($('#2track5').val() == "20"){
    total += 20;
    $("#total5").val(total);
  }
  else if($('#2track5').val() == "22"){
    total += 22;
    $("#total5").val(total);
  }
  else if($('#2track5').val() == "24"){
    total += 24;
    $("#total5").val(total);
  }
  else {
    total += 0;
    $("#total5").val(total);
  }
  
  
  
  if($('#3track5').val() == "1"){
    total += 4;
    $("#total5").val(total);
  }
  else if($('#3track5').val() == "2"){
    total += 8;
    $("#total5").val(total);
  }
  else if($('#3track5').val() == "3"){
    total += 12;
    $("#total5").val(total);
  }
  else if($('#3track5').val() == "4"){
    total += 16;
    $("#total5").val(total);
  }
  else if($('#3track5').val() == "5"){
    total += 20;
    $("#total5").val(total);
  }
  else if($('#3track5').val() == "6"){
    total += 24;
    $("#total5").val(total);
  }
  else if($('#3track5').val() == "7"){
    total += 28;
    $("#total5").val(total);
  }
  else if($('#3track5').val() == "8"){
    total += 32;
    $("#total5").val(total);
  }
  else if($('#3track5').val() == "9"){
    total += 36;
    $("#total5").val(total);
  }
  else if($('#3track5').val() == "10"){
    total += 40;
    $("#total5").val(total);
  }
  else if($('#3track5').val() == "11"){
    total += 44;
    $("#total5").val(total);
  }
  else if($('#3track5').val() == "12"){
    total += 48;
    $("#total5").val(total);
  }
  else {
    total += 0;
    $("#total5").val(total);
  }
  
  
  
  if($('#4track5').val() == "1"){
    total += 7;
    $("#total5").val(total);
  }
  else if($('#4track5').val() == "2"){
    total += 14;
    $("#total5").val(total);
  }
  else if($('#4track5').val() == "3"){
    total += 21;
    $("#total5").val(total);
  }
  else if($('#4track5').val() == "4"){
    total += 28;
    $("#total5").val(total);
  }
  else if($('#4track5').val() == "5"){
    total += 35;
    $("#total5").val(total);
  }
  else if($('#4track5').val() == "6"){
    total += 42;
    $("#total5").val(total);
  }
  else if($('#4track5').val() == "7"){
    total += 49;
    $("#total5").val(total);
  }
  else if($('#4track5').val() == "8"){
    total += 56;
    $("#total5").val(total);
  }
  else if($('#4track5').val() == "9"){
    total += 63;
    $("#total5").val(total);
  }
  else if($('#4track5').val() == "10"){
    total += 70;
    $("#total5").val(total);
  }
  else if($('#4track5').val() == "11"){
    total += 77;
    $("#total5").val(total);
  }
  else if($('#4track5').val() == "12"){
    total += 84;
    $("#total5").val(total);
  }
  else {
    total += 0;
    $("#total5").val(total);
  }
  
  
  if($('#5track5').val() == "1"){
    total += 10;
    $("#total5").val(total);
  }
  else if($('#5track5').val() == "2"){
    total += 20;
    $("#total5").val(total);
  }
  else if($('#5track5').val() == "3"){
    total += 30;
    $("#total5").val(total);
  }
  else if($('#5track5').val() == "4"){
    total += 40;
    $("#total5").val(total);
  }
  else if($('#5track5').val() == "5"){
    total += 50;
    $("#total5").val(total);
  }
  else if($('#5track5').val() == "6"){
    total += 60;
    $("#total5").val(total);
  }
  else if($('#5track5').val() == "7"){
    total += 70;
    $("#total5").val(total);
  }
  else if($('#5track5').val() == "8"){
    total += 80;
    $("#total5").val(total);
  }
  else if($('#5track5').val() == "9"){
    total += 90;
    $("#total5").val(total);
  }
  else if($('#5track5').val() == "10"){
    total += 100;
    $("#total5").val(total);
  }
  else {
    total += 0;
    $("#total5").val(total);
  }
  
  
  if($('#6track5').val() == "1"){
    total += 15;
    $("#total5").val(total);
  }
  else if($('#6track5').val() == "2"){
    total += 30;
    $("#total5").val(total);
  }
  else if($('#6track5').val() == "3"){
    total += 45;
    $("#total5").val(total);
  }
  else if($('#6track5').val() == "4"){
    total += 60;
    $("#total5").val(total);
  }
  else if($('#6track5').val() == "5"){
    total += 75;
    $("#total5").val(total);
  }
  else if($('#6track5').val() == "6"){
    total += 90;
    $("#total5").val(total);
  }
  else if($('#6track5').val() == "7"){
    total += 105;
    $("#total5").val(total);
  }
  else if($('#6track5').val() == "8"){
    total += 120;
    $("#total5").val(total);
  }
  else if($('#6track5').val() == "9"){
    total += 135;
    $("#total5").val(total);
  }
  else if($('#6track5').val() == "10"){
    total += 150;
    $("#total5").val(total);
  }
  else {
    total += 0;
    $("#total5").val(total);
  }
  
  
  if($('#7track5').val() == "1"){
    total += 18;
    $("#total5").val(total);
  }
  else if($('#7track5').val() == "2"){
    total += 36;
    $("#total5").val(total);
  }
  else if($('#7track5').val() == "3"){
    total += 54;
    $("#total5").val(total);
  }
  else if($('#7track5').val() == "4"){
    total += 72;
    $("#total5").val(total);
  }
  else if($('#7track5').val() == "5"){
    total += 90;
    $("#total5").val(total);
  }
  else if($('#7track5').val() == "6"){
    total += 108;
    $("#total5").val(total);
  }
  else if($('#7track5').val() == "7"){
    total += 126;
    $("#total5").val(total);
  }
  else if($('#7track5').val() == "8"){
    total += 144;
    $("#total5").val(total);
  }
  else if($('#7track5').val() == "9"){
    total += 162;
    $("#total5").val(total);
  }
  else if($('#7track5').val() == "10"){
    total += 180;
    $("#total5").val(total);
  }
  else {
    total += 0;
    $("#total5").val(total);
  }
  
  
  if($('#8track5').val() == "1"){
    total += 21;
    $("#total5").val(total);
  }
  else if($('#8track5').val() == "2"){
    total += 42;
    $("#total5").val(total);
  }
  else if($('#8track5').val() == "3"){
    total += 63;
    $("#total5").val(total);
  }
  else if($('#8track5').val() == "4"){
    total += 84;
    $("#total5").val(total);
  }
  else if($('#8track5').val() == "5"){
    total += 105;
    $("#total5").val(total);
  }
  else if($('#8track5').val() == "6"){
    total += 126;
    $("#total5").val(total);
  }
  else if($('#8track5').val() == "7"){
    total += 147;
    $("#total5").val(total);
  }
  else if($('#8track5').val() == "8"){
    total += 168;
    $("#total5").val(total);
  }
  else if($('#8track5').val() == "9"){
    total += 189;
    $("#total5").val(total);
  }
  else if($('#8track5').val() == "10"){
    total += 210;
    $("#total5").val(total);
  }
  else {
    total += 0;
    $("#total5").val(total);
  }
  
}

function player1Missions()
{
  $("#secondPart1").show();
  
  if($('#missions1').val() == "1") {
    $("#mission1Play1").show();
    $("#mission2Play1").hide();
    $("#mission3Play1").hide();
    $("#mission4Play1").hide();
    $("#mission5Play1").hide();
    $("#mission6Play1").hide();
    $("#mission7Play1").hide();
    $("#mission8Play1").hide();
    $("#mission9Play1").hide();
    $("#mission10Play1").hide();
    $("#mission11Play1").hide();
    $("#mission12Play1").hide();
    $("#mission13Play1").hide();
    $("#mission14Play1").hide();
    $("#mission15Play1").hide();
  }
  else if($('#missions1').val() == "2") {
    $("#mission1Play1").show();
    $("#mission2Play1").show();
    $("#mission3Play1").hide();
    $("#mission4Play1").hide();
    $("#mission5Play1").hide();
    $("#mission6Play1").hide();
    $("#mission7Play1").hide();
    $("#mission8Play1").hide();
    $("#mission9Play1").hide();
    $("#mission10Play1").hide();
    $("#mission11Play1").hide();
    $("#mission12Play1").hide();
    $("#mission13Play1").hide();
    $("#mission14Play1").hide();
    $("#mission15Play1").hide();
  }
  else if($('#missions1').val() == "3") {
    $("#mission1Play1").show();
    $("#mission2Play1").show();
    $("#mission3Play1").show();
    $("#mission4Play1").hide();
    $("#mission5Play1").hide();
    $("#mission6Play1").hide();
    $("#mission7Play1").hide();
    $("#mission8Play1").hide();
    $("#mission9Play1").hide();
    $("#mission10Play1").hide();
    $("#mission11Play1").hide();
    $("#mission12Play1").hide();
    $("#mission13Play1").hide();
    $("#mission14Play1").hide();
    $("#mission15Play1").hide();
  }
  else if($('#missions1').val() == "4") {
    $("#mission1Play1").show();
    $("#mission2Play1").show();
    $("#mission3Play1").show();
    $("#mission4Play1").show();
    $("#mission5Play1").hide();
    $("#mission6Play1").hide();
    $("#mission7Play1").hide();
    $("#mission8Play1").hide();
    $("#mission9Play1").hide();
    $("#mission10Play1").hide();
    $("#mission11Play1").hide();
    $("#mission12Play1").hide();
    $("#mission13Play1").hide();
    $("#mission14Play1").hide();
    $("#mission15Play1").hide();
  }
  else if($('#missions1').val() == "5") {
    $("#mission1Play1").show();
    $("#mission2Play1").show();
    $("#mission3Play1").show();
    $("#mission4Play1").show();
    $("#mission5Play1").show();
    $("#mission6Play1").hide();
    $("#mission7Play1").hide();
    $("#mission8Play1").hide();
    $("#mission9Play1").hide();
    $("#mission10Play1").hide();
    $("#mission11Play1").hide();
    $("#mission12Play1").hide();
    $("#mission13Play1").hide();
    $("#mission14Play1").hide();
    $("#mission15Play1").hide();
  }
  else if($('#missions1').val() == "6") {
    $("#mission1Play1").show();
    $("#mission2Play1").show();
    $("#mission3Play1").show();
    $("#mission4Play1").show();
    $("#mission5Play1").show();
    $("#mission6Play1").show();
    $("#mission7Play1").hide();
    $("#mission8Play1").hide();
    $("#mission9Play1").hide();
    $("#mission10Play1").hide();
    $("#mission11Play1").hide();
    $("#mission12Play1").hide();
    $("#mission13Play1").hide();
    $("#mission14Play1").hide();
    $("#mission15Play1").hide();
  }
  else if($('#missions1').val() == "7") {
    $("#mission1Play1").show();
    $("#mission2Play1").show();
    $("#mission3Play1").show();
    $("#mission4Play1").show();
    $("#mission5Play1").show();
    $("#mission6Play1").show();
    $("#mission7Play1").show();
    $("#mission8Play1").hide();
    $("#mission9Play1").hide();
    $("#mission10Play1").hide();
    $("#mission11Play1").hide();
    $("#mission12Play1").hide();
    $("#mission13Play1").hide();
    $("#mission14Play1").hide();
    $("#mission15Play1").hide();
  }
  else if($('#missions1').val() == "8") {
    $("#mission1Play1").show();
    $("#mission2Play1").show();
    $("#mission3Play1").show();
    $("#mission4Play1").show();
    $("#mission5Play1").show();
    $("#mission6Play1").show();
    $("#mission7Play1").show();
    $("#mission8Play1").show();
    $("#mission9Play1").hide();
    $("#mission10Play1").hide();
    $("#mission11Play1").hide();
    $("#mission12Play1").hide();
    $("#mission13Play1").hide();
    $("#mission14Play1").hide();
    $("#mission15Play1").hide();
  }
  else if($('#missions1').val() == "9") {
    $("#mission1Play1").show();
    $("#mission2Play1").show();
    $("#mission3Play1").show();
    $("#mission4Play1").show();
    $("#mission5Play1").show();
    $("#mission6Play1").show();
    $("#mission7Play1").show();
    $("#mission8Play1").show();
    $("#mission9Play1").show();
    $("#mission10Play1").hide();
    $("#mission11Play1").hide();
    $("#mission12Play1").hide();
    $("#mission13Play1").hide();
    $("#mission14Play1").hide();
    $("#mission15Play1").hide();
  }
  else if($('#missions1').val() == "10") {
    $("#mission1Play1").show();
    $("#mission2Play1").show();
    $("#mission3Play1").show();
    $("#mission4Play1").show();
    $("#mission5Play1").show();
    $("#mission6Play1").show();
    $("#mission7Play1").show();
    $("#mission8Play1").show();
    $("#mission9Play1").show();
    $("#mission10Play1").show();
    $("#mission11Play1").hide();
    $("#mission12Play1").hide();
    $("#mission13Play1").hide();
    $("#mission14Play1").hide();
    $("#mission15Play1").hide();
  }
  else if($('#missions1').val() == "11") {
    $("#mission1Play1").show();
    $("#mission2Play1").show();
    $("#mission3Play1").show();
    $("#mission4Play1").show();
    $("#mission5Play1").show();
    $("#mission6Play1").show();
    $("#mission7Play1").show();
    $("#mission8Play1").show();
    $("#mission9Play1").show();
    $("#mission10Play1").show();
    $("#mission11Play1").show();
    $("#mission12Play1").hide();
    $("#mission13Play1").hide();
    $("#mission14Play1").hide();
    $("#mission15Play1").hide();
  }
  else if($('#missions1').val() == "12") {
    $("#mission1Play1").show();
    $("#mission2Play1").show();
    $("#mission3Play1").show();
    $("#mission4Play1").show();
    $("#mission5Play1").show();
    $("#mission6Play1").show();
    $("#mission7Play1").show();
    $("#mission8Play1").show();
    $("#mission9Play1").show();
    $("#mission10Play1").show();
    $("#mission11Play1").show();
    $("#mission12Play1").show();
    $("#mission13Play1").hide();
    $("#mission14Play1").hide();
    $("#mission15Play1").hide();
  }
  else if($('#missions1').val() == "13") {
    $("#mission1Play1").show();
    $("#mission2Play1").show();
    $("#mission3Play1").show();
    $("#mission4Play1").show();
    $("#mission5Play1").show();
    $("#mission6Play1").show();
    $("#mission7Play1").show();
    $("#mission8Play1").show();
    $("#mission9Play1").show();
    $("#mission10Play1").show();
    $("#mission11Play1").show();
    $("#mission12Play1").show();
    $("#mission13Play1").show();
    $("#mission14Play1").hide();
    $("#mission15Play1").hide();
  }
  else if($('#missions1').val() == "14") {
    $("#mission1Play1").show();
    $("#mission2Play1").show();
    $("#mission3Play1").show();
    $("#mission4Play1").show();
    $("#mission5Play1").show();
    $("#mission6Play1").show();
    $("#mission7Play1").show();
    $("#mission8Play1").show();
    $("#mission9Play1").show();
    $("#mission10Play1").show();
    $("#mission11Play1").show();
    $("#mission12Play1").show();
    $("#mission13Play1").show();
    $("#mission14Play1").show();
    $("#mission15Play1").hide();
  }
  else if($('#missions1').val() == "15") {
    $("#mission1Play1").show();
    $("#mission2Play1").show();
    $("#mission3Play1").show();
    $("#mission4Play1").show();
    $("#mission5Play1").show();
    $("#mission6Play1").show();
    $("#mission7Play1").show();
    $("#mission8Play1").show();
    $("#mission9Play1").show();
    $("#mission10Play1").show();
    $("#mission11Play1").show();
    $("#mission12Play1").show();
    $("#mission13Play1").show();
    $("#mission14Play1").show();
    $("#mission15Play1").show();
  }
  else {
    $("#mission1Play1").hide();
    $("#mission2Play1").hide();
    $("#mission3Play1").hide();
    $("#mission4Play1").hide();
    $("#mission5Play1").hide();
    $("#mission6Play1").hide();
    $("#mission7Play1").hide();
    $("#mission8Play1").hide();
    $("#mission9Play1").hide();
    $("#mission10Play1").hide();
    $("#mission11Play1").hide();
    $("#mission12Play1").hide();
    $("#mission13Play1").hide();
    $("#mission14Play1").hide();
    $("#mission15Play1").hide();
  }
}

function player2Missions()
{
  
  $("#secondPart2").show();
  
  
  if($('#missions2').val() == "1") {
    $("#mission1Play2").show();
    $("#mission2Play2").hide();
    $("#mission3Play2").hide();
    $("#mission4Play2").hide();
    $("#mission5Play2").hide();
    $("#mission6Play2").hide();
    $("#mission7Play2").hide();
    $("#mission8Play2").hide();
    $("#mission9Play2").hide();
    $("#mission10Play2").hide();
    $("#mission11Play2").hide();
    $("#mission12Play2").hide();
    $("#mission13Play2").hide();
    $("#mission14Play2").hide();
    $("#mission15Play2").hide();
  }
  else if($('#missions2').val() == "2") {
    $("#mission1Play2").show();
    $("#mission2Play2").show();
    $("#mission3Play2").hide();
    $("#mission4Play2").hide();
    $("#mission5Play2").hide();
    $("#mission6Play2").hide();
    $("#mission7Play2").hide();
    $("#mission8Play2").hide();
    $("#mission9Play2").hide();
    $("#mission10Play2").hide();
    $("#mission11Play2").hide();
    $("#mission12Play2").hide();
    $("#mission13Play2").hide();
    $("#mission14Play2").hide();
    $("#mission15Play2").hide();
  }
  else if($('#missions2').val() == "3") {
    $("#mission1Play2").show();
    $("#mission2Play2").show();
    $("#mission3Play2").show();
    $("#mission4Play2").hide();
    $("#mission5Play2").hide();
    $("#mission6Play2").hide();
    $("#mission7Play2").hide();
    $("#mission8Play2").hide();
    $("#mission9Play2").hide();
    $("#mission10Play2").hide();
    $("#mission11Play2").hide();
    $("#mission12Play2").hide();
    $("#mission13Play2").hide();
    $("#mission14Play2").hide();
    $("#mission15Play2").hide();
  }
  else if($('#missions2').val() == "4") {
    $("#mission1Play2").show();
    $("#mission2Play2").show();
    $("#mission3Play2").show();
    $("#mission4Play2").show();
    $("#mission5Play2").hide();
    $("#mission6Play2").hide();
    $("#mission7Play2").hide();
    $("#mission8Play2").hide();
    $("#mission9Play2").hide();
    $("#mission10Play2").hide();
    $("#mission11Play2").hide();
    $("#mission12Play2").hide();
    $("#mission13Play2").hide();
    $("#mission14Play2").hide();
    $("#mission15Play2").hide();
  }
  else if($('#missions2').val() == "5") {
    $("#mission1Play2").show();
    $("#mission2Play2").show();
    $("#mission3Play2").show();
    $("#mission4Play2").show();
    $("#mission5Play2").show();
    $("#mission6Play2").hide();
    $("#mission7Play2").hide();
    $("#mission8Play2").hide();
    $("#mission9Play2").hide();
    $("#mission10Play2").hide();
    $("#mission11Play2").hide();
    $("#mission12Play2").hide();
    $("#mission13Play2").hide();
    $("#mission14Play2").hide();
    $("#mission15Play2").hide();
  }
  else if($('#missions2').val() == "6") {
    $("#mission1Play2").show();
    $("#mission2Play2").show();
    $("#mission3Play2").show();
    $("#mission4Play2").show();
    $("#mission5Play2").show();
    $("#mission6Play2").show();
    $("#mission7Play2").hide();
    $("#mission8Play2").hide();
    $("#mission9Play2").hide();
    $("#mission10Play2").hide();
    $("#mission11Play2").hide();
    $("#mission12Play2").hide();
    $("#mission13Play2").hide();
    $("#mission14Play2").hide();
    $("#mission15Play2").hide();
  }
  else if($('#missions2').val() == "7") {
    $("#mission1Play2").show();
    $("#mission2Play2").show();
    $("#mission3Play2").show();
    $("#mission4Play2").show();
    $("#mission5Play2").show();
    $("#mission6Play2").show();
    $("#mission7Play2").show();
    $("#mission8Play2").hide();
    $("#mission9Play2").hide();
    $("#mission10Play2").hide();
    $("#mission11Play2").hide();
    $("#mission12Play2").hide();
    $("#mission13Play2").hide();
    $("#mission14Play2").hide();
    $("#mission15Play2").hide();
  }
  else if($('#missions2').val() == "8") {
    $("#mission1Play2").show();
    $("#mission2Play2").show();
    $("#mission3Play2").show();
    $("#mission4Play2").show();
    $("#mission5Play2").show();
    $("#mission6Play2").show();
    $("#mission7Play2").show();
    $("#mission8Play2").show();
    $("#mission9Play2").hide();
    $("#mission10Play2").hide();
    $("#mission11Play2").hide();
    $("#mission12Play2").hide();
    $("#mission13Play2").hide();
    $("#mission14Play2").hide();
    $("#mission15Play2").hide();
  }
  else if($('#missions2').val() == "9") {
    $("#mission1Play2").show();
    $("#mission2Play2").show();
    $("#mission3Play2").show();
    $("#mission4Play2").show();
    $("#mission5Play2").show();
    $("#mission6Play2").show();
    $("#mission7Play2").show();
    $("#mission8Play2").show();
    $("#mission9Play2").show();
    $("#mission10Play2").hide();
    $("#mission11Play2").hide();
    $("#mission12Play2").hide();
    $("#mission13Play2").hide();
    $("#mission14Play2").hide();
    $("#mission15Play2").hide();
  }
  else if($('#missions2').val() == "10") {
    $("#mission1Play2").show();
    $("#mission2Play2").show();
    $("#mission3Play2").show();
    $("#mission4Play2").show();
    $("#mission5Play2").show();
    $("#mission6Play2").show();
    $("#mission7Play2").show();
    $("#mission8Play2").show();
    $("#mission9Play2").show();
    $("#mission10Play2").show();
    $("#mission11Play2").hide();
    $("#mission12Play2").hide();
    $("#mission13Play2").hide();
    $("#mission14Play2").hide();
    $("#mission15Play2").hide();
  }
  else if($('#missions2').val() == "11") {
    $("#mission1Play2").show();
    $("#mission2Play2").show();
    $("#mission3Play2").show();
    $("#mission4Play2").show();
    $("#mission5Play2").show();
    $("#mission6Play2").show();
    $("#mission7Play2").show();
    $("#mission8Play2").show();
    $("#mission9Play2").show();
    $("#mission10Play2").show();
    $("#mission11Play2").show();
    $("#mission12Play2").hide();
    $("#mission13Play2").hide();
    $("#mission14Play2").hide();
    $("#mission15Play2").hide();
  }
  else if($('#missions2').val() == "12") {
    $("#mission1Play2").show();
    $("#mission2Play2").show();
    $("#mission3Play2").show();
    $("#mission4Play2").show();
    $("#mission5Play2").show();
    $("#mission6Play2").show();
    $("#mission7Play2").show();
    $("#mission8Play2").show();
    $("#mission9Play2").show();
    $("#mission10Play2").show();
    $("#mission11Play2").show();
    $("#mission12Play2").show();
    $("#mission13Play2").hide();
    $("#mission14Play2").hide();
    $("#mission15Play2").hide();
  }
  else if($('#missions2').val() == "13") {
    $("#mission1Play2").show();
    $("#mission2Play2").show();
    $("#mission3Play2").show();
    $("#mission4Play2").show();
    $("#mission5Play2").show();
    $("#mission6Play2").show();
    $("#mission7Play2").show();
    $("#mission8Play2").show();
    $("#mission9Play2").show();
    $("#mission10Play2").show();
    $("#mission11Play2").show();
    $("#mission12Play2").show();
    $("#mission13Play2").show();
    $("#mission14Play2").hide();
    $("#mission15Play2").hide();
  }
  else if($('#missions2').val() == "14") {
    $("#mission1Play2").show();
    $("#mission2Play2").show();
    $("#mission3Play2").show();
    $("#mission4Play2").show();
    $("#mission5Play2").show();
    $("#mission6Play2").show();
    $("#mission7Play2").show();
    $("#mission8Play2").show();
    $("#mission9Play2").show();
    $("#mission10Play2").show();
    $("#mission11Play2").show();
    $("#mission12Play2").show();
    $("#mission13Play2").show();
    $("#mission14Play2").show();
    $("#mission15Play2").hide();
  }
  else if($('#missions2').val() == "15") {
    $("#mission1Play2").show();
    $("#mission2Play2").show();
    $("#mission3Play2").show();
    $("#mission4Play2").show();
    $("#mission5Play2").show();
    $("#mission6Play2").show();
    $("#mission7Play2").show();
    $("#mission8Play2").show();
    $("#mission9Play2").show();
    $("#mission10Play2").show();
    $("#mission11Play2").show();
    $("#mission12Play2").show();
    $("#mission13Play2").show();
    $("#mission14Play2").show();
    $("#mission15Play2").show();
  }
  else {
    $("#mission1Play2").hide();
    $("#mission2Play2").hide();
    $("#mission3Play2").hide();
    $("#mission4Play2").hide();
    $("#mission5Play2").hide();
    $("#mission6Play2").hide();
    $("#mission7Play2").hide();
    $("#mission8Play2").hide();
    $("#mission9Play2").hide();
    $("#mission10Play2").hide();
    $("#mission11Play2").hide();
    $("#mission12Play2").hide();
    $("#mission13Play2").hide();
    $("#mission14Play2").hide();
    $("#mission15Play2").hide();
  }
}

function player3Missions()
{
  $("#secondPart3").show();
  
  if($('#missions3').val() == "1") {
    $("#mission1Play3").show();
    $("#mission2Play3").hide();
    $("#mission3Play3").hide();
    $("#mission4Play3").hide();
    $("#mission5Play3").hide();
    $("#mission6Play3").hide();
    $("#mission7Play3").hide();
    $("#mission8Play3").hide();
    $("#mission9Play3").hide();
    $("#mission10Play3").hide();
    $("#mission11Play3").hide();
    $("#mission12Play3").hide();
    $("#mission13Play3").hide();
    $("#mission14Play3").hide();
    $("#mission15Play3").hide();
  }
  else if($('#missions3').val() == "2") {
    $("#mission1Play3").show();
    $("#mission2Play3").show();
    $("#mission3Play3").hide();
    $("#mission4Play3").hide();
    $("#mission5Play3").hide();
    $("#mission6Play3").hide();
    $("#mission7Play3").hide();
    $("#mission8Play3").hide();
    $("#mission9Play3").hide();
    $("#mission10Play3").hide();
    $("#mission11Play3").hide();
    $("#mission12Play3").hide();
    $("#mission13Play3").hide();
    $("#mission14Play3").hide();
    $("#mission15Play3").hide();
  }
  else if($('#missions3').val() == "3") {
    $("#mission1Play3").show();
    $("#mission2Play3").show();
    $("#mission3Play3").show();
    $("#mission4Play3").hide();
    $("#mission5Play3").hide();
    $("#mission6Play3").hide();
    $("#mission7Play3").hide();
    $("#mission8Play3").hide();
    $("#mission9Play3").hide();
    $("#mission10Play3").hide();
    $("#mission11Play3").hide();
    $("#mission12Play3").hide();
    $("#mission13Play3").hide();
    $("#mission14Play3").hide();
    $("#mission15Play3").hide();
  }
  else if($('#missions3').val() == "4") {
    $("#mission1Play3").show();
    $("#mission2Play3").show();
    $("#mission3Play3").show();
    $("#mission4Play3").show();
    $("#mission5Play3").hide();
    $("#mission6Play3").hide();
    $("#mission7Play3").hide();
    $("#mission8Play3").hide();
    $("#mission9Play3").hide();
    $("#mission10Play3").hide();
    $("#mission11Play3").hide();
    $("#mission12Play3").hide();
    $("#mission13Play3").hide();
    $("#mission14Play3").hide();
    $("#mission15Play3").hide();
  }
  else if($('#missions3').val() == "5") {
    $("#mission1Play3").show();
    $("#mission2Play3").show();
    $("#mission3Play3").show();
    $("#mission4Play3").show();
    $("#mission5Play3").show();
    $("#mission6Play3").hide();
    $("#mission7Play3").hide();
    $("#mission8Play3").hide();
    $("#mission9Play3").hide();
    $("#mission10Play3").hide();
    $("#mission11Play3").hide();
    $("#mission12Play3").hide();
    $("#mission13Play3").hide();
    $("#mission14Play3").hide();
    $("#mission15Play3").hide();
  }
  else if($('#missions3').val() == "6") {
    $("#mission1Play3").show();
    $("#mission2Play3").show();
    $("#mission3Play3").show();
    $("#mission4Play3").show();
    $("#mission5Play3").show();
    $("#mission6Play3").show();
    $("#mission7Play3").hide();
    $("#mission8Play3").hide();
    $("#mission9Play3").hide();
    $("#mission10Play3").hide();
    $("#mission11Play3").hide();
    $("#mission12Play3").hide();
    $("#mission13Play3").hide();
    $("#mission14Play3").hide();
    $("#mission15Play3").hide();
  }
  else if($('#missions3').val() == "7") {
    $("#mission1Play3").show();
    $("#mission2Play3").show();
    $("#mission3Play3").show();
    $("#mission4Play3").show();
    $("#mission5Play3").show();
    $("#mission6Play3").show();
    $("#mission7Play3").show();
    $("#mission8Play3").hide();
    $("#mission9Play3").hide();
    $("#mission10Play3").hide();
    $("#mission11Play3").hide();
    $("#mission12Play3").hide();
    $("#mission13Play3").hide();
    $("#mission14Play3").hide();
    $("#mission15Play3").hide();
  }
  else if($('#missions3').val() == "8") {
    $("#mission1Play3").show();
    $("#mission2Play3").show();
    $("#mission3Play3").show();
    $("#mission4Play3").show();
    $("#mission5Play3").show();
    $("#mission6Play3").show();
    $("#mission7Play3").show();
    $("#mission8Play3").show();
    $("#mission9Play3").hide();
    $("#mission10Play3").hide();
    $("#mission11Play3").hide();
    $("#mission12Play3").hide();
    $("#mission13Play3").hide();
    $("#mission14Play3").hide();
    $("#mission15Play3").hide();
  }
  else if($('#missions3').val() == "9") {
    $("#mission1Play3").show();
    $("#mission2Play3").show();
    $("#mission3Play3").show();
    $("#mission4Play3").show();
    $("#mission5Play3").show();
    $("#mission6Play3").show();
    $("#mission7Play3").show();
    $("#mission8Play3").show();
    $("#mission9Play3").show();
    $("#mission10Play3").hide();
    $("#mission11Play3").hide();
    $("#mission12Play3").hide();
    $("#mission13Play3").hide();
    $("#mission14Play3").hide();
    $("#mission15Play3").hide();
  }
  else if($('#missions3').val() == "10") {
    $("#mission1Play3").show();
    $("#mission2Play3").show();
    $("#mission3Play3").show();
    $("#mission4Play3").show();
    $("#mission5Play3").show();
    $("#mission6Play3").show();
    $("#mission7Play3").show();
    $("#mission8Play3").show();
    $("#mission9Play3").show();
    $("#mission10Play3").show();
    $("#mission11Play3").hide();
    $("#mission12Play3").hide();
    $("#mission13Play3").hide();
    $("#mission14Play3").hide();
    $("#mission15Play3").hide();
  }
  else if($('#missions3').val() == "11") {
    $("#mission1Play3").show();
    $("#mission2Play3").show();
    $("#mission3Play3").show();
    $("#mission4Play3").show();
    $("#mission5Play3").show();
    $("#mission6Play3").show();
    $("#mission7Play3").show();
    $("#mission8Play3").show();
    $("#mission9Play3").show();
    $("#mission10Play3").show();
    $("#mission11Play3").show();
    $("#mission12Play3").hide();
    $("#mission13Play3").hide();
    $("#mission14Play3").hide();
    $("#mission15Play3").hide();
  }
  else if($('#missions3').val() == "12") {
    $("#mission1Play3").show();
    $("#mission2Play3").show();
    $("#mission3Play3").show();
    $("#mission4Play3").show();
    $("#mission5Play3").show();
    $("#mission6Play3").show();
    $("#mission7Play3").show();
    $("#mission8Play3").show();
    $("#mission9Play3").show();
    $("#mission10Play3").show();
    $("#mission11Play3").show();
    $("#mission12Play3").show();
    $("#mission13Play3").hide();
    $("#mission14Play3").hide();
    $("#mission15Play3").hide();
  }
  else if($('#missions3').val() == "13") {
    $("#mission1Play3").show();
    $("#mission2Play3").show();
    $("#mission3Play3").show();
    $("#mission4Play3").show();
    $("#mission5Play3").show();
    $("#mission6Play3").show();
    $("#mission7Play3").show();
    $("#mission8Play3").show();
    $("#mission9Play3").show();
    $("#mission10Play3").show();
    $("#mission11Play3").show();
    $("#mission12Play3").show();
    $("#mission13Play3").show();
    $("#mission14Play3").hide();
    $("#mission15Play3").hide();
  }
  else if($('#missions3').val() == "14") {
    $("#mission1Play3").show();
    $("#mission2Play3").show();
    $("#mission3Play3").show();
    $("#mission4Play3").show();
    $("#mission5Play3").show();
    $("#mission6Play3").show();
    $("#mission7Play3").show();
    $("#mission8Play3").show();
    $("#mission9Play3").show();
    $("#mission10Play3").show();
    $("#mission11Play3").show();
    $("#mission12Play3").show();
    $("#mission13Play3").show();
    $("#mission14Play3").show();
    $("#mission15Play3").hide();
  }
  else if($('#missions3').val() == "15") {
    $("#mission1Play3").show();
    $("#mission2Play3").show();
    $("#mission3Play3").show();
    $("#mission4Play3").show();
    $("#mission5Play3").show();
    $("#mission6Play3").show();
    $("#mission7Play3").show();
    $("#mission8Play3").show();
    $("#mission9Play3").show();
    $("#mission10Play3").show();
    $("#mission11Play3").show();
    $("#mission12Play3").show();
    $("#mission13Play3").show();
    $("#mission14Play3").show();
    $("#mission15Play3").show();
  }
  else {
    $("#mission1Play3").hide();
    $("#mission2Play3").hide();
    $("#mission3Play3").hide();
    $("#mission4Play3").hide();
    $("#mission5Play3").hide();
    $("#mission6Play3").hide();
    $("#mission7Play3").hide();
    $("#mission8Play3").hide();
    $("#mission9Play3").hide();
    $("#mission10Play3").hide();
    $("#mission11Play3").hide();
    $("#mission12Play3").hide();
    $("#mission13Play3").hide();
    $("#mission14Play3").hide();
    $("#mission15Play3").hide();
  }
}


function player4Missions()
{
  $("#secondPart4").show();
  
  if($('#missions4').val() == "1") {
    $("#mission1Play4").show();
    $("#mission2Play4").hide();
    $("#mission3Play4").hide();
    $("#mission4Play4").hide();
    $("#mission5Play4").hide();
    $("#mission6Play4").hide();
    $("#mission7Play4").hide();
    $("#mission8Play4").hide();
    $("#mission9Play4").hide();
    $("#mission10Play4").hide();
    $("#mission11Play4").hide();
    $("#mission12Play4").hide();
    $("#mission13Play4").hide();
    $("#mission14Play4").hide();
    $("#mission15Play4").hide();
  }
  else if($('#missions4').val() == "2") {
    $("#mission1Play4").show();
    $("#mission2Play4").show();
    $("#mission3Play4").hide();
    $("#mission4Play4").hide();
    $("#mission5Play4").hide();
    $("#mission6Play4").hide();
    $("#mission7Play4").hide();
    $("#mission8Play4").hide();
    $("#mission9Play4").hide();
    $("#mission10Play4").hide();
    $("#mission11Play4").hide();
    $("#mission12Play4").hide();
    $("#mission13Play4").hide();
    $("#mission14Play4").hide();
    $("#mission15Play4").hide();
  }
  else if($('#missions4').val() == "3") {
    $("#mission1Play4").show();
    $("#mission2Play4").show();
    $("#mission3Play4").show();
    $("#mission4Play4").hide();
    $("#mission5Play4").hide();
    $("#mission6Play4").hide();
    $("#mission7Play4").hide();
    $("#mission8Play4").hide();
    $("#mission9Play4").hide();
    $("#mission10Play4").hide();
    $("#mission11Play4").hide();
    $("#mission12Play4").hide();
    $("#mission13Play4").hide();
    $("#mission14Play4").hide();
    $("#mission15Play4").hide();
  }
  else if($('#missions4').val() == "4") {
    $("#mission1Play4").show();
    $("#mission2Play4").show();
    $("#mission3Play4").show();
    $("#mission4Play4").show();
    $("#mission5Play4").hide();
    $("#mission6Play4").hide();
    $("#mission7Play4").hide();
    $("#mission8Play4").hide();
    $("#mission9Play4").hide();
    $("#mission10Play4").hide();
    $("#mission11Play4").hide();
    $("#mission12Play4").hide();
    $("#mission13Play4").hide();
    $("#mission14Play4").hide();
    $("#mission15Play4").hide();
  }
  else if($('#missions4').val() == "5") {
    $("#mission1Play4").show();
    $("#mission2Play4").show();
    $("#mission3Play4").show();
    $("#mission4Play4").show();
    $("#mission5Play4").show();
    $("#mission6Play4").hide();
    $("#mission7Play4").hide();
    $("#mission8Play4").hide();
    $("#mission9Play4").hide();
    $("#mission10Play4").hide();
    $("#mission11Play4").hide();
    $("#mission12Play4").hide();
    $("#mission13Play4").hide();
    $("#mission14Play4").hide();
    $("#mission15Play4").hide();
  }
  else if($('#missions4').val() == "6") {
    $("#mission1Play4").show();
    $("#mission2Play4").show();
    $("#mission3Play4").show();
    $("#mission4Play4").show();
    $("#mission5Play4").show();
    $("#mission6Play4").show();
    $("#mission7Play4").hide();
    $("#mission8Play4").hide();
    $("#mission9Play4").hide();
    $("#mission10Play4").hide();
    $("#mission11Play4").hide();
    $("#mission12Play4").hide();
    $("#mission13Play4").hide();
    $("#mission14Play4").hide();
    $("#mission15Play4").hide();
  }
  else if($('#missions4').val() == "7") {
    $("#mission1Play4").show();
    $("#mission2Play4").show();
    $("#mission3Play4").show();
    $("#mission4Play4").show();
    $("#mission5Play4").show();
    $("#mission6Play4").show();
    $("#mission7Play4").show();
    $("#mission8Play4").hide();
    $("#mission9Play4").hide();
    $("#mission10Play4").hide();
    $("#mission11Play4").hide();
    $("#mission12Play4").hide();
    $("#mission13Play4").hide();
    $("#mission14Play4").hide();
    $("#mission15Play4").hide();
  }
  else if($('#missions4').val() == "8") {
    $("#mission1Play4").show();
    $("#mission2Play4").show();
    $("#mission3Play4").show();
    $("#mission4Play4").show();
    $("#mission5Play4").show();
    $("#mission6Play4").show();
    $("#mission7Play4").show();
    $("#mission8Play4").show();
    $("#mission9Play4").hide();
    $("#mission10Play4").hide();
    $("#mission11Play4").hide();
    $("#mission12Play4").hide();
    $("#mission13Play4").hide();
    $("#mission14Play4").hide();
    $("#mission15Play4").hide();
  }
  else if($('#missions4').val() == "9") {
    $("#mission1Play4").show();
    $("#mission2Play4").show();
    $("#mission3Play4").show();
    $("#mission4Play4").show();
    $("#mission5Play4").show();
    $("#mission6Play4").show();
    $("#mission7Play4").show();
    $("#mission8Play4").show();
    $("#mission9Play4").show();
    $("#mission10Play4").hide();
    $("#mission11Play4").hide();
    $("#mission12Play4").hide();
    $("#mission13Play4").hide();
    $("#mission14Play4").hide();
    $("#mission15Play4").hide();
  }
  else if($('#missions4').val() == "10") {
    $("#mission1Play4").show();
    $("#mission2Play4").show();
    $("#mission3Play4").show();
    $("#mission4Play4").show();
    $("#mission5Play4").show();
    $("#mission6Play4").show();
    $("#mission7Play4").show();
    $("#mission8Play4").show();
    $("#mission9Play4").show();
    $("#mission10Play4").show();
    $("#mission11Play4").hide();
    $("#mission12Play4").hide();
    $("#mission13Play4").hide();
    $("#mission14Play4").hide();
    $("#mission15Play4").hide();
  }
  else if($('#missions4').val() == "11") {
    $("#mission1Play4").show();
    $("#mission2Play4").show();
    $("#mission3Play4").show();
    $("#mission4Play4").show();
    $("#mission5Play4").show();
    $("#mission6Play4").show();
    $("#mission7Play4").show();
    $("#mission8Play4").show();
    $("#mission9Play4").show();
    $("#mission10Play4").show();
    $("#mission11Play4").show();
    $("#mission12Play4").hide();
    $("#mission13Play4").hide();
    $("#mission14Play4").hide();
    $("#mission15Play4").hide();
  }
  else if($('#missions4').val() == "12") {
    $("#mission1Play4").show();
    $("#mission2Play4").show();
    $("#mission3Play4").show();
    $("#mission4Play4").show();
    $("#mission5Play4").show();
    $("#mission6Play4").show();
    $("#mission7Play4").show();
    $("#mission8Play4").show();
    $("#mission9Play4").show();
    $("#mission10Play4").show();
    $("#mission11Play4").show();
    $("#mission12Play4").show();
    $("#mission13Play4").hide();
    $("#mission14Play4").hide();
    $("#mission15Play4").hide();
  }
  else if($('#missions4').val() == "13") {
    $("#mission1Play4").show();
    $("#mission2Play4").show();
    $("#mission3Play4").show();
    $("#mission4Play4").show();
    $("#mission5Play4").show();
    $("#mission6Play4").show();
    $("#mission7Play4").show();
    $("#mission8Play4").show();
    $("#mission9Play4").show();
    $("#mission10Play4").show();
    $("#mission11Play4").show();
    $("#mission12Play4").show();
    $("#mission13Play4").show();
    $("#mission14Play4").hide();
    $("#mission15Play4").hide();
  }
  else if($('#missions4').val() == "14") {
    $("#mission1Play4").show();
    $("#mission2Play4").show();
    $("#mission3Play4").show();
    $("#mission4Play4").show();
    $("#mission5Play4").show();
    $("#mission6Play4").show();
    $("#mission7Play4").show();
    $("#mission8Play4").show();
    $("#mission9Play4").show();
    $("#mission10Play4").show();
    $("#mission11Play4").show();
    $("#mission12Play4").show();
    $("#mission13Play4").show();
    $("#mission14Play4").show();
    $("#mission15Play4").hide();
  }
  else if($('#missions4').val() == "15") {
    $("#mission1Play4").show();
    $("#mission2Play4").show();
    $("#mission3Play4").show();
    $("#mission4Play4").show();
    $("#mission5Play4").show();
    $("#mission6Play4").show();
    $("#mission7Play4").show();
    $("#mission8Play4").show();
    $("#mission9Play4").show();
    $("#mission10Play4").show();
    $("#mission11Play4").show();
    $("#mission12Play4").show();
    $("#mission13Play4").show();
    $("#mission14Play4").show();
    $("#mission15Play4").show();
  }
  else {
    $("#mission1Play4").hide();
    $("#mission2Play4").hide();
    $("#mission3Play4").hide();
    $("#mission4Play4").hide();
    $("#mission5Play4").hide();
    $("#mission6Play4").hide();
    $("#mission7Play4").hide();
    $("#mission8Play4").hide();
    $("#mission9Play4").hide();
    $("#mission10Play4").hide();
    $("#mission11Play4").hide();
    $("#mission12Play4").hide();
    $("#mission13Play4").hide();
    $("#mission14Play4").hide();
    $("#mission15Play4").hide();
  }
}


function player5Missions()
{
  $("#secondPart5").show();
  
  if($('#missions5').val() == "1") {
    $("#mission1Play5").show();
    $("#mission2Play5").hide();
    $("#mission3Play5").hide();
    $("#mission4Play5").hide();
    $("#mission5Play5").hide();
    $("#mission6Play5").hide();
    $("#mission7Play5").hide();
    $("#mission8Play5").hide();
    $("#mission9Play5").hide();
    $("#mission10Play5").hide();
    $("#mission11Play5").hide();
    $("#mission12Play5").hide();
    $("#mission13Play5").hide();
    $("#mission14Play5").hide();
    $("#mission15Play5").hide();
  }
  else if($('#missions5').val() == "2") {
    $("#mission1Play5").show();
    $("#mission2Play5").show();
    $("#mission3Play5").hide();
    $("#mission4Play5").hide();
    $("#mission5Play5").hide();
    $("#mission6Play5").hide();
    $("#mission7Play5").hide();
    $("#mission8Play5").hide();
    $("#mission9Play5").hide();
    $("#mission10Play5").hide();
    $("#mission11Play5").hide();
    $("#mission12Play5").hide();
    $("#mission13Play5").hide();
    $("#mission14Play5").hide();
    $("#mission15Play5").hide();
  }
  else if($('#missions5').val() == "3") {
    $("#mission1Play5").show();
    $("#mission2Play5").show();
    $("#mission3Play5").show();
    $("#mission4Play5").hide();
    $("#mission5Play5").hide();
    $("#mission6Play5").hide();
    $("#mission7Play5").hide();
    $("#mission8Play5").hide();
    $("#mission9Play5").hide();
    $("#mission10Play5").hide();
    $("#mission11Play5").hide();
    $("#mission12Play5").hide();
    $("#mission13Play5").hide();
    $("#mission14Play5").hide();
    $("#mission15Play5").hide();
  }
  else if($('#missions5').val() == "4") {
    $("#mission1Play5").show();
    $("#mission2Play5").show();
    $("#mission3Play5").show();
    $("#mission4Play5").show();
    $("#mission5Play5").hide();
    $("#mission6Play5").hide();
    $("#mission7Play5").hide();
    $("#mission8Play5").hide();
    $("#mission9Play5").hide();
    $("#mission10Play5").hide();
    $("#mission11Play5").hide();
    $("#mission12Play5").hide();
    $("#mission13Play5").hide();
    $("#mission14Play5").hide();
    $("#mission15Play5").hide();
  }
  else if($('#missions5').val() == "5") {
    $("#mission1Play5").show();
    $("#mission2Play5").show();
    $("#mission3Play5").show();
    $("#mission4Play5").show();
    $("#mission5Play5").show();
    $("#mission6Play5").hide();
    $("#mission7Play5").hide();
    $("#mission8Play5").hide();
    $("#mission9Play5").hide();
    $("#mission10Play5").hide();
    $("#mission11Play5").hide();
    $("#mission12Play5").hide();
    $("#mission13Play5").hide();
    $("#mission14Play5").hide();
    $("#mission15Play5").hide();
  }
  else if($('#missions5').val() == "6") {
    $("#mission1Play5").show();
    $("#mission2Play5").show();
    $("#mission3Play5").show();
    $("#mission4Play5").show();
    $("#mission5Play5").show();
    $("#mission6Play5").show();
    $("#mission7Play5").hide();
    $("#mission8Play5").hide();
    $("#mission9Play5").hide();
    $("#mission10Play5").hide();
    $("#mission11Play5").hide();
    $("#mission12Play5").hide();
    $("#mission13Play5").hide();
    $("#mission14Play5").hide();
    $("#mission15Play5").hide();
  }
  else if($('#missions5').val() == "7") {
    $("#mission1Play5").show();
    $("#mission2Play5").show();
    $("#mission3Play5").show();
    $("#mission4Play5").show();
    $("#mission5Play5").show();
    $("#mission6Play5").show();
    $("#mission7Play5").show();
    $("#mission8Play5").hide();
    $("#mission9Play5").hide();
    $("#mission10Play5").hide();
    $("#mission11Play5").hide();
    $("#mission12Play5").hide();
    $("#mission13Play5").hide();
    $("#mission14Play5").hide();
    $("#mission15Play5").hide();
  }
  else if($('#missions5').val() == "8") {
    $("#mission1Play5").show();
    $("#mission2Play5").show();
    $("#mission3Play5").show();
    $("#mission4Play5").show();
    $("#mission5Play5").show();
    $("#mission6Play5").show();
    $("#mission7Play5").show();
    $("#mission8Play5").show();
    $("#mission9Play5").hide();
    $("#mission10Play5").hide();
    $("#mission11Play5").hide();
    $("#mission12Play5").hide();
    $("#mission13Play5").hide();
    $("#mission14Play5").hide();
    $("#mission15Play5").hide();
  }
  else if($('#missions5').val() == "9") {
    $("#mission1Play5").show();
    $("#mission2Play5").show();
    $("#mission3Play5").show();
    $("#mission4Play5").show();
    $("#mission5Play5").show();
    $("#mission6Play5").show();
    $("#mission7Play5").show();
    $("#mission8Play5").show();
    $("#mission9Play5").show();
    $("#mission10Play5").hide();
    $("#mission11Play5").hide();
    $("#mission12Play5").hide();
    $("#mission13Play5").hide();
    $("#mission14Play5").hide();
    $("#mission15Play5").hide();
  }
  else if($('#missions5').val() == "10") {
    $("#mission1Play5").show();
    $("#mission2Play5").show();
    $("#mission3Play5").show();
    $("#mission4Play5").show();
    $("#mission5Play5").show();
    $("#mission6Play5").show();
    $("#mission7Play5").show();
    $("#mission8Play5").show();
    $("#mission9Play5").show();
    $("#mission10Play5").show();
    $("#mission11Play5").hide();
    $("#mission12Play5").hide();
    $("#mission13Play5").hide();
    $("#mission14Play5").hide();
    $("#mission15Play5").hide();
  }
  else if($('#missions5').val() == "11") {
    $("#mission1Play5").show();
    $("#mission2Play5").show();
    $("#mission3Play5").show();
    $("#mission4Play5").show();
    $("#mission5Play5").show();
    $("#mission6Play5").show();
    $("#mission7Play5").show();
    $("#mission8Play5").show();
    $("#mission9Play5").show();
    $("#mission10Play5").show();
    $("#mission11Play5").show();
    $("#mission12Play5").hide();
    $("#mission13Play5").hide();
    $("#mission14Play5").hide();
    $("#mission15Play5").hide();
  }
  else if($('#missions5').val() == "12") {
    $("#mission1Play5").show();
    $("#mission2Play5").show();
    $("#mission3Play5").show();
    $("#mission4Play5").show();
    $("#mission5Play5").show();
    $("#mission6Play5").show();
    $("#mission7Play5").show();
    $("#mission8Play5").show();
    $("#mission9Play5").show();
    $("#mission10Play5").show();
    $("#mission11Play5").show();
    $("#mission12Play5").show();
    $("#mission13Play5").hide();
    $("#mission14Play5").hide();
    $("#mission15Play5").hide();
  }
  else if($('#missions5').val() == "13") {
    $("#mission1Play5").show();
    $("#mission2Play5").show();
    $("#mission3Play5").show();
    $("#mission4Play5").show();
    $("#mission5Play5").show();
    $("#mission6Play5").show();
    $("#mission7Play5").show();
    $("#mission8Play5").show();
    $("#mission9Play5").show();
    $("#mission10Play5").show();
    $("#mission11Play5").show();
    $("#mission12Play5").show();
    $("#mission13Play5").show();
    $("#mission14Play5").hide();
    $("#mission15Play5").hide();
  }
  else if($('#missions5').val() == "14") {
    $("#mission1Play5").show();
    $("#mission2Play5").show();
    $("#mission3Play5").show();
    $("#mission4Play5").show();
    $("#mission5Play5").show();
    $("#mission6Play5").show();
    $("#mission7Play5").show();
    $("#mission8Play5").show();
    $("#mission9Play5").show();
    $("#mission10Play5").show();
    $("#mission11Play5").show();
    $("#mission12Play5").show();
    $("#mission13Play5").show();
    $("#mission14Play5").show();
    $("#mission15Play5").hide();
  }
  else if($('#missions5').val() == "15") {
    $("#mission1Play5").show();
    $("#mission2Play5").show();
    $("#mission3Play5").show();
    $("#mission4Play5").show();
    $("#mission5Play5").show();
    $("#mission6Play5").show();
    $("#mission7Play5").show();
    $("#mission8Play5").show();
    $("#mission9Play5").show();
    $("#mission10Play5").show();
    $("#mission11Play5").show();
    $("#mission12Play5").show();
    $("#mission13Play5").show();
    $("#mission14Play5").show();
    $("#mission15Play5").show();
  }
  else {
    $("#mission1Play5").hide();
    $("#mission2Play5").hide();
    $("#mission3Play5").hide();
    $("#mission4Play5").hide();
    $("#mission5Play5").hide();
    $("#mission6Play5").hide();
    $("#mission7Play5").hide();
    $("#mission8Play5").hide();
    $("#mission9Play5").hide();
    $("#mission10Play5").hide();
    $("#mission11Play5").hide();
    $("#mission12Play5").hide();
    $("#mission13Play5").hide();
    $("#mission14Play5").hide();
    $("#mission15Play5").hide();
  }
}
           
          

  
   

     
     
  
      
     
      
      
   
  
      
     
  
