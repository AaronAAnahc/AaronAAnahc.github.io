---
id: fps-simulator
lang: en
title: "FPS Simulator"
subtitle: "A software-rendered 3D FPS in the terminal"
description: "A first-person shooter rendered entirely in a Linux terminal with a from-scratch software rasterizer — no graphics API."
github: "https://github.com/JamesLiu12/FPS-Simulator"
tech: "C"
cover: "/projects/fps-simulator/cover.svg"
order: 2
---

FPS Simulator is a first-person shooter that runs in a Linux terminal, rendered by a software rasterizer built from scratch — no graphics API, no engine.

## The rendering pipeline

The whole point was to understand what a GPU does by doing it on the CPU:

1. **Transforms** — world → camera → screen, with an FOV-based perspective projection.
2. **Perspective divide** and **view-frustum clipping**.
3. **Triangle rasterization** using barycentric coordinates.
4. **Z-buffer depth testing** and **perspective-correct interpolation**.

On top of that, a small custom 3D math library handles vectors, matrices, and the transforms — all hand-written.

## Collision & AI

- **OBB collision detection** via the Separating Axis Theorem (SAT).
- **Ray–OBB intersection** for line-of-sight checks.
- Enemy AI with pathfinding and attack behavior.

## UI

A UI overlay drawn on top of the game view, all rendered in the terminal.

<!-- TODO: add a recording of the game running in a terminal -->
<!-- e.g. <video src="/projects/fps-simulator/demo.mp4" controls></video> -->

## Links

- [GitHub repository](https://github.com/JamesLiu12/FPS-Simulator)
