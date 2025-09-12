export interface Repo {
  name: string;
  description: string;
  html_url: string;
  language: string;
}

export interface Repos {
  items: Repo[];
}
