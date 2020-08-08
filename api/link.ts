import { NowRequest, NowResponse } from "@vercel/node";
import axios, { AxiosResponse } from "axios";

export default async (req: NowRequest, res: NowResponse) => {
  let resp: AxiosResponse;
  try {
    resp = await axios("https://u.nu/api.php", {
      params: {
        action: "shorturl",
        format: "json",
        url: req.body.text.trim(),
      },
    });

    res.send(
      `Hooray! :tada: Here's your shortened link: ${resp.data.shorturl}`
    );
  } catch (e) {
    res.send("Something went wrong :cry:");
  }
};
