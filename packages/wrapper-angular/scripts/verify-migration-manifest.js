#!/usr/bin/env node
const { verifyMigrationManifest } = require("./sync-migration-manifest.js");

verifyMigrationManifest();
console.log("Migration manifest verification passed.");
