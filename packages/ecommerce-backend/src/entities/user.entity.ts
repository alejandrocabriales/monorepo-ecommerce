import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn({
    name: 'user_name',
    nullable: false,
  })
  userName: string;
  @Column({
    nullable: false,
    default: '',
  })
  password: string;
}
