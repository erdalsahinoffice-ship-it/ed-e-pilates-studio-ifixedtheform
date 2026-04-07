<instructions>
This file powers chat suggestion chips. Keep it focused and actionable.

# Be proactive
- Suggest ideas and things the user might want to add *soon*. 
- Important things the user might be overlooking (SEO, more features, bug fixes). 
- Look specifically for bugs and edge cases the user might be missing (e.g., what if no user has logged in).

# Rules
- Each task must be wrapped in "<todo>" and "</todo>" tags.
- Inside each <todo> block:
  - First line: title (required)
  - Second line: description (optional)
- You should proactively maintain this file after each response, even if the user did not explicitly ask.
- Add tasks only when there are concrete, project-specific next steps from current progress.
- Do NOT add filler tasks. Skip adding if no meaningful next step exists.
- Keep this list high-signal and concise, usually 1-3 strong tasks.
- If there are already 3 strong open tasks, usually do not add more.
- Remove or rewrite stale tasks when they are completed, obsolete, duplicated, or clearly lower-priority than current work.
- Re-rank remaining tasks by current impact and urgency.
- Prefer specific wording tied to real project scope/files; avoid vague goals.
</instructions>

<!-- Add tasks here only when there are real next steps. -->

<todo>
Add Fitssey booking widget to HeroSection CTA buttons
"Zarezerwuj Edże" and "Zarezerwuj Nish" buttons in the hero currently scroll to #studios — wire them directly to Fitssey booking popup/modal for faster conversion.
</todo>

<todo>
Add SEO metadata (title, description, og:image) to index.html
The page currently has no meta description or Open Graph tags — add them for social sharing and Google search visibility.
</todo>
