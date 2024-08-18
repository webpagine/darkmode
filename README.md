# darkmode
Darkmode support.

## Setup

### Add Git submodule

```shell
$ git submodule add https://github.com/webpagine/darkmode templates/darkmode
```

### Add to `env.yaml`

Example:
```yaml
templates:
  darkmode: "templates/darkmode"
```

## Usage

### Exported templates

| Template Key | Args   | Description                      |
|--------------|--------|----------------------------------|
| `head`       | *None* | Include required assets.         |
| `use`        | *None* | Place a dark mode toggle button. |

### CSS selectors

| CSS Selector              | Description                                          |
|---------------------------|------------------------------------------------------|
| `theme-light`             | Light theme.                                         |
| `theme-dark`              | Dark theme.                                          |
| `button-dark-mode-toggle` | Be used on **Dark Mode Toggle Button** HTML element. |
