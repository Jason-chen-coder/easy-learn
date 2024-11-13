import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { IsNotEmpty } from "class-validator";

@Entity("user")
export class User {
    @PrimaryGeneratedColumn("uuid") // 表主键
    id:string;
    
    @Column({
        comment: "昵称",
        default: ""
    })
    @IsNotEmpty()
    name: string;

    @Column({
        comment: "描述",
        default: "",
        nullable: true
    })
    desc: string;
    @Column({
        comment: "电话",
        default: "",
        nullable: true
    })
    tel: string;
    @Column({
        comment: "密码",
        default: ""
    })
    password: string;
    @Column({
        comment: "账号",
        default: ""
    })
    account: string;
}