import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import { Php } from "@/components/ui/svgs/php";
import { Aws } from "@/components/ui/svgs/aws";
import { Git } from "@/components/ui/svgs/git";
import { Spring } from "@/components/ui/svgs/spring";
import { Laravel } from "@/components/ui/svgs/laravel";
import { MySQL } from "@/components/ui/svgs/mysql";

export const DATA = {
  name: "Rigoberto Fernandes",
  initials: "RF",
  url: "https://dillion.io",
  location: "Mossoró, RN",
  locationLink: "https://www.google.com/maps/place/Mossoró,+RN/",
  description:
    "Tenho 26 anos e sou cientista da computação por formação e entusiata por jogos TCG. Atualmente focado nos estudos de inteligência artificial e desenvolvimento de CRMs para pequenas empresas. ",
  summary:
    "Em 2017, escrevi meu primeiro 'Hello World!' e descobri minha paixão por tecnologia. Pouco tempo depois, [comecei a graduação em Ciência da Computação enquanto cursava o técnico subsequente em Redes de Computadores](/#education). Hoje, sou formado e atuo na área de [desenvolvimento web e modelagem de dados para criar soluções modernas e escaláveis](#projects), enquanto cuido da minha fazenda virtual em Stardew Valley.",
  avatarUrl: "/me.jpg",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Java", icon: Java },
    { name: "Spring Boot", icon: Spring },
    { name: "PHP", icon: Php },
    { name: "Laravel", icon: Laravel },
    { name: "Postgres", icon: Postgresql },
    { name: "MySQL", icon: MySQL },
    { name: "Docker", icon: Docker },
    { name: "Git/GitHub", icon: Git },
    { name: "AWS EC2", icon: Aws },
  ],
  apis: [
    { name: "Santander Pagamentos", icon: '' },
    { name: "Integra Notas API", icon: '' },
    { name: "Brasil API", icon: '' },
    { name: "FIPE API", icon: '' },
    { name: "PokeAPI", icon: '' },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "rigo.rfp@gmail.com",
    tel: "+55 84 9888-4927",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Rigobertto",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rigoberto-fernandes/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "#",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,
        navbar: false,
      },
      Email: {
        name: "Email",
        url: "rigo.rfp@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Lemarq Software",
      href: "https://lemarq.com.br/",
      badges: [],
      location: "Presencial - Mossoró, RN",
      title: "Engenheiro de Software",
      logoUrl: "/lemarq.jpg",
      start: "Abril 2024",
      end: "Abril 2026",
      description:
        "Atuação na engenharia de software de sistemas ERP e PDV para os segmentos de indústria e comércio. Responsável pela implementação de módulos fiscais (NF-e/NFS-e), integração com APIs bancárias do Santander para pagamentos via Pix e boleto, além da otimização de consultas SQL e deploy em ambientes Linux AWS EC2 utilizando Docker sob metodologias ágeis.",
    },
    {
      company: "Compass UOL",
      badges: [],
      href: "https://aircompany.ai/en/aws/",
      location: "Remoto - São Paulo, SP",
      title: "Estagiário em Desenvolvimento de Software",
      logoUrl: "/compass.png",
      start: "Setembro 2024",
      end: "Março 2025",
      description:
        "Foco no desenvolvimento backend de APIs RESTful utilizando Node.js com o framework Express. Atuação na escrita de testes automatizados unitários e de integração utilizando Jest, criação de documentação técnica de endpoints com Swagger e manutenção de aplicações implantadas em instâncias AWS EC2.",
    },
    {
      company: "Desenforia Pública do Estado do RN",
      href: "https://www.defensoria.rn.def.br/",
      badges: [],
      location: "Mossoró, RN",
      title: "Estagiário de Suporte Técnico",
      logoUrl: "/dpern.png",
      start: "Janeiro 2023",
      end: "Abril 2024",
      description:
        "Atuação no suporte técnico de infraestrutura de TI, manutenção de hardware, configuração de redes locais e sistemas operacionais, além de prestar assistência direta aos usuários internos da instituição.",
    },
  ],
  education: [
    {
      school: "Universidade Federal Rural do Semi-Árido (UFERSA)",
      href: "https://ufersa.edu.br/",
      degree: "Bacharelado em Ciência da Computação",
      logoUrl: "/ufersa.png",
      start: "2019",
      end: "2026",
    },
    {
      school: "Amazon Web Services (AWS)",
      href: "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/",
      degree: "Certified Cloud Practitioner",
      logoUrl: "/aws.png",
      start: "2024",
      end: "2025",
    },
    {
      school: "Universidade Federal do Rio Grande do Norte (UFRN) & Instituto Metrópole Digital (IMD)",
      href: "https://ufrn.br/",
      degree: "Técnico em Redes de Computadores",
      logoUrl: "/ufrn.png",
      start: "2020",
      end: "2023",
    },
    {
      school: "Instituto Metrópole Digital (IMD)",
      href: "https://www.metropoledigital.ufrn.br/portal/",
      degree: "Curso de Extensão em Desenvolvimento de Jogos Digitais (360h)",
      logoUrl: "/imd.jpg",
      start: "2020",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Essencialix",
      href: "https://homolog.essencialix.starfalltech.cloud/",
      dates: "Jan 2026 - Presente",
      active: true,
      description:
        "A aplicação foi criada com a ideia de atender pequenos empreendimentos que precisam de um controle de vendas, estoque e etiquetas de produtos em uma única plataforma. Além de relatórios e dashboard que oferecem insights valiosos sobre o desempenho do negócio.",
      technologies: [
        "PHP",
        "Laravel",
        "PostgreSQL",
        "Flux UI",
        "Docker",
      ],
      links: [
        {
          type: "Website",
          href: "https://homolog.essencialix.starfalltech.cloud/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/essencialix.png",
      video:
        "",
    },
    {
      title: "SIGEP API",
      href: "https://github.com/Rigobertto/sigep",
      dates: "Junho 2025",
      active: true,
      description:
        "Esta é uma API desenvolvida para realizar o processamento e a importação de planilhas de dados (CSV) da ANP (Agência Nacional do Petróleo, Gás Natural e Biocombustíveis), mais especificamente a tabela de Poços Perfurados no País, e disponibilizá-los em formato JSON através de endpoints REST. A ideia surgiu ao identificar a ausência de uma API ou ferramenta que fornecesse esses dados em um formato adequado para integração com sistemas, dashboards e soluções de monitoramento. Futuramente, a API será expandida para incluir outras bases de dados públicas da ANP.",
      technologies: [
        "Spring Boot",
        "PostgreSQL",
        "Java",
        "Maven",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Rigobertto/sigep",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/anp.png",
      video: "",
    },
    {
      title: "FIPEX",
      href: "https://fipex-gamma.vercel.app/",
      dates: "Setembro 2025 - Presente",
      active: true,
      description:
        "FIPEX é uma aplicação web desenvolvida em React + Next.js que permite analisar preços de veículos utilizando dados da Tabela FIPE. O sistema conta com cálculo das medidas de dispersão e gráficos estatísticos (Boxplot e Histograma). Este projeto surgiu quando estava na faculdade e meu professor de estatística pediu que implementássemos as medidas de dispersão em algum projeto web. Atualmente ele ainda está em fase de melhorias para a publicação de um artigo em uma revista ciêntifica. ",
      technologies: [
        "Next.js",
        "React",
        "PostgreSQL",
        "TailwindCSS",
        "Shadcn UI",
        "Ant Design UI",
        "API FIPE",
      ],
      links: [
        {
          type: "Website",
          href: "https://fipex-gamma.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Rigobertto/fipex",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/fipex.png",
      video: "",
    },

    {
      title: "Pokedex",
      href: "https://github.com/Rigobertto/pokedex",
      dates: "Março 2024",
      active: true,
      description:
        "Além do 'Hello World', todo dev em algum momento também cria sua própria Pokedex. Comigo não foi diferente e aqui está a minha versão. A aplicação web permite que os usuários pesquisem pokémons, visualizem suas características, evoluções e designs, tudo isso consumindo dados da PokeAPI.",
      technologies: [
        "React",
        "NextJs",
        "Typescript",
        "TailwindCSS",
        "PokeAPI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Rigobertto/pokedex",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/pokemon.mp4",
    },
    {
      title: "Landing Page para Advogados",
      href: "https://github.com/Rigobertto/landing-page-adv",
      dates: "Dezembro 2025",
      active: true,
      description:
        "Este projeto surgiu quando uma ex colega da Defensoria Pública me pediu ajuda para criar uma landing page que apresentasse seu trabalho como advogada, eu prontamente atendi e juntos desenvolvemos esse layout.",
      technologies: [
        "NextJs",
        "Shadcn UI",
        "React",
        "Typescript",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Rigobertto/landing-page-adv",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://youtu.be/fsBdbVYLf1w",
    },
    {
      title: "Em breve: Barbernow",
      href: "#",
      dates: "Fevereiro 2025 - Present",
      active: true,
      description:
        "Barbernow é um app de agendamento de serviços de barbearia desenvolvido em Next.js, com backend em Spring Boot e banco de dados PostgreSQL. O aplicativo permite que os usuários agendem horários, visualizem serviços disponíveis e recebam notificações de confirmação.",
      technologies: [
        "Next.js",
        "React",
        "PostgreSQL",
        "TailwindCSS",
        "Shadcn UI",
        "Spring Boot",
        "Brasil API",
      ],
      links: [
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      // video: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
      video: "",
    },

  ],
  hackathons: [

    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },

  ],
} as const;
