import assert from 'assert';
import { app } from 'egg-mock/bootstrap';

describe('test/app/controller/test.test.ts', () => {
  it('should GET /api/test', async () => {
    const result = await app.httpRequest().get('/').expect(200);
    assert(result.text === 'hi, egg');
  });
});
