var weather=[
    {district:"tvm",temp:30},
    {district:"tvm",temp:31},
    {district:"apy",temp:24},
    {district:"ktm",temp:20},
    {district:"idk",temp:19},
    {district:"ekm",temp:31},
    {district:"tsr",temp:29},
    {district:"mpm",temp:30},
    
    {district:"apy",temp:25},
    {district:"ktm",temp:21},
    {district:"idk",temp:18},
    {district:"ekm",temp:30},
    {district:"tsr",temp:20},
    {district:"mpm",temp:31}
]

//tvm:30,apy:24

var forecast={}
for(data of weather){
     //data={district:"tvm",temp:31}
     let district_name=data.district//tvm
     let cur_temp=data.temp //31
     if(district_name in forecast){  //tvm in forecast
        let old_temp=forecast[district_name] //30
        if(cur_temp > old_temp){   //31>30
            forecast[district_name]=cur_temp
        }

     }
     else{
         forecast[district_name]=cur_temp
     }
}
//console.log(forecast);
Object.entries(forecast).sort(temp1,)

//sort the sales report based on total collection