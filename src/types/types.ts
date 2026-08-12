export type PortfolioType = "web" | "games";
export type PortfolioLang = "en" | "es";
export type Tab = "overview" | "challenges" | "role" | "goals" | "technologies";

export type Navigation = {
  about: string;
  skills: string;
  projects: string;
  experience: string;
  education: string;
  contact: string;
};

export type About = {
  index: string;
  title: string;
  introduction: string;
  approach: string;
  basedIn: string;
  availability: string;
  oportunities: string;
  languages: string;
};

export type NameSection = {
  role: string;
  statement: string;
  contactButton: string;
  viewWorkButton: string;
};

export type ContactSection = {
  text: string;
  phone: string;
  name: string;
  message: string;
  button: string;
};

export type FooterSection = {
  madeBy: string;
  button: string;
}

export type Skill = {
  number: number;
  title: string;
  skills: string[];
};

export type Project = {
  number: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  year: number;
  overview: string;
  problems: ProblemSection[];
  goals: GoalSection;
  myRole: RoleSection[];
  technologies: string[];
  hostedLink: string;
  githubLink: string | null;
  videos: string[];
};

export type ProblemSection = {
  id: string;
  title: string;
  description: string;
};

export type GoalSection = {
  description: string;
  objectives: string[];
}

export type RoleSection = {
  title: string;
  tasks: string[];
}

export type Experience = {
  company: string;
  position: string;
  startDate: string;
  endDate?: string | null;
  description: string[];
};

export type AcademicExperience = {
  institution: string;
  degree: string;
  startDate: string;
  endDate?: string;
};

export type Section = {
  header: string;
  title: string;
}

export type PortfolioContent = {
  navigation: NavigationContent;
  navbarSwitches: NavbarSwitchContent;

  about: About;
  sections: Section[];
  skills: Skill[];
  projects: Project[];
  workExperience: Experience[];
  academicExperience: AcademicExperience[];
  nameSection: NameSection;
  contactSection: ContactSection;
  footerSection: FooterSection;
};

export type LocalizedPortfolioContent = {
  navigation: Navigation;
  web: PortfolioContent;
  games: PortfolioContent;
};

export type NavigationContent = {
  about: string;
  skills: string;
  projects: string;
  experience: string;
  contact: string;
};

export type SwitchContent = {
  leftLabel: string;
  rightLabel: string;
  ariaLabel: string;
};

export type NavbarSwitchContent = {
  area: SwitchContent;
  theme: SwitchContent;
  language: SwitchContent;
};