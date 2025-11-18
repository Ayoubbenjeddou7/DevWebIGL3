export interface Student {
  id: number;
  name: string;
  classe?: string;
  email?: string;
  notes?: number[];
}

export const Students: Student[] = [
  { id: 1, name: 'Asma', classe: 'L2DSI1', email: 'asma@univ.com', notes: [15, 18, 16] },
  { id: 2, name: 'Oumaima', classe: 'L2DSI1', email: 'oumaima@univ.com', notes: [12, 14, 13] },
  { id: 3, name: 'Raouf', classe: 'L2DSI2', email: 'raouf@univ.com', notes: [17, 19, 16] },
  { id: 4, name: 'Ibrahim', classe: 'L2DSI2', email: 'ibrahim@univ.com', notes: [11, 13, 12] },
  { id: 5, name: 'Nour', classe: 'L2DSI1', email: 'nour@univ.com', notes: [16, 15, 17] },
  { id: 6, name: 'Rihem', classe: 'L2DSI3', email: 'rihem@univ.com', notes: [14, 16, 15] },
  { id: 7, name: 'Dyama', classe: 'L2DSI3', email: 'dyama@univ.com', notes: [18, 17, 19] },
  { id: 8, name: 'Dr IQ', classe: 'L2DSI1', email: 'driq@univ.com', notes: [20, 19, 20] },
  { id: 9, name: 'Howa', classe: 'L2DSI2', email: 'howa@univ.com', notes: [13, 14, 12] },
  { id: 10, name: 'Hiya', classe: 'L2DSI3', email: 'hiya@univ.com', notes: [15, 16, 14] }
];