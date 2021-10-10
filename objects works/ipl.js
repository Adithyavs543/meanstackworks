var point_table=[
    {t_name:"csk",pld:10,won:8,loss:2,pts:16},
    {t_name:"dc",pld:11,won:8,loss:3,pts:16},
    {t_name:"rcb",pld:11,won:7,loss:4,pts:14},
    {t_name:"kkr",pld:11,won:5,loss:6,pts:10},
    {t_name:"mi",pld:11,won:5,loss:6,pts:10},
    {t_name:"pkb",pld:11,won:4,loss:7,pts:8},
    {t_name:"rr",pld:11,won:4,loss:7,pts:8},
    {t_name:"srh",pld:10,won:2,loss:8,pts:4}
    
]//print no of teamplaying
// console.log(point_table.length);

//print team names
// point_table.map(team=>team.t_name).forEach(team=>console.log(team))

// is kkr playing 
// var isplaying=point_table.some(team=>team.t_name=="kkr")
// console.log(isplaying);

// sort team wrt loss desc
// point_table.sort((team1,team2)=>team2.loss-team1.loss).forEach(team=>console.log(team))

// print team detais have max points
// var max=point_table.reduce((team1,team2)=>team1.pts>team2.pts?team1:team2)
// console.log(max);


var pts_count={}
for(let team of point_table){
    if(team.pts in pts_count){
        pts_count[team.pts].push(team.t_name)
    }
    else{
        pts_count[team.pts]=[team.t_name]
    }
}
console.log(pts_count);
