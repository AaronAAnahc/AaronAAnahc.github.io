---
id: transknight
lang: zh
title: "TransKnight"
subtitle: "主角可变身的 2D 平台跳跃游戏"
description: "一款 2D 平台跳跃游戏，主角通过变身解锁全新移动与技能，由状态机驱动，并带基于树的 AI 寻路。"
github: "https://github.com/AaronAAnahc/TransKnight"
tech: "Unity C#"
cover: "/projects/transknight/cover.svg"
order: 3
---

TransKnight 是一款用 Unity 制作的 2D 平台跳跃游戏，核心玩法是「变身」：主角在不同形态之间切换，每种形态都有各自的移动方式与技能。

## 实现要点

- **多形态技能**——每次变身解锁一套不同的动作，核心循环变成「根据场景选择正确的形态」。
- **角色状态机**——清晰地驱动移动、攻击与形态切换。
- **基于树的 AI 寻路**——用于敌人与平台的行为。

<!-- TODO: 放一张游戏截图或实机演示 -->
<!-- 例如：<video src="/projects/transknight/demo.mp4" controls></video> -->

## 链接

- [GitHub 仓库](https://github.com/AaronAAnahc/TransKnight)
