# Dr. Ursinho - Clínica Médica Integrada

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC)
![Prisma](https://img.shields.io/badge/Prisma-5-1B222D)
![SQLite](https://img.shields.io/badge/SQLite-003B57)

Um sistema completo de clínica médica englobando frontend institucional, área do paciente, portal do médico e painel administrativo, construído inteiramente com **Next.js 14**, **TypeScript**, **Tailwind CSS** e **Prisma ORM**.

## 📌 Funcionalidades

### 🏥 Portal Institucional (Público)
- **Home:** Hero section, serviços principais, diferenciais e depoimentos.
- **Serviços:** Listagem de serviços com filtros e busca.
- **Equipe Médica:** Perfil de médicos com especialidades e marcação direta.
- **Sobre e Contato:** Informações institucionais, missão, formulário e mapa.

### 📅 Sistema de Agendamento
- Wizard multi-passos (Profissional → Serviço → Data/Hora → Confirmação).
- Resumo do agendamento flutuante em tempo real.
- Seleção de datas e horários disponíveis.

### 👤 Área do Paciente
- Dashboard completo (Próxima consulta, Equipe médica, Resultados, Dados vitais).
- Histórico de agendamentos.
- Download de resultados de exames.
- Visualização de prescrições.

### 🩺 Portal do Médico
- Agenda do dia (Status, Horários, e Confirmações).
- Prontuário eletrônico do paciente.
- Gestão de consultas.

### ⚙️ Painel Administrativo
- Visão geral com estatísticas financeiras, volume de pacientes e métricas.
- Tabela de atividades em tempo real.
- Gestão completa da clínica (em breve CRUD total).

## 🚀 Tecnologias

- **Framework:** Next.js 14 (App Router)
- **Estilização:** Tailwind CSS (Customizado com a identidade visual Dr. Ursinho)
- **Banco de Dados:** SQLite e Prisma ORM (v5)
- **Autenticação:** JWT (JSON Web Tokens) com bcrypt
- **Ícones:** Lucide React

## 🛠️ Como rodar o projeto localmente

1. **Clone do repositório:**
   ```bash
   git clone https://github.com/SeuUsuario/DrUrsinho.git
   cd DrUrsinho
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env` na raiz do projeto (se não existir) com:
   ```env
   DATABASE_URL="file:./dev.db"
   JWT_SECRET="super-secret-dr-ursinho-key-12345"
   ```

4. **Prepare o Banco de Dados (Prisma):**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Rode o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

6. Acesse: `http://localhost:3000`

## 👨‍💻 Identidade Visual
Implementado seguindo estritamente as diretrizes visuais:
- **Verde Clínico (Primário):** `#2A9D8F`
- **Coral Suave (Secundário - Destaques/Ação):** `#E76F51`
- **Tipografia:** Inter / Poppins

## 📜 Licença
Projeto desenvolvido para fins de demonstração e estudo.
