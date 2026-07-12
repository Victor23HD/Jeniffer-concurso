# Informática 03 — Instalação, manutenção, backup e suporte

## Instalação e manutenção básica

### Computador
- Verificar compatibilidade (SO, RAM, espaço em disco)
- Atualizar SO e aplicativos
- Remover programas não usados
- Limpeza física (poeira na fonte/coolers) — com cuidado
- Verificar cabos, energia e conexões USB

### Periféricos
| Dispositivo | Pontos de suporte |
|---|---|
| Impressora | cabo/rede, tinta/toner, fila de impressão, driver |
| Scanner | driver, USB, software de captura |
| Teclado/mouse | USB/wireless, pilhas, receptor |
| Armazenamento | formatação, letras de unidade, safely remove |

### Drivers
- Software que faz o SO reconhecer o hardware
- Instalar/atualizar pelo site do fabricante ou pelo Windows Update
- Driver errado → dispositivo com erro (Gerenciador de Dispositivos)

## Backup e recuperação

| Tipo | Ideia |
|---|---|
| Completo | tudo |
| Incremental | o que mudou desde o último backup |
| Diferencial | o que mudou desde o último completo |

Regra prática **3-2-1**: 3 cópias, 2 mídias diferentes, 1 off-site (nuvem/outro local).

Recuperação: testar restauração de vez em quando (backup que não restaura não serve).

## Suporte ao usuário

### Bom atendimento
1. Ouvir / entender o problema  
2. Reproduzir o erro  
3. Isolar causa (usuário × máquina × rede × sistema)  
4. Resolver ou escalar  
5. Registrar o chamado  

### Presencial × remoto
- **Presencial:** acesso físico, cabeamento, hardware  
- **Remoto:** Assistência Remota, RDP, ferramentas tipo AnyDesk/TeamViewer (cuidado com segurança e autorização)

Perguntas úteis: “Desde quando?”, “Aparece mensagem de erro?”, “Só com você ou com outros?”

## Organização de equipamentos

- Patrimônio / inventário (etiqueta, número de série)
- Controle de quem está com qual equipamento
- Histórico de manutenção

## Checklist

- [ ] Driver = ponte hardware↔SO
- [ ] Backup precisa ser testável
- [ ] Suporte: diagnóstico antes de “reinstalar tudo”
