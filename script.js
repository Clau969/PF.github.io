const pizzas = {
    pack3: {
        nombre: "3-PACK",
        descripcion: "3 Masas de Pizza Precocida",
        peso: "600 grs",
        ingredientes: "Harina de trigo (hierro 55 mg/kg, niacina 48 mg/kg, tiamina 5 mg/kg, riboflavina 4 mg/kg y ácido fólico 1.2 mg/kg), levadura, sal, azúcar y agua."
    },

    mozza: {
        nombre: "Mozza",
        descripcion: "Masa de Pizza Precocida con: Salsa y Queso Mozzarella",
        peso: "410 grs",
        ingredientes: "Harina de trigo (hierro 55 mg/kg, niacina 48 mg/kg, tiamina 5 mg/kg, riboflavina 4 mg/kg y acido folico 1.2 mg/kg), levadura, sal, azuÌcar, agua, salsa de tomate (pasta de tomate, estabilizante (sin 415), acidulante (sin 330), conservante (sin 202, 211), colorantes (sin 150, sin 129)) y queso mozzarella (leche pasteurizada de vaca, regulador de acidez (sin 330), agente endurecedor (sin 509), cuajo y cultivos laÌcteos. cobertura: sustancia conservadora (sin 235))."
    },

    ame: {
        nombre: "Ame",
        descripcion: "Masa de Pizza Precocida con: Salsa, Queso Mozzarella y Jamón",
        peso: "460 grs",
        ingredientes: "Harina de trigo (hierro 55 mg/kg, niacina 48 mg/kg, tiamina 5 mg/kg, riboflavina 4 mg/kg y acido folico 1.2 mg/kg), levadura, sal, azuÌcar, agua, salsa de tomate (pasta de tomate, estabilizante (sin 415), acidulante (sin 330), conservante (sin 202, 211), colorantes (sin 150, sin 129)), queso mozzarella (leche pasteurizada de vaca, regulador de acidez (sin 330), agente endurecedor (sin 509), cuajo y cultivos laÌcteos. cobertura: sustancia conservadora (sin 235)) y jamón (carne de cerdo, carne de pavo, agua, proteina de soya, almidon, sal, almidon de maiz modificado, agentes gelificantes sin 407a, sin 425, glucosa, dextrosa, acentuadores de sabor sin 508, sin 620, sin 627, sin 631, aromas naturales y artificiales, maltodextrina de maiz, estabilizadores sin 471, sin 4540(iii), sin 450(v), sin 451(i), sin 451(ii), sin 450(i), sustancia conservadora sin 262(i), antioxidante sin 316, reguladores de la acidez sin 270, sin 262(ii) agente de retencion de color sin 250 y colorante sin 120)."
    },

    hawa: {
        nombre: "Hawa",
        descripcion: "Masa de Pizza Precocida con: Salsa, Queso Mozzarella, Jamón y Piña",
        peso: "550 grs",
        ingredientes: "Harina de trigo (hierro 55 mg/kg, niacina 48 mg/kg, tiamina 5 mg/kg, riboflavina 4 mg/kg y acido folico 1.2 mg/kg), levadura, sal, azuÌcar, agua, salsa de tomate (pasta de tomate, estabilizante (sin 415), acidulante (sin 330), conservante (sin 202, 211), colorantes (sin 150, sin 129)), queso mozzarella (leche pasteurizada de vaca, regulador de acidez (sin 330), agente endurecedor (sin 509), cuajo y cultivos laÌcteos. cobertura: sustancia conservadora (sin 235)), jamón (carne de cerdo, carne de pavo, agua, proteina de soya, almidon, sal, almidon de maiz modificado, agentes gelificantes sin 407a, sin 425, glucosa, dextrosa, acentuadores de sabor sin 508, sin 620, sin 627, sin 631, aromas naturales y artificiales, maltodextrina de maiz, estabilizadores sin 471, sin 4540(iii), sin 450(v), sin 451(i), sin 451(ii), sin 450(i), sustancia conservadora sin 262(i), antioxidante sin 316, reguladores de la acidez sin 270, sin 262(ii) agente de retencion de color sin 250 y colorante sin 120) y piña (pinÌƒa, agua, azucar, cma, cloruro de calcio, acido citrico, acido ascorbico, sorbato de potasio, benzoato de sodio)."
    },

    pepe: {
        nombre: "Peppe",
        descripcion: "Masa de Pizza Precocida con: Salsa, Queso Mozzarella y Pepperoni",
        peso: "450 grs",
        ingredientes: "Harina de trigo (hierro 55 mg/kg, niacina 48 mg/kg, tiamina 5 mg/kg, riboflavina 4 mg/kg y acido folico 1.2 mg/kg), levadura, sal, azuÌcar, agua, salsa de tomate (pasta de tomate, estabilizante (sin 415), acidulante (sin 330), conservante (sin 202, 211), colorantes (sin 150, sin 129)), queso mozzarella (leche pasteurizada de vaca, regulador de acidez (sin 330), agente endurecedor (sin 509), cuajo y cultivos laÌcteos. cobertura: sustancia conservadora (sin 235)) y pepperoni (carne de cerdo, carne de res, grasa de cerdo, regulador de la acidez ( sin 575), especias antioxidantes sin 300, sin 307b, sin 320, sin 310, sal agente reduccion del color sin 250 y colorante sin 160c)."
    },

    vegeta1: {
        nombre: "Vegeta",
        descripcion: "Masa de Pizza Precocida con: Salsa, Queso Mozzarella, Cebolla Blanca, Aceituna Verde y Pimiento",
        peso: "550 grs",
        ingredientes: "Harina de trigo (hierro 55 mg/kg, niacina 48 mg/kg, tiamina 5 mg/kg, riboflavina 4 mg/kg y acido folico 1.2 mg/kg), levadura, sal, azuÌcar, agua, salsa de tomate (pasta de tomate, estabilizante (sin 415), acidulante (sin 330), conservante (sin 202, 211), colorantes (sin 150, sin 129)), queso mozzarella (leche pasteurizada de vaca, regulador de acidez (sin 330), agente endurecedor (sin 509), cuajo y cultivos laÌcteos. cobertura: sustancia conservadora (sin 235)), cebolla blanca, aceituna verde (aceituna verde, agua, sal, ácido láctico, sorbato de potasio y benzoato de sodio) y pimiento."
    },

    vegeta: {
        nombre: "Vegeta Integral",
        descripcion: "Masa de Pizza Precocida con: Salsa, Queso Mozzarella, Cebolla Blanca, Aceituna Verde y Pimiento",
        peso: "550 grs",
        ingredientes: "Harina de trigo Integral (hierro 55 mg/kg, niacina 48 mg/kg, tiamina 5 mg/kg, riboflavina 4 mg/kg y acido folico 1.2 mg/kg), levadura, sal, azuÌcar, agua, salsa de tomate (pasta de tomate, estabilizante (sin 415), acidulante (sin 330), conservante (sin 202, 211), colorantes (sin 150, sin 129)), queso mozzarella (leche pasteurizada de vaca, regulador de acidez (sin 330), agente endurecedor (sin 509), cuajo y cultivos laÌcteos. cobertura: sustancia conservadora (sin 235)), cebolla blanca, aceituna verde (aceituna verde, agua, sal, ácido láctico, sorbato de potasio y benzoato de sodio) y pimiento."
    },

    megaInter: {
        nombre: "Mega Inter",
        descripcion: "Masa de Pizza Precocida con: Salsa, Queso Mozzarella, Cebolla Blanca, Tocino y Hongos del Cusco",
        peso: "540 grs",
        ingredientes: "Harina de trigo (hierro 55 mg/kg, niacina 48 mg/kg, tiamina 5 mg/kg, riboflavina 4 mg/kg y acido folico 1.2 mg/kg), levadura, sal, azuÌcar, agua, salsa de tomate (pasta de tomate, estabilizante (sin 415), acidulante (sin 330), conservante (sin 202, 211), colorantes (sin 150, sin 129)), queso mozzarella (leche pasteurizada de vaca, regulador de acidez (sin 330), agente endurecedor (sin 509), cuajo y cultivos laÌcteos. cobertura: sustancia conservadora (sin 235)), tocino (carne de cerdo, sal y agente de retención de color SIN250), cebolla blanca y hongos silvestres del cusco."
    },

    parmecino: {
        nombre: "Parmecino",
        descripcion: "Masa de Pizza Precocida con: Salsa, Queso Mozzarella, Cebolla Blanca, Ajo, Parmesano y Tocino",
        peso: "540 grs",
        ingredientes: "Harina de trigo (hierro 55 mg/kg, niacina 48 mg/kg, tiamina 5 mg/kg, riboflavina 4 mg/kg y acido folico 1.2 mg/kg), levadura, sal, azuÌcar, agua, salsa de tomate (pasta de tomate, estabilizante (sin 415), acidulante (sin 330), conservante (sin 202, 211), colorantes (sin 150, sin 129)), queso mozzarella (leche pasteurizada de vaca, regulador de acidez (sin 330), agente endurecedor (sin 509), cuajo y cultivos laÌcteos. cobertura: sustancia conservadora (sin 235)), tocino (carne de cerdo, sal y agente de retención de color SIN250), cebolla blanca, ajo en polvo y queso parmesano."
    },

    quesolicia: {
        nombre: "Quesolicia",
        descripcion: "Masa de Pizza Precocida con: Salsa, Queso Mozzarella, Cebolla Caramelizada, Parmesano y Roquefort",
        peso: "480 grs",
        ingredientes: "Harina de trigo (hierro 55 mg/kg, niacina 48 mg/kg, tiamina 5 mg/kg, riboflavina 4 mg/kg y acido folico 1.2 mg/kg), levadura, sal, azuÌcar, agua, salsa de tomate (pasta de tomate, estabilizante (sin 415), acidulante (sin 330), conservante (sin 202, 211), colorantes (sin 150, sin 129)), queso mozzarella (leche pasteurizada de vaca, regulador de acidez (sin 330), agente endurecedor (sin 509), cuajo y cultivos laÌcteos. cobertura: sustancia conservadora (sin 235)), cebolla blanca, mantequilla (crema de leche pasteurizada, sal), queso parmesano y queso roquefort."
    },

    carnivora: {
        nombre: "Carnívora",
        descripcion: "Masa de Pizza Precocida con: Salsa, Queso Mozzarella, Pepperoni, Chorizo Ahumado y Tocino",
        peso: "470 grs",
        ingredientes: "Harina de trigo (hierro 55 mg/kg, niacina 48 mg/kg, tiamina 5 mg/kg, riboflavina 4 mg/kg y acido folico 1.2 mg/kg), levadura, sal, azuÌcar, agua, salsa de tomate (pasta de tomate, estabilizante (sin 415), acidulante (sin 330), conservante (sin 202, 211), colorantes (sin 150, sin 129)), queso mozzarella (leche pasteurizada de vaca, regulador de acidez (sin 330), agente endurecedor (sin 509), cuajo y cultivos laÌcteos. cobertura: sustancia conservadora (sin 235)), Pepperoni (carne de cerdo, carne de res, grasa de cerdo, regulador de la acidez ( sin 575), especias antioxidantes sin 300, sin 307b, sin 320, sin 310, sal agente reduccion del color sin 250 y colorante sin 160c), chorizo ahumado (carne de cerdo, carne de res, grasa de cerdo, agua, proteina de soya, sal, acentuadores del sabor SIN508, SIN621, agentes gelificantes SIN401, SIN425, estabilizadores SIN471, SIN450(iii), SIN450(v), SIN45(i), SIN45(ii), agente endurecedor SIN516, especias, antioxidantes SIN316, sustancia conservadora SIN262(i), regulador de la acidez SIN270, colorante SIN150d, SIN120, agente de retención de color SIN250, aromas naturales, ácidos grasos de coco y maltodextrina de maiz) y tocino (carne de cerdo, sal y agente de retención de color SIN250)."
    },

    estrellita: {
        nombre: "Estrellita",
        descripcion: "Masa de Pizza Precocida con: Salsa, Queso Mozzarella, Cebolla Caramelizada, Queso de Cabra y Proscuitto",
        peso: "480 grs",
        ingredientes: "Harina de trigo (hierro 55 mg/kg, niacina 48 mg/kg, tiamina 5 mg/kg, riboflavina 4 mg/kg y acido folico 1.2 mg/kg), levadura, sal, azuÌcar, agua, salsa de tomate (pasta de tomate, estabilizante (sin 415), acidulante (sin 330), conservante (sin 202, 211), colorantes (sin 150, sin 129)), queso mozzarella (leche pasteurizada de vaca, regulador de acidez (sin 330), agente endurecedor (sin 509), cuajo y cultivos laÌcteos. cobertura: sustancia conservadora (sin 235)), proscuitto (carne de cerdo (pernil), sal), cebolla blanca, mantequilla (crema de leche pasteurizada, sal) y queso de cabra."
    }
};


const pizzaSelect = document.getElementById("pizzaSelect");
const fechaProd = document.getElementById("fechaProduccion");
const fechaVenc = document.getElementById("fechaVencimiento");

// Función para ajustar el tamaño de fuente de los ingredientes
function ajustarTamañoIngredientes() {
    const ingredientesEl = document.getElementById("ingredientesText");
    const texto = ingredientesEl.innerText;
    const longitud = texto.length;

    // Calcular tamaño basado en la longitud del texto
    // Con más ancho disponible, podemos usar tamaños un poco más grandes
    let fontSize;
    let lineHeight;
    
    if (longitud < 200) {
        fontSize = 12;
        lineHeight = 1.1;
    } else if (longitud < 400) {
        fontSize = 11;
        lineHeight = 1.1;
    } else if (longitud < 600) {
        fontSize = 10;
        lineHeight = 1.1;
    } else if (longitud < 800) {
        fontSize = 9;
        lineHeight = 1.1;
    } else if (longitud < 1000) {
        fontSize = 7.5;
        lineHeight = 1.1;
    } else if (longitud < 1120) {
        fontSize = 6.5;
        lineHeight = 1.1;
    } else if (longitud < 1250) {
        fontSize = 5.25;
        lineHeight = 1.1;
    }

    ingredientesEl.style.fontSize = fontSize + 'px';
    ingredientesEl.style.lineHeight = lineHeight;
}

pizzaSelect.addEventListener("change", () => {
    const pizza = pizzas[pizzaSelect.value];
    if (!pizza) return;

    document.getElementById("pizzaNombre").innerText = pizza.nombre;
    document.getElementById("pizzaDescripcion").innerText = pizza.descripcion;
    document.getElementById("pesoText").innerText = pizza.peso;
    
    // QUITAR "INGREDIENTES:" del inicio si existe (para no duplicar)
    const ingredientesLimpio = pizza.ingredientes.replace(/^INGREDIENTES:\s*/i, '');
    document.getElementById("ingredientesText").innerText = ingredientesLimpio;

    // Ajustar tamaño después de actualizar el contenido
    ajustarTamañoIngredientes();
});

/* Fechas automáticas */
const hoy = new Date();
const vencimiento = new Date();
vencimiento.setMonth(hoy.getMonth() + 2);

fechaProd.valueAsDate = hoy;
fechaVenc.valueAsDate = vencimiento;

function formatDate(dateString) {
    // Solución al bug de zona horaria: agregar tiempo al medio día
    const [year, month, day] = dateString.split('-');
    const date = new Date(year, month - 1, day);
    
    // Meses abreviados en español
    const mesesAbreviados = [
        'ene', 'feb', 'mar', 'abr', 'may', 'jun',
        'jul', 'ago', 'sep', 'oct', 'nov', 'dic'
    ];
    
    const dia = date.getDate().toString().padStart(2, '0'); // Agrega 0 si es menor a 10
    const mes = mesesAbreviados[date.getMonth()];
    
    return `${dia}-${mes}`;
}

function updateDates() {
    document.getElementById("prodText").innerText = formatDate(fechaProd.value);
    document.getElementById("vencText").innerText = formatDate(fechaVenc.value);
}

fechaProd.addEventListener("change", updateDates);
fechaVenc.addEventListener("change", updateDates);

updateDates();

// Ajustar tamaño inicial
ajustarTamañoIngredientes();