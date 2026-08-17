---
id: villageragent
lang: en
title: "VillagerAgent"
subtitle: "AI-powered Minecraft villagers"
description: "A Minecraft mod that turns villagers into LLM-driven agents with layered perception, spatial reasoning, and long-term memory."
github: "https://github.com/AaronAAnahc/MinecraftMod-VillagerAgent"
tech: "Java"
cover: "/projects/villageragent/cover.svg"
order: 1
---

VillagerAgent is a Minecraft mod that turns the game's villagers into intelligent, LLM-driven agents — each with its own personality, memory, and the ability to reason about the world around it.

## Why

Vanilla villagers are simple state machines: they path to a workstation, restock, and go to bed. The idea here was to push that as far as possible — give each villager a perception of its surroundings, a model of the buildings around it, and let a large language model drive its decisions.

## Layered perception

Perception is split into three layers, from coarse to fine:

- **Far** — a chunk-level memory that tags important block types instead of storing every one of the 2048 blocks per chunk. This keeps memory use low while retaining what matters (beds, workstations, buildings).
- **Mid** — a building index (`WorldStructureIndex`) that caches room and structure information, persisted through `WorldSavedData` so it isn't recomputed every time a chunk loads.
- **Near** — a frustum scan of what the villager can actually see right now.

## Room segmentation

To reason about space, the mod segments the world into rooms using a watershed-style algorithm over a geodesic distance field. This gives agents a notion of "rooms", which feeds directly into navigation and building decisions.

## Memory & events

Agent memory is built around events rather than periodic scans — for example, bed assignment triggers per-bed when an unassigned bed appears in a loaded chunk, instead of running a full flood-fill on a timer. Combined with an index persisted to disk, this keeps long-running agents cheap.

## Personality & decisions

Each villager has a personality drawn from a set of eight, and its decisions are produced by an LLM that receives the current perception context. The goal is closed-loop behavior — perceive, reason, act — with the LLM turning context into concrete in-game actions.

<!-- TODO: add a screenshot or short clip of a villager acting on its own -->
<!-- e.g. <video src="/projects/villageragent/demo.mp4" controls></video> -->

## Links

- [GitHub repository](https://github.com/AaronAAnahc/MinecraftMod-VillagerAgent)
