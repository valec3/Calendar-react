import dayjs from 'dayjs';
import { es } from "dayjs/locale/es";

dayjs.locale("es");

export function getDaysMonth(month = dayjs().month()) {
    // Redondea el mes al valor entero más cercano
    month = Math.floor(month);
    
    // Obtiene el año actual
    const year = dayjs().year();
    
    // Obtiene el día de la semana del primer día del mes
    const firstDay = dayjs(new Date(year, month, 1)).day();
    
    // Inicializa la variable para llevar un seguimiento de los días del mes actual
    let currentMonth = 0 - firstDay;
    // Crea una matriz de días con un tamaño de 5 filas y 7 columnas
    const daysMatrix = new Array(5).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
            currentMonth++;            
        // Crea un objeto dayjs para representar cada día del mes
        return dayjs(new Date(year, month, currentMonth));
        });
    });
    
    return daysMatrix;
}
