export enum PriorityEnum {
  HIGH,
  MEDIUM,
  LOW,
}

export default interface AppointmentsCardProps {
  description: string;
  date: Date;
  priority: keyof typeof PriorityEnum;
}
