# `@eviensoft/react-copy-to-clipboard-hook`

<p align="center">
  <a href="https://www.npmjs.com/package/@eviensoft/react-copy-to-clipboard-hook" target="_blank">
    <img src="https://img.shields.io/npm/v/@eviensoft/react-copy-to-clipboard-hook?style=flat-square" alt="NPM Version" />
  </a>
  <a href="https://www.npmjs.com/package/@eviensoft/react-copy-to-clipboard-hook" target="_blank">
    <img src="https://img.shields.io/npm/dm/@eviensoft/react-copy-to-clipboard-hook.svg?style=flat-square" alt="Downloads" />
  </a>
  <a href="./LICENSE" target="_blank">
    <img src="https://img.shields.io/npm/l/@eviensoft/react-copy-to-clipboard-hook?style=flat-square" alt="License" />
  </a>
</p>

A simple and lightweight React Hook to copy text to the clipboard, with built-in success and error state tracking.  
Perfect for modern React and Next.js applications.

---

## ✨ Features

- 📋 Copy any text to the user's clipboard
- ✅ Success and error handling
- 🪶 Lightweight and dependency-free
- 🛡️ TypeScript support out of the box
- 🚀 Ready for production use

---

## 📦 Installation

```bash
npm install @eviensoft/react-copy-to-clipboard-hook
# or
yarn add @eviensoft/react-copy-to-clipboard-hook
# or
pnpm add @eviensoft/react-copy-to-clipboard-hook
```

---

## 🚀 Usage

```tsx
import { useCopyToClipboard } from '@eviensoft/react-copy-to-clipboard-hook';

export default function CopyExample() {
  const { copy, status } = useCopyToClipboard();

  const handleCopy = () => {
    copy('Hello world from Eviensoft!');
  };

  return (
    <div>
      <button onClick={handleCopy}>Copy Text</button>
      {status.success && <p>✅ Copied successfully!</p>}
      {status.error && <p>❌ Error: {status.error}</p>}
    </div>
  );
}
```

---

## 📚 API

### `const { copy, status } = useCopyToClipboard();`

| Property | Type | Description |
|:---------|:-----|:------------|
| `copy` | `(text: string) => Promise<void>` | Function to copy the given text to clipboard. |
| `status` | `{ success: boolean; error: string \| null }` | Copy operation status. |

---

## 🛠 Example with Auto-Clear Success Message

```tsx
import { useCopyToClipboard } from '@eviensoft/react-copy-to-clipboard-hook';
import { useEffect } from 'react';

export default function AutoClearExample() {
  const { copy, status } = useCopyToClipboard();

  useEffect(() => {
    if (status.success) {
      const timer = setTimeout(() => {
        // Optionally reset success after 3 seconds
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status.success]);

  return (
    <div>
      <button onClick={() => copy('Copied with Auto Clear!')}>Copy</button>
      {status.success && <p>✅ Copied!</p>}
    </div>
  );
}
```

> You can extend this hook easily with `auto-reset`, `toast notifications`, or more advanced error handling as needed!

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

---

## 🏢 About Eviensoft

At **Eviensoft**, we build lightweight, production-grade tools for modern web developers.  
Feel free to check out more packages and tools soon!

---

# 🔥 Quick Summary Table (for your npm page)

| Section | Info |
|:--------|:-----|
| Name | `@eviensoft/react-copy-to-clipboard-hook` |
| Type | React Hook |
| Language | TypeScript |
| Size | Very lightweight |
| Usage | Copy text to clipboard easily |
| Maintainer | Eviensoft |
