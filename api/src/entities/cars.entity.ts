import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Users } from './users.entity';

@Entity()
export class Cars {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ name: 'theOrder', type: 'int', nullable: true })
  theOrder: number;

  @Column({ default: false })
  available: boolean;

  @Column({
    name: 'ava',
    type: 'varchar',
    nullable: true,
    default:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/847.jpg',
  })
  ava: string;

  @Column({ name: 'brand', type: 'varchar', nullable: true })
  brand: string;

  @Column({ name: 'build', type: 'varchar', nullable: true })
  build: string;

  @Column({ name: 'dayPrice', type: 'varchar', nullable: true })
  dayPrice: number;

  @Column({ name: 'loc', type: 'varchar', nullable: true })
  loc: string;

  @Column({ name: 'mode', type: 'varchar', nullable: true })
  mode: string;

  @Column({ name: 'startDate', type: 'timestamp', nullable: true })
  startDate: Date;

  @Column({ name: 'endDate', type: 'timestamp', nullable: true })
  endDate: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', nullable: true })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  deletedAt: Date;

  @ManyToOne(() => Users, (user) => user.id)
  @JoinColumn({ name: 'user' })
  user: Users;
}
