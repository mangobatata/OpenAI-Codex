# Worktrees y trabajo paralelo en repos

## Objetivo de este modulo

Trabajar varias tareas en paralelo sin mezclar cambios.

## Explicacion simple

Un branch es una linea de trabajo en Git. Un worktree es otra carpeta conectada al mismo repo, normalmente con otro branch checkout. Permite abrir distintos chats de Codex en carpetas separadas.

## Analogia cotidiana

Un branch es una version del plano. Un worktree es otra mesa de trabajo donde ese plano esta abierto.

## Comandos

```bash
git status
git branch
git worktree list
git worktree add ../mi-proyecto-feature feature/nueva-funcion
git worktree remove ../mi-proyecto-feature
```

`git status` muestra cambios. `git branch` lista ramas. `git worktree list` muestra carpetas activas. `git worktree add` crea una carpeta paralela. `git worktree remove` la elimina si esta limpia.

## Como se usa paso a paso

1. Verifica repo limpio.
2. Crea branch por feature.
3. Crea worktree.
4. Abre un chat Codex en esa carpeta.
5. Mantene cada tarea aislada.

## Buenas practicas

Nombra carpetas claro. No uses el mismo branch en dos worktrees. Corre tests por worktree.

## Errores comunes

Confundir carpeta principal y worktree. Borrar worktree con cambios sin revisar.

## Prompt recomendado

```txt
Estoy en un worktree para esta feature. Antes de editar, verifica git status y confirma branch y carpeta actual.
```

## Mini ejercicio

Disena un esquema de tres worktrees para tres features.

## Checklist de comprension

- Distingo branch y worktree.
- Se crear y listar worktrees.
- Se trabajar con chats separados.

