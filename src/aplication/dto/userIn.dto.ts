import { IsString } from "class-validator"
import { IUserInDTO } from "./userIn.dto.interface";

class UserInDTO implements IUserInDTO {
    @IsString()
    name: string;

    @IsString()
    surname: string;
}

export {
    UserInDTO
}