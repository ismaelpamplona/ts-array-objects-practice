# ✅ TypeScript + Jest Project Setup for `ts-array-objects-practice`

## 0. Set Node.js Version (using asdf)

```bash
asdf local nodejs 23.11.0
```

---

## 1. Create and Initialize Your Project

```bash
mkdir ts-array-objects-practice
cd ts-array-objects-practice
npm init -y
```

---

## 2. Install TypeScript and Jest

```bash
npm install --save-dev typescript jest ts-jest @types/jest
```

---

## 3. Initialize TypeScript

```bash
npx tsc --init
```

Then edit `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "es2020",
    "module": "commonjs",
    "rootDir": "src",
    "outDir": "dist",
    "esModuleInterop": true,
    "strict": true
  }
}
```

---

## 4. Initialize Jest

```bash
npx ts-jest config:init
```

This creates a `jest.config.js`.

---

## 5. Create Project Structure

```bash
mkdir src tests
touch src/index.ts
```

---

## 6. Update `package.json` Scripts

```json
"scripts": {
  "test": "jest",
  "lint": "eslint . --ext .ts",
  "format": "prettier --write .",
  "dev": "tsc --watch",
  "start": "node dist/index.js"
}
```

---

## 📦 Directory Structure

```
ts-array-objects-practice/
├── src/
│   └── index.ts
├── tests/
├── jest.config.js
├── tsconfig.json
├── package.json
```
