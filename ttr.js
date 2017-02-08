$(document).ready(function() {
      
      $("calcOne").click(getTotalOne);
      $("calcTwo").click(getTotalTwo);
      $("calcThree").click(getTotalThree);
      $("calcFour").click(getTotalFour);
      $("calcFive").click(getTotalFive);
      //$("values").click(rest);
      $("val").click(rest2);
});

function rest()
{
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
  
    $("#total1").val(0);
    
}
function rest2()
{
    $("#mission1Play1").hide();
    
  
    $("#total1").val(0);
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
           
          

  
   

     
     
  
      
     
      
      
   
  
      
     
  
