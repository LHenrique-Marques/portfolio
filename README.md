
# 🧑‍💻 Portfolio - Luis Henrique Marques Franque Flores

Este é o repositório do meu portfólio profissional, desenvolvido com foco em performance, organização e integração com CMS (Hygraph) para facilitar a atualização dos projetos.

## 🚀 Tecnologias Utilizadas

- [Next.js (App Router)](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Hygraph CMS (GraphQL)](https://hygraph.com/)
- [Vercel](https://vercel.com/) – hospedagem

## 📂 Estrutura do Projeto

```
.
├── app/                 # Páginas, layouts e rotas
│   ├── components/      # Componentes reutilizáveis
│   ├── projects/        # Página de projetos + rota dinâmica [slug]
│   └── api/             # API route para contato (formulário)
├── public/              # Arquivos estáticos
├── styles/              # Estilos globais
├── types/               # Tipagens TypeScript
├── utils/               # Funções utilitárias (ex: fetchHygraphQuery)
```

## ✍️ Como atualizar os projetos

1. Acesse o painel do [Hygraph CMS](https://hygraph.com/)
2. Edite ou adicione novos projetos
3. O site será atualizado automaticamente após o período de revalidação ou via rebuild manual/deploy (Vercel)

## 🛠️ Rodando localmente

```bash
# Instale as dependências
yarn install

# Crie um arquivo .env.local com as variáveis do Hygraph
HYGRAPH_URL=https://...
HYGRAPH_TOKEN=...

# Rode o projeto localmente
yarn dev
```

## 📦 Build para produção

```bash
yarn build
yarn start
```

## 📬 Contato

Se quiser entrar em contato comigo, acesse a seção "Contato" do site ou envie mensagem em:

- [LinkedIn](https://www.linkedin.com/in/luis-henrique-marques-franque-flores-508ba126b/)
- [GitHub](https://github.com/LHenrique-Marques)

## 🌐 Deploy

Este portfólio está hospedado na **[Vercel](https://portfolio-hazel-three-72.vercel.app)** para alta performance e integração contínua.
