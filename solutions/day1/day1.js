async function load(){
    document.getElementById('input-file').addEventListener('change', function() {
        var file = this.files[0];
    
        if (file) {
            var reader = new FileReader();
    
            // Quand le fichier est chargé
            reader.onload = function(e) {
                // Le contenu du fichier est disponible dans e.target.result
                console.log('Fichier chargé:', e.target.result);
    
                let pass=findCalibration(e.target.result)
                let sum=findSum(pass)
                console.log(sum)    
            };
    
            // Lancer la lecture du fichier
            reader.readAsText(file);
        }
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
        console.log(element)
        if (element != "")
        {
            let i = 0;
            while (!isInt(element[i])){
                ++i
            }
            pass.push(element[i])

            i = element.length-1
            while (!isInt(element[i])){
                i--
            }

            pass[pass.length-1]+= element[i]
        }
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

let data= await load()
