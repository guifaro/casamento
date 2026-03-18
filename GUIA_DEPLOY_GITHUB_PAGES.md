# 🌺 Guia Completo — Publicar o Site de Casamento no GitHub Pages

> **Para quem é este guia?**
> Este guia foi escrito pensando em quem nunca usou GitHub antes. Cada passo é explicado com detalhes, sem pular nada. Siga a ordem e tudo vai dar certo! 💪

---

## ✅ Checklist Rápido

Antes de começar, confirme que você tem:

- [ ] Pasta do projeto: `C:\Users\Guilherme Faro\casamento`
- [ ] Arquivos: `index.html`, `css/style.css`, `js/main.js`, `.nojekyll`
- [ ] Git instalado no computador *(já deve estar, já que você fez commits)*
- [ ] Conta no GitHub *(veja Parte 1 se ainda não tiver)*
- [ ] Domínio `camilanigriseguilhermefaro.com` comprado

---

## 📋 Sumário

1. [Parte 1 — Criar conta no GitHub](#-parte-1--criar-conta-no-github)
2. [Parte 2 — Criar o repositório "casamento"](#-parte-2--criar-o-repositório-casamento)
3. [Parte 3 — Conectar a pasta local ao GitHub](#-parte-3--conectar-a-pasta-local-ao-github)
4. [Parte 4 — Ativar o GitHub Pages](#-parte-4--ativar-o-github-pages)
5. [Parte 5 — Configurar o domínio personalizado](#-parte-5--configurar-o-domínio-personalizado)
6. [Parte 6 — Atualizar o site no futuro](#-parte-6--atualizar-o-site-no-futuro)
7. [Parte 7 — Configurar o Formulário RSVP (Formspree)](#-parte-7--configurar-o-formulário-rsvp-formspree)
8. [Parte 8 — Configurar sua Chave PIX](#-parte-8--configurar-sua-chave-pix)
9. [Parte 9 — Substituir as Fotos Placeholder](#-parte-9--substituir-as-fotos-placeholder)
10. [Dicas Finais](#-dicas-finais)

---

## 🧑‍💻 Parte 1 — Criar conta no GitHub

> Se você já tem conta no GitHub, pule para a **Parte 2**.

1. Acesse **[https://github.com](https://github.com)** no seu navegador.
2. Clique no botão verde **"Sign up"** (canto superior direito).
3. Preencha:
   - **Username** (nome de usuário): escolha algo simples, ex: `guilhermefaro`
   - **E-mail**: seu e-mail pessoal
   - **Password**: uma senha forte
4. Resolva o captcha e clique em **"Create account"**.
5. Verifique seu e-mail (GitHub envia um código de confirmação).
6. Conclua o cadastro — pode pular as perguntas opcionais clicando em **"Skip personalization"**.

> 💡 **Anote seu username!** Você vai precisar dele nos próximos passos.
> O seu username aparece na URL: `https://github.com/SEU_USERNAME`

---

## 📁 Parte 2 — Criar o repositório "casamento"

Um **repositório** (ou "repo") é como uma pasta do projeto hospedada no GitHub.

1. Estando logado em [github.com](https://github.com), clique no ícone **＋** no canto superior direito.
2. Selecione **"New repository"**.
3. Preencha os campos:

   | Campo | O que preencher |
   |-------|----------------|
   | **Repository name** | `casamento` |
   | **Description** *(opcional)* | Site de casamento Camila & Guilherme |
   | **Visibility** | ● **Public** *(marque esta opção)* |
   | **Initialize this repository with:** | ⚠️ **NÃO marque nenhuma das opções abaixo!** |
   | Add a README file | ❌ Deixar desmarcado |
   | Add .gitignore | ❌ Deixar desmarcado |
   | Choose a license | ❌ Deixar como "None" |

4. Clique no botão verde **"Create repository"**.

5. Você verá uma tela com instruções parecidas com esta:

   ```
   …or push an existing repository from the command line
   git remote add origin https://github.com/SEU_USUARIO/casamento.git
   git branch -M main
   git push -u origin main
   ```

   > ⚠️ **Não feche esta página!** Você vai copiar o endereço do repositório no próximo passo.

---

## 🔗 Parte 3 — Conectar a pasta local ao GitHub

Agora vamos "ligar" a pasta do seu computador ao repositório que você criou.

### Como abrir o PowerShell na pasta certa

1. Abra o **VS Code** (que você já usa para editar o site).
2. No menu superior, clique em **Terminal → New Terminal** (ou tecle `` Ctrl+` ``).
3. O terminal abrirá já dentro da pasta do projeto.

> Alternativamente: abra o **PowerShell** comum e cole:
> ```powershell
> cd "C:\Users\Guilherme Faro\casamento"
> ```

---

### Comandos a executar (um por vez)

**Passo 3.1 — Vincular ao GitHub**

```powershell
git remote add origin https://github.com/SEU_USUARIO/casamento.git
```

> 🔴 **IMPORTANTE:** Substitua `SEU_USUARIO` pelo seu username real do GitHub.
> Exemplo: se seu username for `guilhermefaro`, o comando fica:
> `git remote add origin https://github.com/guilhermefaro/casamento.git`

---

**Passo 3.2 — Definir a branch principal como "main"**

```powershell
git branch -M main
```

> Isso garante que a branch se chame `main` (padrão atual do GitHub).

---

**Passo 3.3 — Enviar os arquivos para o GitHub**

```powershell
git push -u origin main
```

> O `-u origin main` faz o "push" enviar os arquivos para o GitHub.
> Na primeira vez, o Git pode pedir seu **usuário e senha do GitHub**.

---

### 🔑 Como autenticar no GitHub (primeira vez)

Na primeira vez que você fizer `git push`, pode aparecer uma janela pedindo login.

**Opção A — Via navegador (recomendado):**
Uma janela do navegador pode abrir automaticamente pedindo para você autorizar. Clique em **"Authorize Git"**.

**Opção B — Token de acesso pessoal:**
Se pedir usuário e senha diretamente no terminal:
- **Username:** seu username do GitHub
- **Password:** NÃO é sua senha — é um **Personal Access Token**.

Para criar um token:
1. No GitHub, clique na foto do seu perfil → **Settings**
2. Role até o final → **Developer settings**
3. **Personal access tokens → Tokens (classic)**
4. **Generate new token (classic)**
5. Dê um nome (ex: "meu-computador"), marque o escopo **repo** e clique **Generate token**
6. **Copie o token mostrado** (ele só aparece uma vez!)
7. Cole no campo "Password" do terminal.

---

### ✅ Verificando se funcionou

Após o `git push`, acesse `https://github.com/SEU_USUARIO/casamento` no navegador.
Você deve ver seus arquivos (index.html, css/, js/, etc.) listados lá. 🎉

---

## 🌐 Parte 4 — Ativar o GitHub Pages

O GitHub Pages é o serviço gratuito que transforma seu repositório em um site na internet.

1. No seu repositório no GitHub, clique na aba **"Settings"** (ícone de engrenagem, no menu horizontal superior).

2. No menu **lateral esquerdo**, procure e clique em **"Pages"** (dentro da seção "Code and automation").

3. Na seção **"Build and deployment"**:
   - Em **Source**, selecione: **"Deploy from a branch"**
   - Em **Branch**, selecione: `main` e na pasta selecione `/ (root)`
   - Clique em **"Save"**

4. A página vai recarregar. Uma mensagem amarela vai aparecer informando que o site está sendo preparado.

5. ⏳ **Aguarde de 1 a 5 minutos.** Recarregue a página de Settings → Pages até aparecer uma mensagem verde como:

   ```
   ✅ Your site is live at https://SEU_USUARIO.github.io/casamento
   ```

6. Clique no link para abrir seu site! 🎊

> ⚠️ **Pode demorar alguns minutos para o site ficar acessível.** Se aparecer erro 404, espere mais um pouco e tente novamente.

---

## 🌍 Parte 5 — Configurar o Domínio Personalizado

Agora vamos fazer com que `camilanigriseguilhermefaro.com` aponte para o seu site.

Esta parte tem **3 etapas** que precisam ser feitas na ordem:

```
📁 Criar arquivo CNAME  →  🌐 Configurar DNS  →  ⚙️ Configurar no GitHub
```

---

### 📄 Passo 5.1 — Criar o arquivo CNAME no projeto

O arquivo `CNAME` diz ao GitHub Pages qual domínio deve ser usado.

No terminal (VS Code ou PowerShell dentro da pasta do projeto), execute **linha por linha**:

```powershell
cd "C:\Users\Guilherme Faro\casamento"
```

```powershell
"camilanigriseguilhermefaro.com" | Out-File -FilePath CNAME -Encoding ascii -NoNewline
```

```powershell
git add CNAME
```

```powershell
git commit -m "chore: adiciona CNAME para dominio personalizado"
```

```powershell
git push
```

> 💡 O arquivo `CNAME` deve conter apenas o domínio, sem `https://` e sem `www`.
> Deve ser exatamente: `camilanigriseguilhermefaro.com`

---

### 🌐 Passo 5.2 — Configurar o DNS no provedor do domínio

Este passo é feito no site onde você **comprou o domínio** (GoDaddy, Registro.br, Hostinger, etc.).

Você vai criar **5 registros DNS**: 4 registros tipo A e 1 registro tipo CNAME.

---

#### 📋 Registros A (apontam para os servidores do GitHub)

| Tipo | Nome/Host | Valor/Destino | TTL |
|------|-----------|---------------|-----|
| A | `@` | `185.199.108.153` | 3600 |
| A | `@` | `185.199.109.153` | 3600 |
| A | `@` | `185.199.110.153` | 3600 |
| A | `@` | `185.199.111.153` | 3600 |

> O `@` representa o domínio raiz (`camilanigriseguilhermefaro.com`).
> Alguns painéis usam `@`, outros pedem que você deixe o campo **em branco**. Ambos significam a mesma coisa.

#### 📋 Registro CNAME (para o "www")

| Tipo | Nome/Host | Valor/Destino | TTL |
|------|-----------|---------------|-----|
| CNAME | `www` | `SEU_USUARIO.github.io` | 3600 |

> Substitua `SEU_USUARIO` pelo seu username do GitHub.
> Exemplo: `guilhermefaro.github.io`

---

#### 🛠️ Como acessar o painel DNS — Por registrador

<details>
<summary>📌 <strong>GoDaddy</strong> (clique para expandir)</summary>

1. Acesse [https://godaddy.com](https://godaddy.com) e faça login.
2. Clique no seu nome → **Meus Produtos**.
3. Ao lado do domínio, clique em **DNS** (ou "Gerenciar DNS").
4. Role até **Registros de DNS**.
5. Clique em **Adicionar** para cada registro da tabela acima.

</details>

<details>
<summary>📌 <strong>Registro.br</strong> (clique para expandir)</summary>

1. Acesse [https://registro.br](https://registro.br) e faça login.
2. Clique no domínio desejado.
3. Clique em **Editar Zona DNS**.
4. Adicione cada registro clicando no botão de adicionar entrada.
   - Para registros A: escolha tipo **A**, host `@`, valor o IP do GitHub.
   - Para CNAME: escolha tipo **CNAME**, host `www`, valor `SEU_USUARIO.github.io`.
5. Clique em **Salvar**.

</details>

<details>
<summary>📌 <strong>Hostinger</strong> (clique para expandir)</summary>

1. Acesse [https://hpanel.hostinger.com](https://hpanel.hostinger.com) e faça login.
2. No painel, clique em **Domínios** → selecione seu domínio.
3. Clique em **DNS / Nameservers**.
4. Na seção **DNS Records**, clique em **Add Record** para cada entrada.
5. Clique em **Save** após cada adição.

</details>

<details>
<summary>📌 <strong>Namecheap</strong> (clique para expandir)</summary>

1. Acesse [https://namecheap.com](https://namecheap.com) e faça login.
2. Clique em **Domain List** → **Manage** ao lado do domínio.
3. Clique na aba **Advanced DNS**.
4. Clique em **Add New Record** para cada entrada.

</details>

> ⏳ **Importante:** A propagação do DNS pode levar de **2 horas até 48 horas**.
> Isso é normal e não significa que algo deu errado. Tenha paciência!

---

### ⚙️ Passo 5.3 — Configurar o domínio personalizado no GitHub

1. Volte ao GitHub → seu repositório `casamento` → **Settings → Pages**.
2. Encontre a seção **"Custom domain"**.
3. No campo de texto, digite exatamente:
   ```
   camilanigriseguilhermefaro.com
   ```
4. Clique em **"Save"**.
5. O GitHub irá verificar o DNS. Você pode ver uma mensagem amarela de "verificação pendente" — isso é normal.
6. Após a propagação do DNS (horas ou até 48h), a mensagem ficará verde ✅.
7. Quando estiver verde, marque a opção **"Enforce HTTPS"** e clique em **Save**.
   > 🔒 O HTTPS garante que o site use o cadeado de segurança (SSL/TLS gratuito via Let's Encrypt).

---

## 🔄 Parte 6 — Atualizar o site no futuro

Sempre que você fizer mudanças no site (editar textos, trocar fotos, etc.), basta seguir estes passos no terminal:

```powershell
cd "C:\Users\Guilherme Faro\casamento"
```

```powershell
git add .
```

```powershell
git commit -m "atualiza site"
```

```powershell
git push
```

> ✅ O GitHub Pages detecta automaticamente o `git push` e atualiza o site em 1 a 2 minutos.
> Não precisa fazer nada no site do GitHub — só o `push` já basta!

---

### 💡 Mensagens de commit mais descritivas (opcional, mas boa prática)

Em vez de sempre usar `"atualiza site"`, você pode escrever o que mudou:

```powershell
git commit -m "adiciona foto do casal na secao historia"
git commit -m "atualiza chave pix"
git commit -m "corrige texto da secao FAQ"
```

---

## 📬 Parte 7 — Configurar o Formulário RSVP (Formspree)

O formulário de confirmação de presença usa o **Formspree**, um serviço gratuito que recebe as respostas e envia para o seu e-mail.

### Passo 7.1 — Criar conta no Formspree

1. Acesse **[https://formspree.io](https://formspree.io)**.
2. Clique em **"Get Started"** ou **"Sign Up"**.
3. Crie sua conta com e-mail e senha (pode usar "Continue with Google" também).
4. Confirme seu e-mail se solicitado.

### Passo 7.2 — Criar um novo formulário

1. Já logado, clique em **"+ New Form"**.
2. Dê um nome ao formulário, ex: `RSVP Casamento C&G`.
3. Clique em **"Create Form"**.
4. Você verá seu **endpoint** — uma URL parecida com:
   ```
   https://formspree.io/f/xyzabcde
   ```
5. **Copie essa URL** (o trecho `xyzabcde` é único para você).

### Passo 7.3 — Atualizar o index.html

1. Abra o arquivo `index.html` no VS Code.
2. Pressione **Ctrl+F** para abrir a busca.
3. Busque por: `FORMSPREE_ENDPOINT_AQUI`
4. Você encontrará na **linha 493** algo como:
   ```html
   action="https://formspree.io/f/FORMSPREE_ENDPOINT_AQUI"
   ```
5. Substitua `FORMSPREE_ENDPOINT_AQUI` pelo código copiado (ex: `xyzabcde`):
   ```html
   action="https://formspree.io/f/xyzabcde"
   ```
6. Salve o arquivo (**Ctrl+S**).

### Passo 7.4 — Publicar a alteração

```powershell
git add .
git commit -m "configura formulario RSVP com Formspree"
git push
```

> 📧 A partir de agora, cada confirmação de presença vai chegar no seu e-mail cadastrado no Formspree!

---

## 💸 Parte 8 — Configurar sua Chave PIX

A seção de presentes do site exibe um QR Code e a chave PIX. Existem **2 lugares** onde você precisa substituir `SUA_CHAVE_PIX_AQUI`.

### Como encontrar os 2 lugares

1. Abra o `index.html` no VS Code.
2. Pressione **Ctrl+F** e busque: `SUA_CHAVE_PIX_AQUI`
3. O VS Code vai destacar as duas ocorrências. Use as setas (↑↓) no campo de busca para navegar entre elas.

---

### Lugar 1 — URL do QR Code (linha 613)

Você vai encontrar:
```html
src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=SUA_CHAVE_PIX_AQUI&color=4A3728&bgcolor=FFFAF0"
```

Substitua `SUA_CHAVE_PIX_AQUI` pela sua chave PIX real. Por exemplo:
- Se for **CPF:** `src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=123.456.789-00&color=4A3728&bgcolor=FFFAF0"`
- Se for **e-mail:** `src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=seuemail@gmail.com&color=4A3728&bgcolor=FFFAF0"`
- Se for **telefone:** `src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=+5511999999999&color=4A3728&bgcolor=FFFAF0"`

### Lugar 2 — Texto da chave exibido na tela (linha 631)

Você vai encontrar:
```html
<span id="pixKeyValue">SUA_CHAVE_PIX_AQUI</span>
```

Substitua pelo texto da sua chave, ex:
```html
<span id="pixKeyValue">123.456.789-00</span>
```

### Publicar a alteração

```powershell
git add .
git commit -m "atualiza chave PIX"
git push
```

---

## 📸 Parte 9 — Substituir as Fotos Placeholder

O site tem **5 lugares** com fotos de exemplo que precisam ser trocadas pelas suas fotos reais.

### Como preparar suas fotos

> 💡 **Dica de ouro:** Antes de colocar as fotos, comprima-as para ficarem menores de **500 KB**.
> Isso garante que o site carregue rápido. Use o site gratuito **[squoosh.app](https://squoosh.app)**.

**Salve as fotos** na pasta `C:\Users\Guilherme Faro\casamento\assets\images\`
com os nomes sugeridos abaixo:

| Foto | Nome sugerido do arquivo |
|------|--------------------------|
| Fundo do Hero (capa) | `hero.jpg` |
| Foto principal do casal | `casal.jpg` |
| Foto da família | `familia.jpg` |
| Foto de viagem | `viagem.jpg` |
| Foto do hotel | `hotel.jpg` |

---

### 📌 Foto 1 — Fundo da tela inicial (Hero)

**Arquivo:** `css/style.css` — Procure o comentário `HERO BACKGROUND IMAGE` (por volta da **linha 329**)

Você vai encontrar:
```css
background-image: url('https://images.unsplash.com/photo-...?w=1920&q=80');
```

Substitua pela sua foto:
```css
background-image: url('../assets/images/hero.jpg');
```

> 💡 Use uma foto horizontal, bonita e com boa resolução. Recomendação: foto dos noivos, praia do México ou paisagem linda.

---

### 📌 Foto 2 — Foto principal do casal (Seção "Nossa História")

**Arquivo:** `index.html` — Linha **165** (comentário `📸 FOTO PRINCIPAL`)

Você vai encontrar algo como:
```html
<!-- 📸 FOTO PRINCIPAL: foto do casal (ensaio ou viagem especial) -->
<img src="https://images.unsplash.com/..." alt="Camila e Guilherme">
```

Substitua o `src`:
```html
<img src="assets/images/casal.jpg" alt="Camila e Guilherme">
```

---

### 📌 Foto 3 — Foto da família

**Arquivo:** `index.html` — Linha **172** (comentário `📸 FOTO FAMÍLIA`)

```html
<!-- 📸 FOTO FAMÍLIA: foto com o filho -->
<img src="https://images.unsplash.com/..." alt="Nossa família">
```

Substitua o `src`:
```html
<img src="assets/images/familia.jpg" alt="Nossa família">
```

---

### 📌 Foto 4 — Foto de viagem

**Arquivo:** `index.html` — Linha **179** (comentário `📸 FOTO VIAGEM`)

```html
<!-- 📸 FOTO VIAGEM: foto numa viagem marcante -->
<img src="https://images.unsplash.com/..." alt="Uma de nossas viagens">
```

Substitua o `src`:
```html
<img src="assets/images/viagem.jpg" alt="Uma de nossas viagens">
```

---

### 📌 Foto 5 — Foto do hotel (The Fives Beach Hotel)

**Arquivo:** `index.html` — Linha **355** (comentário `📸 FOTO DO HOTEL`)

```html
<!-- Salve a foto em assets/images/hotel.jpg e atualize o src abaixo. -->
<img src="https://images.unsplash.com/..." alt="The Fives Beach Hotel">
```

Substitua o `src`:
```html
<img src="assets/images/hotel.jpg" alt="The Fives Beach Hotel">
```

> 💡 Para a foto do hotel, você pode usar imagens oficiais do **The Fives Beach Hotel & Residences** encontradas no site deles, no TripAdvisor ou Google Fotos.

---

### Publicar todas as fotos de uma vez

Após substituir todas as fotos que quiser:

```powershell
git add .
git commit -m "adiciona fotos reais ao site"
git push
```

---

## 🏁 Dicas Finais

### 🔍 Sempre teste antes de publicar

Abra o arquivo `index.html` diretamente no seu navegador (dê dois cliques nele) para ver como o site ficou **antes de fazer o push**. Isso economiza tempo!

### 📦 Mantenha as imagens leves

| Tamanho | Imagem |
|---------|--------|
| ✅ Ideal | até 300 KB |
| ⚠️ Aceitável | até 500 KB |
| ❌ Pesado demais | acima de 1 MB |

Use o [squoosh.app](https://squoosh.app) ou [tinypng.com](https://tinypng.com) para comprimir gratuitamente.

### ☁️ Faça backup das fotos

Salve todas as fotos que vai usar no **Google Drive** ou **OneDrive**. Assim, se o computador travar, você não perde nada.

---

## 🎉 Resumo das URLs do site

Após tudo configurado, o site estará disponível nos seguintes endereços:

| Situação | URL |
|----------|-----|
| **GitHub Pages (imediato)** | `https://SEU_USUARIO.github.io/casamento` |
| **Domínio personalizado (após propagação)** | `https://camilanigriseguilhermefaro.com` |
| **Com www** | `https://www.camilanigriseguilhermefaro.com` |

---

## 🆘 Problemas Comuns e Soluções

| Problema | Possível causa | Solução |
|----------|---------------|---------|
| Site mostra erro 404 | GitHub Pages ainda processando | Aguarde 5 minutos e recarregue |
| CSS/Imagens não carregam | Caminhos errados nos arquivos | Verifique se os caminhos são relativos (ex: `css/style.css`) |
| Domínio não funciona | DNS ainda propagando | Aguarde até 48h |
| HTTPS não aparece | DNS ainda não verificado pelo GitHub | Aguarde a propagação e então marque "Enforce HTTPS" |
| `git push` pede senha | Token de autenticação | Crie um Personal Access Token (veja Parte 3) |
| Fotos não aparecem | Arquivos não adicionados ao git | Execute `git add .` antes do commit |

---

## 📞 Precisa de ajuda?

Se algo não funcionar como esperado:
1. Releia o passo com calma — às vezes um detalhe é esquecido.
2. Verifique se o terminal está na pasta certa com: `cd "C:\Users\Guilherme Faro\casamento"`
3. Veja se o arquivo `CNAME` existe na pasta com o conteúdo correto.
4. Consulte a documentação oficial: [docs.github.com/pages](https://docs.github.com/pt/pages)

---

*Criado com carinho para o casamento de Camila & Guilherme 💍 — 23 de Abril de 2027 — Riviera Maya, México* 🌴
