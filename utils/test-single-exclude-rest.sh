# This bash script allows you to isolate and run a single E2E test by temporarily removing or restoring other test files, which helps speed up debugging and reduces build times when focusing on a specific test case. 
cd packages/components/src/components
find . -name '*.e2e.ts' ! -name 'select.e2e.ts' | tar -czf ../../../../__e2e_backup__.tar.gz -T -
find . -name '*.e2e.ts' ! -name 'select.e2e.ts' -delete
cd ../../../../