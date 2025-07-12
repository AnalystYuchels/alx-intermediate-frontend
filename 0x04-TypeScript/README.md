# TypeScript Learning Project

This covers fundamental to advanced concepts including interfaces, classes, DOM manipulation, generics, namespaces, and nominal typing.

![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue)
![Build](https://img.shields.io/badge/Build-Passing-brightgreen)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)


# 📚 Learning Objectives

By the end of this project, you will be able to explain and implement:

* **Basic Types in TypeScript** – Understanding primitive and complex types  
* **Interfaces, Classes, and Functions** – Object-oriented programming concepts  
* **DOM Manipulation with TypeScript** – Working with web APIs  
* **Generic Types** – Creating reusable, type-safe components  
* **Namespaces** – Organizing code and avoiding naming conflicts  
* **Declaration Merging** – Extending existing interfaces and modules  
* **Ambient Namespaces** – Importing external libraries  
* **Nominal Typing** – Brand convention for type safety  


# 🛠️ Requirements

### Development Environment:

- **Allowed Editors:** `vi`, `vim`, `emacs`, `Visual Studio Code`
- **Platform:** Ubuntu 18.04 (for transpilation)
- **Testing Framework:** Jest (version 24.9.\*)
- **File Extension:** `.ts` for TypeScript files

### Code Standards:

- All files must end with a new line  
- TypeScript compiler should show **no warnings or errors**  
- Use **TypeScript types** whenever possible 


# 📁 Project Structure


0x04-TypeScript/
├── README.md
├── task\_0/
│   ├── js/main.ts
│   ├── package.json
│   ├── .eslintrc.js
│   ├── tsconfig.json
│   └── webpack.config.js
├── task\_1/
│   ├── js/main.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── webpack.config.js
├── task\_2/
│   ├── js/main.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── webpack.config.js
├── task\_3/
│   ├── js/
│   │   ├── main.ts
│   │   ├── interface.ts
│   │   ├── crud.d.ts
│   │   └── crud.js
│   ├── package.json
│   ├── tsconfig.json
│   └── webpack.config.js
├── task\_4/
│   ├── js/
│   │   ├── main.ts
│   │   └── subjects/
│   │       ├── Teacher.ts
│   │       ├── Subject.ts
│   │       ├── Cpp.ts
│   │       ├── Java.ts
│   │       └── React.ts
│   ├── package.json
│   └── tsconfig.json
└── task\_5/
├── js/main.ts
├── package.json
├── tsconfig.json
└── webpack.config.js


# 🎯 Tasks Overview

| Task | Focus | Concepts | Output |
|------|-------|----------|--------|
| **Task 0** | Basic interfaces and DOM manipulation | Interface definition, array handling | Render a table displaying student info |
| **Task 1** | Advanced interface features | Optional props, readonly, index signatures | Dynamically add object properties |
| **Task 2** | Interface inheritance | Interface extension, conditional classes | Create `Director` from `Teacher` |
| **Task 3** | Function interfaces | Function typing | Implement and type `printTeacher()` |
| **Task 4** | Class implementation | Interfaces with classes | Create `StudentClass` with methods |
| **Task 5** | Advanced types, factory pattern | Interface & class implementation | Create `Director` or `Teacher` by salary |
| **Task 6** | Type predicates and conditionals | Type guards, custom logic | Identify and execute based on role |
| **Task 7** | String literal types | Union types | Return output based on subject literal |
| **Task 8** | Ambient namespaces | External libraries, `.d.ts` files | Typed CRUD operations |
| **Task 9** | Namespaces & merging | Modular organization | Declare and merge interfaces |
| **Task 10** | Main file orchestration | Import/export, execution flow | Call methods on imported classes |
| **Task 11** | Nominal typing | Brand-safe interfaces | Strongly differentiate types |


# 🚀 Getting Started

### Prerequisites:

```bash
# Install Node.js and npm
npm install

# Install TypeScript globally (optional)
npm install -g typescript
````


### Running Individual Tasks:

* Navigate to a task directory:

```bash
cd task_0  # Replace with any task folder
```

* Install dependencies:

```bash
npm install
```

* Build the project:

```bash
npm run build
```

* Development mode (if available):

```bash
npm run start-dev
```


# 🧾 Configuration Files

Each task contains standard configuration files for TypeScript and Webpack:

* **`package.json`** – Dependencies and build scripts
* **`tsconfig.json`** – TypeScript compiler configuration
* **`webpack.config.js`** – Module bundler setup
* **`.eslintrc.js`** – Linting rules (in applicable tasks)


# 🔧 Build Process

This project uses **Webpack** to bundle and **TypeScript** to compile source files. When you run `npm run build`, the system should return:

> ✅ `No type errors found`

### Key Build Features:

* Strict type checking with `tsc`
* JavaScript bundling with Webpack
* Code linting using ESLint
* Typed third-party JS via ambient declarations
* Modular task-by-task architecture


# 📝 Code Examples

### ✅ Basic Interface (Task 0):

```ts
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
```


### ✅ Advanced Interface (Task 1):

```ts
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}
```


### ✅ Nominal Typing (Task 11):

```ts
interface MajorCredits {
  credits: number;
  brand: 'major';
}

interface MinorCredits {
  credits: number;
  brand: 'minor';
}
```


# ✅ Validation Checklist

* ✅ Code compiles without any TypeScript errors
* ✅ Jest used for running unit tests
* ✅ ESLint enforces consistent code quality
* ✅ Webpack compiles cleanly without issues


# 📚 Additional Resources

* [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
* [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
* [Webpack Documentation](https://webpack.js.org/concepts/)


# 🤝 Contributing

When contributing to this project:

* Follow TypeScript style guides
* Keep interfaces and class contracts consistent
* Write reusable, type-safe code
* Test features where applicable
* Ensure structure and file paths are clean and predictable


# 📄 License

This project is part of the educational curriculum for learning TypeScript fundamentals and advanced concepts. Feel free to reuse for your own learning!
