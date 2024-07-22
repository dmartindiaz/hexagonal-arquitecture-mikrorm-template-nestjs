import { Body, Controller, Get, Inject, Post, Query } from "@nestjs/common";
import { UserService } from "src/aplication/services/user.service";
import { UserInDTO } from "src/aplication/dto/userIn.dto";
import { validate } from "class-validator";

@Controller('users')
class UserController {
    constructor(@Inject('UserService') private readonly userService: UserService){}
    
    @Post()
    async create(@Body() user: UserInDTO){
        return this.userService.createUser(user)
    }
}

export {
    UserController
}