import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    readonly task_id: number;

    @Column({ type: 'varchar', length: 20, nullable: false })
    title: string;

    @Column({ type: 'date', nullable: false })
    due_date: string;

    @Column({ type: 'smallint', length: 1, default: 1 })
    status: string;

    @CreateDateColumn()
    readonly created_at?: Date;

    @UpdateDateColumn()
    readonly update_at?: Date;

}