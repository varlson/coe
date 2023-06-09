import React from "react";

export const Logo = () => {
  return (
    <div className="flex gap-2">
      <img className="object-contain h-20" src="Logomarc.png" alt="" />
      <div className="font-Jura text-center self-center">
        <p className="font-bold text-normal ">
          Colegiado do curso de Engenharia Elétrica
        </p>
        <p className="font-extralight text-sm">
          ICEA - Campus João Monlevade - MG - Brasil
        </p>
      </div>
    </div>
  );
};

export const Search = () => {
  return (
    <div className="flex bg-white rounded-xl">
      <input
        className="outline-none rounded-tl-xl rounded-bl-xl w-11/12 px-3 py-1"
        type="text"
      />
      <img
        className="justify-self-end h-10 object-contain"
        src="Search.png"
        alt=""
      />
    </div>
  );
};

export const ExpandInicio = () => {
  return (
    <ul className="bg-basicRed flex text-center">
      <li className="px-5 py-2 cursor-pointer">Sobre Colegiado</li>
      <li className="px-5 py-2 cursor-pointer">Sobre NDE</li>
      <li className="px-5 py-2 cursor-pointer">Sobre NDEE</li>
      <li className="px-5 py-2 cursor-pointer">COEE em Números</li>
    </ul>
  );
};

export const ExpandCurso = () => {
  return (
    <ul className="bg-basicRed flex text-center">
      <li className="px-5 py-2 cursor-pointer">Graduação</li>
      <li className="px-5 py-2 cursor-pointer">Matriz Curricular</li>
      <li className="px-5 py-2 cursor-pointer">Docentes</li>
      <li className="px-5 py-2 cursor-pointer">Ementas</li>
      <li className="px-5 py-2 cursor-pointer">Projeto Pedagógico</li>
      <li className="px-5 py-2 cursor-pointer">Avaliação</li>
    </ul>
  );
};

export const ExpandInfra = () => {
  return (
    <ul className="bg-basicRed  flex text-center">
      <li className="hover:bg-red800 px-5 py-2 cursor-pointer">Lab de C. E.</li>
      <li className="hover:bg-red800 px-5 py-2 cursor-pointer">Lab de E. A.</li>
      <li className="hover:bg-red800 px-5 py-2 cursor-pointer">
        Lab de C. e A.
      </li>
      <li className="hover:bg-red800 px-5 py-2 cursor-pointer">
        Lab de S. E. I.
      </li>
      <li className="hover:bg-red800 px-5 py-2 cursor-pointer">Lab de R.</li>
      <li className="hover:bg-red800 px-5 py-2 cursor-pointer">
        Lab de P. de S.
      </li>

      <li className="hover:bg-red800 px-5 py-2 cursor-pointer">Lab de E. D.</li>
    </ul>
  );
};

export const ExpandPesquisa = () => {
  return (
    <ul className="bg-basicRed flex text-center">
      <li className="px-5 py-2 cursor-pointer">Grupos de Pesquisas</li>
      <li className="px-5 py-2 cursor-pointer">Projetos de Pesquisa </li>
      <li className="px-5 py-2 cursor-pointer">Projetos de Extensão</li>
    </ul>
  );
};

export const ExpandBolsa = () => {
  return (
    <ul className="bg-basicRed flex text-center">
      <li className="px-5 py-2 cursor-pointer">Pesquisa e IC</li>
      <li className="px-5 py-2 cursor-pointer">Extensão</li>
      <li className="px-5 py-2 cursor-pointer">Institucional</li>
      <li className="px-5 py-2 cursor-pointer">Pro-Ativa</li>
      <li className="px-5 py-2 cursor-pointer">Monitoria</li>
      <li className="px-5 py-2 cursor-pointer">PRACE</li>
    </ul>
  );
};

export const LeftSide = () => {
  return (
    <div className="font-Jura text-sm">
      <div className=" bg-basicBlack rounded flex text-white items-center gap-2 p-2 mb-2">
        <span>Editais</span>
        <img className="h-5" src="Chevron.png" alt="" />
      </div>

      <div className="bg-basicBlack rounded flex text-white items-center gap-2 p-2 mb-2">
        <span>TCCs</span>
        <img className="h-5" src="Chevron.png" alt="" />
      </div>

      <div className="bg-basicBlack rounded flex text-white items-center gap-1 p-2 mb-2">
        <span>Resoluções</span>
        <img className="h-5" src="Chevron.png" alt="" />
      </div>

      <div className="bg-basicBlack rounded flex text-white items-center gap-2 p-2 mb-2">
        <span>ATVs</span>
        <img className="h-5" src="Chevron.png" alt="" />
      </div>
    </div>
  );
};
export const RightSide = () => {
  return (
    <div className=" font-Jura text-basicRed">
      <ul className="divide-y-2 divide-slate-300 p-1 text-center ">
        <li className="font-semibold my-4">Menu</li>
        <li className="cursor-pointer my-3 ">Ensino</li>
        <li className="cursor-pointer my-3">Pessoal</li>
        <li className="cursor-pointer my-3">Horários</li>
        <li className="cursor-pointer my-3">Pesquisa</li>
        <li className="cursor-pointer my-3 border-b-slate-300">Contato</li>
      </ul>
    </div>
  );
};

export const Location = () => {
  return (
    <div className="flex gap-2 items-center">
      <img className="h-8" src="Address.png" alt="" />
      <div className="font-Jura">
        <p className="my-1">Instituto de Ciências Exatas e Aplicadas - ICEA</p>
        <p className="my-1">
          Rua Trinta e Seis, Nº 115, Loanda - João Monlevade - MG
        </p>
      </div>
    </div>
  );
};

export const MediaSocial = () => {
  return (
    <div className="p-1 flex flex-col gap-2">
      <div className="flex gap-2">
        <img className="h-8" src="facebook.png" alt="" />
        <img className="h-8" src="insta.png" alt="" />
        <img className="h-8" src="WhatsApp.png" alt="" />
      </div>

      <div className="flex  flex-col">
        <div className="flex gap-2">
          <img className="h-8" src="phone.png" alt="" />
          <p className="my-1">+55 31 3808-0833</p>
        </div>
        <div className="flex gap-2">
          <img className="h-8" src="email.png" alt="" />
          <p className="my-1">coee@ufop.edu.br</p>
        </div>
      </div>
    </div>
  );
};

export const ComercialTime = () => {
  return (
    <div className="p-1 flex items-center gap-4">
      <img className="h-8" src="Time Machine.png" alt="" />
      <div className="flex flex-col">
        <div className="mb-2 text-right">
          <p className="font-bold ">Atendimento Remoto</p>
          <p className="my-1">Segunda a sexta-feira, das 8h às 12h</p>
          <p className="my-1">Sexta-feira: 13h às 17h</p>
        </div>

        <div className="mb-2 text-right">
          <p className="font-bold ">Atendimento Presencial</p>
          <p className="my-1">Segunda a quinta-feira, das 14h às 18h</p>
        </div>
      </div>
    </div>
  );
};
