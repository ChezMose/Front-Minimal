# Content

## default.scss
CSS added to all pages.
Used in /app/layout.js

## theme.scss
Contains sass variables.
Can be imported from all the individual scss files (and probably should).

## page.module.scss
Contains tool classes used to structure a page

# Notes

All the individual css and scss files are to be bundled in as many files as required for optimized deployment.
Lot of style files implies a slightly longer build time but a better maintainability, which is better.
So you should not care about having a lot of files.
