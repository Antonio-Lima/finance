type Transaction = {
  id: number;
  label: string;
  value: number;
  type: 0 | 1; // 0 = debit, 1 = credit
  date: Date;
};
