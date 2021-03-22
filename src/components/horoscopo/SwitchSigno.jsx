export function switchSigno(mes, dia){
    switch (mes) {
        case "ene":
            return (dia >= "21" ? 'Acuario' : 'Capricornio');
        case "feb":
            return (dia >= "19" ? 'Piscis' : 'Acuario');

        case "mar":
            return (dia >= "21" ? 'Aries' : 'Piscis');

        case "abr":
            return (dia >= "21" ? 'Tauro' : 'Aries');

        case "may":
            return (dia >= "22" ? 'Géminis' : 'Tauro');

        case "jun":
            return (dia >= "22" ? 'Cáncer' : 'Géminis');

        case "jul":
            return (dia >= "23" ? 'Leo' : 'Cáncer');

        case "ago":
            return (dia >= "24" ? 'Virgo' : 'Leo');

        case "sep":
            return (dia >= "24" ? 'Libra' : 'Virgo');

        case "oct":
            return (dia >= "24" ? 'Escorpión' : 'Libra');

        case "nov":
            return (dia >= "23" ? 'Sagitario' : 'Escorpión');

        default:
            return (dia >= "22" ? 'Capricornio' : 'Sagitario');

    }
}