#!/usr/bin/env node
export function funcSpeed(funcs) {
  if (!Array.isArray(funcs)) {
    throw new TypeError('Input must be an array of functions');
  }
  let counter = 1;
  for (const func of funcs) {
    const startTime = performance.now();
    func();
    const endTime = performance.now();
    const executionTimeInSeconds = (endTime - startTime) / 1000;
    const formattedExecutionTime = executionTimeInSeconds.toFixed(1);
    const speedCategory = getSpeedCategory(formattedExecutionTime);
    console.log(`  ${counter++}. ${func.name}: ${formattedExecutionTime}s (${speedCategory})`);
  }
  console.log('\n')
}

function getSpeedCategory(executionTime) {
  const slowThreshold = 7.0;
  const verySlowThreshold = 10.0;
  if (executionTime > verySlowThreshold) {
    return 'Very Slow (Consider Optimization)';
  } else if (executionTime > slowThreshold) {
    return 'Slow (May Impact Performance)';
  } else {
    return 'Fast';
  }
}

module.exports = funcSpeed