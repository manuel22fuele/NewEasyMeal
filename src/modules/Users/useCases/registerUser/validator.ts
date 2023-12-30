import { Joi,Segments } from "celebrate";
import { join } from "path";

const registerValidatorv = {
    [Segments.BODY]:Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password:Joi.string().required(),
        phone:Joi.string().required()
    })
}

export {registerValidatorv}