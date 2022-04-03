# Coderken

## Getting Started

```sh
# installing
bundle install

# running
bundle exec jekyll serve --incremental

# updating
bundle update github-pages

# updating cv pdfs
pandoc \
--from=html \
--to=pdf \
-o cv/ken-courville-cv-one-page.pdf \
cv/onepage.html

```

## References

- [Testing site locally with Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll)
- [kramdown](https://kramdown.gettalong.org)
