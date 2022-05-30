# stackoverflow-stats

* Card SVGs for your Stack Overflow stats
* Implements my Stack Overflow Stats REST API, which can be found [here](https://github.com/yuvrajvirdi/stackoverflow-stats-api)

[![Stackoverflow stats](https://stackoverflow-stats.vercel.app/api?userId=1&theme=Dark)](https://stackoverflow.com/users/1)

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

#### Light

[![Stackoverflow stats](https://stackoverflow-stats.vercel.app/api?userId=1&theme=Light)](https://stackoverflow.com/users/1)

#### Dark (default)

[![Stackoverflow stats](https://stackoverflow-stats.vercel.app/api?userId=1&theme=Dark)](https://stackoverflow.com/users/1)

Use `&theme=THEME_NAME` in the endpoint to change card themes.

### Deployed Application

To make your cards manually, visit [https://stackoverflow-stats.vercel.app](https://stackoverflow-stats.vercel.app)
