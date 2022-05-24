# stackoverflow-stats

* Card SVGs for your Stack Overflow stats
* [Stack Overflow Stats REST API](https://github.com/stackoverflow-stats-api)

[![Stackoverflow stats](https://stackoverflow-stats.vercel.app/api?userId=16142497&theme=Dark)](https://stackoverflow.com/users/16142497)

# Stats Card

**Ensure you have a valid Stack Overflow user ID, which can be found [here](https://stackover.com/users) by finding your username**

### Markdown

To get a SVG Card for Markdown, enter your user ID in the following link and paste it into your markdown file.

```md
[![Stackoverflow stats](https://stackoverflow-stats.vercel.app/api?userId=<YOUR-USER-ID>&theme=Dark)](https://stackoverflow.com/users/<YOUR-USER-ID>)
```

### URL

To get a SVG Card URL, enter your user ID in the following link:

`
https://stackoverflow-stats.vercel.app/api?userId=<YOUR-USER-ID>&theme=Dark
`

### Themes

* Light
* Dark (default)

Use `&theme=THEME_NAME` in the endpoint to change card themes.

### Deployed Application

To make your cards manually, visit `https://stackoverflow-stats.vercel.app`
