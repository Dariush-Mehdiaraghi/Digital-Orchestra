/**
 * Simple canvas test to verify rendering works
 */
export function testCanvas() {
  const testDiv = document.createElement('div');
  testDiv.style.cssText = 'position: fixed; top: 10px; right: 10px; z-index: 9999; background: black; padding: 10px;';
  
  const canvas = document.createElement('canvas');
  canvas.width = 200;
  canvas.height = 100;
  canvas.style.border = '1px solid white';
  
  testDiv.appendChild(canvas);
  document.body.appendChild(testDiv);
  
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    console.error('Failed to get canvas context');
    return;
  }
  
  // Draw test pattern
  ctx.fillStyle = 'red';
  ctx.fillRect(0, 0, 200, 100);
  ctx.fillStyle = 'green';
  ctx.fillRect(50, 25, 100, 50);
  ctx.fillStyle = 'white';
  ctx.font = '16px monospace';
  ctx.fillText('Canvas OK', 60, 55);
  
  console.log('✅ Canvas test successful');
}
