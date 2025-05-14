import type { RichTextContent } from "@graphcms/rich-text-types";

export type KnownTech = {
  iconSvg: string;
  name: string;
  startDate: string;
};

export type Technology = {
  name: string;
};

export type ProjectSection = {
  title: string;
  image: {
    url: string;
  };
};

export type Project = {
  slug: string
  title: string
  shortDescription: string
  thumbnail: {
    url: string
  }
  technologies: string[] 
  githubUrl?: string
  liveProjectUrl?: string
}