function load(){
    document.getElementById('fileInput').addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (!file) {
          return;
        }
    
        const reader = new FileReader();

        reader.readAsText(file);
    });
}

function isInt(value) {
    if (isNaN(value)) {
      return false;
    }
    var x = parseFloat(value);
    return (x | 0) === x;
  }

function findCalibration(data){
    let tab=data.split(/\n/)
    let pass=[]
    tab.forEach(element => {
        let i = 0;
        while (!isInt(element[i])){
            ++i
        }
        pass.push(element[i])
        i = length(element)
        while (!isInt(element[i])){
            i--
        }
        pass[-1]+=element[i]
    });
    return pass
}

function findSum(pass){
    let sum = 0
    pass.forEach(cal=>{
        sum+=+cal
    })
    return sum
}

let data=load()
let pass=findCalibration(data)
let sum=findSum(pass)
console.log(sum)