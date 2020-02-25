# 📛 HackerBadge

Embeddable Hacker News badges for your post/launch. A serverless function written in TypeScript and deployed on ZEIT.

[![Light badge example](https://hackerbadge.now.sh/api?id=8863)](https://hackerbadge.now.sh/api?id=8863)

[![Orange badge example](https://hackerbadge.now.sh/api?id=8863&type=orange)](https://hackerbadge.now.sh/api?id=8863&type=orange)

[![Dark badge example](https://hackerbadge.now.sh/api?id=8863&type=dark)](https://hackerbadge.now.sh/api?id=8863&type=dark)

## ⭐ Usage

### URLs

- Light badge: https://hackerbadge.now.sh/api?id=8863
- Orange badge: https://hackerbadge.now.sh/api?id=8863&type=orange
- Dark badge: https://hackerbadge.now.sh/api?id=8863&type=dark

### HTML

```html
<a href="https://news.ycombinator.com/item?id=8863">
  <img
    alt="Featured on Hacker News"
    src="https://hackerbadge.now.sh/api?id=8863"
  />
</a>
```

### Markdown

```md
[![Featured on Hacker News](https://hackerbadge.now.sh/api?id=8863)](https://news.ycombinator.com/item?id=8863)
```

### I18N

[![Hindi badge example](https://hackerbadge.now.sh/api?id=8863&hackerNews=हैकर%20न्यूज़&featuredOn=प्रदर्शित)](https://hackerbadge.now.sh/api?id=8863&hackerNews=हैकर%20न्यूज़&featuredOn=प्रदर्शित)

https://hackerbadge.now.sh/api?id=8863&hackerNews=हैकर%20न्यूज़&featuredOn=प्रदर्शित

## 🔨 Development

[![Deploy with ZEIT Now](https://zeit.co/button)](https://zeit.co/import/project?template=https://github.com/AnandChowdhary/hackerbadge)

## 📄 License

[MIT](./LICENSE) © [Anand Chowdhary](https://anandchowdhary.com)
