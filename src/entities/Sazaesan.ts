import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

/**
 * User entity has been defined
 * You shouldn't need to alter any code here
 */
@Entity()
class Sazaesan {
 @PrimaryGeneratedColumn()
  public id: string;

  @Column()
  public firstname: string;

  @Column()
  public lastname: string;
}

export default Sazaesan;
