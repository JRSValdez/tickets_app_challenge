export interface ITheme {
    primary: string
    secondary: string
    accent: string
}

interface IAttachment {
  id: number
  type: string
  download: string
}

interface ITicket {
  id: number;
  name: string;
  descripcion: string;
  priority: string;
  attachments: IAttachment[];
}

export interface IState {
  tickets: ITicket[];
}
