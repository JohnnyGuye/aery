export class Show {
  title: string                       = ""
  start: Date                         = new Date()
  end: Date                           = new Date()
  description: string                 = ""
  participants: Map<string,string[]>  = new Map<string, string[]>()
  website: string                     = ""
  videoLink: string                   = ""
  picturesLink: string                = ""
  pictureLink: string                 = ""
}
