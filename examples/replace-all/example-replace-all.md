# example: replace all

## Use case

**Project**

Chrome Extension to scrape appartment offers from immobilienscout24 website.

**Case**

Transform content from DOM (text) to right format. E.g.

- `"2.000,99 €"` -> `"2000.99"` -> `parseFloat(...)`
- ...

## Implementation

- Inspiration: https://stackoverflow.com/a/15604206/4623244
- Inspiration how to deal with special characters: https://stackoverflow.com/a/3561711
- result: https://github.com/tobiaskraus/tk-utils/tree/main/src/parse
