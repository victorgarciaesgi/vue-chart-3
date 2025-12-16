// @ts-ignore
import getCanvasWindow from 'jest-canvas-mock/lib/window';

const apis = [
  'Path2D',
  'CanvasGradient',
  'CanvasPattern',
  'CanvasRenderingContext2D',
  'DOMMatrix',
  'ImageData',
  'TextMetrics',
  'ImageBitmap',
  'createImageBitmap',
] as const;

const canvasWindow = getCanvasWindow({ document: window.document });

apis.forEach((api) => {
  (globalThis as any)[api] = canvasWindow[api];
  (globalThis as any).window[api] = canvasWindow[api];
  document.head.innerHTML = '<div id="konva-container"></div>';
});
