export interface imagen{
    nombreAve: String,
    imagen: tipoImagen[]
}

interface tipoImagen{
    imagen: String,
    nombreArchivo: String
}

export interface grupo{
    posicion: number
    nombre: String,
    ocurrencias: number
}