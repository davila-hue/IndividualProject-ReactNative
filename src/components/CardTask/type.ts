export interface PropsCardTask {
  id: number;
  title: string;
  description: string;
  tecnologias: string;
  onChangeRemove: () => void;
}
