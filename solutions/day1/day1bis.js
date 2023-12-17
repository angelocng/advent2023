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

function toNumber(string){
    let dict={'one':'1','two':'2','three':'3','four':'4','five':'5','six':'6','seven':'7','eight':'8','nine':'9'}
    if (string in dict){
        return dict[string]
    }
    return string
}

function findCalibration(data){
    const regex = /(?=(([0-9])|(one)|(two)|(three)|(four)|(five)|(six)|(seven)|(eight)|(nine)))/g
    let tab=data.split(/\n/)
    let pass=[]
    let match=[]
    tab.forEach(element => {
        if (element != "")
        {
            match = [...element.matchAll(regex)].map(match => match[1])

            pass.push(toNumber(match[0]))


            if (match.length==1){
                pass[pass.length-1]+= toNumber(match[0])
                
            }
            else{
                pass[pass.length-1]+= toNumber(match[match.length-1])
            }
        }
        
    });

    return pass
}

function findSum(pass){
    let sum = 0
    pass.forEach(cal=>{
        console.log(cal)
        sum+=+cal
        console.log(sum)
    })
    return sum
}

let data= await load()
