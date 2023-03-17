```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Javascript navigation component with menus and content</title>
    <style>
      html,
      body {
        margin: 0;
        padding: 0;
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
          Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
          Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
      }

      * {
        box-sizing: border-box;
      }
      .wrapper {
        width: 25rem;
        display: grid;
        gap: 2rem;
      }
      .navigation {
        display: flex;
        gap: 10px;
      }
      .navigation button {
        padding: 8px 15px;
        background-color: #fff;
        border: none;
        outline: none;
        box-shadow: 1px 2px 15px 1px #e0e0e0;
        text-transform: uppercase;
        font-size: 0.92rem;
        font-weight: 500;
        cursor: pointer;
        border-radius: 3px;
        flex-basis: 100%;
      }
      .content {
        padding: 1px 10px;
        box-shadow: 1px 2px 15px 1px #e0e0e0;
        background-color: #fff;
      }
    </style>
  </head>
  <body>
    <div class="wrapper">
      <div class="navigation" id="navigation">
        <button id="profile">profile</button>
        <button id="settings">settings</button>
        <button id="options">options</button>
      </div>
      <div class="content" id="content">
        <!--Add id to paragraph elements-->
      </div>
    </div>
  </body>
</html>
```
