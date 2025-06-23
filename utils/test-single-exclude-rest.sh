cd packages/components/src/components
find . -name '*.e2e.ts' ! -name 'tooltip.e2e.ts' | tar -czf ../../../../__e2e_backup__.tar.gz -T -
find . -name '*.e2e.ts' ! -name 'tooltip.e2e.ts' -delete
cd ../../../../