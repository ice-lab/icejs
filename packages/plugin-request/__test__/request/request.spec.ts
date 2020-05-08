/* eslint-disable no-undef */
import request from '../../request/request';
import { getAjaxRequest } from '../helper';

describe('request', () => {
  beforeEach(() => {
    jasmine.Ajax.install();
  });

  afterEach(() => {
    jasmine.Ajax.uninstall();
  });

  test('should make a get request', () => {
    request.get('/foo');

    return getAjaxRequest().then(req => {
      expect(req.url).toBe('/foo');
      expect(req.method).toBe('GET');
    });
  });

  test('should make a post request', () => {
    request.post('/foo');

    return getAjaxRequest().then(req => {
      expect(req.method).toBe('POST');
    });
  });

  test('should make a put request', () => {
    request.put('/foo');

    return getAjaxRequest().then(req => {
      expect(req.method).toBe('PUT');
    });
  });

  test('should make a patch request', () => {
    request.patch('/foo');

    return getAjaxRequest().then(req => {
      expect(req.method).toBe('PATCH');
    });
  });

  test('should make a options request', () => {
    request.options('/foo');

    return getAjaxRequest().then(req => {
      expect(req.method).toBe('OPTIONS');
    });
  });

  test('should make a delete request', () => {
    request.delete('/foo');

    return getAjaxRequest().then(req => {
      expect(req.method).toBe('DELETE');
    });
  });

  test('should make a head request', () => {
    request.head('/foo');

    return getAjaxRequest().then(req => {
      expect(req.method).toBe('HEAD');
    });
  });

  test('post method with data', () => {
    const data = {
      username: 'foo'
    }
    request.post('/foo', data)
    return getAjaxRequest().then(req => {
      expect(JSON.parse(req.params)).toEqual(data)
    })
  });

  test('should get the correct configs', () => {
    request.post('/foo', {}, {
      timeout: 200
    })
    return getAjaxRequest().then(req => {
      expect(req.timeout).toBe(200)
    })
  });

  test('should return the correct response', (done) => {
    let response;

    request.post('/foo').then(res => {
      response = res;
    });

    getAjaxRequest().then(res => {
      res.respondWith({
        status: 200,
        statusText: 'OK',
        responseText: '{"foo": "bar"}',
        responseHeaders: {
          'Content-Type': 'application/json'
        }
      });

      setTimeout(() => {
        expect(response).toEqual({ foo: 'bar' });
        done();
      }, 100);
    });
  });

  test('should throw error', (done) => {
    let response;

    request.post('/foo', { username: '' }).catch(err => {
      response = err.response;
    });

    getAjaxRequest().then(req => {
      req.respondWith({
        status: 422,
        statusText: 'Unprocessable Entity',
        responseText: '{"error": "BAD USERNAME", "code": 100}'
      });

      setTimeout(() => {
        expect(typeof response.data).toBe('object');
        expect(response.status).toBe(422);
        expect(response.data.error).toBe('BAD USERNAME');
        expect(response.data.code).toBe(100);
        done();
      }, 1000);
    });
  });
});
