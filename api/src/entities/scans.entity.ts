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

@Entity()
export class ScansResult {
  @PrimaryGeneratedColumn()
  id: string;
  @Column({ name: 'Status', type: 'varchar', nullable: true })
  Status: string;
  @Column({ name: 'RepositoryName', type: 'varchar', nullable: true })
  RepositoryName: string;
  @Column({ name: 'QueuedAt', type: 'timestamp', nullable: true })
  QueuedAt: Date;
  @Column({ name: 'ScanningAt', type: 'timestamp', nullable: true })
  ScanningAt: Date;
  @Column({ name: 'FinishedAt', type: 'timestamp', nullable: true })
  FinishedAt: Date;
  @Column({ name: 'Findings', type: 'jsonb', nullable: true, default: {} })
  Findings: object;
}
