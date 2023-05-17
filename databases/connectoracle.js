import oracledb from "oracledb";
let connection;
async function run(){
try {
    connection = await oracledb.getConnection( {
      user          : process.env.USER_ORACLE,
      password      : process.env.PASS_ORACLE,
      connectString : process.env.CONNECT_ORACLE
    });
    console.log("Oracle ahora esta funcionando");
}catch (err){
    console.error(err);
}
}
run();