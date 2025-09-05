# Chat em Tempo Real 🌙☀️

Um aplicativo de chat em tempo real construído com Node.js, Express e WebSockets, com suporte a temas claro e escuro.

## ✨ Funcionalidades

- ✅ Chat em tempo real com WebSockets
- ✅ Lista de usuários online
- ✅ Histórico de mensagens
- ✅ Indicador de "digitando..."
- ✅ Interface moderna e responsiva
- ✅ Login com nome de usuário
- ✅ **Tema claro e escuro** com persistência
- ✅ Design responsivo e acessível
- ✅ Animações suaves e transições

## Como executar

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Executar o servidor:**
   ```bash
   npm start
   ```

3. **Acessar a aplicação:**
   Abra seu navegador e acesse: `http://localhost:3000`

## Como usar

1. Digite seu nome na tela de login
2. Clique em "Entrar no Chat" ou pressione Enter
3. Comece a conversar com outros usuários online
4. Veja quem está online na barra lateral
5. Observe quando alguém está digitando
6. **Alternar tema:** Clique no botão 🌙/☀️ no canto superior direito

## 🎨 Temas

- **Tema Claro:** Interface limpa e clara para uso diurno
- **Tema Escuro:** Interface escura e elegante para uso noturno
- **Persistência:** Sua preferência de tema é salva automaticamente
- **Alternância:** Botão de tema disponível tanto na tela de login quanto no chat

## Tecnologias utilizadas

- **Backend:** Node.js, Express, WebSocket (ws)
- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Comunicação:** WebSockets para tempo real

## Estrutura do projeto

```
realtime-chat/
├── server.js          # Servidor Node.js com WebSocket
├── package.json       # Dependências e scripts
├── public/            # Arquivos estáticos
│   ├── index.html     # Página principal
│   ├── style.css      # Estilos CSS
│   └── cliente.js     # JavaScript do cliente
└── README.md         # Este arquivo
```

## Scripts disponíveis

- `npm start` - Executa o servidor
- `npm run dev` - Executa o servidor (alias para start)

## Porta

O servidor roda por padrão na porta 3000. Para alterar, defina a variável de ambiente PORT:

```bash
PORT=8080 npm start
```

## 🚀 Deploy e Compartilhamento

### Deploy Local
Para compartilhar localmente com outros usuários na mesma rede:

1. **Descobrir seu IP local:**
   ```bash
   # Windows
   ipconfig
   
   # Linux/Mac
   ifconfig
   ```

2. **Executar o servidor:**
   ```bash
   npm start
   ```

3. **Compartilhar o link:**
   - Acesse: `http://SEU_IP:3000`
   - Exemplo: `http://192.168.1.100:3000`

### Deploy em Servidor (Recomendado)
Para acesso público e compartilhamento fácil:

1. **Heroku:**
   ```bash
   # Instalar Heroku CLI
   # Criar Procfile
   echo "web: node server.js" > Procfile
   
   # Deploy
   git add .
   git commit -m "Deploy chat app"
   git push heroku main
   ```

2. **Railway:**
   - Conecte seu repositório GitHub
   - Deploy automático

3. **Vercel/Netlify:**
   - Para aplicações estáticas (requer adaptação)

### Configuração para Produção
```bash
# Variáveis de ambiente
NODE_ENV=production
PORT=3000
```

## 🔒 Acesso Privado

Para manter o chat privado:

1. **Autenticação básica:** Adicione middleware de autenticação
2. **Whitelist de IPs:** Restrinja acesso por endereço IP
3. **Chave de acesso:** Implemente sistema de convites
4. **VPN:** Use rede privada virtual

## 📱 Acesso Mobile

O chat é totalmente responsivo e funciona em:
- 📱 Smartphones
- 📱 Tablets  
- 💻 Desktops
- 🖥️ Laptops
