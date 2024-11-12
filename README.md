```csharp
easy-learn/
├── apps/
│   ├── web/                 # 前端项目
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   ├── App.tsx
│   │   │   └── main.tsx
│   │   ├── tsconfig.json
│   │   └── package.json
│   └── server/              # 后端项目
│       ├── src/
│       │   ├── modules/     # 业务模块
│       │   ├── resolvers/   # GraphQL resolvers，包括 Query、Mutation 等
│       │   ├── schemas/     # GraphQL schema 定义
│       │   ├── app.module.ts
│       │   └── main.ts
│       ├── tsconfig.json
│       └── package.json
├── packages/
│   └── shared/              # 前后端共享模块（类型、工具等）
│       ├── src/
│       │   ├── types/       # 类型定义
│       │   ├── utils/       # 工具函数
│       │   └── index.ts
│       ├── tsconfig.json
│       └── package.json
├── pnpm-workspace.yaml      # 定义 pnpm workspace 范围
├── package.json             # 根 package.json，包含通用依赖
└── tsconfig.base.json       # 根 tsconfig，通用配置
```