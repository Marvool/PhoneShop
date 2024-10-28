import pg from "pg";
const {Client}= pg;

const config={
    user: 'curriculumweb_db_user',
    host: 'dpg-csfst908fa8c73a49an0-a.oregon-postgres.render.com',
    database: 'curriculumweb_db',
    password: 'uF2HDJCL09irtzVoRe8I1fORrbas2oV8',
    port: 5432,
    ssl:{
        rejectUnauthorized: false
    }
}

export async function Conectar(params) {
    const cliente= new Client(config)
    try{
        await cliente.connect()
        console.log("Conectado a la base de datos :D")
    }catch(error){
        console.log(error)
    }
}