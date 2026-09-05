# Skill: Anti-UI-Slop Frontend Humanizer

## Description
Refactors generic, "AI-slop" UI into highly polished, production-ready, human-grade frontend layouts.

## Instructions
When writing or modifying any UI component, you MUST strictly adhere to these human developer standards:

1. **Micro-Interactions**: Every clickable element must have explicit `:hover`, `:active`, and `:focus` styles. 
2. **Layout Polishing**: Never use raw, unstyled boxes. Use strict flex alignment (`items-center`), proportional spacing (e.g., `gap-3`), and uniform card padding.
3. **Typography & Hierarchies**: Avoid pure black (`#000`) text on white. Use semantic text colors (e.g., `text-slate-800` for headings, `text-slate-500` for subtitles) to create depth.
4. **State Coverage**: You must explicitly write code for `loading` placeholders (skeletons), `disabled` button states, and helpful `empty` fallback layouts.
5. **Component Guardrails**: Do not generate massive, monolithic files. Split complex layouts into clean, reusable sub-components.
