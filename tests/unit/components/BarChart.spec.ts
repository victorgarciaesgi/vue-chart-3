import { BarChart } from '../../../src';
import { setupComponentTest } from '../../utils/setup.utils';

describe('Bar chart renders and update correctly', async () => {
  setupComponentTest(BarChart, {
    labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
    datasets: [
      {
        data: [30, 40, 60, 70, 5],
        backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
      },
    ],
  });

  it('should be true', () => {
    expect(true).toBe(true);
  });
});
