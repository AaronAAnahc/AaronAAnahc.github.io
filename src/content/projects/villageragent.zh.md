---
id: villageragent
lang: zh
title: "VillagerAgent"
subtitle: "AI 驱动的 Minecraft 村民"
description: "一款 Minecraft 模组，把村民变成由大语言模型驱动的智能体，具备分层感知、空间推理与长期记忆。"
github: "https://github.com/AaronAAnahc/MinecraftMod-VillagerAgent"
tech: "Java"
cover: "/projects/villageragent/cover.svg"
order: 1
---

VillagerAgent 是一款 Minecraft 模组，把游戏里的村民变成了由大语言模型（LLM）驱动的智能体——每个村民都有自己的个性、记忆，以及对周围世界的推理能力。

## 为什么做

原版的村民本质上是简单的状态机：走到工作台、补货、上床睡觉。这个项目的目标是把这件事推到极致——给每个村民装上对周围环境的感知、对周边建筑的建模，并让大语言模型来驱动它的决策。

## 分层感知

感知被拆成由粗到细的三层：

- **远层（Far）**——chunk 级记忆，只对重要方块类型打标签，而不是存下每个 chunk 全部 2048 个方块，从而在控制内存的同时保留关键信息（床、工作台、建筑）。
- **中层（Mid）**——建筑索引（`WorldStructureIndex`）缓存房间与结构信息，通过 `WorldSavedData` 持久化，避免每次 chunk 加载时重复计算。
- **近层（Near）**——对村民当前实际能看到的范围做视锥扫描。

## 房间分割

为了让智能体理解空间，模组在测地距离场上用 watershed 风格的算法把世界分割成房间，让智能体拥有「房间」的概念，直接服务于寻路与建造决策。

## 记忆与事件驱动

智能体的记忆围绕事件而非周期性扫描构建——例如床的分配是在已加载 chunk 中出现未分配床时按单张床触发，而不是定时做一次全量 flood-fill。配合持久化到磁盘的索引，让长时间运行的智能体保持低成本。

## 个性与决策

每个村民从八种个性中抽取一种，其决策由一个接收当前感知上下文的大语言模型产出。目标是形成「感知 → 推理 → 行动」的闭环，让 LLM 把上下文转化为具体的游戏内行为。

<!-- TODO: 放一张村民自主行动的截图或短视频 -->
<!-- 例如：<video src="/projects/villageragent/demo.mp4" controls></video> -->

## 链接

- [GitHub 仓库](https://github.com/AaronAAnahc/MinecraftMod-VillagerAgent)
