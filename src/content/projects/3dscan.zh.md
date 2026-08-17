---
id: 3dscan
lang: zh
title: "3DScan"
subtitle: "AR + RGB-D 三维重建"
description: "一个三维重建项目，利用 RGB-D 采集与点云配准，把真实物体重建为数字 3D 模型。"
github: "https://github.com/AaronAAnahc/3DScan"
tech: "Unity C#"
cover: "/projects/3dscan/cover.svg"
order: 4
---

3DScan 是一个三维重建项目，通过 RGB-D 数据与点云配准，把真实物体重建为数字 3D 模型。

## 工作原理

- **RGB-D 采集**——将多个视角的深度图融合为统一的点云。
- **配准**——使用 ICP（迭代最近点）对齐各次扫描。
- **基于 AR**——扫描流程借助增强现实来引导采集。

<!-- TODO: 放一张扫描结果图或演示视频 -->
<!-- 例如：<video src="/projects/3dscan/demo.mp4" controls></video> -->

## 链接

- [GitHub 仓库](https://github.com/AaronAAnahc/3DScan)
