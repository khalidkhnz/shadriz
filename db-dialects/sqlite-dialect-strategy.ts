import { log } from "../lib/log";
import { ScaffoldProcessor } from "../lib/scaffold-processor";
import {
  DataTypeStrategyMap,
  DataTypeStrategyOpts,
  DbDialect,
  DbDialectStrategy,
  ScaffoldOpts,
  ScaffoldProcessorOpts,
} from "../lib/types";
import { appendToFile, compileTemplate, renderTemplate } from "../lib/utils";

const sqliteDataTypeStrategies: DataTypeStrategyMap = {
  integer: {
    jsType: "number",
    formTemplate: "components/table/create-input.tsx.hbs",
    updateFormTemplate: "components/table/update-input.tsx.hbs",
    getKeyValueStrForSchema: function (opts: DataTypeStrategyOpts) {
      return `${opts.columnName}: integer("${opts.columnName}")`;
    },
  },
  real: {
    jsType: "number",
    formTemplate: "components/table/create-input.tsx.hbs",
    updateFormTemplate: "components/table/update-input.tsx.hbs",
    getKeyValueStrForSchema: function (opts: DataTypeStrategyOpts): string {
      return `${opts.columnName}: real("${opts.columnName}")`;
    },
  },
  text: {
    jsType: "string",
    formTemplate: "components/table/create-textarea.tsx.hbs",
    updateFormTemplate: "components/table/update-textarea.tsx.hbs",
    getKeyValueStrForSchema: function (opts: DataTypeStrategyOpts): string {
      return `${opts.columnName}: text(\"${opts.columnName}\")`;
    },
  },
  boolean: {
    jsType: "boolean",
    formTemplate: "components/table/create-checkbox.tsx.hbs",
    updateFormTemplate: "components/table/update-checkbox.tsx.hbs",
    getKeyValueStrForSchema: function (opts: DataTypeStrategyOpts): string {
      return `${opts.columnName}: integer("${opts.columnName}", { mode: "boolean" } )`;
    },
  },
  bigint: {
    jsType: "number",
    formTemplate: "components/table/create-input.tsx.hbs",
    updateFormTemplate: "components/table/update-input.tsx.hbs",
    getKeyValueStrForSchema: function (opts: DataTypeStrategyOpts): string {
      return `${opts.columnName}: blob("${opts.columnName}", { mode: "bigint" })`;
    },
  },
};

export class SqliteDialectStrategy implements DbDialectStrategy {
  dialect: DbDialect = "sqlite";

  init(): void {
    this.copyDrizzleConfig();
    this.copySchema();
  }

  copyDrizzleConfig(): void {
    renderTemplate({
      inputPath: "drizzle.config.ts.hbs",
      outputPath: "drizzle.config.ts",
      data: { dialect: "sqlite" },
    });
  }

  copySchema(): void {
    renderTemplate({
      inputPath: "lib/schema.ts.sqlite.hbs",
      outputPath: "lib/schema.ts",
    });
  }

  scaffold(opts: ScaffoldOpts): void {
    const scaffoldProcessorOpts: ScaffoldProcessorOpts = {
      ...opts,
      schemaTableTemplatePath: "lib/schema.ts.sqlite.table.hbs",
      dataTypeStrategyMap: sqliteDataTypeStrategies,
    };
    const scaffoldProcessor = new ScaffoldProcessor(scaffoldProcessorOpts);
    scaffoldProcessor.process();
  }

  appendAuthSchema() {
    const text = compileTemplate({
      inputPath: "lib/schema.ts.sqlite.auth.hbs",
    });
    appendToFile("lib/schema.ts", text);
  }

  copyCreateUserScript(): void {
    renderTemplate({
      inputPath: "scripts/create-user.ts.better-sqlite3.hbs",
      outputPath: "scripts/create-user.ts",
    });
  }

  printInitCompletionMessage(): void {
    log.success("db setup success: " + this.dialect);
    log.reminder();
    log.cmd("npx shadriz auth -h");
    log.cmd("npx shadriz scaffold -h");
  }
}
