import { menuTogleType } from "../types/types";

export const submenus: menuTogleType[] = [
  {
    label: "Inínio",
    id: "inicio",
    subMenus: [
      {
        label: "Sobre Colegiado",
        link: "/sobre-colegiado",
      },

      {
        label: "Sobre NDE",
        link: "/sobre-nde",
      },

      {
        label: "Sobre NDEE",
        link: "/sobre-ndee",
      },

      {
        label: "COEE em Números",
        link: "/coe-em-numeros",
      },
    ],
  },

  {
    label: "Curso",
    id: "curso",
    subMenus: [
      {
        label: "Graduação",
        link: "/graduacao",
      },

      {
        label: "Matriz Curricular",
        link: "/matriz-curricular",
      },

      {
        label: "Docentes",
        link: "/docentes",
      },

      {
        label: "Ementas",
        link: "/ementas",
      },

      {
        label: "Projeto Pedagógico",
        link: "/projeto-pedagogico",
      },

      {
        label: "Avaliação",
        link: "/avaliacao",
      },
    ],
  },

  {
    label: "Infraestratura",
    id: "infra",
    subMenus: [
      {
        label: "Lab de C. E.",
        link: "/lab-ce",
      },

      {
        label: "Lab de E. A",
        link: "/lab-ea",
      },

      {
        label: "Lab de S.E.I.",
        link: "/lab-sei",
      },

      {
        label: "Lab de R.",
        link: "/lab-r",
      },

      {
        label: "Lab de P. de S.",
        link: "/lab-ps",
      },

      {
        label: "Lab de E. D.",
        link: "/lab-ed",
      },
    ],
  },

  {
    label: "Pesq. e Extensão",
    id: "pesquisa",
    subMenus: [
      {
        label: "Grupos de Pesquisas",
        link: "/grupo-pesquisa",
      },

      {
        label: "Projetos de Pesquisa",
        link: "/projeto-pesquisa",
      },

      {
        label: "Projeto de Extensão",
        link: "/projeto-exensao",
      },
    ],
  },

  {
    label: "Bolsa",
    id: "bolsa",
    subMenus: [
      {
        label: "Pesquisa e IC",
        link: "/pesquisa-ic",
      },

      {
        label: "Extensão",
        link: "bolsa-extensao",
      },

      {
        label: "Institucional",
        link: "/bolsa-institucional",
      },

      {
        label: "Pro-Ativa",
        link: "/proativa",
      },

      {
        label: "Monitoria",
        link: "/monitoria",
      },

      {
        label: "Prace",
        link: "/prace",
      },
    ],
  },
];
