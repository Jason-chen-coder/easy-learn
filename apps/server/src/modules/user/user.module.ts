import { ConsoleLogger, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./models/user.entitys";
@Module({
    imports:[TypeOrmModule.forFeature([User])],
    providers:[ConsoleLogger],
    exports:[],
})
export class UserModule{}