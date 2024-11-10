export default async function customFetch<T>(
  url: string,
  init?: RequestInit
): Promise<T> {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL_API}/api/${url}`,
      { ...init }
    );
    const json = await response.json();
    return json;
  } catch (error) {
    const err = error as Error;
    throw new Error(err.message);
  }
}
