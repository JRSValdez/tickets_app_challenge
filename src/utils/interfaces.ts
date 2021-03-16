//THEME
export interface ITheme {
  primary: string;
  secondary: string;
  accent: string;
}

//TICKETS
export interface IUser {
  id: number;
  name: string;
  email: string;
  is_admin:boolean;
}

export interface IAttachment {
  id: number;
  name: string;
  type: string;
  download: string;
}

export interface IComments {
  id: number;
  description: string;
  author: string;
}

export interface ITicketState {
  ticket: ITicket;
  isLoading: boolean;
  success: boolean;
  error: boolean;
  message: string;
}

export interface ITicket {
  id: number;
  name: string;
  user: IUser;
  description: string;
  priority: ITicketPriorities;
  state: ITicketStates;
  comments: IComments[];
  attachments: IAttachment[];
  user_id?:number;
}

export interface ITicketAdd {
  name: string;
  user: number;
  description: string;
  priority: ITicketPriorities;
  state: ITicketStates;
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
  isLoading?: Boolean;
  states: ITicketStates[];
  priorities: ITicketPriorities[];
  error: boolean;
  message: "";
}

//AUTH
export interface IAuth {
  success: boolean;
  error: boolean;
  message: string;
  user: IUser;
  accessToken: string;
  isLoggedIn: boolean;
  isLoading: boolean;
}

export interface IUserCredentials {
  email: string;
  password: string;
}
