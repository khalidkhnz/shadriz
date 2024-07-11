import { PackageStrategy } from "../lib/types";
import { appendDbUrl, renderTemplate, spawnCommand } from "../lib/utils";

export const pgPackageStrategy: PackageStrategy = {
  dialect: "postgresql",
  init: async function () {
    await pgPackageStrategy.installDependencies();
    pgPackageStrategy.copyMigrateScript();
    pgPackageStrategy.appendDbUrl();
    pgPackageStrategy.copyDbInstance();
  },
  installDependencies: async function () {
    await spawnCommand("npm i pg");
    await spawnCommand("npm i -D @types/pg");
  },
  copyMigrateScript: function (): void {
    renderTemplate({
      inputPath: "scripts/migrate.ts.pg.hbs",
      outputPath: "scripts/migrate.ts",
      data: {},
    });
  },
  appendDbUrl: function (): void {
    appendDbUrl("postgres://user:password@host:port/db");
  },
  copyDbInstance: function (): void {
    renderTemplate({
      inputPath: "lib/db.ts.pg.hbs",
      outputPath: "lib/db.ts",
      data: {},
    });
  },
};