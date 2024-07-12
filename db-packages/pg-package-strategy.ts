import { DbDialect, DbPackageStrategy } from "../lib/types";
import { appendDbUrl, renderTemplate, spawnCommand } from "../lib/utils";

export class PgPackageStrategy implements DbPackageStrategy {
  dialect: DbDialect = "postgresql";

  async init() {
    await this.installDependencies();
    this.copyMigrateScript();
    this.appendDbUrl();
    this.copyDbInstance();
    this.copyDbInstanceForScripts();
  }

  async installDependencies() {
    await spawnCommand("npm install pg");
    await spawnCommand("npm install -D @types/pg");
  }

  copyMigrateScript(): void {
    renderTemplate({
      inputPath: "scripts/migrate.ts.pg.hbs",
      outputPath: "scripts/migrate.ts",
    });
  }

  appendDbUrl(): void {
    appendDbUrl("postgres://user:password@host:port/db");
  }

  copyDbInstance(): void {
    renderTemplate({
      inputPath: "lib/db.ts.pg.hbs",
      outputPath: "lib/db.ts",
    });
  }

  copyDbInstanceForScripts(): void {
    renderTemplate({
      inputPath: "scripts/dbc.ts.pg.hbs",
      outputPath: "scripts/dbc.ts",
    });
  }

  copyCreateUserScript() {
    renderTemplate({
      inputPath: "scripts/create-user.ts.pg.hbs",
      outputPath: "scripts/create-user.ts",
    });
  }
}
