---
title: AI项目总结
tags:
---

## 常见功能

* 图片、附件上传。
* 语音输入。
* 对话历史。
* 对话记忆、压缩。

## 架构

* 常见的后端存储模型、事件流、全链路数据模型。
* LLM组件架构（LLM、Redis、Agentic Search、Web Search、SSE等）。
* 平台架构（Serverless、流水线、Scheduler、AI Index、Analytics等等）。

## RAG

* 如何做大文档上传、RAG和上下文管理？直接放context，多轮对话叠加会爆炸。①做摘要。②做RAG和向量查询。
* 知识管理流水线如何做？

## LLM用量监控

p* input tokens / output tokens监控 - OTel GenAI Spec。
* 对话内容监控、历史监控。
* by models用量监控。by day/time。

## 知识运营

* OPs center里面那套东西。
