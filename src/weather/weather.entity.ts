import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Weather {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('float')
  lat: number;

  @Column('float')
  lon: number;

  @Column()
  part: string;

  @Column({ type: 'jsonb' })
  data: any;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
