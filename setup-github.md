# 🚀 Setup do GitHub - Chat em Tempo Real

## Passos para conectar ao repositório GitHub

### 1. Inicializar Git (se ainda não foi feito)
```bash
git init
```

### 2. Adicionar arquivos ao Git
```bash
git add .
```

### 3. Fazer commit inicial
```bash
git commit -m "feat: Chat em tempo real com tema claro/escuro

- Implementado chat em tempo real com WebSockets
- Adicionado sistema de temas claro e escuro
- Interface responsiva e moderna
- Histórico de mensagens
- Indicador de digitação
- Lista de usuários online"
```

### 4. Conectar ao repositório remoto
```bash
git remote add origin https://github.com/CodeBy-red/Os.Cara.Ta.No.Telhado.git
```

### 5. Fazer push para o GitHub
```bash
git branch -M main
git push -u origin main
```

## 🔒 Configuração de Repositório Privado

### No GitHub:
1. Acesse: https://github.com/CodeBy-red/Os.Cara.Ta.No.Telhado
2. Vá em **Settings** → **General**
3. Role para baixo até **Danger Zone**
4. Clique em **Change repository visibility**
5. Selecione **Private**
6. Confirme a alteração

### Convidar colaboradores:
1. Vá em **Settings** → **Manage access**
2. Clique em **Invite a collaborator**
3. Digite o username ou email
4. Escolha o nível de permissão
5. Envie o convite

## 📋 Checklist de Deploy

- [x] ✅ Código funcional
- [x] ✅ Tema claro/escuro implementado
- [x] ✅ Interface responsiva
- [x] ✅ README completo
- [x] ✅ .gitignore configurado
- [x] ✅ Procfile para Heroku
- [ ] 🔄 Repositório GitHub configurado
- [ ] 🔄 Deploy em produção

## 🌐 Links Úteis

- **Repositório:** https://github.com/CodeBy-red/Os.Cara.Ta.No.Telhado
- **Deploy Heroku:** (após configurar)
- **Deploy Railway:** (opcional)

## 📱 Teste Local

Para testar localmente:
```bash
npm start
```

Acesse: `http://localhost:3000`

## 🔧 Comandos Úteis

```bash
# Ver status do git
git status

# Ver logs
git log --oneline

# Atualizar repositório
git add .
git commit -m "mensagem"
git push

# Clonar repositório (para outros usuários)
git clone https://github.com/CodeBy-red/Os.Cara.Ta.No.Telhado.git
cd Os.Cara.Ta.No.Telhado
npm install
npm start
```
