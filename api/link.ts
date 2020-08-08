import { NowRequest, NowResponse } from "@vercel/node";
import axios from "axios";

export default (req: NowRequest, res: NowResponse) => {
  axios("https://u.nu/api.php", {
    params: {
      action: "shorturl",
      format: "json",
      url: req.body.text.trim(),
    },
  });
};
