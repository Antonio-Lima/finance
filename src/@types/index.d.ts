type Transaction = {
  id: number;
  label: string;
  value: number;
  type: 0 | 1; // 0 = debit, 1 = credit
  date: Date;
};

type User = {
  username: string;
  image: string;
};
interface AuthContextType {
  user: User;
  login: () => void;
  logout: () => void;
}
