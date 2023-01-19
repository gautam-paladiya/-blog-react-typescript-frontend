import React from 'react';

export type  typeMode = "light" | "dark"

export interface IThemeConfig {
    mode:typeMode
}

export interface ISettings {
    search?:string 
}

export interface ISettingsProviderProps  {
    children:React.ReactNode
}

export interface typeImage {
    src: string,
    alt:string
}

export interface IPost {
  id: number;
  slug: string;
  image: typeImage;
  categories: string[];
  title: string;
  publishedAt: number;
  createdAt: number;
  author: string;
  body: string;
  estReadingTime: number ;
}
