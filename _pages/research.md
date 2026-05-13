---
layout: page
title: research
permalink: /research/
description: How large language models interact with human language — the patterns they absorb from training and how those patterns shape their outputs.
nav: true
nav_order: 3
---

My research investigates how large language models encode and respond to human language. I am interested in the statistical structures LLMs absorb from training data, how those structures emerge when models interact with people, and what this means for who benefits from AI-powered tools. I work at the intersection of computational linguistics, network science, and large-scale data analysis.

---

### Language Variation and LLM Outputs

How does the way you write a prompt shape the response you get? My current work shows that sociolinguistic features in prompts — specifically, language patterns associated with different social groups — cause LLMs to produce systematically different outputs. Prompts written in a more hedged, uncertainty-marked style (associated with female-gendered speech) elicit responses that are more readable and use simpler vocabulary; more assertive, direct prompts yield more formal and complex outputs. These effects hold across multiple document types (emails, job applications, social media posts) and are independent of the stated identity of the writer.

Using mechanistic interpretability methods — linear probes and activation patching on Llama-3.2 — I find that dialect information is encoded robustly in early transformer layers with high accuracy. This suggests the bias is embedded in model representations, not merely a surface-level stylistic response. This work has direct implications for equitable AI access: if the language you use shapes the quality of assistance you receive, that is a systematic inequality in who benefits from LLM-powered tools.

---

### AI Behavioral Patterns

A second thread asks: when LLMs are given tasks with no single correct answer, what patterns from their training data shape their outputs? I investigate this through the lens of randomness. When asked to generate random coin-flip sequences, LLMs reproduce and amplify the same biases humans exhibit — alternating too often, avoiding runs — rather than generating true Bernoulli sequences. The mechanisms are model-specific: Llama 3 memorizes a specific flip-sequence template; GPT-4 performs statistical continuation, matching the bigram statistics of its context; GPT-3.5 applies a fixed unconditional prior. The bias does not stem from explicit coin-flip training data, which is virtually absent from large pretraining corpora. Instead, it generalizes from binary-alternating patterns throughout natural language, and appears consistently across eight different framings of binary randomness — die rolls, Bernoulli trials, clinical treatment assignment, and more.

See [How Random is Random? Evaluating the Randomness and Humanness of LLMs' Coin Flips](https://arxiv.org/abs/2406.00092) (arXiv 2024).

---

### Networks, Language, and Online Communities

My PhD work at Cornell (advised by [Jon Kleinberg](https://www.cs.cornell.edu/home/kleinber/)) built the foundations in network science and computational linguistics that inform this current research. I developed new null models for network analysis based on k-core decompositions, studied the conventions governing word ordering in binomial expressions (*bread and butter*, not *butter and bread*) at web scale, and examined how geographic and topical structure organizes online communities. See the [publications](/publications/) page for details.
