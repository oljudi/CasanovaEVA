export interface RegistroCompletoInterface{
//Folio y tipo de servicio
    id?:string;
    tipo?:string;
//Datos de Vehiculo
    placa?:string;
    vehiculo?:string;
    marca?:string;
    combustible?:string;
    numserie?:string;
    kilometraje?:number;
    anio?:number;
//Cliente
    NombreCliente?:string;
    CorreoCliente?:string;
    NumeroCliente?:string;
    cliente?:string;
//Taller
    fechaent?:string;
    fechasal?:string;
    tarjetacirculacion?:string;
    llantas?:string;
    ordenservicio?:string;
    antena?:string;
    llantaref?:string;
    vestiduras?:string;
    controlllave?:string;
    gato?:string;
    tapetes?:string;
    llavetuerc?:string;
    taponllanta?:string;
    extintor?:string;
    kitherram?:string;
    segurorueda?:string;
    senal?:string;
    placas?:string;
    tapongas?:string;
    radio?:string;
    Administrador?:string;
    asesor?:string;
    Diagnostico?:string;
    Solicta?:string;
    Estatus?:string;
    Tecnico?:string;
    Trabajorealizado?:string;
    
    
    comentarios?:string;
}