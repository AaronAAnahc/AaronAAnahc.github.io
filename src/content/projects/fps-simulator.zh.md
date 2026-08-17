---
id: fps-simulator
lang: zh
title: "FPS Simulator"
subtitle: "在终端里软光栅化的 3D 射击游戏"
description: "一款运行在 Linux 终端里的第一人称射击游戏，渲染全部由从零实现的软光栅化管线完成——不依赖任何图形 API。"
github: "https://github.com/JamesLiu12/FPS-Simulator"
tech: "C"
cover: "/projects/fps-simulator/cover.svg"
order: 2
---

FPS Simulator 是一款运行在 Linux 终端里的第一人称射击游戏，渲染全部由一个从零实现的软光栅化器完成——不依赖任何图形 API，也没有用现成引擎。

## 渲染管线

这个项目最核心的目的，是通过在 CPU 上亲手实现一遍来搞懂 GPU 到底做了什么：

1. **变换**——世界 → 相机 → 屏幕，配合基于 FOV 的透视投影。
2. **透视除法**与**视锥体裁剪**。
3. 用**重心坐标**进行**三角形光栅化**。
4. **Z-Buffer 深度测试**与**透视校正插值**。

在此之上，还有一个小型自研 3D 数学库负责向量、矩阵与变换，全部手写。

## 碰撞与 AI

- 基于**分离轴定理（SAT）**的 **OBB 碰撞检测**。
- **Ray–OBB** 相交判定，用于视线检测。
- 带寻路与攻击行为的敌人 AI。

## UI

叠加在游戏画面上方的 UI 覆盖层，同样渲染在终端里。

<!-- TODO: 放一段游戏在终端里运行的录屏 -->
<!-- 例如：<video src="/projects/fps-simulator/demo.mp4" controls></video> -->

## 链接

- [GitHub 仓库](https://github.com/JamesLiu12/FPS-Simulator)
