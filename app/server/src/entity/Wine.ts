import { Entity, Column, PrimaryColumn, BaseEntity } from "typeorm";

@Entity()
export class Wine extends BaseEntity {
  @PrimaryColumn()
  id: number;

  @Column({
    length: 50
  })
  name: string;

  @Column("text")
  description: string;

  @Column()
  picture: string;

  @Column()
  views: number;

  @Column()
  isPublished: boolean;
}
