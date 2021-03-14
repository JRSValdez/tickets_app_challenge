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

export interface ITicket {
  id: number
  name: string
  user:string
  description: string
  priority: string
  status:string
  attachments: IAttachment[]
}

interface IInfo {
  page:number
  totalPages:number
  totalRegisters:number
}

export interface IState {
  tickets: ITicket[]
  info:IInfo,
  isLoading?:Boolean
}
