import { formDataUtils } from "../lib/form-data-utils";
import {
  DataTypeStrategyMap,
  DataTypeStrategyOpts,
  DbDialect,
  DbDialectStrategy,
  PkStrategy,
} from "../lib/types";
import { renderTemplate } from "../lib/utils";

const mysqlDataTypeStrategies: DataTypeStrategyMap = {
  int: {
    jsType: "number",
    formTemplate: "scaffold-processor/components/table/create-input.tsx.hbs",
    updateFormTemplate:
      "scaffold-processor/components/table/update-input.tsx.hbs",
    getKeyValueStrForSchema: function (opts: DataTypeStrategyOpts): string {
      return `${opts.columnName}: int(\"${opts.columnName}\")`;
    },
    getKeyValStrForFormData: function (opts: DataTypeStrategyOpts): string {
      return formDataUtils.integer(opts.columnName);
    },
  },
  tinyint: {
    jsType: "number",
    formTemplate: "scaffold-processor/components/table/create-input.tsx.hbs",
    updateFormTemplate:
      "scaffold-processor/components/table/update-input.tsx.hbs",
    getKeyValueStrForSchema: function (opts: DataTypeStrategyOpts): string {
      return `${opts.columnName}: tinyint(\"${opts.columnName}\")`;
    },
    getKeyValStrForFormData: function (opts: DataTypeStrategyOpts): string {
      return formDataUtils.integer(opts.columnName);
    },
  },
  smallint: {
    jsType: "number",
    formTemplate: "scaffold-processor/components/table/create-input.tsx.hbs",
    updateFormTemplate:
      "scaffold-processor/components/table/update-input.tsx.hbs",
    getKeyValueStrForSchema: function (opts: DataTypeStrategyOpts): string {
      return `${opts.columnName}: smallint(\"${opts.columnName}\")`;
    },
    getKeyValStrForFormData: function (opts: DataTypeStrategyOpts): string {
      return formDataUtils.integer(opts.columnName);
    },
  },
  mediumint: {
    jsType: "number",
    formTemplate: "scaffold-processor/components/table/create-input.tsx.hbs",
    updateFormTemplate:
      "scaffold-processor/components/table/update-input.tsx.hbs",
    getKeyValueStrForSchema: function (opts: DataTypeStrategyOpts): string {
      return `${opts.columnName}: mediumint(\"${opts.columnName}\")`;
    },
    getKeyValStrForFormData: function (opts: DataTypeStrategyOpts): string {
      return formDataUtils.integer(opts.columnName);
    },
  },
  bigint: {
    jsType: "number",
    formTemplate: "scaffold-processor/components/table/create-input.tsx.hbs",
    updateFormTemplate:
      "scaffold-processor/components/table/update-input.tsx.hbs",
    getKeyValueStrForSchema: function (opts: DataTypeStrategyOpts): string {
      return `${opts.columnName}: bigint(\"${opts.columnName}\", { mode: "number" })`;
    },
    getKeyValStrForFormData: function (opts: DataTypeStrategyOpts): string {
      return formDataUtils.integer(opts.columnName);
    },
  },
  real: {
    jsType: "number",
    formTemplate: "scaffold-processor/components/table/create-input.tsx.hbs",
    updateFormTemplate:
      "scaffold-processor/components/table/update-input.tsx.hbs",
    getKeyValueStrForSchema: function (opts: DataTypeStrategyOpts): string {
      return `${opts.columnName}: real(\"${opts.columnName}\")`;
    },
    getKeyValStrForFormData: function (opts: DataTypeStrategyOpts): string {
      return formDataUtils.float(opts.columnName);
    },
  },
  decimal: {
    jsType: "number",
    formTemplate: "scaffold-processor/components/table/create-input.tsx.hbs",
    updateFormTemplate:
      "scaffold-processor/components/table/update-input.tsx.hbs",
    getKeyValueStrForSchema: function (opts: DataTypeStrategyOpts): string {
      return `${opts.columnName}: decimal(\"${opts.columnName}\")`;
    },
    getKeyValStrForFormData: function (opts: DataTypeStrategyOpts): string {
      return formDataUtils.string(opts.columnName);
    },
  },
  double: {
    jsType: "number",
    formTemplate: "scaffold-processor/components/table/create-input.tsx.hbs",
    updateFormTemplate:
      "scaffold-processor/components/table/update-input.tsx.hbs",
    getKeyValueStrForSchema: function (opts: DataTypeStrategyOpts): string {
      return `${opts.columnName}: double(\"${opts.columnName}\")`;
    },
    getKeyValStrForFormData: function (opts: DataTypeStrategyOpts): string {
      return formDataUtils.float(opts.columnName);
    },
  },
  float: {
    jsType: "number",
    formTemplate: "scaffold-processor/components/table/create-input.tsx.hbs",
    updateFormTemplate:
      "scaffold-processor/components/table/update-input.tsx.hbs",
    getKeyValueStrForSchema: function (opts: DataTypeStrategyOpts): string {
      return `${opts.columnName}: float(\"${opts.columnName}\")`;
    },
    getKeyValStrForFormData: function (opts: DataTypeStrategyOpts): string {
      return formDataUtils.float(opts.columnName);
    },
  },
  serial: {
    jsType: "number",
    formTemplate: "scaffold-processor/components/table/create-input.tsx.hbs",
    updateFormTemplate:
      "scaffold-processor/components/table/update-input.tsx.hbs",
    getKeyValueStrForSchema: function (opts: DataTypeStrategyOpts): string {
      return `${opts.columnName}: serial(\"${opts.columnName}\")`;
    },
    getKeyValStrForFormData: function (opts: DataTypeStrategyOpts): string {
      return formDataUtils.integer(opts.columnName);
    },
  },
  binary: {
    jsType: "string",
    formTemplate: "",
    updateFormTemplate: "",
    getKeyValueStrForSchema: function (opts: DataTypeStrategyOpts): string {
      throw new Error("Function not implemented.");
    },
    getKeyValStrForFormData: function (opts: DataTypeStrategyOpts): string {
      throw new Error("Function not implemented.");
    },
  },
  varbinary: {
    jsType: "string",
    formTemplate: "",
    updateFormTemplate: "",
    getKeyValueStrForSchema: function (opts: DataTypeStrategyOpts): string {
      throw new Error("Function not implemented.");
    },
    getKeyValStrForFormData: function (opts: DataTypeStrategyOpts): string {
      throw new Error("Function not implemented.");
    },
  },
  char: {
    jsType: "string",
    formTemplate: "scaffold-processor/components/table/create-input.tsx.hbs",
    updateFormTemplate:
      "scaffold-processor/components/table/update-input.tsx.hbs",
    getKeyValueStrForSchema: function (opts: DataTypeStrategyOpts): string {
      return `${opts.columnName}: char(\"${opts.columnName}\")`;
    },
    getKeyValStrForFormData: function (opts: DataTypeStrategyOpts): string {
      return formDataUtils.string(opts.columnName);
    },
  },
  varchar: {
    jsType: "string",
    formTemplate: "scaffold-processor/components/table/create-input.tsx.hbs",
    updateFormTemplate:
      "scaffold-processor/components/table/update-input.tsx.hbs",
    getKeyValueStrForSchema: function (opts: DataTypeStrategyOpts): string {
      return `${opts.columnName}: varchar(\"${opts.columnName}\", { length: 255 })`;
    },
    getKeyValStrForFormData: function (opts: DataTypeStrategyOpts): string {
      return formDataUtils.string(opts.columnName);
    },
  },
  text: {
    jsType: "string",
    formTemplate: "scaffold-processor/components/table/create-textarea.tsx.hbs",
    updateFormTemplate:
      "scaffold-processor/components/table/update-textarea.tsx.hbs",
    getKeyValueStrForSchema: function (opts: DataTypeStrategyOpts): string {
      return `${opts.columnName}: text(\"${opts.columnName}\")`;
    },
    getKeyValStrForFormData: function (opts: DataTypeStrategyOpts): string {
      return formDataUtils.string(opts.columnName);
    },
  },
  boolean: {
    jsType: "boolean",
    formTemplate: "scaffold-processor/components/table/create-checkbox.tsx.hbs",
    updateFormTemplate:
      "scaffold-processor/components/table/update-checkbox.tsx.hbs",
    getKeyValueStrForSchema: function (opts: DataTypeStrategyOpts): string {
      return `${opts.columnName}: boolean(\"${opts.columnName}\")`;
    },
    getKeyValStrForFormData: function (opts: DataTypeStrategyOpts): string {
      return formDataUtils.boolean(opts.columnName);
    },
  },
  date: {
    jsType: "string",
    formTemplate: "scaffold-processor/components/table/create-input.tsx.hbs",
    updateFormTemplate:
      "scaffold-processor/components/table/update-input.tsx.hbs",
    getKeyValueStrForSchema: function (opts: DataTypeStrategyOpts): string {
      return `${opts.columnName}: date(\"${opts.columnName}\")`;
    },
    getKeyValStrForFormData: function (opts: DataTypeStrategyOpts): string {
      return formDataUtils.date(opts.columnName);
    },
  },
  datetime: {
    jsType: "string",
    formTemplate: "scaffold-processor/components/table/create-input.tsx.hbs",
    updateFormTemplate:
      "scaffold-processor/components/table/update-input-timestamp.tsx.hbs",
    getKeyValueStrForSchema: function (opts: DataTypeStrategyOpts): string {
      return `${opts.columnName}: datetime(\"${opts.columnName}\")`;
    },
    getKeyValStrForFormData: function (opts: DataTypeStrategyOpts): string {
      return formDataUtils.date(opts.columnName);
    },
  },
  time: {
    jsType: "string",
    formTemplate: "scaffold-processor/components/table/create-input.tsx.hbs",
    updateFormTemplate:
      "scaffold-processor/components/table/update-input.tsx.hbs",
    getKeyValueStrForSchema: function (opts: DataTypeStrategyOpts): string {
      return `${opts.columnName}: time(\"${opts.columnName}\")`;
    },
    getKeyValStrForFormData: function (opts: DataTypeStrategyOpts): string {
      return formDataUtils.string(opts.columnName);
    },
  },
  year: {
    jsType: "string",
    formTemplate: "",
    updateFormTemplate: "",
    getKeyValueStrForSchema: function (opts: DataTypeStrategyOpts): string {
      throw new Error("Function not implemented.");
    },
    getKeyValStrForFormData: function (opts: DataTypeStrategyOpts): string {
      throw new Error("Function not implemented.");
    },
  },
  timestamp: {
    jsType: "string",
    formTemplate: "scaffold-processor/components/table/create-input.tsx.hbs",
    updateFormTemplate:
      "scaffold-processor/components/table/update-input-timestamp.tsx.hbs",
    getKeyValueStrForSchema: function (opts: DataTypeStrategyOpts): string {
      return `${opts.columnName}: timestamp(\"${opts.columnName}\")`;
    },
    getKeyValStrForFormData: function (opts: DataTypeStrategyOpts): string {
      return formDataUtils.date(opts.columnName);
    },
  },
  json: {
    jsType: "object",
    formTemplate: "scaffold-processor/components/table/create-input.tsx.hbs",
    updateFormTemplate:
      "scaffold-processor/components/table/update-input-json.tsx.hbs",
    getKeyValueStrForSchema: function (opts: DataTypeStrategyOpts): string {
      return `${opts.columnName}: json(\"${opts.columnName}\")`;
    },
    getKeyValStrForFormData: function (opts: DataTypeStrategyOpts): string {
      return formDataUtils.json(opts.columnName);
    },
  },
  file: {
    jsType: "string",
    formTemplate: "scaffold-processor/components/table/create-file.tsx.hbs",
    updateFormTemplate:
      "scaffold-processor/components/table/update-file.tsx.hbs",
    getKeyValueStrForSchema: function (opts: DataTypeStrategyOpts): string {
      return `${opts.columnName}: varchar(\"${opts.columnName}\", { length: 255 })`;
    },
    getKeyValStrForFormData: function (opts: DataTypeStrategyOpts): string {
      return formDataUtils.string(opts.columnName);
    },
  },
  image: {
    jsType: "string",
    formTemplate: "scaffold-processor/components/table/create-image.tsx.hbs",
    updateFormTemplate:
      "scaffold-processor/components/table/update-image.tsx.hbs",
    getKeyValueStrForSchema: function (opts: DataTypeStrategyOpts): string {
      return `${opts.columnName}: varchar(\"${opts.columnName}\", { length: 255 })`;
    },
    getKeyValStrForFormData: function (opts: DataTypeStrategyOpts): string {
      return formDataUtils.string(opts.columnName);
    },
  },
};

export class MysqlDialectStrategy implements DbDialectStrategy {
  pkStrategyTemplates: Record<PkStrategy, string> = {
    uuidv7: `varchar("id", { length: 255 }).notNull().primaryKey().$defaultFn(() => uuidv7())`,
    uuidv4: `varchar("id", { length: 255 }).notNull().primaryKey().$defaultFn(() => uuidv7())`,
    "auto-increment": `bigint("id").notNull().primaryKey().autoincrement()`,
  };
  stripeSchemaTemplatePath: string =
    "stripe-processor/schema/stripe.ts.mysql.hbs";
  drizzleDbCorePackage: string = "drizzle-orm/mysql-core";
  tableConstructor: string = "mysqlTable";
  dialectArgsMap = {
    "pk-auto": ".primaryKey().autoincrement()",
    "default-now": ".defaultNow()",
  };
  dialect: DbDialect = "mysql";
  schemaTableTemplatePath: string =
    "scaffold-processor/schema/table.ts.mysql.hbs";
  dataTypeStrategyMap: DataTypeStrategyMap = mysqlDataTypeStrategies;

  init(): void {
    this.copyDrizzleConfig();
    this.copySchema();
  }

  copyDrizzleConfig(): void {
    renderTemplate({
      inputPath: "db-dialects/drizzle.config.ts.hbs",
      outputPath: "drizzle.config.ts",
      data: { dialect: "mysql" },
    });
  }

  copySchema(): void {
    renderTemplate({
      inputPath: "db-dialects/lib/schema.ts.mysql.hbs",
      outputPath: "lib/schema.ts",
      data: {},
    });
  }

  addAuthSchema() {
    renderTemplate({
      inputPath: "db-dialects/schema/user.ts.mysql.hbs",
      outputPath: "schema/user.ts",
    });
  }
}
