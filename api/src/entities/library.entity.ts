import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Library {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  publicationYear: number;

  @Column()
  isbn: string;

  @Column()
  available: boolean;
}
