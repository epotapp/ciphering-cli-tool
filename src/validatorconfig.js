module.exports = function configValidate(argv) {

    let configString = '';

        argv.map( (item, index, arr)  => {
        
            if ( 
                ( arr.lastIndexOf('-c') !== arr.indexOf("-c") )  
                || ( arr.lastIndexOf('--config') !== arr.indexOf("--config") ) 
                ) {
                throw new Error("Ошибка. Конфигурация должна задаваться лишь единожды.");
            }
      
            if (arr.indexOf("-c") > -1) {
                configString = arr[arr.indexOf("-c") + 1];
              } else if (arr.indexOf("--config") > -1) {
                configString = arr[arr.indexOf("--config") + 1];
              } else {
                throw new Error("Пожалуйста, введите корректную конфигурацию шифров (Пример: -c/--config C1-A-R1)");
            }
                
        });
        
    return configString.split("-");

}