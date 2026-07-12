# Matemática 03 — Regra de Três, Juros Simples e Médias

> **Nível:** médio · **Concurso público** · Conteúdo completo para estudo e revisão

---

## 1. Regra de três — visão geral

A **regra de três** resolve problemas com **duas grandezas proporcionais** e um valor desconhecido.

### Passo a passo universal

1. **Monte a tabela** com duas linhas (ou colunas) — uma grandeza conhecida, outra com o "x"
2. **Identifique** se a relação é direta ou inversa
3. **Monte a proporção** ou a equação de produto
4. **Resolva** e verifique se a resposta faz sentido

---

## 2. Regra de três simples — grandezas diretas

### Quando usar

Uma grandeza **aumenta**, a outra **também aumenta** (ou ambas diminuem juntas).

### Fórmula

```
A₁/B₁ = A₂/B₂   →   A₁ × B₂ = A₂ × B₁
```

### Exemplo resolvido 1

Três impressoras, no mesmo ritmo, imprimem 90 páginas. Quantas páginas cinco impressoras imprimem?

| Impressoras | Páginas |
|-------------|---------|
| 3 | 90 |
| 5 | x |

1. Mais impressoras → mais páginas → **direta**  
2. `3/90 = 5/x` ou `3/5 = 90/x`  
3. `3x = 5 × 90 = 450`  
4. `x = 150`

**Resposta: 150 páginas**

### Exemplo resolvido 2

Um veículo percorre 240 km com 20 litros. Quantos litros para 420 km?

| km | litros |
|----|--------|
| 240 | 20 |
| 420 | x |

1. Direta: mais km → mais litros  
2. `240/20 = 420/x`  
3. `240x = 8400` → `x = 35`

**Resposta: 35 litros**

---

## 3. Regra de três simples — grandezas inversas

### Quando usar

Uma grandeza **aumenta**, a outra **diminui**.

### Fórmula

```
A₁ × B₁ = A₂ × B₂
```

### Exemplo resolvido 3

Quatro técnicos instalam uma rede em 12 dias. Quantos dias para 6 técnicos (mesmo ritmo)?

| Técnicos | Dias |
|----------|------|
| 4 | 12 |
| 6 | x |

1. Mais técnicos → menos dias → **inversa**  
2. `4 × 12 = 6 × x`  
3. `48 = 6x` → `x = 8`

**Resposta: 8 dias**

### Exemplo resolvido 4

Um automóvel a 60 km/h percorre um trecho em 5 horas. Quanto tempo a 100 km/h?

| Velocidade | Tempo |
|------------|-------|
| 60 | 5 |
| 100 | x |

1. Inversa: `60 × 5 = 100 × x`  
2. `300 = 100x` → `x = 3`

**Resposta: 3 horas**

### Dica visual para inversa

Inverta **uma das colunas** e depois faça proporção direta:

| Técnicos | Dias (invertido) |
|----------|------------------|
| 4 | 1/12 |
| 6 | 1/x |

`4/(1/12) = 6/(1/x)` → mesma conta.

---

## 4. Regra de três composta

### Quando usar

Há **três ou mais grandezas** envolvidas.

### Passo a passo

1. Monte a tabela com **todas** as grandezas  
2. Isole mentalmente a grandeza com **x**  
3. Para **cada outra grandeza**, pergunte: "Se essa grandeza aumentar, x aumenta ou diminui?"  
   - Aumenta junto → **direta** (fica como está)  
   - Uma sobe, outra desce → **inversa** (inverte a razão)  
4. Multiplique todas as razões diretas e iguale ao produto das inversas  
5. Resolva

### Exemplo resolvido 5

Cinco máquinas, operando 6 horas por dia, produzem 900 peças em 4 dias. Quantas peças 3 máquinas produzem em 8 horas/dia durante 5 dias?

| Máquinas | h/dia | Dias | Peças |
|----------|-------|------|-------|
| 5 | 6 | 4 | 900 |
| 3 | 8 | 5 | x |

Análise em relação a **x (peças)**:
- Máquinas: 5→3 (menos) → menos peças → **inversa** → fator 3/5  
- Horas: 6→8 (mais) → mais peças → **direta** → fator 8/6  
- Dias: 4→5 (mais) → mais peças → **direta** → fator 5/4  

**Fórmula:** multiplique o valor conhecido pelos fatores de cada grandeza:

```
x = 900 × (3/5) × (8/6) × (5/4)
x = 900 × (3 × 8 × 5) / (5 × 6 × 4)
x = 900 × 120/120
x = 900
```

**Resposta: 900 peças**

### Exemplo resolvido 6

Se 10 operadores, em 8 horas/dia, fazem um serviço em 15 dias, quantos operadores são necessários para fazer em 10 dias, trabalhando 6 horas/dia?

| Operadores | h/dia | Dias |
|------------|-------|------|
| 10 | 8 | 15 |
| x | 6 | 10 |

Em relação a **x (operadores)**:
- Menos dias (15→10) → precisa mais operadores → **inversa** → 15/10  
- Menos horas (8→6) → precisa mais operadores → **inversa** → 8/6  

```
x/10 = (15/10) × (8/6)
x = 10 × 1,5 × 1,333...
x = 10 × (15×8)/(10×6)
x = 10 × 120/60
x = 10 × 2 = 20
```

**Resposta: 20 operadores**

---

## 5. Juros simples

### Conceitos

| Símbolo | Significado |
|---------|-------------|
| C | Capital (valor inicial aplicado) |
| i | Taxa de juros (em decimal no período) |
| t | Tempo (no **mesmo período** da taxa) |
| J | Juros (rendimento) |
| M | Montante (capital + juros) |

### Fórmulas

```
J = C × i × t
M = C + J = C(1 + i·t)
```

### Conversão de taxa

- Porcentagem → decimal: 3% = 0,03  
- **Juro simples:** taxa anual ÷ 12 = taxa mensal (proporção linear)  
  - 24% ao ano = 2% ao mês (simples)  
- **Atenção:** em juro composto a conversão é diferente — em concursos de nível médio, se não especificar, use **juro simples**

### Exemplo resolvido 7

R$ 2.000,00 aplicados a juro simples de 2% ao mês por 5 meses.

1. C = 2000, i = 0,02, t = 5  
2. J = 2000 × 0,02 × 5 = 2000 × 0,10 = **200**  
3. M = 2000 + 200 = **2200**

**Resposta: Juros R$ 200,00 · Montante R$ 2.200,00**

### Exemplo resolvido 8

Qual capital gera R$ 450 de juros em 6 meses a 1,5% ao mês (juro simples)?

1. J = C × i × t → 450 = C × 0,015 × 6  
2. 450 = C × 0,09  
3. C = 450 ÷ 0,09 = **5000**

**Resposta: R$ 5.000,00**

### Exemplo resolvido 9

R$ 3.600,00 a 8% ao ano por 2 anos e 6 meses.

1. t = 2,5 anos (ou converta taxa para mês)  
2. i = 0,08 ao ano, t = 2,5 anos  
3. J = 3600 × 0,08 × 2,5 = 3600 × 0,20 = **720**  
4. M = 4320

**Resposta: Juros R$ 720,00 · Montante R$ 4.320,00**

### Exemplo resolvido 10

Em quantos meses R$ 1.000 a 3% ao mês gera R$ 180 de juros?

1. 180 = 1000 × 0,03 × t  
2. 180 = 30t  
3. t = 6

**Resposta: 6 meses**

---

## 6. Média aritmética simples

### Fórmula

```
Média = (x₁ + x₂ + ... + xₙ) / n
```

### Exemplo resolvido 11

Notas: 6, 8, 7, 9, 5. Qual a média?

1. Soma: 6 + 8 + 7 + 9 + 5 = 35  
2. Média: 35 ÷ 5 = **7**

**Resposta: 7**

### Exemplo resolvido 12

A média de 4 números é 15. Três deles são 12, 18 e 14. Qual o quarto?

1. Soma total: 4 × 15 = 60  
2. Soma dos três: 12 + 18 + 14 = 44  
3. Quarto número: 60 − 44 = **16**

**Resposta: 16**

---

## 7. Média aritmética ponderada

### Fórmula

```
Média ponderada = (x₁·p₁ + x₂·p₂ + ... + xₙ·pₙ) / (p₁ + p₂ + ... + pₙ)
```

Onde **p** é o peso (importância) de cada valor.

### Exemplo resolvido 13

Prova 1: nota 7 (peso 2). Prova 2: nota 9 (peso 3). Média final?

1. `(7×2 + 9×3) / (2+3)`  
2. `(14 + 27) / 5`  
3. `41/5 = 8,2`

**Resposta: 8,2**

### Exemplo resolvido 14

Um funcionário tem avaliação comportamental (peso 1) com nota 8 e prova técnica (peso 4) com nota 6. Média?

1. `(8×1 + 6×4) / (1+4)`  
2. `(8 + 24) / 5 = 32/5 = 6,4`

**Resposta: 6,4**

### Quando é ponderada?

- Provas com pesos diferentes  
- Média de velocidade em trechos com **distâncias diferentes** (peso = distância)  
- Notas por créditos/disciplinas com cargas horárias distintas

### Armadilha: velocidade média

**Não** é a média simples das velocidades, salvo se os tempos forem iguais.

Trecho 1: 60 km/h por 2 h → 120 km  
Trecho 2: 90 km/h por 1 h → 90 km  
Total: 210 km em 3 h → velocidade média = 210/3 = **70 km/h** (não 75!)

---

## 8. Armadilhas clássicas de prova

| Armadilha | Correção |
|-----------|----------|
| Usar proporção direta quando é inversa | Mais trabalhadores → menos dias |
| Esquecer de alinhar unidades (taxa mensal × tempo em anos) | Converta t e i para o mesmo período |
| 24% a.a. ≠ 2% a.m. em todos os contextos | Em juro **simples**, sim; em composto, não |
| Média ponderada: dividir pelo número de notas | Divida pela **soma dos pesos** |
| Regra de três composta: errar direta/inversa | Analise **uma grandeza por vez** em relação ao x |
| J = M − C, mas usar M na fórmula de J | Juros incidem só sobre o **capital** |
| Velocidade média = média das velocidades | Use total de distância ÷ total de tempo |

---

## 9. Exercícios para praticar

1. 2 kg de arroz custam R$ 14. Quanto custam 7 kg?
2. 8 operários fazem um serviço em 15 dias. Quantos dias para 12 operários?
3. Uma torneira enche um tanque em 6 horas. Outra enche o mesmo tanque em 4 horas. Se ambas abertas juntas, em quanto tempo enchem? *(dica: inversa — em 1h: 1/6 + 1/4 do tanque)*
4. 6 máquinas, 5h/dia, 8 dias → 2.400 peças. Com 4 máquinas, 8h/dia, 10 dias, quantas peças?
5. R$ 5.000 a 3% ao mês por 8 meses. Quanto de juros?
6. Qual montante de R$ 1.200 a 5% ao mês por 4 meses?
7. R$ 800 virou R$ 1.040 em juro simples a 4% ao mês. Quantos meses?
8. Média de 6, 9, 7, 8, x é 8. Encontre x.
9. Notas 6 (peso 1), 8 (peso 2) e 10 (peso 3). Média ponderada?
10. Três provas com pesos 2, 3 e 5. Notas 7, 8 e 9. Média final?
11. Capital de R$ 2.000 a quantos % ao mês gera R$ 360 em 6 meses?
12. 5 pedreiros, 7h/dia, 18 dias. Quantos pedreiros para 6 dias, 10h/dia?

---

## Gabarito

| # | Resposta |
|---|----------|
| 1 | `14/2 = x/7` → **R$ 49** |
| 2 | `8×15 = 12×d` → **10 dias** |
| 3 | `1/t = 1/6 + 1/4 = 5/12` → **t = 12/5 = 2,4 h** |
| 4 | `2400 × (4/6) × (8/5) × (10/8) = 2400 × (4×8×10)/(6×5×8) = 2400 × 320/240` → **3.200 peças** |
| 5 | `5000 × 0,03 × 8` → **R$ 1.200** |
| 6 | J=1200×0,05×4=240; M=**R$ 1.440** |
| 7 | 240=800×0,04×t → 240=32t → **t = 7,5 meses** |
| 8 | (30+x)/5=8 → **x = 10** |
| 9 | (6+16+30)/6 = 52/6 → **8,67** |
| 10 | (14+24+45)/10 = 83/10 → **8,3** |
| 11 | 360=2000×i×6 → i=0,03 → **3% a.m.** |
| 12 | `5×7×18 = x×10×6` → 630=60x → **x = 10,5 → 11 pedreiros** (se exige inteiro, arredonde conforme contexto) |

---

## 10. Checklist de domínio

- [ ] Monto tabela e identifico regra de três direta ou inversa
- [ ] Resolvo regra de três composta analisando cada grandeza
- [ ] Aplico J = C·i·t com taxa e tempo na mesma unidade
- [ ] Diferencio juros (J) de montante (M)
- [ ] Calculo média simples e encontro termo faltante
- [ ] Calculo média ponderada dividindo pela soma dos pesos
- [ ] Não confundo velocidade média com média simples de velocidades

---

*Anterior: [02 — Razão, Proporção e Porcentagem](02-razao-proporcao-porcentagem.md) · Próximo: [04 — Equações, Medidas e Gráficos](04-equacoes-medias-graficos.md)*
