import {
    BaseEntity,
    Column,
    Entity,
    JoinTable,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
 } from "typeorm";
 import { Role } from "./Role";
 import { User } from "./User";
 
 @Entity("artists")
 export class Artist {
    @PrimaryGeneratedColumn()
    id?: number;

   @OneToOne(() => User, (user) => user.artist)
   @JoinColumn({ name: "user_id" })
   user!: User;
 }

