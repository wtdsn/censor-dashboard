import type { UserConfig } from "@commitlint/types";
const Configuration: UserConfig = {
	extends: ["@commitlint/config-conventional"],
	// 当全等于 init 时，忽略检测
	ignores: [(matche) => matche.trim() === "init"],
	defaultIgnores: false,
	typeEnum: [
		2,
		"always",
		[
			"build", // 当项目进行一些构建的时候，比如修改文件 vite.config.ts 等， 一般都是一些配置文件
			"chore", // 比如修改了一些文档，或者是修改了一些代码，但是不影响功能，比如修改了一些注释，或者是修改了一些空格等
			"ci", // 当项目进行持续集成的时候
			"docs", // 当项目进行文档编写的时候
			"feat", // 当项目进行一些新功能的时候
			"fix", // 当项目进行一些 bug 修复的时候
			"perf", // 当项目进行一些性能优化的时候
			"refactor", // 当项目进行一些代码重构的时候
			"revert", // 当项目进行一些代码回滚的时候
			"style", // 当项目进行一些代码格式化的时候 ，不是样式的修改
			"test", // 当项目进行一些测试的时候
		],
	],
};

module.exports = Configuration;
