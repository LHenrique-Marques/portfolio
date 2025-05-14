import type { RichTextContent } from '@graphcms/rich-text-types'

export type ProjectPageData = {
  project: {
    title: string
    shortDescription: string
    description: {
      raw: RichTextContent
      text: string
    }
    slug: string
    thumbnail: {
      url: string
    }
    pageThumbnail?: {
      url: string
    }
    technologies: {
      name: string
    }[]
    githubUrl?: string
    liveProjectUrl?: string
    sections: {
      title: string
      image: {
        url: string
      }
    }[]
  }
}

export type ProjectsPageStaticData = {
  projects: {
    slug: string
  }[]
}

export type HomePageInfo = {
  introduction: {
    raw: RichTextContent;
  };
  technologies: string[];
  profilePicture: {
    url: string;
  };
  socials: {
    url: string;
    iconSvg: string;
  }[];
  knownTechs: {
    iconSvg: string;
    name: string;
    startDate: string;
  }[];
  highlightProjects: {
    slug: string;
    thumbnail: {
      url: string;
    };
    title: string;
    shortDescription: string;
    technologies: string[];
  }[];
};
export type HomeOnlyData = {
  page: HomePageInfo;
};
