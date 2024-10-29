import pg from "pg";
const {Client}= pg;

const config={
    user: 'curriculum_web_user',
    host: 'dpg-csg41208fa8c73fqo28g-a.oregon-postgres.render.com',
    database: 'curriculum_web',
    password: 'NjMmfiGeaDgUTyFhVu50tp4vGkbdQJmy',
    port: 5432,
    ssl:{
        rejectUnauthorized: false
    }
}

export async function Conectar(params) {
    const cliente= new Client(config);
    try{
        await cliente.connect()
        console.log("Conectado a la base de datos :D");
    }catch(error){
        console.error("Error al conectar con la base de datos D:", error);
    }finally {
        await cliente.end();
    }
}