const fs = require('fs')
const path = require('path')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('Enter the post title: ', (title) => {
  const slug = title.toLowerCase().replace(/ /g, '-')
  const date = new Date().toISOString().split('T')[0]
  const filePath = path.join(__dirname, '../data/blog', `${slug}.mdx`)

  const content = `---
title: "${title}"
date: "${date}"
draft: false
summary: ""
tags: []
---

# ${title}

Write your post content here.
`

  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error('Error creating post:', err)
    } else {
      console.log(`Post created at ${filePath}`)
    }
    rl.close()
  })
})
