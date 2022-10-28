import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ name: 'theOrder', type: 'int', nullable: true })
  theOrder: number;

  @Column({ default: false })
  available: boolean;

  @Column({
    name: 'avatar',
    type: 'varchar',
    nullable: true,
    default:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/847.jpg',
  })
  avatar: string;

  @Column({ name: 'dob', type: 'timestamp', nullable: true })
  dob: Date;

  @Column({ name: 'firstName', type: 'varchar', nullable: true })
  firstName: string;

  @Column({ name: 'lastName', type: 'varchar', nullable: true })
  lastName: string;

  @Column({ name: 'role', type: 'varchar', nullable: true })
  role: string;

  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  deletedAt: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', nullable: true })
  updatedAt: Date;
}
