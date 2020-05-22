import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('expenses')
class Expense {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('decimal')
  value: number;

  @Column('timestamp with time zone')
  date: Date;
}

export default Expense;
