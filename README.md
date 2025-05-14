🧑‍💻 Portfolio - Luis Henrique Marques Franque Flores
Este é o repositório do meu portfólio profissional, desenvolvido com foco em performance, organização e integração com CMS (Hygraph) para facilitar a atualização dos projetos.

🚀 Tecnologias Utilizadas
Next.js (App Router)

TypeScript

Tailwind CSS

Hygraph CMS (GraphQL)

Vercel – hospedagem

📂 Estrutura do Projeto
bash
Copiar
Editar
.
├── app/                 # Páginas, layouts e rotas
│   ├── components/      # Componentes reutilizáveis
│   ├── projects/        # Página de projetos + rota dinâmica [slug]
│   └── api/             # API route para contato (formulário)
├── public/              # Arquivos estáticos
├── styles/              # Estilos globais
├── types/               # Tipagens TypeScript
├── utils/               # Funções utilitárias (ex: fetchHygraphQuery)
✍️ Como atualizar os projetos
Acesse o painel do Hygraph CMS

Edite ou adicione novos projetos

O site será atualizado automaticamente após o período de revalidação ou via rebuild manual/deploy (Vercel)

🛠️ Rodando localmente
bash
Copiar
Editar
# Instale as dependências
yarn install

# Crie um arquivo .env.local com as variáveis do Hygraph
HYGRAPH_URL=https://...
HYGRAPH_TOKEN=...

# Rode o projeto localmente
yarn dev
📦 Build para produção
bash
Copiar
Editar
yarn build
yarn start
📬 Contato
Se quiser entrar em contato comigo, acesse a seção "Contato" do site ou envie mensagem em:

LinkedIn

GitHub

🌐 Deploy
Este portfólio está hospedado na Vercel para alta performance e integração contínua.
