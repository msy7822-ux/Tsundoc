import axios from "axios";
import { JSDOM } from "jsdom";

export async function getDomData(url: string) {
  const response = await axios.get(url);
  const dom = new JSDOM(response.data);

  return dom;
}

export async function fetchOgpImage(url: string) {
  try {
    const dom = await getDomData(url);
    const ogImage = dom.window.document.querySelector(
      'meta[property="og:image"]'
    ) as HTMLMetaElement;
    const res = ogImage.content;

    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function fetchTitleInfo(url: string) {
  try {
    const dom = await getDomData(url);

    const title = dom.window.document.querySelector(
      "title"
    ) as HTMLTitleElement;

    const res = title?.textContent ?? "";

    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
}
