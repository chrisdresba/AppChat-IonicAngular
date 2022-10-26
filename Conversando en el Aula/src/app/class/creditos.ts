export class Creditos {
    credito: number;
    creditoDiez: number;
    creditoCincuenta: number;
    creditoCien: number;
    usuario: string;
    id:string;

    constructor() {
    }
    iniciar(usuario : string) {
        this.credito = 0;
        this.creditoDiez = 0;
        this.creditoCincuenta = 0;
        this.creditoCien = 0;
        this.usuario = usuario;
    }
}
