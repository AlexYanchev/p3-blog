import { Blog } from '../types/blogs';

export function assertsBlogArray(
  value: any
): asserts value is { data: Blog[] } {
  if (!value.data || !Array.isArray(value.data)) {
    throw new Error('Получены неправильные данные с сервера!');
  }
}
