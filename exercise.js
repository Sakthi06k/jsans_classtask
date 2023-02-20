<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Js cls task 1</title>
</head>
<body>
    <script>
        // diffrence between foreach, map, filter and reduce
        //use map to create a new array by changing square numbers array
        var arr=[1,2,3,4,5]
        var arr1=[];
        arr.map((i,j)=>{
            arr1.push(i*i);
        })
        console.log(arr1);
        //use filter to filter out country starts with "e"
        var country=["england","india","europe"]
        var e=country.filter((i)=>{
            return i.startsWith('e');
        })
        console.log(e);

        //declare a function called getStringLists which takes an array as a parameter and returns array only with string items.
        const getStringLists=(i)=>{
            return console.log(i.toString());
        }
        getStringLists(country);
       //use reduce to cancadinate all the countries and to produce this sentence: Estiona, finland, sweden, denmark, norway and iceland
       //find out which letter is used many times as initial for a country name from the countries array(eg.finland,figi,france etc.,)
       var country2=['france','finland','figi','iceland','india','srilanka','america'];
       var hashmap=[];
       var j=0;
       for(var aa=0;aa<country2.length;aa++){
        hashmap[country2[aa].charCodeAt(0)]++
       }
       var max=-1;
       var t=0;
       for(var i=0;i<hashmap.length;i++){
        if(country2[i]>max);
        max=i;
       }
       //now print the value starts with max the max is in ascii value
       console.log(hashmap);
       //assain the elements
    </script>
</body>
</html>
