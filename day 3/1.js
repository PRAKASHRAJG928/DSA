// ! looping statements

// given a file name with extension ,find the type of file.

let file = "index.py"

let res =file.split(".")

let exetension = res[res.length-1]

switch(exetension)
{

    case "html" : 
        console.log("this is html file ");
    break;
    case "css" : 
        console.log("this is css file ");
    break;
    case "js" : 
        console.log("this is javascript file ");
    break;
    case "jsx":
        console.log("this is reactjs file");
    break;
    default:
        console.log(`${exetension }`);



}