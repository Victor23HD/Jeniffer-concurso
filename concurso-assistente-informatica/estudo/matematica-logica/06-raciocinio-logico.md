# Matemática 06 — Raciocínio Lógico

> **Nível:** médio · **Concurso público** · Conteúdo completo para estudo e revisão

---

## 1. Sequências numéricas

### Estratégia de resolução

1. Observe os **primeiros termos** (diferenças, razões, padrões)  
2. Teste hipóteses: soma constante, multiplicação, alternância, potências  
3. **Valide** a regra no próximo termo  
4. Se houver duas possibilidades, a banca costuma usar a mais simples

### Padrões frequentes

| Padrão | Exemplo | Próximo |
|--------|---------|---------|
| Soma constante | 3, 7, 11, 15 | +4 → 19 |
| Soma crescente | 2, 5, 9, 14 | +3,+4,+5 → 20 |
| Multiplicação | 2, 6, 18, 54 | ×3 → 162 |
| Alternância | 1, 4, 2, 5, 3, 6 | dois padrões → 4 |
| Quadrados | 1, 4, 9, 16, 25 | n² → 36 |
| Primos | 2, 3, 5, 7, 11 | → 13 |
| Fibonacci | 1, 1, 2, 3, 5, 8 | soma dos dois anteriores → 13 |

**Exemplo resolvido 1:** 2, 6, 12, 20, 30, ?

1. Diferenças: +4, +6, +8, +10  
2. Padrão: soma crescente de +4 em +4 à diferença  
3. Próxima diferença: +12 → 30 + 12 = **42**

**Resposta: 42**

**Exemplo resolvido 2:** 3, 6, 12, 24, 48, ?

1. Cada termo × 2  
2. 48 × 2 = **96**

**Resposta: 96**

**Exemplo resolvido 3:** 1, 1, 2, 3, 5, 8, 13, ?

1. Fibonacci: 8 + 13 = **21**

**Resposta: 21**

**Exemplo resolvido 4:** 100, 50, 25, 12,5, ?

1. Cada termo ÷ 2  
2. 12,5 ÷ 2 = **6,25**

**Resposta: 6,25**

### Sequências com figuras

- Conte lados, vértices, pontos, sombras  
- Observe rotação, espelhamento, adição de elementos  
- Alternância de cor/forma

---

## 2. Proposições

### Definição

**Proposição** é uma sentença que pode ser classificada como **verdadeira (V)** ou **falsa (F)**, mas não ambas.

| É proposição | Não é proposição |
|--------------|------------------|
| "Brasília é capital do Brasil." | "Que horas são?" (pergunta) |
| "2 + 2 = 5." | "x + 3 = 7." (depende de x) |
| "Todo servidor público presta concurso." | "Feche a porta!" (ordem) |

### Proposição simples e composta

- **Simples:** não contém conectivos (e, ou, se...então)  
- **Composta:** formada por duas ou mais proposições ligadas por conectivos

---

## 3. Negação de quantificadores

### Tabela fundamental (MEMORIZE)

| Proposição original | Negação correta |
|---------------------|-----------------|
| **Todo** A é B | **Algum** A **não** é B |
| **Algum** A é B | **Nenhum** A é B |
| **Nenhum** A é B | **Algum** A é B |

### Por que funciona?

- Negar "todos" = basta **um contraexemplo**  
- Negar "algum" = **nenhum** satisfaz  
- Negar "nenhum" = **existe pelo menos um**

**Exemplo resolvido 5:** Negue: "Todo funcionário domina Excel."

**Negação:** "Algum funcionário **não** domina Excel."

**Exemplo resolvido 6:** Negue: "Algum aluno faltou à prova."

**Negação:** "Nenhum aluno faltou à prova."

**Exemplo resolvido 7:** Negue: "Nenhum equipamento está com defeito."

**Negação:** "Algum equipamento está com defeito."

### Negações erradas (armadilha)

| Original | Negação ERRADA | Por quê? |
|----------|----------------|----------|
| Todo A é B | Nenhum A é B | "Nenhum" é muito forte |
| Algum A é B | Todo A não é B | "Todo não" ≠ "nenhum" |
| Nenhum A é B | Todo A é B | Pode haver alguns |

---

## 4. Negação de proposições compostas

| Proposição P | Negação ¬P |
|--------------|------------|
| A e B | (não A) **ou** (não B) |
| A ou B | (não A) **e** (não B) |
| Se A, então B | A **e** (não B) |
| A se e somente se B | (A e não B) **ou** (não A e B) |

**Exemplo resolvido 8:** Negue: "Se chove, então a rua molha."

1. Condição verdadeira + consequente falso  
2. **"Chove e a rua não molha."**

**Exemplo resolvido 9:** Negue: "Maria estuda e trabalha."

1. ¬(A e B) = (não A) ou (não B)  
2. **"Maria não estuda ou não trabalha."**

---

## 5. Conectivos lógicos e tabelas-verdade

### Conjunção — "e" (∧)

Verdadeira **somente** quando **ambas** são verdadeiras.

| A | B | A e B |
|---|---|-------|
| V | V | **V** |
| V | F | F |
| F | V | F |
| F | F | F |

### Disjunção — "ou" (∨)

Falsa **somente** quando **ambas** são falsas.

| A | B | A ou B |
|---|---|--------|
| V | V | V |
| V | F | V |
| F | V | V |
| F | F | **F** |

**Atenção:** "ou" em lógica = ou inclusivo (um, outro, ou os dois).

### Condicional — "se A, então B" (A → B)

Falsa **somente** quando A é V e B é F.

| A | B | A → B |
|---|---|-------|
| V | V | V |
| V | F | **F** |
| F | V | V |
| F | F | V |

**Mnemônico:** "Vera Fischer" — só VF é falso.

**Exemplo resolvido 10:** "Se o sistema cai, o técnico é acionado."  
Sistema não caiu. A proposição é verdadeira? **Sim** — quando a condição é falsa, o condicional é V.

### Bicondicional — "se e somente se" (A ↔ B)

Verdadeira quando A e B têm o **mesmo** valor.

| A | B | A ↔ B |
|---|---|-------|
| V | V | V |
| V | F | F |
| F | V | F |
| F | F | V |

---

## 6. Equivalências importantes

```
A → B  ≡  (não B) → (não A)     [contrapositiva]
A → B  ≡  (não A) ou B
não(A → B)  ≡  A e (não B)
```

**Exemplo resolvido 11:** Equivalente de "Se estudou, então passou":

1. Contrapositiva: "Se **não** passou, então **não** estudou."  
2. Ou: "Não estudou **ou** passou."

---

## 7. Diagramas de Venn (conjuntos)

### Representação

- Círculo = conjunto (ex.: A = servidores, B = possuem CNH)  
- Interseção = elementos de **ambos**  
- "Todo A é B" → círculo A **dentro** de B  
- "Algum A é B" → região comum **preenchida**  
- "Nenhum A é B" → círculos **separados**

### Problemas com totais

Use a fórmula do princípio da inclusão-exclusão (dois conjuntos):

```
n(A ∪ B) = n(A) + n(B) − n(A ∩ B)
```

**Exemplo resolvido 12:** Em uma turma de 40 alunos: 25 fazem curso de informática (I), 18 fazem curso de inglês (E), 8 fazem ambos. Quantos não fazem nenhum?

1. Ambos: 8  
2. Só I: 25 − 8 = 17  
3. Só E: 18 − 8 = 10  
4. Pelo menos um: 17 + 8 + 10 = 35  
5. Nenhum: 40 − 35 = **5**

**Resposta: 5 alunos**

**Exemplo resolvido 13:** 60 funcionários. 40 usam Windows, 35 usam Linux, 20 usam ambos. Quantos usam só Windows?

1. Só Windows: 40 − 20 = **20**

**Resposta: 20**

---

## 8. Falácias e argumentos inválidos

### Argumento válido

Premissas verdadeiras + forma lógica correta → conclusão **obrigatória**.

### Falácias clássicas em concursos

| Falácia | Estrutura | Por que é inválida |
|---------|-----------|-------------------|
| **Afirmar o consequente** | Se A→B. B é V. Logo A. | B pode ter outra causa |
| **Negar o antecedente** | Se A→B. A é F. Logo B é F. | B pode ser V por outro motivo |
| **Generalização apressada** | Vi 2 casos → "sempre" | Amostra insuficiente |
| **Falso dilema** | "Ou A ou B" ignorando C | Ignora alternativas |

**Exemplo resolvido 14 (falácia):**

- Se chove, a rua molha.  
- A rua está molhada.  
- Logo, choveu.

**Inválido** — a rua pode estar molhada por mangueira, enchente, limpeza etc.

**Exemplo resolvido 15 (válido — contrapositiva):**

- Se chove, a rua molha.  
- A rua **não** está molhada.  
- Logo, **não** choveu.

**Válido** — é a contrapositiva.

---

## 9. Ordenação e relações

### Método da tabela / diagrama

Organize relações: maior que, mais antigo, à esquerda de, mais rápido...

**Exemplo resolvido 16:**

- Ana é mais alta que Bruno.  
- Carlos é mais baixo que Bruno.  
- Diana é mais alta que Ana.

Ordem de altura (do mais alto ao mais baixo):

1. Diana > Ana (dado)  
2. Ana > Bruno (dado)  
3. Bruno > Carlos (dado)  
4. **Diana > Ana > Bruno > Carlos**

**Resposta: Diana, Ana, Bruno, Carlos**

**Exemplo resolvido 17:** Em uma fila: Paulo está à direita de Maria. João está à esquerda de Maria. Quem está no meio?

1. João ... Maria ... Paulo (João à esquerda, Paulo à direita)  
2. **Maria** está no meio

**Resposta: Maria**

**Exemplo resolvido 18:** Cinco caixas A, B, C, D, E. A pesa mais que B. C pesa menos que B. D pesa mais que A. E pesa menos que C. Ordem crescente de peso?

1. D > A > B > C > E  
2. Crescente: **E, C, B, A, D**

**Resposta: E – C – B – A – D**

### Corrida / chegada

"X chegou antes de Y" = X está à frente / é mais rápido.

---

## 10. Problemas de lógica verbal

**Exemplo resolvido 19:** Três amigos — um mente sempre, os outros sempre falam a verdade.

- Alan diz: "Bruno mente."  
- Bruno diz: "Carlos mente."  
- Carlos diz: "Bruno mente."

Quem mente?

1. Se Alan mente → Bruno fala verdade → Carlos mente → Bruno mente. **Contradição.**  
2. Alan fala verdade → Bruno mente → Carlos fala verdade → Bruno mente. **Consistente.**

**Resposta: Bruno é o mentiroso**

---

## 11. Armadilhas clássicas de prova

| Armadilha | Correção |
|-----------|----------|
| Negar "todo" como "nenhum" | Use "algum não" |
| Condicional falso em todos os casos exceto V→F | Memorize VF |
| "Alguns" = exatamente um | "Alguns" = pelo menos um |
| Afirmar o consequente como válido | É falácia |
| Sequência: usar só o último par | Analise **toda** a sequência |
| Venn: esquecer "nem um nem outro" | Calcule total − (união) |
| "Ou" exclusivo em lógica | Salvo indicação, "ou" é inclusivo |

---

## 12. Exercícios para praticar

1. Sequência: 5, 10, 20, 40, 80, ?
2. Sequência: 1, 4, 9, 16, 25, ?
3. Sequência: 3, 5, 8, 12, 17, ?
4. Negue: "Nenhum candidato desistiu."
5. Negue: "Todo servidor completou o treinamento."
6. Negue: "Se o backup falha, os dados se perdem."
7. Condicional "Se A, então B" é falso quando?
8. 50 pessoas: 30 leem jornal (J), 25 leem revista (R), 10 leem ambos. Quantas não leem nenhum?
9. Ana > Bia; Cássia < Bia; Diana > Ana. Ordem decrescente de altura?
10. Se P→Q é verdadeiro e Q é falso, P é?
11. Qual falácia: "Se estuda, passa. Passou. Logo estudou."?
12. Sequência: 2, 3, 5, 7, 11, 13, ?

---

## Gabarito

| # | Resposta |
|---|----------|
| 1 | ×2 → **160** |
| 2 | Quadrados → **36** |
| 3 | Diferenças +2,+3,+4,+5 → próxima +6: 17+6 = **23** |
| 4 | **Algum candidato desistiu.** |
| 5 | **Algum servidor não completou o treinamento.** |
| 6 | **O backup falha e os dados não se perdem.** |
| 7 | Quando **A=V e B=F** |
| 8 | Só J: 20; só R: 15; união: 20+10+15=45; nenhum: 50−45 = **5** |
| 9 | **Diana, Ana, Bia, Cássia** |
| 10 | Q=F e P→Q=V → **P=F** |
| 11 | **Afirmar o consequente** |
| 12 | Primos → **17** |

---

## 13. Checklist de domínio

- [ ] Identifico padrões em sequências numéricas
- [ ] Nego corretamente todo/algum/nenhum
- [ ] Monto tabelas-verdade de e, ou, se...então
- [ ] Sei que condicional só é falso em V→F
- [ ] Uso diagramas de Venn e inclusão-exclusão
- [ ] Reconheço falácias (afirmar consequente, negar antecedente)
- [ ] Resolvo problemas de ordenação com tabela ou diagrama
- [ ] Diferencio proposição de pergunta, ordem ou frase aberta

---

*Anterior: [05 — Geometria](05-geometria.md) · [Voltar ao índice de estudo](../README.md)*
