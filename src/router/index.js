import { Router } from "express";
const router = Router();

router.get("/", (req, res) => res.render("index", { title: "Presentación" }));
router.get("/about", (req, res) => res.render("about", { title: "Celulares" }));
router.get("/contact", (req, res) => res.render("contact", { title: "Contacto" }));

// Datos de los celulares
const celulares = {
    iphone16: {
        nombre: "iPhone 16 Pro Max",
        precio: "$1,299",
        imagen: "/img/iphone16.jpg",
        descripcion: "El iPhone 16 Pro Max ofrece una pantalla LTPO OLED de 6.9” con 120Hz, procesador Apple A18 Pro y una batería de 4600mAh.",
        detalles: [
            "Pantalla: 6.9” LTPO OLED, 120Hz",
            "Procesador: Apple A18 Pro",
            "Cámara: Triple 48MP (Principal, Ultra Gran Angular, Telefoto)",
            "Batería: 4600mAh, carga rápida de 30W",
            "Extras: iOS 18, Dynamic Island, USB-C"
        ]
    },
    xiaomi15u: {
        nombre: "Xiaomi 15 Ultra",
        precio: "$999",
        imagen: "/img/xiaomi15u.webp",
        descripcion: "El Xiaomi 15 Ultra incluye una pantalla AMOLED de 6.7” con 120Hz, Snapdragon 8 Elite y carga rápida de 120W.",
        detalles: [
            "Pantalla: 6.7” AMOLED, 120Hz",
            "Procesador: Snapdragon 8 Elite",
            "Cámara: Cuádruple 50MP Leica",
            "Batería: 5000mAh, carga rápida de 120W",
            "Extras: HyperOS, IP68, sonido Harman Kardon"
        ]
    },
    vivox200: {
        nombre: "Vivo X200 Pro",
        precio: "$1,199",
        imagen: "/img/vivox200.jpg",
        descripcion: "El Vivo X200 Pro integra una pantalla AMOLED de 6.8” con 144Hz, procesador MediaTek Dimensity 9400 y cámara periscópica.",
        detalles: [
            "Pantalla: 6.8” AMOLED, 144Hz",
            "Procesador: MediaTek Dimensity 9400",
            "Cámara: 50MP + 50MP + 64MP (Telefoto Periscópico)",
            "Batería: 4800mAh, carga rápida de 100W",
            "Extras: Android 14, lector de huellas en pantalla"
        ]
    },
    samsung25: {
        nombre: "Samsung S25 Ultra",
        precio: "$1,399",
        imagen: "/img/samsung25.jpg",
        descripcion: "El Samsung S25 Ultra llega con una pantalla Dynamic AMOLED de 6.8”, cámara de 200MP y compatibilidad con S-Pen.",
        detalles: [
            "Pantalla: 6.8” Dynamic AMOLED, 120Hz",
            "Procesador: Exynos 2500 / Snapdragon 8 Gen 4",
            "Cámara: 200MP + 50MP (Tele) + 50MP (Ultra) + 10MP",
            "Batería: 5000mAh, carga rápida de 45W",
            "Extras: S-Pen, Gorilla Glass Armor"
        ]
    },
    honormagic7: {
        nombre: "Honor Magic 7 Pro",
        precio: "$1,099",
        imagen: "/img/honormagic7.webp",
        descripcion: "El Honor Magic 7 Pro cuenta con pantalla OLED de 6.78”, procesador Snapdragon 8 Gen 4 y batería de 5200mAh con carga rápida.",
        detalles: [
            "Pantalla: 6.78” OLED, 120Hz",
            "Procesador: Snapdragon 8 Gen 4",
            "Cámara: 50MP + 50MP + 64MP Periscópica",
            "Batería: 5200mAh, carga de 100W",
            "Extras: MagicOS, diseño sin bordes"
        ]
    },
    redmagic10: {
        nombre: "Redmagic 10 Pro",
        precio: "$1,199",
        imagen: "/img/redmagic10.jpeg",
        descripcion: "El Redmagic 10 Pro es un smartphone gamer con pantalla AMOLED de 6.9” y tasa de refresco de 165Hz.",
        detalles: [
            "Pantalla: 6.9” AMOLED, 165Hz",
            "Procesador: Snapdragon 8 Gen 4",
            "Cámara: 50MP + 50MP + 8MP",
            "Batería: 6000mAh, carga rápida de 165W",
            "Extras: Ventilador de enfriamiento, luces RGB"
        ]
    }
};


// Ruta para cada celular dinámico
router.get('/comprar/:modelo', (req, res) => {
    const modelo = req.params.modelo.toLowerCase(); // Normaliza el nombre
    const celular = celulares[modelo];

    if (celular) {
        res.render('comprar', { 
            title: `Comprar ${celular.nombre}`, 
            ...celular 
        });
    } else {
        res.redirect('/about'); // Redirige al catálogo en vez de un error 404
    }
});

export default router;
