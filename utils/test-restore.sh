# This bash script is used to restore the Stencil E2E test files during development after the debugging of a single E2E test is finished
tar -xzf __e2e_backup__.tar.gz -C packages/components/src/components
rm __e2e_backup__.tar.gz