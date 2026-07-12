# Matemática 01 — Operações, Frações, Potências, MMC e MDC

> **Nível:** médio · **Concurso público** · Conteúdo completo para estudo e revisão

---

## 1. Ordem das operações (prioridade)

Ao resolver uma expressão numérica, siga esta ordem **de dentro para fora**:

1. **Parênteses, colchetes e chaves** — resolva o que está mais interno primeiro
2. **Potências e raízes**
3. **Multiplicação e divisão** — da esquerda para a direita, na ordem em que aparecem
4. **Adição e subtração** — da esquerda para a direita

### Exemplo resolvido 1

Calcule: `3 + 2 × (5 − 1)²`

**Passo 1** — Parênteses: `5 − 1 = 4`  
**Passo 2** — Potência: `4² = 16`  
**Passo 3** — Multiplicação: `2 × 16 = 32`  
**Passo 4** — Adição: `3 + 32 = 35`

**Resposta: 35**

### Exemplo resolvido 2

Calcule: `48 ÷ 6 + 2 × 3 − 4`

**Passo 1** — Divisão: `48 ÷ 6 = 8`  
**Passo 2** — Multiplicação: `2 × 3 = 6`  
**Passo 3** — Da esquerda para a direita: `8 + 6 − 4 = 10`

**Resposta: 10**

### Armadilha comum

Não faça `3 + 2 = 5` antes de multiplicar por `(5−1)²`. A multiplicação vem **antes** da adição.

---

## 2. Números decimais e frações

### Conversão decimal → fração

| Decimal | Fração |
|---------|--------|
| 0,5 | 1/2 |
| 0,25 | 1/4 |
| 0,2 | 1/5 |
| 0,125 | 1/8 |
| 0,75 | 3/4 |
| 0,1 | 1/10 |

**Método geral:** leia o decimal como "centésimos", "décimos" etc. e simplifique.

Ex.: `0,375 = 375/1000 = 3/8` (dividindo numerador e denominador por 125)

### Conversão fração → decimal

Divida o numerador pelo denominador: `3/4 = 3 ÷ 4 = 0,75`

---

## 3. Operações com frações

### 3.1 Soma e subtração

**Regra:** denominadores iguais → soma/subtrai os numeradores; mantém o denominador.

`2/7 + 3/7 = 5/7`

**Denominadores diferentes:** encontre o **MMC** dos denominadores, transforme em frações equivalentes e some.

**Exemplo resolvido 3:** `1/3 + 1/4`

1. MMC(3, 4) = 12  
2. `1/3 = 4/12` e `1/4 = 3/12`  
3. `4/12 + 3/12 = 7/12`

**Resposta: 7/12**

### 3.2 Multiplicação

Multiplique **numerador com numerador** e **denominador com denominador**. Simplifique antes, se possível.

`2/3 × 5/7 = 10/21`

### 3.3 Divisão

Multiplique pela **fração inversa** (inverte o divisor).

`3/4 ÷ 2/5 = 3/4 × 5/2 = 15/8 = 1 7/8`

### 3.4 Simplificação

Divida numerador e denominador pelo **MDC**.

`24/36`: MDC(24, 36) = 12 → `24/36 = 2/3`

---

## 4. Potências básicas

**Definição:** `aⁿ = a × a × ... × a` (n fatores)

| Regra | Exemplo |
|-------|---------|
| Qualquer número elevado a 0 = 1 (exceto 0⁰) | `5⁰ = 1` |
| Qualquer número elevado a 1 = ele mesmo | `5¹ = 5` |
| Multiplicação de potências de mesma base | `2³ × 2² = 2⁵ = 32` |
| Divisão de potências de mesma base | `5⁴ ÷ 5² = 5² = 25` |
| Potência de potência | `(3²)³ = 3⁶ = 729` |
| Expoente negativo | `2⁻² = 1/2² = 1/4` |

**Exemplo resolvido 4:** `(2³ × 2²) ÷ 2⁴`

1. `2³ × 2² = 2⁵ = 32`  
2. `32 ÷ 2⁴ = 32 ÷ 16 = 2`

Ou direto: `2⁵⁻⁴ = 2¹ = 2`

**Resposta: 2**

---

## 5. Fatoração em números primos

Números primos: 2, 3, 5, 7, 11, 13, 17, 19, 23...

**Método:** divida sucessivamente pelos primos menores.

**Exemplo:** fatorar 180

```
180 ÷ 2 = 90
 90 ÷ 2 = 45
 45 ÷ 3 = 15
 15 ÷ 3 =  5
  5 ÷ 5 =  1
```

**180 = 2² × 3² × 5**

---

## 6. MMC — Mínimo Múltiplo Comum

### O que é?

O **menor** número positivo que é múltiplo de **todos** os números dados.

Múltiplos de 4: 4, 8, 12, 16, 20, 24...  
Múltiplos de 6: 6, 12, 18, 24...  
→ MMC(4, 6) = **12**

### Método por fatoração

1. Fatore cada número em primos  
2. Pegue cada fator primo com o **maior expoente** que aparecer  
3. Multiplique

**Exemplo resolvido 5:** MMC(12, 18)

- 12 = 2² × 3  
- 18 = 2 × 3²  
- MMC = 2² × 3² = 4 × 9 = **36**

### Método alternativo (dois números)

`MMC(a, b) = (a × b) ÷ MDC(a, b)`

MMC(12, 18) = (12 × 18) ÷ 6 = 216 ÷ 6 = **36**

### Quando usar MMC?

| Situação | Por quê? |
|----------|----------|
| Soma/subtração de frações com denominadores diferentes | Denominador comum |
| "Quando voltam a coincidir?" | Próximo instante comum |
| "Qual o menor número divisível por todos?" | Múltiplo comum mínimo |

---

## 7. MDC — Máximo Divisor Comum

### O que é?

O **maior** número que divide **todos** os números dados **sem resto**.

Divisores de 12: 1, 2, 3, 4, 6, 12  
Divisores de 18: 1, 2, 3, 6, 9, 18  
→ MDC(12, 18) = **6**

### Método por fatoração

1. Fatore cada número em primos  
2. Pegue apenas os fatores **comuns** com o **menor expoente**  
3. Multiplique

**Exemplo resolvido 6:** MDC(48, 36)

- 48 = 2⁴ × 3  
- 36 = 2² × 3²  
- MDC = 2² × 3 = 4 × 3 = **12**

### Método de Euclides (alternativo)

```
48 ÷ 36 → resto 12
36 ÷ 12 → resto  0
```
MDC = **12** (último divisor antes do resto zero)

### Quando usar MDC?

| Situação | Por quê? |
|----------|----------|
| Simplificar frações | Dividir num. e den. pelo MDC |
| "Maior pedaço/pacote igual possível" | Divisor comum máximo |
| "Dividir em grupos iguais máximos" | Mesma lógica |

---

## 8. Problemas de coincidência (MMC)

**Modelo:** dois ou mais eventos se repetem em intervalos fixos. Quando coincidem de novo?

**Exemplo resolvido 7:** Dois ônibus saem juntos de um terminal. O ônibus A passa a cada **12 minutos** e o B a cada **18 minutos**. Em quanto tempo voltam a sair juntos?

1. Identifique: intervalos 12 e 18 → **MMC**  
2. MMC(12, 18) = 36  
3. **Resposta: 36 minutos** (ou 0h36min)

**Exemplo resolvido 8:** Três sinaleiros piscam a cada 6 s, 8 s e 10 s, sincronizados no instante zero. Quando piscam juntos novamente?

1. MMC(6, 8, 10)  
   - 6 = 2 × 3  
   - 8 = 2³  
   - 10 = 2 × 5  
2. MMC = 2³ × 3 × 5 = 8 × 3 × 5 = **120**  
3. **Resposta: 120 segundos (2 minutos)**

---

## 9. Problemas de divisão em grupos (MDC)

**Modelo:** dividir quantidades diferentes em pacotes/grupos **iguais e máximos**, sem sobra.

**Exemplo resolvido 9:** Uma loja tem **48** cabos de rede e **36** adaptadores. Qual o maior número de kits iguais que pode montar, usando tudo?

1. Kits iguais → mesmo número de cabos e adaptadores por kit  
2. MDC(48, 36) = 12  
3. Por kit: 48 ÷ 12 = 4 cabos; 36 ÷ 12 = 3 adaptadores  
4. **Resposta: 12 kits**

**Exemplo resolvido 10:** Um pátio retangular mede 24 m por 36 m. Qual o maior tamanho de quadrado (lado inteiro em metros) que cabe no pátio sem cortar?

1. Lado do quadrado deve dividir 24 e 36 → **MDC**  
2. MDC(24, 36) = 12  
3. **Resposta: quadrados de 12 m de lado** (2 × 3 = 6 quadrados no total)

---

## 10. Relação importante

Para **dois números** a e b:

```
MMC(a, b) × MDC(a, b) = a × b
```

Verificação: MMC(12, 18) × MDC(12, 18) = 36 × 6 = 216 = 12 × 18 ✓

---

## 11. Armadilhas clássicas de prova

| Armadilha | Correção |
|-----------|----------|
| Confundir MMC com MDC | MMC = **menor** múltiplo comum (coincidência). MDC = **maior** divisor comum (divisão em partes iguais) |
| Usar MMC para "maior grupo igual" | Use **MDC** |
| Usar MDC para "quando coincidem" | Use **MMC** |
| Esquecer de simplificar fração final | Sempre divida pelo MDC do num. e den. |
| Errar ordem das operações | Parênteses → potência → ×÷ → +− |
| MMC de 3 números: pegar só 2 | Fatore todos e pegue **maiores expoentes de cada primo** |
| "A cada 12 min" ≠ "em 12 min" | "A cada 12" = intervalo de 12 → use MMC |

---

## 12. Exercícios para praticar

Resolva sem calculadora. Gabarito no final.

1. Calcule: `5 + 3 × 2² − 8 ÷ 4`
2. Simplifique a fração `42/56`.
3. Calcule: `2/5 + 1/3`
4. Calcule: `3/4 ÷ 2/9`
5. Calcule: `(2⁴ × 2³) ÷ 2⁵`
6. Determine o MMC(15, 20).
7. Determine o MDC(84, 126).
8. Dois relógios dão sinal a cada 15 s e 20 s, juntos às 10h. Quando tocam juntos de novo?
9. Com 60 canetas azuis e 90 canetas vermelhas, qual o maior número de pacotes iguais possíveis (cada pacote com a mesma quantidade de cada cor)?
10. MMC(8, 12, 15) = ?
11. Um terreno de 18 m × 30 m será dividido em quadrados iguais de maior lado possível. Qual o lado de cada quadrado?
12. Três alarmes disparam a cada 8 min, 12 min e 18 min, juntos às 14h. Quando disparam juntos novamente?

---

## Gabarito

| # | Resposta |
|---|----------|
| 1 | `5 + 3×4 − 2 = 5 + 12 − 2 = 15` |
| 2 | MDC(42,56)=14 → **3/4** |
| 3 | MMC(5,3)=15 → `6/15 + 5/15 = 11/15` |
| 4 | `3/4 × 9/2 = 27/8 = 3 3/8` |
| 5 | `2⁷⁻⁵ = 2² = 4` |
| 6 | 15=3×5, 20=2²×5 → MMC=2²×3×5 = **60** |
| 7 | 84=2²×3×7, 126=2×3²×7 → MDC=2×3×7 = **42** |
| 8 | MMC(15,20)=60 s = **10h01min** (60 s depois) |
| 9 | MDC(60,90)=30 → **30 pacotes** (2 azuis + 3 vermelhas por pacote) |
| 10 | 8=2³, 12=2²×3, 15=3×5 → MMC=2³×3×5 = **120** |
| 11 | MDC(18,30)=6 → lado **6 m** (3×5=15 quadrados) |
| 12 | MMC(8,12,18)=72 min = **15h12min** |

---

## 13. Checklist de domínio

- [ ] Resolvo expressões respeitando a ordem das operações
- [ ] Converto frações e decimais com segurança
- [ ] Sei somar, subtrair, multiplicar e dividir frações
- [ ] Fatoro números em primos com rapidez
- [ ] Calculo MMC por fatoração e pelo produto/MDC
- [ ] Calculo MDC por fatoração e por Euclides
- [ ] Identifico se o problema pede MMC (coincidência) ou MDC (grupos iguais)
- [ ] Verifico se a resposta faz sentido no contexto (minutos, kits, quadrados...)

---

*Próximo módulo: [02 — Razão, Proporção e Porcentagem](02-razao-proporcao-porcentagem.md)*
