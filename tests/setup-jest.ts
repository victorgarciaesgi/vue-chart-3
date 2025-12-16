// This file must run before setup.ts to define jest for jest-canvas-mock
import { vi } from 'vitest';

// Mock jest for jest-canvas-mock compatibility
(globalThis as any).jest = {
  fn: vi.fn,
  spyOn: vi.spyOn,
  clearAllMocks: vi.clearAllMocks,
  resetAllMocks: vi.resetAllMocks,
  restoreAllMocks: vi.restoreAllMocks,
  isMockFunction: (fn: any) => vi.isMockFunction(fn),
};
