import axios from "axios";

export const fetchFileObject = async (imageUrl: string) => {
  const response = await axios.request({
    method: "get",
    responseType: "arraybuffer",
    url: imageUrl,
  });
  // レスポンスヘッダーからimage/pngなどのファイル形式を受け取れるので取得する
  const fileType = response.headers["content-type"];
  const blob = new Blob([response.data], { type: fileType });

  return blob;
};
