let league = "PL";

$(function(){
  change_league();

  document.getElementById('button').addEventListener('click',()=>{
    if(league != "PL"){
      league = "PL";
    }
    console.log(league);
    alert("プレミアリーグに変更します。");
    document.getElementById('league-tbl').innerHTML = '';
    change_league();
  });

  document.getElementById('button1').addEventListener('click',()=>{
    if(league != "PD"){
      league = "PD";
    }
    console.log(league);
    alert("ラ・リーガに変更します。");
    document.getElementById('league-tbl').innerHTML = '';
    change_league();
  });

  document.getElementById('button2').addEventListener('click',()=>{
    if(league != "SA"){
      league = "SA";
    }
    console.log(league);
    alert("セリエAに変更します。");
    document.getElementById('league-tbl').innerHTML = '';
    change_league();
  });

  document.getElementById('button3').addEventListener('click',()=>{
    if(league != "BL1"){
      league = "BL1";
    }
    console.log(league);
    alert("ブンデスリーガに変更します。");
    document.getElementById('league-tbl').innerHTML = '';
    change_league();
  });


 function change_league() {

  $.ajaxSetup({
    headers : {"X-Auth-Token" : " d02282a66a3b43198e1f4c7deb0c0eaa "}
  });

  $.getJSON("https://api.football-data.org/v2/competitions/" + league + "/standings", function (respons) {
    standings = respons.standings[0].table;

    standings.forEach(function(standing){
      document.getElementById('league-tbl').innerHTML +=
      '<tr align="center">' + '<td>' + standing.position + '</td>' + '<td>' 
      + '<div style = "text-align: left"><div style="display: table-cell; vertical-align: middle;"><img src="' + standing.team.crestUrl 
      + '" height="24"></div><div style="display: table-cell; vertical-align: middle;">' + standing.team.name + '</div></div></td>'
      + '<td>' + standing.playedGames + '</td>' 
      + '<td>' + standing.won + '</td>'
      + '<td>' + standing.draw + '</td>' 
      + '<td>' + standing.lost + '</td>'
      + '<td>' + standing.points + '</td>' 
      + '</tr>'
    });
  });
 };
});