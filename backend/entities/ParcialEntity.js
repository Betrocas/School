class Parcial{
    constructor(fecha_inicio,fecha_final) {
        this.id = -1;
    }
    setFI(fi){
        let fecha =  new Data(fi);
        if(isNaN(fecha.getDate()))throw "Fecha formato incorrecto";
        let max = ++((new Date()).getFullYear());
        if(!(fecha.getFullYear()<=max)){
            throw "Fecha invalida";
        }
        this.fecha_inicio = fecha;
    }
    setFF(){
        let fecha =  new Data(ff);
        if(isNaN(fecha.getDate()))throw "Fecha formato incorrecto";
        let min = this.fecha_inicio.getFullYear();
        let max = min+1;
        if(!(fecha.getFullYear()>=min && fecha.getFullYear()<=max && fecha.getMonth()>this.fecha_inicio.getMonth())){
            throw "Fecha invalida";
        }
        this.fecha_final = fecha;
    }

}