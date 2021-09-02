import {Router, Request, Response} from "express";

let carsController: any = {};

carsController.getById = (req: Request, res: Response): void => {
    /* OBTENER ÚLTIMOS 3 DÍGITOS DEL ID. MEDIANTE CONDICIONAL SE DETERMINAN LOS 
    DIGITOS QUE TENDRÁ LA PATENTE.*/
    let car_id: number = Number(req.params.carId);
    let pat_num: number = Number(req.params.carId.slice(-3,));

    if (pat_num < 1){
        pat_num = 999
    }
        
    else {
        pat_num -= 1}

    /*SE RESTAN LOS 3 ÚLTIMOS DÍGITOS DEL ID PARA CONTINUAR CON LA DEDUCCIÓN DE 
    CADA LETRA DE LA PATENTE.*/
    let id_rest: number = car_id - pat_num;

    /* SERIE DE CONDICIONALES QUE DETERMINA SI CADA LETRA DE LA PATENTE DEBERÍA SER
        DISTINTA A 'A' EN BASE AL COCIENTE DEL ID RESTANTE.
        DE CUMPLIRSE EL CONDICIONAL, CAMBIA EL VALOR DE LA LETRA EN LA PATENTE BUSCANDO 
        EN NUESTRA LISTA l DEL ALFABETO Y RESTA ESE SEGMENTO AL ID PARA CONTINUAR CON LA
        TRADUCCIÓN DEL ID EN PATENTE SI CORRESPONDE.*/
    
    let init_val: number = 26*26*26*1000;
    let str_final: String = '';
    for(let i:number =0; i < 4 ;i++){

        if (id_rest>init_val){
            str_final += String.fromCharCode(65+Math.floor(id_rest/init_val));

            id_rest = id_rest%1;

        } else {
            str_final += 'A';
        }
        init_val /= 26;

    }

    let pat_num_str: String = '0'.repeat(3-pat_num.toString().length) + pat_num.toString();
    console.log(pat_num_str)
    let plateNo: String = `${str_final}${pat_num_str}`;

    res.status(200).json({
        success: true,
        method: req.method,
        message: {
            carId: car_id,
            plateNo: plateNo
        }
    });
}

carsController.getByPlate = (req: Request, res: Response): void => {
    let v1, v2, v3, v4;
    let id_0: number;
    let hasNumber: RegExp = /\d/;
    if (req.params.plateNo.length < 7 || hasNumber.test(req.params.plateNo.slice(0,4))){
        res.status(400).json({
            success: false,
            msg: '\n*** ERROR: Verificar que la patente tenga el formato string y siga el modelo AAAA000 ***. \n'
        });
        return null;
    }
    try {
        /*OBTENER ÚLTIMOS 3 DÍGITOS DE LA PATENTE PARA ASIGNAR A UNA VARIABLE 
        ID_0 QUE DETERMINARÁ EL ID FINAL.*/
        id_0 = Number(req.params.plateNo.slice(4,8))+1;
        
        // let plate_char: String = (index: number) => req.params.plateNo[i].charCodeAt(0)+1;
        /* OBTENER CADA LETRA DE LA PATENTE Y OBTENER SU POSICIÓN EN EL ALFABETO
        PARA LUEGO ASIGNAR CADA UNA A UNA VARIABLE QUE DETERMINARÁ EL ID FINAL.*/
        let plate_char: String = req.params.plateNo.slice(0,4);
        [v1, v2, v3, v4] = [...plate_char].map((val: String) => val.charCodeAt(0)-65);
        console.log(id_0);
    } catch (err){
        res.status(400).json({
            success: false,
            msg: '\n*** ERROR: Verificar que la patente tenga el formato string y siga el modelo AAAA000 ***. \n'
        });
        return null;
        // console.log('\n*** ERROR: Verificar que la patente tenga el formato string y siga el modelo AAAA000 ***. \n')
    }
    /*CALCULAR EL ID FINAL EN BASE A LA POSICIÓN DE CADA LETRA EN EL ALFABETO Y EL
    VALOR DE CADA LETRA EN LA PATENTE SEGÚN SU POSICIÓN EN ESTA.*/

    const id_f: number = (v1*26*26*26 + v2*26*26 + v3*26 + v4)*1000 + id_0;

    res.status(200).json({
        success: true,
        method: req.method,
        message: {
            carId: id_f,
            plateNo: req.params.plateNo
        }
    });
}

module.exports = carsController;
