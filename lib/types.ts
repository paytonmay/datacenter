export interface Source {
  id: string;
  title: string;
  publisher: string;
  url: string;
  year?: string;
  note?: string;
  kind:
    | "government"
    | "peer-reviewed"
    | "utility-filing"
    | "industry"
    | "news"
    | "local";
}
