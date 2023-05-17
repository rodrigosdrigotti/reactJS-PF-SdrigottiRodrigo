/* const products = [
    {
        id: "1",
        name: "Barra Kipping",
        price: 15000,
        category: "equipamiento",
        image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/307/484/products/image-b76bb1fdf5bcfab79716165425246169-640-0.webp", 
        description: "Caños de hierro estructurales reforzados. Soldaduras de alta definición. Pintura epoxi negra en horno a 200*C. Resistente a la intemperie. Calidad en fabricación.",
        stock: 10
    },
    {
        id: "2",
        name: "Paralelas Altas",
        price: 55000,
        category: "equipamiento",
        image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/432/347/products/paralelas-1201-718a54d37b1412acc915923101643217-640-0.png", 
        description: "Permite el balanceo si tocar el piso. Con ANTIDESLIZANTE para Calistenia extrema. Medidas: 92cm x 60 cm x 120 cm (Largo x Ancho x Alto)",
        stock: 5
    },
    {
        id: "3",
        name: "Barra Dorsalera Esquinero",
        price: 14000,
        category: "equipamiento",
        image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/432/347/products/img_8143-21-950391279f210d09be15979392796634-640-0.jpg", 
        description: "Barra Esquinero 1,30m (mayor longitud). Distancia del vértice de la pared a la fijación de la barra 92cm. Distancia del vértice de la pared al centro de la barra 75cm.",
        stock: 15
    },
    {
        id: "4",
        name: "Push Up Bar Madera 20cm",
        price: 6500,
        category: "equipamiento",
        image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/432/347/products/6f71eaf1-f176-4d8b-9393-9cac7935c42d1-b7d54d093d680de2af16203264601773-640-0.jpg", 
        description: "Barral de madera torneado de 45mm de diámetro. Base de Apoyo: 8cm x 11.7cm x 4.5cm (cada base). Altura: 10.5cm. Largo Total: 24 cm. Largo operativo 15 cm.",
        stock: 10
    },
    {
        id: "5",
        name: "Tactic Shirt",
        price: 7999,
        category: "indumentaria",
        image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/307/484/products/remeras1-dad96ee8f13311b3f416772559781485-640-0.webp", 
        description: "Una remera versátil pensada tanto para el uso urbano como para deportes de alto rendimiento. Composición de tela que permite un secado rápido, elasticidad en movimientos y una alta durabilidad en los lavados. Ademas posee un sutil tratamiento antiolor.",
        stock: 5
    },
    {
        id: "6",
        name: "Tactic Shirt Orange",
        price: 4999,
        category: "indumentaria",
        image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/307/484/products/remeras-521-c14b534f4416409ea316687878997836-640-0.webp", 
        description: "Una remera versátil pensada tanto para el uso urbano como para deportes de alto rendimiento. Composición de tela que permite un secado rápido, elasticidad en movimientos y una alta durabilidad en los lavados. Ademas posee un sutil tratamiento antiolor.",
        stock: 5
    },
    {
        id: "7",
        name: "Pro Line Mujer Terra",
        price: 14999,
        category: "indumentaria",
        image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/307/484/products/cb3b37df-c9ff-4d38-bf95-0d804d09f6a91-640-0-834fd05b831eb9636d16758137713467-640-0.webp", 
        description: "Un short pensado para atletas exigentes. calza y detalles técnicos incorporados de alta tecnología. Sutil tratamiento anti olor. Cortes laterales para amplio rango de movimiento y características únicas. Calza con bolsillo interno para celular / cintura elastizada ancha con sistema para regular.",
        stock: 10
    },
    {
        id: "8",
        name: "Storm Giacca Amarilla",
        price: 25999,
        category: "indumentaria",
        image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/307/484/products/tienda-nube-1-131-18bd178468bc8c384816831404603886-640-0.webp", 
        description: "Campera de media estacion MKF. Soft shell con micro polar por dentro. Cuenta con cierre central y bolsillos con cierre chest. Cintura y capucha con elástico regulable.",
        stock: 15
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500);
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500);
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500);
    })
}
 */