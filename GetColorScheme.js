export class GetColorScheme {
  get = async (url) => {
    const response = await fetch(url);

    const responseData = await response.json();

    return responseData;
  };
}
