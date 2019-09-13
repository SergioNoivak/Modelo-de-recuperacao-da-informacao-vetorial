

let nome_dos_termos =[ "Rio" ,"Brasil" ,"Olimpíada"]

let termos = [
    
    [0,1,0,2,1],
    
    [0,0,1,1,2],
    
    [2,0,3,0,3]
]



var calcular_frequencias_maximas = (termos)=>{

    let numero_documentos = termos[0].length
    let frequencias_maximas = []

    for(let i=0;i<numero_documentos;i++)    
        frequencias_maximas.push(0);
    

    for(let i=0;i<termos.length;i++){
        for(let j=0;j<numero_documentos;j++){
        if(Math.max(frequencias_maximas[j],termos[i][j])>frequencias_maximas[j])
            frequencias_maximas[j] = termos[i][j];
        }
    }    
    return frequencias_maximas;

};


var calcularTFs = (termos,frequencias_maximas)=>{
    let numero_documentos = termos[0].length    
    let TFs = []
    for(let i=0;i<termos.length;i++){

        let TFs_de_um_termo_nos_documentos = []
        for(let j=0;j<numero_documentos;j++)
            TFs_de_um_termo_nos_documentos.push(termos[i][j]/frequencias_maximas[j])   
        TFs.push(TFs_de_um_termo_nos_documentos);
    }

    return TFs;
}


let calcularIDFs = (termos)=>{

    let numero_documentos = termos[0].length    
    IDFs = []
    for(let i=0;i<termos.length;i++){
        let n = 0
        for(let j=0;j<numero_documentos;j++)
            n+=termos[i][j]
        
        IDFs.push(Math.log10(numero_documentos/n))    
    }
    return IDFs;
}



let calcularpesos = (TFs,IDFs)=>{
    let pesos_dos_termos = []
    let numero_documentos = termos[0].length    

    for(let i=0;i<termos.length;i++){
        let pesos = []
        for(let j=0;j<numero_documentos;j++){
            pesos.push(TFs[i][j]*IDFs[i])
        }
        pesos_dos_termos.push(pesos);
    }
    return pesos_dos_termos;
}


let frequencias_maximas = calcular_frequencias_maximas(termos);
let TFs =calcularTFs(termos, frequencias_maximas)
let IFDs = calcularIDFs(termos);

let i=0;

calcularpesos(TFs,IFDs).forEach(element => {
    console.log("Termo: ",nome_dos_termos[i])
    let j=0
    element.forEach(peso => {
        console.log("d",j+1,"_",nome_dos_termos[i]," = ",peso)
        j++
    });
    i++
});