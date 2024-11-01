export default async function customFetch(
  input: `/${string}`,
  init?: RequestInit
) {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL_API}${input}`,
      { ...init }
    );
    const json = await response.json();
    return json;
  } catch (error) {
    const err = error as Error;
    throw new Error(err.message);
  }
}
