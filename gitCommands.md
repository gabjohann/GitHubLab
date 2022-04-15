# 🐙 Lista de Comandos GitHub 🐙

> Lista de comandos utilizados no versionamento de código

## 🏁 Configurações Inicias 

🆔 **Configuração nome de usuário** → `git config --global user.name "nome sobrenome"`

📬 **Configuração email de usuário** → `git config --global user.email email@email.com`

<br/>

## 🗃️ Configuração de Repositório

📂 **Iniciar repositório localmente** → `git init`

🔀 **Conectar repositório remoto a um repositório local** → `git remote add origin <url>`

<br/>

## 🔖 Commits

📥 **Adicionar arquivos ao stage** → `git add <arquivos>`
  
📦 **Adicionar todos os arquivos ao stage** → `git add .`
  
📝 **Commit dos arquivos em stage, abre o editor de texto padrão do sistema** → `git commit` 
  
✏️ **Commit dos arquivos em stage com a mensagem descrita no terminal** → `git commit -m "mensagem de commit"` 

📜 **Commit de várias linhas (tecle enter antes de fechar aspas)** → `git commit -m "mensagem de commit"`

<br/>

## 📈 Branch 

📊 **Verificar o status dos arquivos na branch** →  `git status`

⏬ **Baixa os arquivos do repositório remoto** → `git pull`
  
⏫ **Enviar os arquivos commitados para o repositório remoto** → `git push`
  
🔝 **Envia os arquivos para uma branch que só existe no repositório local** → `git push -u origin nome_da_branch`
  
📋 **Lista todas as branchs locais** → `git branch`
  
🌐 **Lista todas as branchs (remotas e locais)** → `git branch -a`
  
🧾 **Cria uma branch vazia (sem histórico das demais)** → `git checkout --orphan nome_da_branch `
  
🔄 **Troca de branch** → `git checkout nome_da_branch`

🆕 **Cria uma nova branch** → `git checkout -b nome_da_branch`

📑 **Baixa todas as branchs remotas** → `git fetch`

⛔ **Remover os arquivos da árvore de trabalho** → `git rm -rf`
  
❌ **Excluir todos os arquivos (inclusive os ignorados)** → `git clean -fdx`