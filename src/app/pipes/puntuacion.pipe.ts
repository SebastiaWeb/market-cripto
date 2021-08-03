import { Pipe, PipeTransform } from "@angular/core";

@Pipe({

    name: 'puntuacion'

})

export class Puntuacion implements PipeTransform {
    transform(valor: any) {
        if (valor != null) {
            valor = valor.toString()
            let entero;
            if (this.checkDecimal(valor)) {
                let numeros = valor.split('.');
                entero = +numeros[0];

                if (entero >= 1000) {

                    return this.puntuar(entero.toString()) + '.' + numeros[1]

                } else {
                    return valor
                }

            } else {

                let numero = +valor;
                if (numero >= 0) {

                    return this.puntuar(valor)
                } else {
                    return valor
                }

            }
        }
    }

    public checkDecimal(valor: any) {
        valor = valor.toString()
        let check = (valor.indexOf('.') > 0) ? true : false;
        return check
    }


    public puntuar(valor: string) {

        let residuo = valor.length % 3;
        let temporal: any = "";
        if (residuo != 0) {

            let numeroPrincipal = valor.slice(0, residuo)
            let numeros = valor.slice(residuo);
            let unidad = 3;
            let unidades: any = [];
            let j = 0;

            for (let i = 0; i < numeros.length; i++) {
                if (i < unidad) {
                    temporal += numeros[i];

                    if (i == unidad - 1) {
                        unidad += 3;
                        unidades[j] = temporal;
                        temporal = "";
                        j++;
                    }
                }
            }

            temporal = "";
            for (let i = 0; i < unidades.length; i++) {
                temporal += ',' + unidades[i];
            }

            return numeroPrincipal + temporal

        } else {
            let unidad = 3;
            let unidades: any = [];
            let j = 0;

            for (let i = 0; i < valor.length; i++) {
                if (i < unidad) {
                    temporal += valor[i];

                    if (i == unidad - 1) {
                        unidad += 3;
                        unidades[j] = temporal;
                        temporal = "";
                        j++;
                    }
                }
            }

            temporal = "";
            for (let i = 0; i < unidades.length; i++) {
                if (i != unidades.length - 1) {
                    temporal += unidades[i] + ',';
                } else {
                    temporal += unidades[i];
                }
            }
            return temporal

        }
    }
}