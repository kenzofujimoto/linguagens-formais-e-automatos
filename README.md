# Linguagens Formais e Autômatos - Guia Interativo

Site estático multipágina para estudar Linguagens Formais e Autômatos com explicações, exercícios resolvidos e animações SVG interativas de autômatos.

## Como visualizar

Este projeto não precisa de build nem instalação de dependências.

Para abrir direto no navegador, use o arquivo:

```text
index.html
```

Para testar com um servidor local:

```powershell
python -m http.server 8080 --bind 127.0.0.1
```

Depois acesse:

```text
http://127.0.0.1:8080/index.html
```

## Conteúdo

- Conceitos básicos: algoritmos, problemas e modelos computacionais
- Teoria dos conjuntos e linguagens formais
- Autômatos Finitos Determinísticos (AFD)
- Operações com linguagens (união, concatenação, estrela de Kleene)
- Expressões regulares e equivalência com AFD
- Autômatos Finitos Não-Determinísticos (AFND)
- Conversão AFND → AFD e minimização
- Lema do bombeamento para linguagens regulares
- Gramáticas Livres de Contexto (GLC)
- Simplificação de GLC
- Formas Normais de Chomsky e Greibach
- Autômatos com Pilha (AP)
- Lema do bombeamento para LLC
- Máquinas de Turing e variantes
- Decidibilidade e problema da parada
- Redutibilidade
- Complexidade de tempo
- Classes P e NP
- NP-completude e reduções polinomiais

## Animações

As animações são feitas com SVG e JavaScript puro. Elas permitem avançar e voltar passo a passo para acompanhar o funcionamento de autômatos, derivações em gramáticas, simulações de máquinas de Turing e outros conceitos visualmente.

Tipos de visualizações:
- **Autômatos Finitos**: estados, transições, simulação de entradas
- **Autômatos com Pilha**: estados, transições e visualização da pilha
- **Máquinas de Turing**: estados, fita e cabeçote de leitura/escrita
- **Gramáticas**: produções e derivações passo a passo
- **Hierarquias**: Chomsky, decidibilidade, complexidade

## Deploy na Vercel

O projeto está configurado para deploy estático na Vercel.

O arquivo `vercel.json` faz a rota raiz `/` apontar para o HTML principal:

```json
{
  "rewrites": [
    {
      "source": "/",
      "destination": "/index.html"
    }
  ]
}
```

Na Vercel, use as configurações padrão para um projeto estático:

- Framework Preset: `Other`
- Build Command: vazio
- Output Directory: vazio ou raiz do projeto

## Estrutura

```text
.
├── README.md
├── index.html
├── teoria/
├── exercicios/
├── assets/
│   ├── css/
│   │   └── site.css
│   └── js/
│       ├── site-data.js
│       └── site.js
└── vercel.json
```

## Créditos

Baseado nos PDFs de aula do Prof. Samuel Plaça — Linguagens Formais e Autômatos.
