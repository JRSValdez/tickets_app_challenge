//THEME
export interface ITheme {
  primary: string;
  secondary: string;
  accent: string;
}

//TICKETS
export interface IAttachment {
  id: number;
  name: string;
  type: string;
  download: string;
}

export interface ITicket {
  id: number;
  name: string;
  user: string;
  description: string;
  priority: number;
  status: number;
  attachments: IAttachment[];
}

interface IInfo {
  page: number;
  totalPages: number;
  totalRegisters: number;
}

export interface ITicketStates {
  id: number;
  name: string;
}

export interface ITicketPriorities {
  id: number;
  name: string;
}

export interface IState {
  tickets: ITicket[];
  selectedTicket: ITicket;
  info: IInfo;
  isLoading?: Boolean;
  states: ITicketStates[];
  priorities: ITicketPriorities[];
}

//AUTH
export interface IAuth {
  user: string;
  email: string;
  accessToken: string;
  isLoggedIn: boolean;
  isLoading: boolean;
}

export interface IUserCredentials {
  email: string;
  password:string
}
