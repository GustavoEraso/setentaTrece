const ingredientesFijosTortus = ['Pan con semillas','Queso Duo','Panceta','Jamon','Huevo a la plancha'];
const ingredientesOpcionalesTortusMilanesas = ['Mayonesa','Ketchup','Mostaza','Barbacoa','Salsa Golf','lechuga','Tomate','Cebolla morada','Criolla','Pesto','Arvejas','Choclo','Hongos'];

const precios ={
    tortuEnteraConFritas: 729,
    tortuPolloConFritas: 729,
    
}

const productos = {
    a500100:{
            nombre: 'Tortugon de carne entera con fritas',
            precio: precios.tortuEnteraConFritas,
            familia: 'Tortugones',
            ingredientesFijos: ingredientesFijosTortus,
            ingredientesOpcionales: ingredientesOpcionalesTortusMilanesas,
            codigoProducto: 'a500100',
            img:'./assets/img/tortu-de-entera-con-fritas-200.jpg',
            altImg: 'Imagen de un tortugon de carne entera con fritas',
          
            },
    a500110:{
            nombre: 'Tortugon de pollo con fritas',
            precio: precios.tortuPolloConFritas,
            familia: 'Tortugones',
            ingredientesFijos: ingredientesFijosTortus,
            ingredientesOpcionales: ingredientesOpcionalesTortusMilanesas,
            codigoProducto: 'a500110',
            img:'./assets/img/tortu-de-entera-con-fritas-200.jpg',
            altImg: 'Imagen de un tortugon de pollo con fritas',
          
            }
    
};

