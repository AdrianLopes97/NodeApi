import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('car')
export class Car {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false })
  carname: string;

  @Column({ type: 'varchar', nullable: false })
  model: string;

  @CreateDateColumn()
  modelYear: Date;

  @CreateDateColumn()
  createdOn?: Date;

  @CreateDateColumn()
  updatedOn?: Date;

  @Column({ type: 'varchar', nullable: false, unique: true })
  licensePlate: string;
}
