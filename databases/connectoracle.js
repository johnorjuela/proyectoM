import oracledb from "oracledb";

async function run(){
try {
    connection = await oracledb.getConnection( {
      user          : "biable01",
      password      : "biable01",
      connectString : "172.20.0.205"
    });
    console.log("Oracle ahora esta funcionando");
}catch (err){
    console.error(err);
}
}

run();