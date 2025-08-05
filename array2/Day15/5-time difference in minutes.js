// !  calculate the time difference in minutes


function timeDifference(timeData){
    // console.log(timeData);
    
    let [start,end] = timeData.split("-")
    let t1 = timeInMinutes(start)
    let t2 = timeInMinutes(end)
     if((t2-t1)<0){
        return 1440+(t2-t1)
     }else{
        return t2-t1
     }
}

function timeInMinutes(t){
    // console.log(t);
    
    let [hr,rest] = t.split(':')
    hr = Number(hr)
    console.log(hr);
    
    let m = Number(rest.slice(0,2))
    let  format = rest.slice(2);
    format.toLowerCase()
    if(hr==12 && format == 'am'){
        hr = 0 
    }
    if(hr!=12 && format == 'pm'){
        hr+=12;
    }
    let  minutes = hr*60 + m
    return minutes;
}

let timeData = "12:25pm-03:20pm"
console.log(timeDifference(timeData))