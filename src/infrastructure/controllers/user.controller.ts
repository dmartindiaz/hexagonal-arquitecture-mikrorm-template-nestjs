import { Controller, Get, Inject, Query } from "@nestjs/common";
import { UserService } from "src/aplication/services/user.service";

@Controller('users')
class UserController {
    constructor(@Inject('UserService') private readonly userService: UserService){}
    
    @Get()
    create(@Query('name') name: string,  @Query('lastname') lastname: string){
        return this.userService.createUser({name: name, surname: lastname})
    }
}

export {
    UserController
}